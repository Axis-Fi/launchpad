import type { GetBatchAuctionLotQuery } from "@axis-finance/subgraph-client";

const updateDecryptedBids = (
  cachedAuction: GetBatchAuctionLotQuery,
  numOfBids: number,
): GetBatchAuctionLotQuery => {
  const bids = Array.from(cachedAuction.batchAuctionLot?.bids ?? []);
  let updateCount = 0;

  for (let i = 0; i < bids.length && updateCount < numOfBids; i++) {
    if (bids[i].status === "decrypted") {
      continue;
    }
    bids[i].status = "decrypted";
    updateCount++;
  }

  return {
    ...cachedAuction,
    batchAuctionLot: {
      ...cachedAuction.batchAuctionLot!,
      bids,
    },
  } satisfies GetBatchAuctionLotQuery;
};

export { updateDecryptedBids };
