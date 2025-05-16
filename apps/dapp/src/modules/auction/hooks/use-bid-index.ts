import { axisContracts } from "@axis-finance/deployments";
import { Auction } from "@axis-finance/types";
import React from "react";
import { useReadContract } from "wagmi";

const abi = axisContracts.abis.batchCatalogue;
const BID_COUNT = 500n;

export function useBidIndex(auction: Auction, bidId?: bigint) {
  const address = axisContracts.addresses[auction.chainId].batchCatalogue;
  const [startingIndex, setStartingIndex] = React.useState(0n);

  const numBidsQuery = useReadContract({
    address,
    abi,
    functionName: "getNumBids",
    args: [BigInt(auction.lotId)],
    query: {
      enabled: bidId !== undefined,
    },
  });

  const bidsQuery = useReadContract({
    address,
    abi,
    functionName: "getBidIds",
    args: [BigInt(auction.lotId), startingIndex, BID_COUNT],
    query: {
      enabled: numBidsQuery.isSuccess,
    },
  });

  React.useEffect(() => {
    if (!bidsQuery.isSuccess) return;

    const isBidIdFound =
      bidsQuery.data.findIndex((b: bigint) => b === bidId) !== -1;

    const noMoreBidsToSearch = startingIndex + BID_COUNT >= numBidsQuery.data!;

    if (isBidIdFound || noMoreBidsToSearch) return;

    // Update query args to trigger a re-read
    setStartingIndex((index) => index + BID_COUNT);
  }, [
    bidId,
    bidsQuery.data,
    bidsQuery.isSuccess,
    numBidsQuery.data,
    startingIndex,
  ]);

  const batchIndex =
    bidId !== undefined && bidsQuery.data ? bidsQuery.data.indexOf(bidId) : -1;

  const index =
    batchIndex !== -1 ? startingIndex + BigInt(batchIndex) : undefined;

  return {
    index,
    ...bidsQuery,
  };
}
