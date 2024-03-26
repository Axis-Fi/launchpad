import {
  RawSubgraphAuction,
  RawSubgraphAuctionWithEvents,
} from "./subgraph-queries";
import { Token } from "./token";

export type BaseAuction = {
  chainId: number;
  baseToken: Token;
  quoteToken: Token;
  status: AuctionStatus;
  auctionInfo?: AuctionInfo;
  auctionData?: AuctionData;
  auctionType?: string;
  formatted?: AuctionFormattedInfo;
};

export type Auction = BaseAuction &
  Omit<RawSubgraphAuctionWithEvents, "baseToken" | "quoteToken">;

export type AuctionListed = Omit<BaseAuction, "auctionData" | "formatted"> &
  Omit<RawSubgraphAuction, "baseToken" | "quoteToken">;

export type AuctionStatus =
  | "created"
  | "live"
  | "concluded"
  | "decrypted"
  | "settled";

export type AuctionInfo = {
  key?: string;
  name?: string;
  description?: string;
  links?: {
    projectLogo?: string;
    website?: string;
    twitter?: string;
    discord?: string;
    farcaster?: string;
    payoutTokenLogo?: string;
    [key: string]: string | undefined;
  };
};

export type AuctionData = {
  status: number;
  nextDecryptIndex: bigint;
  nextBidId: bigint;
  minimumPrice: bigint;
  minFilled: bigint;
  minBidSize: bigint;
  marginalPrice: bigint;
  marginalBidId: bigint;
  publicKey: { x: bigint; y: bigint };
  privateKey: bigint;
};

export type AuctionFormattedInfo = {
  startDate: Date;
  endDate: Date;
  startFormatted: string;
  endFormatted: string;
  startDistance: string;
  endDistance: string;
  totalBids: number;
  totalBidsDecrypted: number;
  totalBidAmount: string;
  uniqueBidders: number;
  rate: string;
  tokenAmounts: {
    in: string;
    out: string;
  };
  minPrice: string;
  minBidSize: string;
  tokenPairSymbols: string;
  capacity: string;
  totalSupply: string;
};

export type PropsWithAuction = {
  auction: Auction;
};
