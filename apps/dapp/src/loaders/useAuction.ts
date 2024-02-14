import { useGetAuctionLotQuery } from "@repo/subgraph-client";
import { getChainId, getAuctionStatusWithBids } from "./subgraphHelper";
import { SubgraphAuctionWithEvents } from "./subgraphTypes";
import { useQuery } from "@tanstack/react-query";
import { getAuctionInfo } from "./useAuctionInfo";

export type AuctionResult = {
  result?: SubgraphAuctionWithEvents;
  isLoading: boolean;
};

export function useAuction(lotId?: string): AuctionResult {
  const { data, isLoading, ...query } = useGetAuctionLotQuery({
    lotId: lotId || "",
  });

  const auction =
    !data || !data.auctionLots || data.auctionLots.length == 0
      ? undefined
      : data.auctionLots[0];

  const enabled = !!auction && !!auction?.created.infoHash;
  const { data: auctionInfo, ...infoQuery } = useQuery({
    enabled,
    queryKey: ["auction-info", auction?.id],
    queryFn: () => getAuctionInfo(auction?.created.infoHash || ""),
  });

  if (!auction || data?.auctionLots.length === 0) {
    return {
      result: undefined,
      isLoading: isLoading || infoQuery.isLoading || infoQuery.isPending,
      ...query,
    };
  }

  const status = getAuctionStatusWithBids(
    auction.start,
    auction.conclusion,
    auction.capacity,
    auction.settle !== null,
    auction.bids.length,
    auction.bidsDecrypted.length,
    auction.refundedBids.length,
  );

  return {
    result: {
      ...auction,
      chainId: getChainId(auction.chain),
      status,
      auctionInfo,
    },
    isLoading: isLoading || infoQuery.isLoading,
  };
}
