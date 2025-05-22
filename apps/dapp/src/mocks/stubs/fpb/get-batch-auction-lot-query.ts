import type {
  BatchAuctionLot,
  GetBatchAuctionLotQuery,
} from "@axis-finance/subgraph-client";
import { allowedCurators } from "modules/app/curators";

const allowedCurator = Array.isArray(allowedCurators[0].address[0])
  ? allowedCurators[0].address[0]
  : allowedCurators[0].address;

export const stubGetBatchAuctionLotQuery = (
  overrides: Pick<BatchAuctionLot, "id" | "lotId" | "chain">,
): GetBatchAuctionLotQuery => {
  const { id, lotId, chain } = overrides;

  return {
    batchAuctionLot: {
      id,
      chain,
      auctionHouse: "0xba0000c28179ce533233a943d432eddd154e62a3",
      aborted: null,
      cancelled: null,
      lotId,
      createdBlockNumber: "9567262",
      createdBlockTimestamp: "1723821212",
      createdDate: "2024-08-16T15:13:32.000Z",
      createdTransactionHash:
        "0x0638a2a2dce4de91bbe0572bc0ed8189900e72d6286fb0a5b909724886c7b9c9",
      capacityInitial: "10000",
      start: "1723821300",
      info: [
        {
          key: null,
          name: "DingDAO",
          description: "The sound we know and love",
          tagline: "Ding ding ding",
          links: [
            {
              linkId: "discord",
              url: "https://google.com",
            },
            {
              linkId: "farcaster",
              url: "https://google.com",
            },
            {
              linkId: "payoutTokenLogo",
              url: "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_gradient_48px-512.png",
            },
            {
              linkId: "projectBanner",
              url: "https://blog.adobe.com/en/publish/2021/08/17/media_1faf68d6c67e20f5e45d65217e0d013dcfe537263.png?width=750&format=png&optimize=medium",
            },
            {
              linkId: "projectLogo",
              url: "https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_gradient_48px-512.png",
            },
            {
              linkId: "twitter",
              url: "https://google.com",
            },
            {
              linkId: "website",
              url: "https://google.com",
            },
          ],
        },
      ],
      conclusion: "3000000000",
      auctionType: "FPBA",
      seller: "0xc4a209cf95b9d6aca011aa37b5cfd6f40d29890f",
      derivativeType: null,
      wrapDerivative: false,
      callbacks: "0x0000000000000000000000000000000000000000",
      curator: allowedCurator,
      curatorApproved: false,
      curatorFee: "0",
      protocolFee: "0",
      referrerFee: "0",
      capacity: "1111",
      sold: "0",
      purchased: "0",
      lastUpdatedBlockNumber: "9567262",
      lastUpdatedBlockTimestamp: "1723821212",
      lastUpdatedDate: "2024-08-16T15:13:32.000Z",
      lastUpdatedTransactionHash:
        "0x0638a2a2dce4de91bbe0572bc0ed8189900e72d6286fb0a5b909724886c7b9c9",
      linearVesting: null,
      baseToken: {
        totalSupply: "11000000000000000000000000",
        address: "0x493f79a2839ef984a78f7ff7002e1901e93aa2d3",
        decimals: "18",
        symbol: "AXIS",
        name: "Test payout token",
      },
      quoteToken: {
        address: "0x4c9d75fbdf764d05df654340a48f85bc0216f8ab",
        decimals: "18",
        symbol: "USDC",
        name: "USDC",
      },
      created: {
        infoHash: "QmfAj4n1CxG8BfkpsrQBa3cFbPuw4FveDS4ZYQxyEgV6WK",
      },
      curated: null,
      maxBidId: "0",
      bids: [],
      bidsDecrypted: [],
      bidsClaimed: [],
      bidsRefunded: [],
      encryptedMarginalPrice: null,
      fixedPrice: {
        id: `${chain}-0xba0000c28179ce533233a943d432eddd154e62a3-${lotId}`,
        status: "created",
        settlementSuccessful: false,
        price: "1",
        minFilled: "55.5",
        hasPartialFill: null,
        partialBidId: null,
      },
      settled: null,
    },
  };
};
