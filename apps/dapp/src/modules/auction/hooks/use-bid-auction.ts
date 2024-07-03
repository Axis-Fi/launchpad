import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Address, formatUnits, fromHex, toHex } from "viem";
import {
  useAccount,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import type { GetBatchAuctionLotQuery } from "@repo/subgraph-client/src/generated";
import { AuctionType } from "@repo/types";
import { useDeferredQuery } from "@repo/sdk/react";
import { useAllowance } from "loaders/use-allowance";
import { useAuction } from "modules/auction/hooks/use-auction";
import { useReferrer } from "state/referral";
import { getAuctionHouse } from "utils/contracts";
import { useStoreBid } from "state/bids/handlers";
import { createOptimisticBid } from "modules/auction/utils/create-optimistic-bid";

export function useBidAuction(
  id: string,
  auctionType: AuctionType,
  amountIn: bigint,
  amountOut: bigint,
  callbackData: `0x${string}`,
) {
  const { result: auction, queryKey } = useAuction(id, auctionType);
  const storeBidLocally = useStoreBid();

  if (!auction) throw new Error(`Unable to find auction ${id}`);

  const lotId = auction.lotId;
  const queryClient = useQueryClient();
  const { address: bidderAddress } = useAccount();
  const referrer = useReferrer();

  const bidTx = useWriteContract({
    mutation: {
      /** When the txn succeeds, store the bid locally as the subgraph takes time to update */
      onSuccess: async () => {
        // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
        await queryClient.cancelQueries({ queryKey });

        queryClient.setQueryData(
          queryKey,
          (auctionQueryResult: GetBatchAuctionLotQuery) => {
            return {
              batchAuctionLot: {
                ...auctionQueryResult.batchAuctionLot,
                bids: auctionQueryResult.batchAuctionLot!.bids.concat(
                  createOptimisticBid(
                    auctionQueryResult,
                    bidderAddress!,
                    amountIn,
                    amountOut,
                  ),
                ),
              },
            };
          },
        );

        // Invalidate the query now, so that the next time it's needed, it will be refetched fresh
        queryClient.invalidateQueries({
          queryKey,
          exact: true,
          refetchType: "none", // Don't refetch now, just mark it as stale
        });
      },
    },
  });

  const bidReceipt = useWaitForTransactionReceipt({ hash: bidTx.data });

  const auctionHouse = getAuctionHouse(auction);

  const bidConfig = useDeferredQuery((sdk) => {
    if (bidderAddress === undefined) {
      throw new Error("Wallet not connected. Please connect your wallet.");
    }

    // TODO: change SDK to use bigints
    return sdk.bid(
      {
        lotId: Number(lotId),
        amountIn: Number(formatUnits(amountIn, auction.quoteToken.decimals)),
        amountOut: Number(formatUnits(amountOut, auction.baseToken.decimals)),
        chainId: auction.chainId,
        auctionType: auctionType,
        referrerAddress: referrer,
        bidderAddress: bidderAddress,
        signedPermit2Approval: toHex(""), // TODO implement permit2
      },
      callbackData,
    );
  });

  // Main action, calls SDK which encrypts the bid and returns contract configuration data
  const handleBid = async () => {
    if (bidderAddress === undefined) {
      throw new Error("Not connected. Try connecting your wallet.");
    }
    const { abi, address, functionName, args } = await bidConfig();

    bidTx.writeContractAsync({ abi, address, functionName, args });
  };

  const {
    isSufficientAllowance,
    approveReceipt,
    execute: approveCapacity,
    allowance,
    ...allowanceUtils
  } = useAllowance({
    ownerAddress: bidderAddress,
    spenderAddress: auctionHouse.address,
    tokenAddress: auction.quoteToken.address as Address,
    decimals: Number(auction.quoteToken.decimals),
    chainId: auction.chainId,
    amount: Number(formatUnits(amountIn, auction.quoteToken.decimals)),
  });

  React.useEffect(() => {
    // Refetch allowance, refetches delayed auction info
    // and stores bid if EMP
    if (bidReceipt.isSuccess) {
      allowance.refetch();

      // Store user's bid amount locally
      if (auction.auctionType === AuctionType.SEALED_BID) {
        const hexBidId = bidReceipt.data.logs[1].topics[2];

        const bidId = fromHex(hexBidId!, "number").toString();

        //Stores bid using
        storeBidLocally({
          auctionId: auction.id,
          address: bidderAddress!,
          bidId,
          amountOut: formatUnits(amountOut, auction.baseToken.decimals),
        });
      }
    }
  }, [bidReceipt.isSuccess]);

  const error = [bidReceipt, bidTx, bidConfig].find((m) => m.isError)?.error;

  return {
    handleBid,
    approveCapacity,
    isSufficientAllowance,
    approveReceipt,
    bidReceipt,
    bidTx,
    bidDependenciesMutation: bidConfig,
    error,
    allowanceUtils,
  };
}
