//@ts-nocheck
import { AuctionType, type Auction } from "@repo/types";

const getAuctionMock = (
  overrides: Partial<Auction> | undefined = undefined,
): Auction =>
  ({
    id: "blast-sepolia-0xba00001bd857efd2df10da01dfe3a97cfa836cc9-6",
    chain: "blast-sepolia",
    auctionHouse: "0xba00001bd857efd2df10da01dfe3a97cfa836cc9",
    lotId: "6",
    createdBlockNumber: "5511264",
    createdBlockTimestamp: "1715709216",
    createdDate: "2024-05-14T17:53:36.000Z",
    createdTransactionHash:
      "0x84d2f433dd74c11be0eaea4246bb4e129328b85825a3fc87976a350ddf271efe",
    capacityInitial: "100000",
    start: "1715709600",
    conclusion: "1716228000",
    auctionType: AuctionType.SEALED_BID,
    seller: "0xdc96c6c35b190943b39f7a8f9cdbb7cdae7809f9",
    derivativeType: null,
    wrapDerivative: false,
    curator: null,
    curatorApproved: false,
    curatorFee: "0",
    protocolFee: "0",
    referrerFee: "0.01",
    capacity: "100000",
    sold: "0",
    purchased: "0",
    lastUpdatedBlockNumber: "5606635",
    lastUpdatedBlockTimestamp: "1715899958",
    lastUpdatedDate: "2024-05-16T22:52:38.000Z",
    lastUpdatedTransactionHash:
      "0xa378a17c749457e25d65c685362710d75458fc683574e46895a9379ccaffeb43",
    linearVesting: null,
    baseToken: {
      totalSupply: "100000",
      address: "0xaefad5d9a5508d844ebb643c0853e585be595442",
      decimals: 18,
      symbol: "ZYNNER",
      name: "Zyn Protocol",
      logoURI:
        "https://www.fandfwholesale.com/media/catalog/product/cache/1ecf0a9687bd7fb333e2e3dda40a5d04/z/y/zyn_nicotine_pouches_cool_mint_6mg.jpg",
      chainId: 168587773,
    },
    quoteToken: {
      mintable: true,
      decimals: 18,
      symbol: "USDB",
      name: "Blast USD",
      address: "0x47F12ccE28D1A2ac9184777fa8a993C6067Df728",
      logoURI:
        "https://assets-global.website-files.com/65a6baa1a3f8ed336f415cb4/65c67eafd3569b7e2f834b8d_usdb-icon-yellow.svg",
      chainId: 168587773,
    },
    created: {
      infoHash: "QmNkwwugJaqPW7whLeW4ahVj1BLvqvMb123iz4edvmpWMz",
    },
    curated: null,
    maxBidId: "6",
    bids: [
      {
        bidId: "1",
        bidder: "0xdc96c6c35b190943b39f7a8f9cdbb7cdae7809f9",
        blockTimestamp: "1715710316",
        date: "2024-05-14T18:11:56.000Z",
        amountIn: "1000",
        rawAmountIn: "1000000000000000000000",
        rawAmountOut: null,
        rawMarginalPrice: null,
        rawSubmittedPrice: null,
        submittedPrice: null,
        settledAmountIn: null,
        settledAmountInRefunded: null,
        settledAmountOut: null,
        status: "submitted",
        outcome: null,
        referrer: "0x0000000000000000000000000000000000000000",
        claimed: null,
      },
      {
        bidId: "2",
        bidder: "0x9267d661ba70aad879bcb55294c53badd0c98849",
        blockTimestamp: "1715796832",
        date: "2024-05-15T18:13:52.000Z",
        amountIn: "1500",
        rawAmountIn: "1500000000000000000000",
        rawAmountOut: null,
        rawMarginalPrice: null,
        rawSubmittedPrice: null,
        submittedPrice: null,
        settledAmountIn: null,
        settledAmountInRefunded: null,
        settledAmountOut: null,
        status: "submitted",
        outcome: null,
        referrer: "0x0000000000000000000000000000000000000000",
        claimed: null,
      },
      {
        bidId: "3",
        bidder: "0x1774278797cd0ac10e3778be0e8370410372dfa3",
        blockTimestamp: "1715874078",
        date: "2024-05-16T15:41:18.000Z",
        amountIn: "20000",
        rawAmountIn: "20000000000000000000000",
        rawAmountOut: null,
        rawMarginalPrice: null,
        rawSubmittedPrice: null,
        submittedPrice: null,
        settledAmountIn: null,
        settledAmountInRefunded: null,
        settledAmountOut: null,
        status: "submitted",
        outcome: null,
        referrer: "0x0000000000000000000000000000000000000000",
        claimed: null,
      },
      {
        bidId: "4",
        bidder: "0xb122cc8b0f4648cbd2bd74ba8c78485a75a50d45",
        blockTimestamp: "1715889224",
        date: "2024-05-16T19:53:44.000Z",
        amountIn: "1200",
        rawAmountIn: "1200000000000000000000",
        rawAmountOut: null,
        rawMarginalPrice: null,
        rawSubmittedPrice: null,
        submittedPrice: null,
        settledAmountIn: null,
        settledAmountInRefunded: null,
        settledAmountOut: null,
        status: "submitted",
        outcome: null,
        referrer: "0x0000000000000000000000000000000000000000",
        claimed: null,
      },
      {
        bidId: "5",
        bidder: "0x18acc7e09e5b4adaf4d51dce21bc2ac616ea9440",
        blockTimestamp: "1715889356",
        date: "2024-05-16T19:55:56.000Z",
        amountIn: "2500",
        rawAmountIn: "2500000000000000000000",
        rawAmountOut: null,
        rawMarginalPrice: null,
        rawSubmittedPrice: null,
        submittedPrice: null,
        settledAmountIn: null,
        settledAmountInRefunded: null,
        settledAmountOut: null,
        status: "submitted",
        outcome: null,
        referrer: "0x0000000000000000000000000000000000000000",
        claimed: null,
      },
      {
        bidId: "6",
        bidder: "0x03851f30cc29d86ee87a492f037b16642838a357",
        blockTimestamp: "1715899958",
        date: "2024-05-16T22:52:38.000Z",
        amountIn: "1000",
        rawAmountIn: "1000000000000000000000",
        rawAmountOut: null,
        rawMarginalPrice: null,
        rawSubmittedPrice: null,
        submittedPrice: null,
        settledAmountIn: null,
        settledAmountInRefunded: null,
        settledAmountOut: null,
        status: "submitted",
        outcome: null,
        referrer: "0x0000000000000000000000000000000000000000",
        claimed: null,
      },
    ],
    bidsDecrypted: [],
    bidsClaimed: [],
    bidsRefunded: [],
    encryptedMarginalPrice: {
      id: "blast-sepolia-0xba00001bd857efd2df10da01dfe3a97cfa836cc9-6",
      status: "Created",
      settlementSuccessful: false,
      minPrice: "15",
      minFilled: "50000",
      minBidSize: "0.01",
      marginalPrice: null,
      hasPartialFill: null,
    },
    settled: null,
    chainId: 168587773,
    status: "live",
    info: {
      name: "Zyn Protocol",
      description:
        "The real ZYN coin. Join us ZYNNERs and be a part of the best attempt at bringing nicotine on-chain",
      links: [
        {
          linkId: "payoutTokenLogo",
          url: "https://www.logolynx.com/images/logolynx/68/68feadd5125aba3db46f1e4d77d54cfa.jpeg",
        },
        {
          linkId: "projectLogo",
          url: "https://www.fandfwholesale.com/media/catalog/product/cache/1ecf0a9687bd7fb333e2e3dda40a5d04/z/y/zyn_nicotine_pouches_cool_mint_6mg.jpg",
        },
        {
          linkId: "website",
          url: "https://numba.one",
        },
      ],
    },
    formatted: {
      startDate: new Date("2024-05-14T18:00:00.000Z"),
      endDate: new Date("2024-05-20T18:00:00.000Z"),
      startFormatted: "2024.05.14 - 19:00 GMT+1",
      endFormatted: "2024.05.20 - 19:00 GMT+1",
      startDistance: "6 days",
      endDistance: "about 6 hours",
      sold: "0",
      purchased: "0",
      capacity: "100,000.00",
      totalSupply: "100,000.00",
      tokenPairSymbols: "USDB/ZYNNER",
      cleared: true,
      marginalPrice: "0",
      rate: "0",
      minPrice: "0",
      minBidSize: "0",
      totalBidAmountFormatted: "27,200.00",
      totalBids: 6,
      totalBidsDecrypted: 0,
      totalBidsClaimed: 0,
      uniqueBidders: 6,
    },
    ...overrides,
  }) satisfies Auction;

export { getAuctionMock };
