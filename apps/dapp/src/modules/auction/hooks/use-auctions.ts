import type { Auction, Curator } from "@axis-finance/types";
import { useLaunchesQuery } from "@axis-finance/sdk/react";
import { getAuctionStatus } from "modules/auction/utils/get-auction-status";
import { sortAuction } from "modules/auction/utils/sort-auctions";
import { formatAuctionTokens } from "modules/auction/utils/format-tokens";
import { getAuctionType } from "modules/auction/utils/get-auction-type";
import { isSecureAuction } from "modules/auction/utils/malicious-auction-filters";
import { getChainId } from "src/utils/chain";
import { useTokenLists } from "state/tokenlist";
import { useQueryAll } from "loaders/use-query-all";
import { useSafeRefetch } from "./use-safe-refetch";
import { externalAuctionInfo } from "modules/app/external-auction-info";
import type { Address } from "viem";
import { allowedCurators } from "modules/app/curators";
import { environment } from "utils/environment";
import { useQueries } from "@tanstack/react-query";
import { fetchAuctionMetadata } from "utils/fetch-missing-metadata";

export type AuctionsResult = {
  data: Auction[];
  refetch: () => void;
} & Pick<
  ReturnType<typeof useQueryAll>,
  "isSuccess" | "isLoading" | "isRefetching"
>;

export const getAuctionsQueryKey = (chainId: number) =>
  ["auctions", chainId] as const;

type UseAuctionsArgs = {
  curator?: string;
};

export function useAuctions({ curator }: UseAuctionsArgs = {}): AuctionsResult {
  const { data, isLoading, isSuccess, isRefetching } = useLaunchesQuery({
    queryKeyFn: getAuctionsQueryKey,
    isTestnet: environment.isTestnet,
  });

  // Refetch auctions if the cache is stale
  const refetch = useSafeRefetch(["auctions"]);
  const targetCurator = allowedCurators.find((c) => c.id === curator);

  // Filter out cancelled auctions
  const filteredAuctions = data.filter(
    (auction) => getAuctionStatus(auction) !== "cancelled",
  );

  const { getToken } = useTokenLists();

  const auctions = filteredAuctions
    .filter(
      (a) => !curator || isCuratorAddress(a.curator as Address, targetCurator),
    )
    .map((auction) => {
      const type = getAuctionType(auction.auctionType);
      if (!type) {
        throw new Error(`Type not found for auction ${auction.auctionType}`);
      }

      const chainId = getChainId(auction.chain);

      const preparedAuction = {
        ...auction,
        auctionType: type,
        ...formatAuctionTokens(auction, getToken),
        status: getAuctionStatus(auction),
        chainId,
        // Handle external auction data
        info: auction.info ?? externalAuctionInfo[auction.id] ?? null,
      };

      return {
        ...preparedAuction,
        isSecure: isSecureAuction(preparedAuction),
      } as Auction;
    })

    .filter(tempFilter) //TODO: REMOVE -- ADDED TEMPORARILY
    .sort(sortAuction);

  //Fetch missing metadata directly from IPFS gateway
  const { data: auctionsWithFallbackData, ...missingMetadataquery } =
    useQueries({
      queries: auctions.map((a) => ({
        queryKey: ["auction-metadata", a.id],
        enabled: isSuccess,
        queryFn: async () => {
          if (a.info) return a;
          return fetchAuctionMetadata(a);
        },
      })),
      combine: (results) => {
        return {
          data: results.map((result) => result.data),
          isPending: results.some((result) => result.isPending),
          errors: results.map((result) => result.error),
          hasResults: !results.every((result) => result.isPending),
        };
      },
    });

  return {
    data: missingMetadataquery.isPending
      ? auctions
      : (auctionsWithFallbackData as Auction[]),
    isLoading,
    refetch,
    isRefetching,
    isSuccess,
  };
}

function isCuratorAddress(address: Address, curator?: Curator) {
  if (!curator || !address) return false;

  return Array.isArray(curator.address)
    ? curator.address.includes(address.toLowerCase() as Address)
    : curator.address.toLowerCase() === address.toLowerCase();
}

// Temporary filter to avoid spoilers for certain auctions
function tempFilter(auction: Auction) {
  const chainId = 11155111;
  const lots = [3, 5, 6, 7, 10, 11];

  return !(lots.includes(+auction.lotId) && auction.chainId === chainId);
}
