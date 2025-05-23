import { useGetBatchAuctionLotQuery } from "@axis-finance/subgraph-client";
import { useQuery, type QueryKey } from "@tanstack/react-query";
import { getAuctionStatus } from "modules/auction/utils/get-auction-status";
import { AuctionType } from "@axis-finance/types";
import type {
  AuctionFormattedInfo,
  EMPFormattedInfo,
  FPBFormattedInfo,
  AuctionId,
  Auction,
  UseLaunchQueryReturn,
} from "@axis-finance/types";
import { formatUnits } from "viem";
import { formatDate } from "@repo/ui";
import { formatDistanceToNow } from "date-fns";
import { trimCurrency } from "utils";
import { useTokenLists } from "state/tokenlist";
import { formatAuctionTokens } from "../utils/format-tokens";
import { isSecureAuction } from "modules/auction/utils/malicious-auction-filters";
import { useIsCacheStale } from "./use-is-cache-stale";
import { useSafeRefetch } from "./use-safe-refetch";
import { getAuctionId } from "../utils/get-auction-id";
import { getAuctionType } from "../utils/get-auction-type";
import { externalAuctionInfo } from "modules/app/external-auction-info";
import { useLaunchQuery } from "@axis-finance/sdk/react";
import { fetchAuctionMetadata } from "utils/fetch-missing-metadata";

type AuctionQueryKey = QueryKey &
  readonly ["getBatchAuctionLot", { id: AuctionId }];

export type AuctionResult = {
  result?: Auction;
  queryKey: AuctionQueryKey;
  refetch: ReturnType<typeof useSafeRefetch>;
} & Pick<
  ReturnType<typeof useGetBatchAuctionLotQuery>,
  "isLoading" | "isRefetching"
>;

export const getAuctionQueryKey = (auctionId: AuctionId) =>
  ["getBatchAuctionLot", { id: auctionId }] as const;

export function useAuction(
  chainId_: string | number,
  lotId: string | number,
): AuctionResult {
  const { getToken } = useTokenLists();

  const chainId = Number(chainId_);
  const id = getAuctionId(chainId, lotId);

  const queryKey = [
    "getBatchAuctionLot",
    { id } as { id: AuctionId },
  ] satisfies AuctionQueryKey;

  // Don't fetch the auction if an optimistic update (e.g. a bid) is still fresh.
  // This allows the subgraph time to update before refetching.
  const isCacheStale = useIsCacheStale(queryKey);

  const {
    data: rawAuction,
    isLoading,
    isRefetching,
  } = useLaunchQuery({
    chainId,
    lotId: Number(lotId),
    options: {
      enabled: isCacheStale,
    },
  });

  const refetch = useSafeRefetch(queryKey);

  const auctionType = getAuctionType(rawAuction?.auctionType) as AuctionType;

  const metadataQuery = useQuery({
    // NOTE: required for the key to match usage on useAuctions
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ["auction-list-metadata", rawAuction?.id],
    queryFn: async () => {
      if (rawAuction?.info == null) return fetchAuctionMetadata(rawAuction!);
      return rawAuction;
    },
    enabled: rawAuction != null && !isLoading && rawAuction?.info == null,
  });

  if (!rawAuction) {
    return {
      refetch,
      isRefetching,
      result: undefined,
      isLoading: isLoading,
      queryKey,
    };
  }

  // Check that the rawAuction has a callback in the format of 0x...
  if (!rawAuction.callbacks.match(/^0x[0-9a-fA-F]{40}$/)) {
    throw new Error(`Invalid callback address: ${rawAuction.callbacks}`);
  }

  const status = getAuctionStatus(rawAuction);
  const tokens = formatAuctionTokens(rawAuction, getToken);

  const auction = {
    ...rawAuction,
    chainId,
    status,
    info: rawAuction.info ?? externalAuctionInfo[id],
    ...tokens,
  };

  if (!auctionType) {
    throw new Error(`Auction type ${auctionType} doesn't exist`);
  }

  const formatted = formatAuction(rawAuction, auctionType);
  const externalInfo = externalAuctionInfo[auction.id];

  const preparedAuction = {
    ...auction,
    bids: auction.bids.sort((a, b) => +b.blockTimestamp - +a.blockTimestamp), //Sort by time descending
    auctionType,
    formatted,
    info:
      externalInfo ??
      (metadataQuery.isSuccess ? metadataQuery.data?.info : auction.info),
    callbacks: auction.callbacks as `0x${string}`, // Has been checked above
  };

  return {
    refetch,
    result: {
      ...preparedAuction,
      isSecure: isSecureAuction(preparedAuction),
    } as Auction,
    isLoading: isLoading, //|| infoQuery.isLoading,
    isRefetching,
    queryKey,
  };
}

/** Formats Auction information for displaying purposes */
export function formatAuction(
  auction: UseLaunchQueryReturn,
  auctionType: AuctionType,
): AuctionFormattedInfo {
  if (!auction) throw new Error("No Auction provided to formatAuction");

  const startDate = new Date(Number(auction.start) * 1000);
  const endDate = new Date(Number(auction.conclusion) * 1000);

  const startFormatted = formatDate.fullLocal(startDate);
  const endFormatted = formatDate.fullLocal(endDate);
  const startDistance = formatDistanceToNow(startDate);
  const endDistance = formatDistanceToNow(endDate);

  let moduleFields;
  if (auctionType === AuctionType.SEALED_BID) {
    moduleFields = addEMPFields(auction);
  } else if (auctionType === AuctionType.FIXED_PRICE_BATCH) {
    moduleFields = addFPBFields(auction);
  }

  return {
    startDate,
    endDate,
    startFormatted,
    endFormatted,
    startDistance,
    endDistance,
    sold: trimCurrency(auction.sold),
    purchased: trimCurrency(auction.purchased),
    purchasedDecimal: Number(auction.purchased),
    capacity: trimCurrency(auction.capacity),
    totalSupply: trimCurrency(
      formatUnits(
        BigInt(auction.baseToken?.totalSupply ?? 0),
        Number(auction.baseToken.decimals),
      ),
    ),
    tokenPairSymbols: `${auction.quoteToken.symbol}/${auction.baseToken.symbol}`,
    ...moduleFields,
  };
}

function addEMPFields(auction: UseLaunchQueryReturn): EMPFormattedInfo {
  const minPrice = Number(auction.encryptedMarginalPrice?.minPrice);
  const minBidSize = Number(auction.encryptedMarginalPrice?.minBidSize);
  const marginalPrice = Number(auction.encryptedMarginalPrice?.marginalPrice);

  const totalBidsDecrypted = auction.bids.filter(
    (b) => b.status === "decrypted",
  ).length;

  const totalBidsClaimed = auction.bids.filter(
    (b) => b.status === "claimed",
  ).length;

  const totalBidAmount = auction.bids.reduce(
    (total, b) => total + Number(b.amountIn),
    0,
  );

  const uniqueBidders = auction.bids
    .map((b) => b.bidder)
    .filter((b, i, a) => a.lastIndexOf(b) === i).length;

  const cleared = !!auction.encryptedMarginalPrice?.settlementSuccessful;

  // TODO return these as numbers and format them in the UI
  return {
    cleared,
    marginalPrice: trimCurrency(marginalPrice),
    marginalPriceDecimal: Number(marginalPrice),
    rate: trimCurrency(marginalPrice),
    minPrice: minPrice.toString(),
    minBidSize: trimCurrency(minBidSize),
    minFilled: trimCurrency(auction.encryptedMarginalPrice!.minFilled!),
    totalBidAmountFormatted: trimCurrency(totalBidAmount),
    totalBidAmountDecimal: totalBidAmount,
    totalBids: auction.bids.length,
    totalBidsDecrypted,
    totalBidsClaimed,
    uniqueBidders,
  };
}

function addFPBFields(auction: UseLaunchQueryReturn): FPBFormattedInfo {
  const totalBids = auction.bids.length;
  const totalBidsClaimed = auction.bids.filter(
    (b) => b.status === "claimed",
  ).length;
  const totalBidAmount = auction.bids.reduce(
    (total, b) => total + Number(b.amountIn),
    0,
  );
  const uniqueBidders = auction.bids
    .map((b) => b.bidder)
    .filter((b, i, a) => a.lastIndexOf(b) === i).length;
  const cleared = auction.fixedPrice?.settlementSuccessful || false;
  const minFilled = auction.fixedPrice?.minFilled
    ? trimCurrency(auction.fixedPrice?.minFilled)
    : "";
  const price = auction.fixedPrice?.price || "";

  // TODO return these as numbers and format them in the UI
  return {
    price: price,
    totalBids,
    totalBidsClaimed,
    totalBidAmountFormatted: trimCurrency(totalBidAmount),
    totalBidAmountDecimal: totalBidAmount,
    uniqueBidders,
    cleared,
    minFilled,
  };
}
