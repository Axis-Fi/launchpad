import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import type { Auction, AuctionId, BatchAuction } from "@axis-finance/types";
import { useEffect, useRef } from "react";
import {
  useSimulateContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from "wagmi";
import { getAuctionQueryKey } from "modules/auction/hooks/use-auction";
import { getAuctionHouse, getContractsByModuleType } from "utils/contracts";
import { Hex } from "viem";
import type { GetBatchAuctionLotQuery } from "@axis-finance/subgraph-client";
import {
  auction as auctionCache,
  optimisticUpdate,
} from "modules/auction/utils/optimistic";
import { cloakClient } from "utils/cloak-client";
import { useHasPrivateKey } from "./use-has-private-key";

const DECRYPT_NUM = 100; // TODO determine limit on amount per chain

/** Used to manage decrypting the next set of bids */
export const useDecryptBids = (auction: BatchAuction) => {
  const auctionHouse = getAuctionHouse(auction);
  //Fixed priced auctions dont require decryption
  const emp = getContractsByModuleType(auction);

  const queryKey = getAuctionQueryKey(auction.id as AuctionId);

  const params = deriveParamsFromAuction(auction);

  const { data, ...hasPKQuery } = useHasPrivateKey({
    lotId: auction.lotId,
    chainId: auction.chainId,
    address: emp.address,
  });

  const isPKSubmitted = hasPKQuery.isSuccess && data;

  const privateKeyQuery = useQuery({
    queryKey: ["get_private_key", auction.id, auctionHouse.address, params],
    queryFn: () =>
      cloakClient.keysApi.privateKeyLotIdGet({
        ...params,
        xAuctionHouse: auctionHouse.address,
      }),
    placeholderData: keepPreviousData,
    enabled:
      (auction.bids.length === 0 ||
        auction.bids.length - auction.bidsRefunded.length >
          auction.bidsDecrypted.length) &&
      !isPKSubmitted,
  });

  const hintsQuery = useQuery({
    queryKey: ["hints", auction.id, auctionHouse.address, params, DECRYPT_NUM],
    queryFn: () =>
      cloakClient.keysApi.hintsLotIdNumGet({
        ...params,
        xAuctionHouse: auctionHouse.address,
        num: DECRYPT_NUM,
      }),
  });

  const hints = hintsQuery.data as Hex[];

  //Send bids to the contract for decryption
  const { data: submitPKCall, ...submitPKCallQuery } = useSimulateContract({
    address: emp.address,
    abi: emp.abi,
    functionName: "submitPrivateKey",
    chainId: auction.chainId,
    args: [
      BigInt(auction.lotId),
      BigInt(privateKeyQuery.data ?? 0),
      BigInt(hints?.length ?? 0),
      hints,
    ],
    query: { enabled: !isPKSubmitted && privateKeyQuery.isSuccess },
  });

  const submitPk = useWriteContract();
  const submitPkReceipt = useWaitForTransactionReceipt({ hash: submitPk.data });

  //Send bids to the contract for decryption
  const { data: decryptCall, ...decryptCallQuery } = useSimulateContract({
    address: emp.address,
    abi: emp.abi,
    functionName: "decryptAndSortBids",
    chainId: auction.chainId,
    args: [BigInt(auction.lotId), BigInt(hints?.length ?? 0), hints],
    query: { enabled: privateKeyQuery.isSuccess },
  });

  const decrypt = useWriteContract();
  const decryptReceipt = useWaitForTransactionReceipt({ hash: decrypt.data });

  const handleDecryption = () => {
    const onSuccess = () => hintsQuery.refetch();
    isPKSubmitted
      ? decrypt.writeContract(decryptCall!.request, { onSuccess })
      : submitPk.writeContract(submitPKCall!.request, { onSuccess });
  };

  const queryClient = useQueryClient();
  const decryptTxnSucceeded = useRef(false);

  useEffect(() => {
    if (
      !isPKSubmitted &&
      submitPkReceipt.isSuccess &&
      !hasPKQuery.isRefetching
    ) {
      hasPKQuery.refetch();
    }
  }, [isPKSubmitted, submitPkReceipt.isSuccess]);

  useEffect(() => {
    if (decryptTxnSucceeded.current || !decryptReceipt.isSuccess) {
      return;
    }

    decryptTxnSucceeded.current = true;

    if (!hintsQuery.isRefetching) {
      hintsQuery.refetch();
    }

    /** Optimistically update the auction status to "decrypted" */
    optimisticUpdate(
      queryClient,
      queryKey,
      (cachedAuction: GetBatchAuctionLotQuery) =>
        auctionCache.updateStatus(cachedAuction, "decrypted"),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    decryptReceipt.isSuccess,
    hintsQuery.isRefetching,
    hintsQuery.refetch,
    queryClient,
    queryKey,
  ]);

  const error = [
    privateKeyQuery,
    decrypt,
    decryptCallQuery,
    decryptReceipt,
    submitPKCallQuery,
    submitPk,
    submitPkReceipt,
  ].find((tx) => tx.isError)?.error;

  const isWaiting =
    submitPk.isPending ||
    submitPkReceipt.isLoading ||
    decrypt.isPending ||
    decryptReceipt.isLoading;

  return {
    nextBids: privateKeyQuery,
    decryptTx: isPKSubmitted ? decrypt : submitPk,
    decryptReceipt: isPKSubmitted ? decryptReceipt : submitPk,
    handleDecryption,
    error,
    isWaiting,
  };
};

function deriveParamsFromAuction(auction: Auction) {
  return {
    xChainId: auction.chainId,
    lotId: Number(auction.lotId),
  };
}
