import { useQuery, UseQueryOptions } from "@tanstack/react-query";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };

function fetcher<TData, TVariables>(
  endpoint: string,
  requestInit: RequestInit,
  query: string,
  variables?: TVariables,
) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: "POST",
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  };
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: string; output: string };
  Float: { input: string; output: string };
  BigDecimal: { input: string; output: string };
  BigInt: { input: string; output: string };
  Bytes: { input: string; output: string };
  Int8: { input: string; output: string };
};

export type AtomicAuctionCancelled = {
  auctionRef: Scalars["Bytes"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  date: Scalars["String"]["output"];
  id: Scalars["Bytes"]["output"];
  lot: AtomicAuctionLot;
  transactionHash: Scalars["Bytes"]["output"];
};

export type AtomicAuctionCancelled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AtomicAuctionCancelled_Filter>>>;
  auctionRef?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionRef_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionRef_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionRef_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionRef_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  auctionRef_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionRef_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionRef_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionRef_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionRef_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  date_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_gt?: InputMaybe<Scalars["String"]["input"]>;
  date_gte?: InputMaybe<Scalars["String"]["input"]>;
  date_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_lt?: InputMaybe<Scalars["String"]["input"]>;
  date_lte?: InputMaybe<Scalars["String"]["input"]>;
  date_not?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  lot?: InputMaybe<Scalars["String"]["input"]>;
  lot_?: InputMaybe<AtomicAuctionLot_Filter>;
  lot_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_gt?: InputMaybe<Scalars["String"]["input"]>;
  lot_gte?: InputMaybe<Scalars["String"]["input"]>;
  lot_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_lt?: InputMaybe<Scalars["String"]["input"]>;
  lot_lte?: InputMaybe<Scalars["String"]["input"]>;
  lot_not?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<AtomicAuctionCancelled_Filter>>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum AtomicAuctionCancelled_OrderBy {
  auctionRef = "auctionRef",
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  Date = "date",
  Id = "id",
  Lot = "lot",
  lot__auctionHouse = "lot__auctionHouse",
  lot__auctionType = "lot__auctionType",
  Lot__callbacks = "lot__callbacks",
  Lot__capacity = "lot__capacity",
  lot__capacityInQuote = "lot__capacityInQuote",
  lot__capacityInitial = "lot__capacityInitial",
  Lot__chain = "lot__chain",
  Lot__conclusion = "lot__conclusion",
  lot__createdBlockNumber = "lot__createdBlockNumber",
  lot__createdBlockTimestamp = "lot__createdBlockTimestamp",
  lot__createdDate = "lot__createdDate",
  lot__createdTransactionHash = "lot__createdTransactionHash",
  Lot__curator = "lot__curator",
  lot__curatorApproved = "lot__curatorApproved",
  lot__curatorFee = "lot__curatorFee",
  lot__derivativeType = "lot__derivativeType",
  Lot__id = "lot__id",
  lot__lastUpdatedBlockNumber = "lot__lastUpdatedBlockNumber",
  lot__lastUpdatedBlockTimestamp = "lot__lastUpdatedBlockTimestamp",
  lot__lastUpdatedDate = "lot__lastUpdatedDate",
  lot__lastUpdatedTransactionHash = "lot__lastUpdatedTransactionHash",
  lot__lotId = "lot__lotId",
  lot__protocolFee = "lot__protocolFee",
  Lot__purchased = "lot__purchased",
  lot__referrerFee = "lot__referrerFee",
  Lot__seller = "lot__seller",
  Lot__sold = "lot__sold",
  Lot__start = "lot__start",
  lot__wrapDerivative = "lot__wrapDerivative",
  transactionHash = "transactionHash",
}

export type AtomicAuctionCreated = {
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  date: Scalars["String"]["output"];
  id: Scalars["Bytes"]["output"];
  infoHash: Scalars["String"]["output"];
  lot: AtomicAuctionLot;
  transactionHash: Scalars["Bytes"]["output"];
};

export type AtomicAuctionCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AtomicAuctionCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  date_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_gt?: InputMaybe<Scalars["String"]["input"]>;
  date_gte?: InputMaybe<Scalars["String"]["input"]>;
  date_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_lt?: InputMaybe<Scalars["String"]["input"]>;
  date_lte?: InputMaybe<Scalars["String"]["input"]>;
  date_not?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  infoHash?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_contains?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_gt?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_gte?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  infoHash_lt?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_lte?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_not?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  infoHash_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot?: InputMaybe<Scalars["String"]["input"]>;
  lot_?: InputMaybe<AtomicAuctionLot_Filter>;
  lot_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_gt?: InputMaybe<Scalars["String"]["input"]>;
  lot_gte?: InputMaybe<Scalars["String"]["input"]>;
  lot_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_lt?: InputMaybe<Scalars["String"]["input"]>;
  lot_lte?: InputMaybe<Scalars["String"]["input"]>;
  lot_not?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<AtomicAuctionCreated_Filter>>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum AtomicAuctionCreated_OrderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  Date = "date",
  Id = "id",
  infoHash = "infoHash",
  Lot = "lot",
  lot__auctionHouse = "lot__auctionHouse",
  lot__auctionType = "lot__auctionType",
  Lot__callbacks = "lot__callbacks",
  Lot__capacity = "lot__capacity",
  lot__capacityInQuote = "lot__capacityInQuote",
  lot__capacityInitial = "lot__capacityInitial",
  Lot__chain = "lot__chain",
  Lot__conclusion = "lot__conclusion",
  lot__createdBlockNumber = "lot__createdBlockNumber",
  lot__createdBlockTimestamp = "lot__createdBlockTimestamp",
  lot__createdDate = "lot__createdDate",
  lot__createdTransactionHash = "lot__createdTransactionHash",
  Lot__curator = "lot__curator",
  lot__curatorApproved = "lot__curatorApproved",
  lot__curatorFee = "lot__curatorFee",
  lot__derivativeType = "lot__derivativeType",
  Lot__id = "lot__id",
  lot__lastUpdatedBlockNumber = "lot__lastUpdatedBlockNumber",
  lot__lastUpdatedBlockTimestamp = "lot__lastUpdatedBlockTimestamp",
  lot__lastUpdatedDate = "lot__lastUpdatedDate",
  lot__lastUpdatedTransactionHash = "lot__lastUpdatedTransactionHash",
  lot__lotId = "lot__lotId",
  lot__protocolFee = "lot__protocolFee",
  Lot__purchased = "lot__purchased",
  lot__referrerFee = "lot__referrerFee",
  Lot__seller = "lot__seller",
  Lot__sold = "lot__sold",
  Lot__start = "lot__start",
  lot__wrapDerivative = "lot__wrapDerivative",
  transactionHash = "transactionHash",
}

export type AtomicAuctionCurated = {
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  curator: Scalars["Bytes"]["output"];
  date: Scalars["String"]["output"];
  id: Scalars["Bytes"]["output"];
  lot: AtomicAuctionLot;
  transactionHash: Scalars["Bytes"]["output"];
};

export type AtomicAuctionCurated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AtomicAuctionCurated_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  curator?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  curator_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  date_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_gt?: InputMaybe<Scalars["String"]["input"]>;
  date_gte?: InputMaybe<Scalars["String"]["input"]>;
  date_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_lt?: InputMaybe<Scalars["String"]["input"]>;
  date_lte?: InputMaybe<Scalars["String"]["input"]>;
  date_not?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  lot?: InputMaybe<Scalars["String"]["input"]>;
  lot_?: InputMaybe<AtomicAuctionLot_Filter>;
  lot_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_gt?: InputMaybe<Scalars["String"]["input"]>;
  lot_gte?: InputMaybe<Scalars["String"]["input"]>;
  lot_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_lt?: InputMaybe<Scalars["String"]["input"]>;
  lot_lte?: InputMaybe<Scalars["String"]["input"]>;
  lot_not?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<AtomicAuctionCurated_Filter>>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum AtomicAuctionCurated_OrderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  Curator = "curator",
  Date = "date",
  Id = "id",
  Lot = "lot",
  lot__auctionHouse = "lot__auctionHouse",
  lot__auctionType = "lot__auctionType",
  Lot__callbacks = "lot__callbacks",
  Lot__capacity = "lot__capacity",
  lot__capacityInQuote = "lot__capacityInQuote",
  lot__capacityInitial = "lot__capacityInitial",
  Lot__chain = "lot__chain",
  Lot__conclusion = "lot__conclusion",
  lot__createdBlockNumber = "lot__createdBlockNumber",
  lot__createdBlockTimestamp = "lot__createdBlockTimestamp",
  lot__createdDate = "lot__createdDate",
  lot__createdTransactionHash = "lot__createdTransactionHash",
  Lot__curator = "lot__curator",
  lot__curatorApproved = "lot__curatorApproved",
  lot__curatorFee = "lot__curatorFee",
  lot__derivativeType = "lot__derivativeType",
  Lot__id = "lot__id",
  lot__lastUpdatedBlockNumber = "lot__lastUpdatedBlockNumber",
  lot__lastUpdatedBlockTimestamp = "lot__lastUpdatedBlockTimestamp",
  lot__lastUpdatedDate = "lot__lastUpdatedDate",
  lot__lastUpdatedTransactionHash = "lot__lastUpdatedTransactionHash",
  lot__lotId = "lot__lotId",
  lot__protocolFee = "lot__protocolFee",
  Lot__purchased = "lot__purchased",
  lot__referrerFee = "lot__referrerFee",
  Lot__seller = "lot__seller",
  Lot__sold = "lot__sold",
  Lot__start = "lot__start",
  lot__wrapDerivative = "lot__wrapDerivative",
  transactionHash = "transactionHash",
}

export type AtomicAuctionLot = {
  auctionHouse: Scalars["Bytes"]["output"];
  auctionType: Scalars["String"]["output"];
  baseToken: Token;
  callbacks: Scalars["Bytes"]["output"];
  cancelled?: Maybe<AtomicAuctionCancelled>;
  capacity: Scalars["BigDecimal"]["output"];
  capacityInQuote: Scalars["Boolean"]["output"];
  capacityInitial: Scalars["BigDecimal"]["output"];
  chain: Scalars["String"]["output"];
  conclusion: Scalars["BigInt"]["output"];
  created: AtomicAuctionCreated;
  createdBlockNumber: Scalars["BigInt"]["output"];
  createdBlockTimestamp: Scalars["BigInt"]["output"];
  createdDate: Scalars["String"]["output"];
  createdTransactionHash: Scalars["Bytes"]["output"];
  curated?: Maybe<AtomicAuctionCurated>;
  curator?: Maybe<Scalars["Bytes"]["output"]>;
  curatorApproved: Scalars["Boolean"]["output"];
  curatorFee: Scalars["BigDecimal"]["output"];
  derivativeType?: Maybe<Scalars["String"]["output"]>;
  fixedPriceSale?: Maybe<AtomicFixedPriceSaleLot>;
  id: Scalars["String"]["output"];
  lastUpdatedBlockNumber: Scalars["BigInt"]["output"];
  lastUpdatedBlockTimestamp: Scalars["BigInt"]["output"];
  lastUpdatedDate: Scalars["String"]["output"];
  lastUpdatedTransactionHash: Scalars["Bytes"]["output"];
  linearVesting?: Maybe<AtomicLinearVestingLot>;
  lotId: Scalars["BigInt"]["output"];
  protocolFee: Scalars["BigDecimal"]["output"];
  purchased: Scalars["BigDecimal"]["output"];
  purchases: Array<AtomicPurchase>;
  quoteToken: Token;
  referrerFee: Scalars["BigDecimal"]["output"];
  seller: Scalars["Bytes"]["output"];
  sold: Scalars["BigDecimal"]["output"];
  start: Scalars["BigInt"]["output"];
  wrapDerivative: Scalars["Boolean"]["output"];
};

export type AtomicAuctionLotPurchasesArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AtomicPurchase_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<AtomicPurchase_Filter>;
};

export type AtomicAuctionLot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AtomicAuctionLot_Filter>>>;
  auctionHouse?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  auctionHouse_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  auctionType?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_contains?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_gt?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_gte?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auctionType_lt?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_lte?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_not?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auctionType_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  baseToken?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_?: InputMaybe<Token_Filter>;
  baseToken_contains?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_gt?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_gte?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  baseToken_lt?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_lte?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_not?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  baseToken_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  callbacks?: InputMaybe<Scalars["Bytes"]["input"]>;
  callbacks_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  callbacks_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  callbacks_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  callbacks_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  callbacks_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  callbacks_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  callbacks_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  callbacks_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  callbacks_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  cancelled_?: InputMaybe<AtomicAuctionCancelled_Filter>;
  capacity?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacityInQuote?: InputMaybe<Scalars["Boolean"]["input"]>;
  capacityInQuote_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  capacityInQuote_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  capacityInQuote_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  capacityInitial?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacityInitial_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacityInitial_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacityInitial_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  capacityInitial_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacityInitial_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacityInitial_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacityInitial_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  capacity_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacity_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacity_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  capacity_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacity_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacity_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacity_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  chain?: InputMaybe<Scalars["String"]["input"]>;
  chain_contains?: InputMaybe<Scalars["String"]["input"]>;
  chain_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  chain_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  chain_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  chain_gt?: InputMaybe<Scalars["String"]["input"]>;
  chain_gte?: InputMaybe<Scalars["String"]["input"]>;
  chain_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  chain_lt?: InputMaybe<Scalars["String"]["input"]>;
  chain_lte?: InputMaybe<Scalars["String"]["input"]>;
  chain_not?: InputMaybe<Scalars["String"]["input"]>;
  chain_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  chain_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  chain_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  chain_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  chain_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  chain_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  chain_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  chain_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  chain_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  conclusion?: InputMaybe<Scalars["BigInt"]["input"]>;
  conclusion_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  conclusion_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  conclusion_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  conclusion_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  conclusion_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  conclusion_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  conclusion_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdBlockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdBlockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdBlockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdBlockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdDate?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_contains?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_gt?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_gte?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  createdDate_lt?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_lte?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_not?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  createdDate_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  createdTransactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTransactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTransactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTransactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTransactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  createdTransactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTransactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTransactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTransactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTransactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  created_?: InputMaybe<AtomicAuctionCreated_Filter>;
  curated_?: InputMaybe<AtomicAuctionCurated_Filter>;
  curator?: InputMaybe<Scalars["Bytes"]["input"]>;
  curatorApproved?: InputMaybe<Scalars["Boolean"]["input"]>;
  curatorApproved_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  curatorApproved_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  curatorApproved_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  curatorFee?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  curatorFee_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  curatorFee_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  curatorFee_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  curatorFee_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  curatorFee_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  curatorFee_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  curatorFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  curator_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  curator_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  derivativeType?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_contains?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_gt?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_gte?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  derivativeType_lt?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_lte?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_not?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  derivativeType_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  derivativeType_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  fixedPriceSale_?: InputMaybe<AtomicFixedPriceSaleLot_Filter>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  id_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_gt?: InputMaybe<Scalars["String"]["input"]>;
  id_gte?: InputMaybe<Scalars["String"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_lt?: InputMaybe<Scalars["String"]["input"]>;
  id_lte?: InputMaybe<Scalars["String"]["input"]>;
  id_not?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedBlockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lastUpdatedBlockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lastUpdatedBlockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lastUpdatedBlockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockTimestamp_not_in?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  lastUpdatedDate?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_contains?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_gt?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_gte?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lastUpdatedDate_lt?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_lte?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_not?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lastUpdatedDate_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  lastUpdatedDate_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedTransactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTransactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTransactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTransactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTransactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  lastUpdatedTransactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTransactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTransactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTransactionHash_not_contains?: InputMaybe<
    Scalars["Bytes"]["input"]
  >;
  lastUpdatedTransactionHash_not_in?: InputMaybe<
    Array<Scalars["Bytes"]["input"]>
  >;
  linearVesting_?: InputMaybe<AtomicLinearVestingLot_Filter>;
  lotId?: InputMaybe<Scalars["BigInt"]["input"]>;
  lotId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lotId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lotId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lotId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lotId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lotId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  lotId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<AtomicAuctionLot_Filter>>>;
  protocolFee?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolFee_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolFee_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolFee_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  protocolFee_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolFee_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolFee_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  purchased?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  purchased_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  purchased_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  purchased_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  purchased_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  purchased_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  purchased_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  purchased_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  purchases_?: InputMaybe<AtomicPurchase_Filter>;
  quoteToken?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_?: InputMaybe<Token_Filter>;
  quoteToken_contains?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_gt?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_gte?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  quoteToken_lt?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_lte?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_not?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  quoteToken_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  referrerFee?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  referrerFee_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  referrerFee_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  referrerFee_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  referrerFee_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  referrerFee_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  referrerFee_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  referrerFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  seller?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  seller_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  sold?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sold_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sold_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sold_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  sold_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sold_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sold_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sold_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  start?: InputMaybe<Scalars["BigInt"]["input"]>;
  start_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  start_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  start_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  start_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  start_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  start_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  start_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  wrapDerivative?: InputMaybe<Scalars["Boolean"]["input"]>;
  wrapDerivative_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  wrapDerivative_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  wrapDerivative_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

export enum AtomicAuctionLot_OrderBy {
  auctionHouse = "auctionHouse",
  auctionType = "auctionType",
  baseToken = "baseToken",
  baseToken__address = "baseToken__address",
  baseToken__decimals = "baseToken__decimals",
  baseToken__id = "baseToken__id",
  baseToken__name = "baseToken__name",
  baseToken__symbol = "baseToken__symbol",
  baseToken__totalSupply = "baseToken__totalSupply",
  Callbacks = "callbacks",
  Cancelled = "cancelled",
  cancelled__auctionRef = "cancelled__auctionRef",
  cancelled__blockNumber = "cancelled__blockNumber",
  cancelled__blockTimestamp = "cancelled__blockTimestamp",
  Cancelled__date = "cancelled__date",
  Cancelled__id = "cancelled__id",
  cancelled__transactionHash = "cancelled__transactionHash",
  Capacity = "capacity",
  capacityInQuote = "capacityInQuote",
  capacityInitial = "capacityInitial",
  Chain = "chain",
  Conclusion = "conclusion",
  Created = "created",
  createdBlockNumber = "createdBlockNumber",
  createdBlockTimestamp = "createdBlockTimestamp",
  createdDate = "createdDate",
  createdTransactionHash = "createdTransactionHash",
  created__blockNumber = "created__blockNumber",
  created__blockTimestamp = "created__blockTimestamp",
  Created__date = "created__date",
  Created__id = "created__id",
  created__infoHash = "created__infoHash",
  created__transactionHash = "created__transactionHash",
  Curated = "curated",
  curated__blockNumber = "curated__blockNumber",
  curated__blockTimestamp = "curated__blockTimestamp",
  Curated__curator = "curated__curator",
  Curated__date = "curated__date",
  Curated__id = "curated__id",
  curated__transactionHash = "curated__transactionHash",
  Curator = "curator",
  curatorApproved = "curatorApproved",
  curatorFee = "curatorFee",
  derivativeType = "derivativeType",
  fixedPriceSale = "fixedPriceSale",
  fixedPriceSale__id = "fixedPriceSale__id",
  fixedPriceSale__maxPayout = "fixedPriceSale__maxPayout",
  fixedPriceSale__price = "fixedPriceSale__price",
  Id = "id",
  lastUpdatedBlockNumber = "lastUpdatedBlockNumber",
  lastUpdatedBlockTimestamp = "lastUpdatedBlockTimestamp",
  lastUpdatedDate = "lastUpdatedDate",
  lastUpdatedTransactionHash = "lastUpdatedTransactionHash",
  linearVesting = "linearVesting",
  linearVesting__expiryDate = "linearVesting__expiryDate",
  linearVesting__expiryTimestamp = "linearVesting__expiryTimestamp",
  linearVesting__id = "linearVesting__id",
  linearVesting__startDate = "linearVesting__startDate",
  linearVesting__startTimestamp = "linearVesting__startTimestamp",
  lotId = "lotId",
  protocolFee = "protocolFee",
  Purchased = "purchased",
  Purchases = "purchases",
  quoteToken = "quoteToken",
  quoteToken__address = "quoteToken__address",
  quoteToken__decimals = "quoteToken__decimals",
  quoteToken__id = "quoteToken__id",
  quoteToken__name = "quoteToken__name",
  quoteToken__symbol = "quoteToken__symbol",
  quoteToken__totalSupply = "quoteToken__totalSupply",
  referrerFee = "referrerFee",
  Seller = "seller",
  Sold = "sold",
  Start = "start",
  wrapDerivative = "wrapDerivative",
}

export type AtomicFixedPriceSaleLot = {
  id: Scalars["Bytes"]["output"];
  lot: AtomicAuctionLot;
  maxPayout: Scalars["BigDecimal"]["output"];
  price: Scalars["BigDecimal"]["output"];
};

export type AtomicFixedPriceSaleLot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AtomicFixedPriceSaleLot_Filter>>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  lot?: InputMaybe<Scalars["String"]["input"]>;
  lot_?: InputMaybe<AtomicAuctionLot_Filter>;
  lot_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_gt?: InputMaybe<Scalars["String"]["input"]>;
  lot_gte?: InputMaybe<Scalars["String"]["input"]>;
  lot_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_lt?: InputMaybe<Scalars["String"]["input"]>;
  lot_lte?: InputMaybe<Scalars["String"]["input"]>;
  lot_not?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  maxPayout?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  maxPayout_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  maxPayout_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  maxPayout_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  maxPayout_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  maxPayout_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  maxPayout_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  maxPayout_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<AtomicFixedPriceSaleLot_Filter>>>;
  price?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  price_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  price_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
};

export enum AtomicFixedPriceSaleLot_OrderBy {
  Id = "id",
  Lot = "lot",
  lot__auctionHouse = "lot__auctionHouse",
  lot__auctionType = "lot__auctionType",
  Lot__callbacks = "lot__callbacks",
  Lot__capacity = "lot__capacity",
  lot__capacityInQuote = "lot__capacityInQuote",
  lot__capacityInitial = "lot__capacityInitial",
  Lot__chain = "lot__chain",
  Lot__conclusion = "lot__conclusion",
  lot__createdBlockNumber = "lot__createdBlockNumber",
  lot__createdBlockTimestamp = "lot__createdBlockTimestamp",
  lot__createdDate = "lot__createdDate",
  lot__createdTransactionHash = "lot__createdTransactionHash",
  Lot__curator = "lot__curator",
  lot__curatorApproved = "lot__curatorApproved",
  lot__curatorFee = "lot__curatorFee",
  lot__derivativeType = "lot__derivativeType",
  Lot__id = "lot__id",
  lot__lastUpdatedBlockNumber = "lot__lastUpdatedBlockNumber",
  lot__lastUpdatedBlockTimestamp = "lot__lastUpdatedBlockTimestamp",
  lot__lastUpdatedDate = "lot__lastUpdatedDate",
  lot__lastUpdatedTransactionHash = "lot__lastUpdatedTransactionHash",
  lot__lotId = "lot__lotId",
  lot__protocolFee = "lot__protocolFee",
  Lot__purchased = "lot__purchased",
  lot__referrerFee = "lot__referrerFee",
  Lot__seller = "lot__seller",
  Lot__sold = "lot__sold",
  Lot__start = "lot__start",
  lot__wrapDerivative = "lot__wrapDerivative",
  maxPayout = "maxPayout",
  Price = "price",
}

export type AtomicLinearVestingLot = {
  expiryDate: Scalars["String"]["output"];
  expiryTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["Bytes"]["output"];
  lot: AtomicAuctionLot;
  startDate: Scalars["String"]["output"];
  startTimestamp: Scalars["BigInt"]["output"];
};

export type AtomicLinearVestingLot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AtomicLinearVestingLot_Filter>>>;
  expiryDate?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_contains?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_gt?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_gte?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  expiryDate_lt?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_lte?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_not?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  expiryDate_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  expiryTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiryTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiryTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiryTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  expiryTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiryTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiryTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiryTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  lot?: InputMaybe<Scalars["String"]["input"]>;
  lot_?: InputMaybe<AtomicAuctionLot_Filter>;
  lot_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_gt?: InputMaybe<Scalars["String"]["input"]>;
  lot_gte?: InputMaybe<Scalars["String"]["input"]>;
  lot_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_lt?: InputMaybe<Scalars["String"]["input"]>;
  lot_lte?: InputMaybe<Scalars["String"]["input"]>;
  lot_not?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<AtomicLinearVestingLot_Filter>>>;
  startDate?: InputMaybe<Scalars["String"]["input"]>;
  startDate_contains?: InputMaybe<Scalars["String"]["input"]>;
  startDate_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  startDate_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  startDate_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  startDate_gt?: InputMaybe<Scalars["String"]["input"]>;
  startDate_gte?: InputMaybe<Scalars["String"]["input"]>;
  startDate_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startDate_lt?: InputMaybe<Scalars["String"]["input"]>;
  startDate_lte?: InputMaybe<Scalars["String"]["input"]>;
  startDate_not?: InputMaybe<Scalars["String"]["input"]>;
  startDate_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  startDate_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  startDate_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  startDate_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  startDate_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startDate_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  startDate_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  startDate_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  startDate_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  startTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  startTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export enum AtomicLinearVestingLot_OrderBy {
  expiryDate = "expiryDate",
  expiryTimestamp = "expiryTimestamp",
  Id = "id",
  Lot = "lot",
  lot__auctionHouse = "lot__auctionHouse",
  lot__auctionType = "lot__auctionType",
  Lot__callbacks = "lot__callbacks",
  Lot__capacity = "lot__capacity",
  lot__capacityInQuote = "lot__capacityInQuote",
  lot__capacityInitial = "lot__capacityInitial",
  Lot__chain = "lot__chain",
  Lot__conclusion = "lot__conclusion",
  lot__createdBlockNumber = "lot__createdBlockNumber",
  lot__createdBlockTimestamp = "lot__createdBlockTimestamp",
  lot__createdDate = "lot__createdDate",
  lot__createdTransactionHash = "lot__createdTransactionHash",
  Lot__curator = "lot__curator",
  lot__curatorApproved = "lot__curatorApproved",
  lot__curatorFee = "lot__curatorFee",
  lot__derivativeType = "lot__derivativeType",
  Lot__id = "lot__id",
  lot__lastUpdatedBlockNumber = "lot__lastUpdatedBlockNumber",
  lot__lastUpdatedBlockTimestamp = "lot__lastUpdatedBlockTimestamp",
  lot__lastUpdatedDate = "lot__lastUpdatedDate",
  lot__lastUpdatedTransactionHash = "lot__lastUpdatedTransactionHash",
  lot__lotId = "lot__lotId",
  lot__protocolFee = "lot__protocolFee",
  Lot__purchased = "lot__purchased",
  lot__referrerFee = "lot__referrerFee",
  Lot__seller = "lot__seller",
  Lot__sold = "lot__sold",
  Lot__start = "lot__start",
  lot__wrapDerivative = "lot__wrapDerivative",
  startDate = "startDate",
  startTimestamp = "startTimestamp",
}

export type AtomicPurchase = {
  amount: Scalars["BigDecimal"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  buyer: Scalars["Bytes"]["output"];
  date: Scalars["String"]["output"];
  id: Scalars["Bytes"]["output"];
  lot: AtomicAuctionLot;
  payout: Scalars["BigDecimal"]["output"];
  referrer: Scalars["Bytes"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type AtomicPurchase_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amount_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amount_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<AtomicPurchase_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  buyer?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  buyer_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  buyer_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  date_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_gt?: InputMaybe<Scalars["String"]["input"]>;
  date_gte?: InputMaybe<Scalars["String"]["input"]>;
  date_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_lt?: InputMaybe<Scalars["String"]["input"]>;
  date_lte?: InputMaybe<Scalars["String"]["input"]>;
  date_not?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  lot?: InputMaybe<Scalars["String"]["input"]>;
  lot_?: InputMaybe<AtomicAuctionLot_Filter>;
  lot_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_gt?: InputMaybe<Scalars["String"]["input"]>;
  lot_gte?: InputMaybe<Scalars["String"]["input"]>;
  lot_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_lt?: InputMaybe<Scalars["String"]["input"]>;
  lot_lte?: InputMaybe<Scalars["String"]["input"]>;
  lot_not?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<AtomicPurchase_Filter>>>;
  payout?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  payout_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  payout_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  payout_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  payout_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  payout_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  payout_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  payout_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  referrer?: InputMaybe<Scalars["Bytes"]["input"]>;
  referrer_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  referrer_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  referrer_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  referrer_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  referrer_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  referrer_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  referrer_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  referrer_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  referrer_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum AtomicPurchase_OrderBy {
  Amount = "amount",
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  Buyer = "buyer",
  Date = "date",
  Id = "id",
  Lot = "lot",
  lot__auctionHouse = "lot__auctionHouse",
  lot__auctionType = "lot__auctionType",
  Lot__callbacks = "lot__callbacks",
  Lot__capacity = "lot__capacity",
  lot__capacityInQuote = "lot__capacityInQuote",
  lot__capacityInitial = "lot__capacityInitial",
  Lot__chain = "lot__chain",
  Lot__conclusion = "lot__conclusion",
  lot__createdBlockNumber = "lot__createdBlockNumber",
  lot__createdBlockTimestamp = "lot__createdBlockTimestamp",
  lot__createdDate = "lot__createdDate",
  lot__createdTransactionHash = "lot__createdTransactionHash",
  Lot__curator = "lot__curator",
  lot__curatorApproved = "lot__curatorApproved",
  lot__curatorFee = "lot__curatorFee",
  lot__derivativeType = "lot__derivativeType",
  Lot__id = "lot__id",
  lot__lastUpdatedBlockNumber = "lot__lastUpdatedBlockNumber",
  lot__lastUpdatedBlockTimestamp = "lot__lastUpdatedBlockTimestamp",
  lot__lastUpdatedDate = "lot__lastUpdatedDate",
  lot__lastUpdatedTransactionHash = "lot__lastUpdatedTransactionHash",
  lot__lotId = "lot__lotId",
  lot__protocolFee = "lot__protocolFee",
  Lot__purchased = "lot__purchased",
  lot__referrerFee = "lot__referrerFee",
  Lot__seller = "lot__seller",
  Lot__sold = "lot__sold",
  Lot__start = "lot__start",
  lot__wrapDerivative = "lot__wrapDerivative",
  Payout = "payout",
  Referrer = "referrer",
  transactionHash = "transactionHash",
}

export type AuctionHouseModuleInstalled = {
  address: Scalars["Bytes"]["output"];
  auctionHouse: Scalars["Bytes"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  date: Scalars["String"]["output"];
  id: Scalars["Bytes"]["output"];
  keycode: Scalars["Bytes"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
  version: Scalars["Int"]["output"];
};

export type AuctionHouseModuleInstalled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  address_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<AuctionHouseModuleInstalled_Filter>>>;
  auctionHouse?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  auctionHouse_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  date_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_gt?: InputMaybe<Scalars["String"]["input"]>;
  date_gte?: InputMaybe<Scalars["String"]["input"]>;
  date_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_lt?: InputMaybe<Scalars["String"]["input"]>;
  date_lte?: InputMaybe<Scalars["String"]["input"]>;
  date_not?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  keycode?: InputMaybe<Scalars["Bytes"]["input"]>;
  keycode_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  keycode_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  keycode_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  keycode_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  keycode_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  keycode_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  keycode_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  keycode_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  keycode_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<AuctionHouseModuleInstalled_Filter>>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  version?: InputMaybe<Scalars["Int"]["input"]>;
  version_gt?: InputMaybe<Scalars["Int"]["input"]>;
  version_gte?: InputMaybe<Scalars["Int"]["input"]>;
  version_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  version_lt?: InputMaybe<Scalars["Int"]["input"]>;
  version_lte?: InputMaybe<Scalars["Int"]["input"]>;
  version_not?: InputMaybe<Scalars["Int"]["input"]>;
  version_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
};

export enum AuctionHouseModuleInstalled_OrderBy {
  Address = "address",
  auctionHouse = "auctionHouse",
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  Date = "date",
  Id = "id",
  Keycode = "keycode",
  transactionHash = "transactionHash",
  Version = "version",
}

export type AuctionHouseModuleSunset = {
  auctionHouse: Scalars["Bytes"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  date: Scalars["String"]["output"];
  id: Scalars["Bytes"]["output"];
  keycode: Scalars["Bytes"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type AuctionHouseModuleSunset_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AuctionHouseModuleSunset_Filter>>>;
  auctionHouse?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  auctionHouse_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  date_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_gt?: InputMaybe<Scalars["String"]["input"]>;
  date_gte?: InputMaybe<Scalars["String"]["input"]>;
  date_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_lt?: InputMaybe<Scalars["String"]["input"]>;
  date_lte?: InputMaybe<Scalars["String"]["input"]>;
  date_not?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  keycode?: InputMaybe<Scalars["Bytes"]["input"]>;
  keycode_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  keycode_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  keycode_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  keycode_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  keycode_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  keycode_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  keycode_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  keycode_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  keycode_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<AuctionHouseModuleSunset_Filter>>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum AuctionHouseModuleSunset_OrderBy {
  auctionHouse = "auctionHouse",
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  Date = "date",
  Id = "id",
  Keycode = "keycode",
  transactionHash = "transactionHash",
}

export type AuctionHouseOwnershipTransferred = {
  auctionHouse: Scalars["Bytes"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  caller: Scalars["Bytes"]["output"];
  date: Scalars["String"]["output"];
  id: Scalars["Bytes"]["output"];
  newOwner: Scalars["Bytes"]["output"];
  transactionHash: Scalars["Bytes"]["output"];
};

export type AuctionHouseOwnershipTransferred_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<AuctionHouseOwnershipTransferred_Filter>>>;
  auctionHouse?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  auctionHouse_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  caller?: InputMaybe<Scalars["Bytes"]["input"]>;
  caller_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  caller_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  caller_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  caller_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  caller_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  caller_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  caller_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  caller_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  caller_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  date_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_gt?: InputMaybe<Scalars["String"]["input"]>;
  date_gte?: InputMaybe<Scalars["String"]["input"]>;
  date_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_lt?: InputMaybe<Scalars["String"]["input"]>;
  date_lte?: InputMaybe<Scalars["String"]["input"]>;
  date_not?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  newOwner?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  newOwner_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  newOwner_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<AuctionHouseOwnershipTransferred_Filter>>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum AuctionHouseOwnershipTransferred_OrderBy {
  auctionHouse = "auctionHouse",
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  Caller = "caller",
  Date = "date",
  Id = "id",
  newOwner = "newOwner",
  transactionHash = "transactionHash",
}

export type BatchAuctionAborted = {
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  date: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lot: BatchAuctionLot;
  transactionHash: Scalars["Bytes"]["output"];
};

export type BatchAuctionAborted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BatchAuctionAborted_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  date_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_gt?: InputMaybe<Scalars["String"]["input"]>;
  date_gte?: InputMaybe<Scalars["String"]["input"]>;
  date_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_lt?: InputMaybe<Scalars["String"]["input"]>;
  date_lte?: InputMaybe<Scalars["String"]["input"]>;
  date_not?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  id_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_gt?: InputMaybe<Scalars["String"]["input"]>;
  id_gte?: InputMaybe<Scalars["String"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_lt?: InputMaybe<Scalars["String"]["input"]>;
  id_lte?: InputMaybe<Scalars["String"]["input"]>;
  id_not?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot?: InputMaybe<Scalars["String"]["input"]>;
  lot_?: InputMaybe<BatchAuctionLot_Filter>;
  lot_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_gt?: InputMaybe<Scalars["String"]["input"]>;
  lot_gte?: InputMaybe<Scalars["String"]["input"]>;
  lot_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_lt?: InputMaybe<Scalars["String"]["input"]>;
  lot_lte?: InputMaybe<Scalars["String"]["input"]>;
  lot_not?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<BatchAuctionAborted_Filter>>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum BatchAuctionAborted_OrderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  Date = "date",
  Id = "id",
  Lot = "lot",
  lot__auctionHouse = "lot__auctionHouse",
  lot__auctionType = "lot__auctionType",
  Lot__callbacks = "lot__callbacks",
  Lot__capacity = "lot__capacity",
  lot__capacityInitial = "lot__capacityInitial",
  Lot__chain = "lot__chain",
  Lot__conclusion = "lot__conclusion",
  lot__createdBlockNumber = "lot__createdBlockNumber",
  lot__createdBlockTimestamp = "lot__createdBlockTimestamp",
  lot__createdDate = "lot__createdDate",
  lot__createdTransactionHash = "lot__createdTransactionHash",
  Lot__curator = "lot__curator",
  lot__curatorApproved = "lot__curatorApproved",
  lot__curatorFee = "lot__curatorFee",
  lot__derivativeType = "lot__derivativeType",
  Lot__id = "lot__id",
  lot__lastUpdatedBlockNumber = "lot__lastUpdatedBlockNumber",
  lot__lastUpdatedBlockTimestamp = "lot__lastUpdatedBlockTimestamp",
  lot__lastUpdatedDate = "lot__lastUpdatedDate",
  lot__lastUpdatedTransactionHash = "lot__lastUpdatedTransactionHash",
  lot__lotId = "lot__lotId",
  lot__maxBidId = "lot__maxBidId",
  lot__protocolFee = "lot__protocolFee",
  Lot__purchased = "lot__purchased",
  lot__referrerFee = "lot__referrerFee",
  Lot__seller = "lot__seller",
  Lot__sold = "lot__sold",
  Lot__start = "lot__start",
  lot__wrapDerivative = "lot__wrapDerivative",
  transactionHash = "transactionHash",
}

export type BatchAuctionCancelled = {
  auctionRef: Scalars["Bytes"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  date: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lot: BatchAuctionLot;
  transactionHash: Scalars["Bytes"]["output"];
};

export type BatchAuctionCancelled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BatchAuctionCancelled_Filter>>>;
  auctionRef?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionRef_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionRef_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionRef_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionRef_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  auctionRef_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionRef_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionRef_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionRef_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionRef_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  date_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_gt?: InputMaybe<Scalars["String"]["input"]>;
  date_gte?: InputMaybe<Scalars["String"]["input"]>;
  date_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_lt?: InputMaybe<Scalars["String"]["input"]>;
  date_lte?: InputMaybe<Scalars["String"]["input"]>;
  date_not?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  id_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_gt?: InputMaybe<Scalars["String"]["input"]>;
  id_gte?: InputMaybe<Scalars["String"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_lt?: InputMaybe<Scalars["String"]["input"]>;
  id_lte?: InputMaybe<Scalars["String"]["input"]>;
  id_not?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot?: InputMaybe<Scalars["String"]["input"]>;
  lot_?: InputMaybe<BatchAuctionLot_Filter>;
  lot_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_gt?: InputMaybe<Scalars["String"]["input"]>;
  lot_gte?: InputMaybe<Scalars["String"]["input"]>;
  lot_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_lt?: InputMaybe<Scalars["String"]["input"]>;
  lot_lte?: InputMaybe<Scalars["String"]["input"]>;
  lot_not?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<BatchAuctionCancelled_Filter>>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum BatchAuctionCancelled_OrderBy {
  auctionRef = "auctionRef",
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  Date = "date",
  Id = "id",
  Lot = "lot",
  lot__auctionHouse = "lot__auctionHouse",
  lot__auctionType = "lot__auctionType",
  Lot__callbacks = "lot__callbacks",
  Lot__capacity = "lot__capacity",
  lot__capacityInitial = "lot__capacityInitial",
  Lot__chain = "lot__chain",
  Lot__conclusion = "lot__conclusion",
  lot__createdBlockNumber = "lot__createdBlockNumber",
  lot__createdBlockTimestamp = "lot__createdBlockTimestamp",
  lot__createdDate = "lot__createdDate",
  lot__createdTransactionHash = "lot__createdTransactionHash",
  Lot__curator = "lot__curator",
  lot__curatorApproved = "lot__curatorApproved",
  lot__curatorFee = "lot__curatorFee",
  lot__derivativeType = "lot__derivativeType",
  Lot__id = "lot__id",
  lot__lastUpdatedBlockNumber = "lot__lastUpdatedBlockNumber",
  lot__lastUpdatedBlockTimestamp = "lot__lastUpdatedBlockTimestamp",
  lot__lastUpdatedDate = "lot__lastUpdatedDate",
  lot__lastUpdatedTransactionHash = "lot__lastUpdatedTransactionHash",
  lot__lotId = "lot__lotId",
  lot__maxBidId = "lot__maxBidId",
  lot__protocolFee = "lot__protocolFee",
  Lot__purchased = "lot__purchased",
  lot__referrerFee = "lot__referrerFee",
  Lot__seller = "lot__seller",
  Lot__sold = "lot__sold",
  Lot__start = "lot__start",
  lot__wrapDerivative = "lot__wrapDerivative",
  transactionHash = "transactionHash",
}

export type BatchAuctionCreated = {
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  date: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  infoHash: Scalars["String"]["output"];
  lot: BatchAuctionLot;
  transactionHash: Scalars["Bytes"]["output"];
};

export type BatchAuctionCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BatchAuctionCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  date_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_gt?: InputMaybe<Scalars["String"]["input"]>;
  date_gte?: InputMaybe<Scalars["String"]["input"]>;
  date_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_lt?: InputMaybe<Scalars["String"]["input"]>;
  date_lte?: InputMaybe<Scalars["String"]["input"]>;
  date_not?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  id_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_gt?: InputMaybe<Scalars["String"]["input"]>;
  id_gte?: InputMaybe<Scalars["String"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_lt?: InputMaybe<Scalars["String"]["input"]>;
  id_lte?: InputMaybe<Scalars["String"]["input"]>;
  id_not?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  infoHash?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_contains?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_gt?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_gte?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  infoHash_lt?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_lte?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_not?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  infoHash_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  infoHash_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot?: InputMaybe<Scalars["String"]["input"]>;
  lot_?: InputMaybe<BatchAuctionLot_Filter>;
  lot_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_gt?: InputMaybe<Scalars["String"]["input"]>;
  lot_gte?: InputMaybe<Scalars["String"]["input"]>;
  lot_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_lt?: InputMaybe<Scalars["String"]["input"]>;
  lot_lte?: InputMaybe<Scalars["String"]["input"]>;
  lot_not?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<BatchAuctionCreated_Filter>>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum BatchAuctionCreated_OrderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  Date = "date",
  Id = "id",
  infoHash = "infoHash",
  Lot = "lot",
  lot__auctionHouse = "lot__auctionHouse",
  lot__auctionType = "lot__auctionType",
  Lot__callbacks = "lot__callbacks",
  Lot__capacity = "lot__capacity",
  lot__capacityInitial = "lot__capacityInitial",
  Lot__chain = "lot__chain",
  Lot__conclusion = "lot__conclusion",
  lot__createdBlockNumber = "lot__createdBlockNumber",
  lot__createdBlockTimestamp = "lot__createdBlockTimestamp",
  lot__createdDate = "lot__createdDate",
  lot__createdTransactionHash = "lot__createdTransactionHash",
  Lot__curator = "lot__curator",
  lot__curatorApproved = "lot__curatorApproved",
  lot__curatorFee = "lot__curatorFee",
  lot__derivativeType = "lot__derivativeType",
  Lot__id = "lot__id",
  lot__lastUpdatedBlockNumber = "lot__lastUpdatedBlockNumber",
  lot__lastUpdatedBlockTimestamp = "lot__lastUpdatedBlockTimestamp",
  lot__lastUpdatedDate = "lot__lastUpdatedDate",
  lot__lastUpdatedTransactionHash = "lot__lastUpdatedTransactionHash",
  lot__lotId = "lot__lotId",
  lot__maxBidId = "lot__maxBidId",
  lot__protocolFee = "lot__protocolFee",
  Lot__purchased = "lot__purchased",
  lot__referrerFee = "lot__referrerFee",
  Lot__seller = "lot__seller",
  Lot__sold = "lot__sold",
  Lot__start = "lot__start",
  lot__wrapDerivative = "lot__wrapDerivative",
  transactionHash = "transactionHash",
}

export type BatchAuctionCurated = {
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  curator: Scalars["Bytes"]["output"];
  date: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lot: BatchAuctionLot;
  transactionHash: Scalars["Bytes"]["output"];
};

export type BatchAuctionCurated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BatchAuctionCurated_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  curator?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  curator_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  date_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_gt?: InputMaybe<Scalars["String"]["input"]>;
  date_gte?: InputMaybe<Scalars["String"]["input"]>;
  date_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_lt?: InputMaybe<Scalars["String"]["input"]>;
  date_lte?: InputMaybe<Scalars["String"]["input"]>;
  date_not?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  id_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_gt?: InputMaybe<Scalars["String"]["input"]>;
  id_gte?: InputMaybe<Scalars["String"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_lt?: InputMaybe<Scalars["String"]["input"]>;
  id_lte?: InputMaybe<Scalars["String"]["input"]>;
  id_not?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot?: InputMaybe<Scalars["String"]["input"]>;
  lot_?: InputMaybe<BatchAuctionLot_Filter>;
  lot_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_gt?: InputMaybe<Scalars["String"]["input"]>;
  lot_gte?: InputMaybe<Scalars["String"]["input"]>;
  lot_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_lt?: InputMaybe<Scalars["String"]["input"]>;
  lot_lte?: InputMaybe<Scalars["String"]["input"]>;
  lot_not?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<BatchAuctionCurated_Filter>>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum BatchAuctionCurated_OrderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  Curator = "curator",
  Date = "date",
  Id = "id",
  Lot = "lot",
  lot__auctionHouse = "lot__auctionHouse",
  lot__auctionType = "lot__auctionType",
  Lot__callbacks = "lot__callbacks",
  Lot__capacity = "lot__capacity",
  lot__capacityInitial = "lot__capacityInitial",
  Lot__chain = "lot__chain",
  Lot__conclusion = "lot__conclusion",
  lot__createdBlockNumber = "lot__createdBlockNumber",
  lot__createdBlockTimestamp = "lot__createdBlockTimestamp",
  lot__createdDate = "lot__createdDate",
  lot__createdTransactionHash = "lot__createdTransactionHash",
  Lot__curator = "lot__curator",
  lot__curatorApproved = "lot__curatorApproved",
  lot__curatorFee = "lot__curatorFee",
  lot__derivativeType = "lot__derivativeType",
  Lot__id = "lot__id",
  lot__lastUpdatedBlockNumber = "lot__lastUpdatedBlockNumber",
  lot__lastUpdatedBlockTimestamp = "lot__lastUpdatedBlockTimestamp",
  lot__lastUpdatedDate = "lot__lastUpdatedDate",
  lot__lastUpdatedTransactionHash = "lot__lastUpdatedTransactionHash",
  lot__lotId = "lot__lotId",
  lot__maxBidId = "lot__maxBidId",
  lot__protocolFee = "lot__protocolFee",
  Lot__purchased = "lot__purchased",
  lot__referrerFee = "lot__referrerFee",
  Lot__seller = "lot__seller",
  Lot__sold = "lot__sold",
  Lot__start = "lot__start",
  lot__wrapDerivative = "lot__wrapDerivative",
  transactionHash = "transactionHash",
}

export type BatchAuctionLot = {
  aborted?: Maybe<BatchAuctionAborted>;
  auctionHouse: Scalars["Bytes"]["output"];
  auctionType: Scalars["String"]["output"];
  baseToken: Token;
  bids: Array<BatchBid>;
  bidsClaimed: Array<BatchBidClaimed>;
  bidsDecrypted: Array<BatchBidDecrypted>;
  bidsRefunded: Array<BatchBidRefunded>;
  callbacks: Scalars["Bytes"]["output"];
  cancelled?: Maybe<BatchAuctionCancelled>;
  capacity: Scalars["BigDecimal"]["output"];
  capacityInitial: Scalars["BigDecimal"]["output"];
  chain: Scalars["String"]["output"];
  conclusion: Scalars["BigInt"]["output"];
  created: BatchAuctionCreated;
  createdBlockNumber: Scalars["BigInt"]["output"];
  createdBlockTimestamp: Scalars["BigInt"]["output"];
  createdDate: Scalars["String"]["output"];
  createdTransactionHash: Scalars["Bytes"]["output"];
  curated?: Maybe<BatchAuctionCurated>;
  curator?: Maybe<Scalars["Bytes"]["output"]>;
  curatorApproved: Scalars["Boolean"]["output"];
  curatorFee: Scalars["BigDecimal"]["output"];
  derivativeType?: Maybe<Scalars["String"]["output"]>;
  encryptedMarginalPrice?: Maybe<BatchEncryptedMarginalPriceLot>;
  id: Scalars["String"]["output"];
  lastUpdatedBlockNumber: Scalars["BigInt"]["output"];
  lastUpdatedBlockTimestamp: Scalars["BigInt"]["output"];
  lastUpdatedDate: Scalars["String"]["output"];
  lastUpdatedTransactionHash: Scalars["Bytes"]["output"];
  linearVesting?: Maybe<BatchLinearVestingLot>;
  lotId: Scalars["BigInt"]["output"];
  maxBidId: Scalars["BigInt"]["output"];
  protocolFee: Scalars["BigDecimal"]["output"];
  purchased: Scalars["BigDecimal"]["output"];
  quoteToken: Token;
  referrerFee: Scalars["BigDecimal"]["output"];
  seller: Scalars["Bytes"]["output"];
  settled?: Maybe<BatchAuctionSettled>;
  sold: Scalars["BigDecimal"]["output"];
  start: Scalars["BigInt"]["output"];
  wrapDerivative: Scalars["Boolean"]["output"];
};

export type BatchAuctionLotBidsArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchBid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<BatchBid_Filter>;
};

export type BatchAuctionLotBidsClaimedArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchBidClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<BatchBidClaimed_Filter>;
};

export type BatchAuctionLotBidsDecryptedArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchBidDecrypted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<BatchBidDecrypted_Filter>;
};

export type BatchAuctionLotBidsRefundedArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchBidRefunded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<BatchBidRefunded_Filter>;
};

export type BatchAuctionLot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  aborted_?: InputMaybe<BatchAuctionAborted_Filter>;
  and?: InputMaybe<Array<InputMaybe<BatchAuctionLot_Filter>>>;
  auctionHouse?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  auctionHouse_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  auctionHouse_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  auctionType?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_contains?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_gt?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_gte?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auctionType_lt?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_lte?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_not?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  auctionType_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  auctionType_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  baseToken?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_?: InputMaybe<Token_Filter>;
  baseToken_contains?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_gt?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_gte?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  baseToken_lt?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_lte?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_not?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  baseToken_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  baseToken_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bidsClaimed_?: InputMaybe<BatchBidClaimed_Filter>;
  bidsDecrypted_?: InputMaybe<BatchBidDecrypted_Filter>;
  bidsRefunded_?: InputMaybe<BatchBidRefunded_Filter>;
  bids_?: InputMaybe<BatchBid_Filter>;
  callbacks?: InputMaybe<Scalars["Bytes"]["input"]>;
  callbacks_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  callbacks_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  callbacks_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  callbacks_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  callbacks_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  callbacks_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  callbacks_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  callbacks_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  callbacks_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  cancelled_?: InputMaybe<BatchAuctionCancelled_Filter>;
  capacity?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacityInitial?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacityInitial_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacityInitial_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacityInitial_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  capacityInitial_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacityInitial_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacityInitial_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacityInitial_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  capacity_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacity_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacity_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  capacity_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacity_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacity_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  capacity_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  chain?: InputMaybe<Scalars["String"]["input"]>;
  chain_contains?: InputMaybe<Scalars["String"]["input"]>;
  chain_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  chain_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  chain_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  chain_gt?: InputMaybe<Scalars["String"]["input"]>;
  chain_gte?: InputMaybe<Scalars["String"]["input"]>;
  chain_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  chain_lt?: InputMaybe<Scalars["String"]["input"]>;
  chain_lte?: InputMaybe<Scalars["String"]["input"]>;
  chain_not?: InputMaybe<Scalars["String"]["input"]>;
  chain_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  chain_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  chain_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  chain_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  chain_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  chain_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  chain_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  chain_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  chain_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  conclusion?: InputMaybe<Scalars["BigInt"]["input"]>;
  conclusion_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  conclusion_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  conclusion_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  conclusion_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  conclusion_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  conclusion_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  conclusion_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdBlockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdBlockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdBlockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdBlockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  createdBlockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  createdDate?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_contains?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_gt?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_gte?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  createdDate_lt?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_lte?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_not?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  createdDate_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  createdDate_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  createdTransactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTransactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTransactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTransactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTransactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  createdTransactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTransactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTransactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTransactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  createdTransactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  created_?: InputMaybe<BatchAuctionCreated_Filter>;
  curated_?: InputMaybe<BatchAuctionCurated_Filter>;
  curator?: InputMaybe<Scalars["Bytes"]["input"]>;
  curatorApproved?: InputMaybe<Scalars["Boolean"]["input"]>;
  curatorApproved_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  curatorApproved_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  curatorApproved_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  curatorFee?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  curatorFee_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  curatorFee_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  curatorFee_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  curatorFee_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  curatorFee_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  curatorFee_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  curatorFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  curator_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  curator_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  curator_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  derivativeType?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_contains?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_gt?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_gte?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  derivativeType_lt?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_lte?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_not?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  derivativeType_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  derivativeType_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  derivativeType_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  encryptedMarginalPrice_?: InputMaybe<BatchEncryptedMarginalPriceLot_Filter>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  id_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_gt?: InputMaybe<Scalars["String"]["input"]>;
  id_gte?: InputMaybe<Scalars["String"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_lt?: InputMaybe<Scalars["String"]["input"]>;
  id_lte?: InputMaybe<Scalars["String"]["input"]>;
  id_not?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedBlockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lastUpdatedBlockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lastUpdatedBlockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lastUpdatedBlockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  lastUpdatedBlockTimestamp_not_in?: InputMaybe<
    Array<Scalars["BigInt"]["input"]>
  >;
  lastUpdatedDate?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_contains?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_gt?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_gte?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lastUpdatedDate_lt?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_lte?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_not?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lastUpdatedDate_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_not_starts_with_nocase?: InputMaybe<
    Scalars["String"]["input"]
  >;
  lastUpdatedDate_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedDate_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lastUpdatedTransactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTransactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTransactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTransactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTransactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  lastUpdatedTransactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTransactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTransactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  lastUpdatedTransactionHash_not_contains?: InputMaybe<
    Scalars["Bytes"]["input"]
  >;
  lastUpdatedTransactionHash_not_in?: InputMaybe<
    Array<Scalars["Bytes"]["input"]>
  >;
  linearVesting_?: InputMaybe<BatchLinearVestingLot_Filter>;
  lotId?: InputMaybe<Scalars["BigInt"]["input"]>;
  lotId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lotId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lotId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  lotId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  lotId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  lotId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  lotId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  maxBidId?: InputMaybe<Scalars["BigInt"]["input"]>;
  maxBidId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  maxBidId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  maxBidId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  maxBidId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  maxBidId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  maxBidId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  maxBidId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<BatchAuctionLot_Filter>>>;
  protocolFee?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolFee_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolFee_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolFee_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  protocolFee_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolFee_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolFee_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  protocolFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  purchased?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  purchased_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  purchased_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  purchased_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  purchased_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  purchased_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  purchased_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  purchased_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  quoteToken?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_?: InputMaybe<Token_Filter>;
  quoteToken_contains?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_gt?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_gte?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  quoteToken_lt?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_lte?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_not?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  quoteToken_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  quoteToken_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  referrerFee?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  referrerFee_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  referrerFee_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  referrerFee_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  referrerFee_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  referrerFee_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  referrerFee_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  referrerFee_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  seller?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  seller_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  seller_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  settled_?: InputMaybe<BatchAuctionSettled_Filter>;
  sold?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sold_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sold_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sold_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  sold_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sold_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sold_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  sold_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  start?: InputMaybe<Scalars["BigInt"]["input"]>;
  start_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  start_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  start_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  start_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  start_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  start_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  start_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  wrapDerivative?: InputMaybe<Scalars["Boolean"]["input"]>;
  wrapDerivative_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  wrapDerivative_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  wrapDerivative_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
};

export enum BatchAuctionLot_OrderBy {
  Aborted = "aborted",
  aborted__blockNumber = "aborted__blockNumber",
  aborted__blockTimestamp = "aborted__blockTimestamp",
  Aborted__date = "aborted__date",
  Aborted__id = "aborted__id",
  aborted__transactionHash = "aborted__transactionHash",
  auctionHouse = "auctionHouse",
  auctionType = "auctionType",
  baseToken = "baseToken",
  baseToken__address = "baseToken__address",
  baseToken__decimals = "baseToken__decimals",
  baseToken__id = "baseToken__id",
  baseToken__name = "baseToken__name",
  baseToken__symbol = "baseToken__symbol",
  baseToken__totalSupply = "baseToken__totalSupply",
  Bids = "bids",
  bidsClaimed = "bidsClaimed",
  bidsDecrypted = "bidsDecrypted",
  bidsRefunded = "bidsRefunded",
  Callbacks = "callbacks",
  Cancelled = "cancelled",
  cancelled__auctionRef = "cancelled__auctionRef",
  cancelled__blockNumber = "cancelled__blockNumber",
  cancelled__blockTimestamp = "cancelled__blockTimestamp",
  Cancelled__date = "cancelled__date",
  Cancelled__id = "cancelled__id",
  cancelled__transactionHash = "cancelled__transactionHash",
  Capacity = "capacity",
  capacityInitial = "capacityInitial",
  Chain = "chain",
  Conclusion = "conclusion",
  Created = "created",
  createdBlockNumber = "createdBlockNumber",
  createdBlockTimestamp = "createdBlockTimestamp",
  createdDate = "createdDate",
  createdTransactionHash = "createdTransactionHash",
  created__blockNumber = "created__blockNumber",
  created__blockTimestamp = "created__blockTimestamp",
  Created__date = "created__date",
  Created__id = "created__id",
  created__infoHash = "created__infoHash",
  created__transactionHash = "created__transactionHash",
  Curated = "curated",
  curated__blockNumber = "curated__blockNumber",
  curated__blockTimestamp = "curated__blockTimestamp",
  Curated__curator = "curated__curator",
  Curated__date = "curated__date",
  Curated__id = "curated__id",
  curated__transactionHash = "curated__transactionHash",
  Curator = "curator",
  curatorApproved = "curatorApproved",
  curatorFee = "curatorFee",
  derivativeType = "derivativeType",
  encryptedMarginalPrice = "encryptedMarginalPrice",
  encryptedMarginalPrice__hasPartialFill = "encryptedMarginalPrice__hasPartialFill",
  encryptedMarginalPrice__id = "encryptedMarginalPrice__id",
  encryptedMarginalPrice__marginalPrice = "encryptedMarginalPrice__marginalPrice",
  encryptedMarginalPrice__minBidSize = "encryptedMarginalPrice__minBidSize",
  encryptedMarginalPrice__minFilled = "encryptedMarginalPrice__minFilled",
  encryptedMarginalPrice__minPrice = "encryptedMarginalPrice__minPrice",
  encryptedMarginalPrice__partialBidId = "encryptedMarginalPrice__partialBidId",
  encryptedMarginalPrice__settlementSuccessful = "encryptedMarginalPrice__settlementSuccessful",
  encryptedMarginalPrice__status = "encryptedMarginalPrice__status",
  Id = "id",
  lastUpdatedBlockNumber = "lastUpdatedBlockNumber",
  lastUpdatedBlockTimestamp = "lastUpdatedBlockTimestamp",
  lastUpdatedDate = "lastUpdatedDate",
  lastUpdatedTransactionHash = "lastUpdatedTransactionHash",
  linearVesting = "linearVesting",
  linearVesting__expiryDate = "linearVesting__expiryDate",
  linearVesting__expiryTimestamp = "linearVesting__expiryTimestamp",
  linearVesting__id = "linearVesting__id",
  linearVesting__startDate = "linearVesting__startDate",
  linearVesting__startTimestamp = "linearVesting__startTimestamp",
  lotId = "lotId",
  maxBidId = "maxBidId",
  protocolFee = "protocolFee",
  Purchased = "purchased",
  quoteToken = "quoteToken",
  quoteToken__address = "quoteToken__address",
  quoteToken__decimals = "quoteToken__decimals",
  quoteToken__id = "quoteToken__id",
  quoteToken__name = "quoteToken__name",
  quoteToken__symbol = "quoteToken__symbol",
  quoteToken__totalSupply = "quoteToken__totalSupply",
  referrerFee = "referrerFee",
  Seller = "seller",
  Settled = "settled",
  settled__blockNumber = "settled__blockNumber",
  settled__blockTimestamp = "settled__blockTimestamp",
  Settled__date = "settled__date",
  Settled__id = "settled__id",
  settled__transactionHash = "settled__transactionHash",
  Sold = "sold",
  Start = "start",
  wrapDerivative = "wrapDerivative",
}

export type BatchAuctionSettled = {
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  date: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lot: BatchAuctionLot;
  transactionHash: Scalars["Bytes"]["output"];
};

export type BatchAuctionSettled_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BatchAuctionSettled_Filter>>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  date_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_gt?: InputMaybe<Scalars["String"]["input"]>;
  date_gte?: InputMaybe<Scalars["String"]["input"]>;
  date_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_lt?: InputMaybe<Scalars["String"]["input"]>;
  date_lte?: InputMaybe<Scalars["String"]["input"]>;
  date_not?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  id_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_gt?: InputMaybe<Scalars["String"]["input"]>;
  id_gte?: InputMaybe<Scalars["String"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_lt?: InputMaybe<Scalars["String"]["input"]>;
  id_lte?: InputMaybe<Scalars["String"]["input"]>;
  id_not?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot?: InputMaybe<Scalars["String"]["input"]>;
  lot_?: InputMaybe<BatchAuctionLot_Filter>;
  lot_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_gt?: InputMaybe<Scalars["String"]["input"]>;
  lot_gte?: InputMaybe<Scalars["String"]["input"]>;
  lot_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_lt?: InputMaybe<Scalars["String"]["input"]>;
  lot_lte?: InputMaybe<Scalars["String"]["input"]>;
  lot_not?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<BatchAuctionSettled_Filter>>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum BatchAuctionSettled_OrderBy {
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  Date = "date",
  Id = "id",
  Lot = "lot",
  lot__auctionHouse = "lot__auctionHouse",
  lot__auctionType = "lot__auctionType",
  Lot__callbacks = "lot__callbacks",
  Lot__capacity = "lot__capacity",
  lot__capacityInitial = "lot__capacityInitial",
  Lot__chain = "lot__chain",
  Lot__conclusion = "lot__conclusion",
  lot__createdBlockNumber = "lot__createdBlockNumber",
  lot__createdBlockTimestamp = "lot__createdBlockTimestamp",
  lot__createdDate = "lot__createdDate",
  lot__createdTransactionHash = "lot__createdTransactionHash",
  Lot__curator = "lot__curator",
  lot__curatorApproved = "lot__curatorApproved",
  lot__curatorFee = "lot__curatorFee",
  lot__derivativeType = "lot__derivativeType",
  Lot__id = "lot__id",
  lot__lastUpdatedBlockNumber = "lot__lastUpdatedBlockNumber",
  lot__lastUpdatedBlockTimestamp = "lot__lastUpdatedBlockTimestamp",
  lot__lastUpdatedDate = "lot__lastUpdatedDate",
  lot__lastUpdatedTransactionHash = "lot__lastUpdatedTransactionHash",
  lot__lotId = "lot__lotId",
  lot__maxBidId = "lot__maxBidId",
  lot__protocolFee = "lot__protocolFee",
  Lot__purchased = "lot__purchased",
  lot__referrerFee = "lot__referrerFee",
  Lot__seller = "lot__seller",
  Lot__sold = "lot__sold",
  Lot__start = "lot__start",
  lot__wrapDerivative = "lot__wrapDerivative",
  transactionHash = "transactionHash",
}

export type BatchBid = {
  amountIn: Scalars["BigDecimal"]["output"];
  amountOut?: Maybe<Scalars["BigDecimal"]["output"]>;
  bidId: Scalars["BigInt"]["output"];
  bidder: Scalars["Bytes"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  claimed?: Maybe<BatchBidClaimed>;
  date: Scalars["String"]["output"];
  decrypted?: Maybe<BatchBidDecrypted>;
  id: Scalars["String"]["output"];
  lot: BatchAuctionLot;
  outcome?: Maybe<Scalars["String"]["output"]>;
  rawAmountIn: Scalars["BigInt"]["output"];
  rawAmountOut?: Maybe<Scalars["BigInt"]["output"]>;
  rawMarginalPrice?: Maybe<Scalars["BigInt"]["output"]>;
  rawSubmittedPrice?: Maybe<Scalars["BigInt"]["output"]>;
  referrer?: Maybe<Scalars["Bytes"]["output"]>;
  refunded?: Maybe<BatchBidRefunded>;
  remainingCapacity?: Maybe<Scalars["BigDecimal"]["output"]>;
  settledAmountIn?: Maybe<Scalars["BigDecimal"]["output"]>;
  settledAmountInRefunded?: Maybe<Scalars["BigDecimal"]["output"]>;
  settledAmountOut?: Maybe<Scalars["BigDecimal"]["output"]>;
  status: Scalars["String"]["output"];
  submittedPrice?: Maybe<Scalars["BigDecimal"]["output"]>;
  transactionHash: Scalars["Bytes"]["output"];
};

export type BatchBidClaimed = {
  bid: BatchBid;
  bidder: Scalars["Bytes"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  date: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lot: BatchAuctionLot;
  transactionHash: Scalars["Bytes"]["output"];
};

export type BatchBidClaimed_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BatchBidClaimed_Filter>>>;
  bid?: InputMaybe<Scalars["String"]["input"]>;
  bid_?: InputMaybe<BatchBid_Filter>;
  bid_contains?: InputMaybe<Scalars["String"]["input"]>;
  bid_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bid_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  bid_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bid_gt?: InputMaybe<Scalars["String"]["input"]>;
  bid_gte?: InputMaybe<Scalars["String"]["input"]>;
  bid_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  bid_lt?: InputMaybe<Scalars["String"]["input"]>;
  bid_lte?: InputMaybe<Scalars["String"]["input"]>;
  bid_not?: InputMaybe<Scalars["String"]["input"]>;
  bid_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  bid_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bid_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  bid_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bid_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  bid_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  bid_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bid_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  bid_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bidder?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  bidder_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  date_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_gt?: InputMaybe<Scalars["String"]["input"]>;
  date_gte?: InputMaybe<Scalars["String"]["input"]>;
  date_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_lt?: InputMaybe<Scalars["String"]["input"]>;
  date_lte?: InputMaybe<Scalars["String"]["input"]>;
  date_not?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  id_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_gt?: InputMaybe<Scalars["String"]["input"]>;
  id_gte?: InputMaybe<Scalars["String"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_lt?: InputMaybe<Scalars["String"]["input"]>;
  id_lte?: InputMaybe<Scalars["String"]["input"]>;
  id_not?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot?: InputMaybe<Scalars["String"]["input"]>;
  lot_?: InputMaybe<BatchAuctionLot_Filter>;
  lot_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_gt?: InputMaybe<Scalars["String"]["input"]>;
  lot_gte?: InputMaybe<Scalars["String"]["input"]>;
  lot_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_lt?: InputMaybe<Scalars["String"]["input"]>;
  lot_lte?: InputMaybe<Scalars["String"]["input"]>;
  lot_not?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<BatchBidClaimed_Filter>>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum BatchBidClaimed_OrderBy {
  Bid = "bid",
  bid__amountIn = "bid__amountIn",
  bid__amountOut = "bid__amountOut",
  bid__bidId = "bid__bidId",
  Bid__bidder = "bid__bidder",
  bid__blockNumber = "bid__blockNumber",
  bid__blockTimestamp = "bid__blockTimestamp",
  Bid__date = "bid__date",
  Bid__id = "bid__id",
  Bid__outcome = "bid__outcome",
  bid__rawAmountIn = "bid__rawAmountIn",
  bid__rawAmountOut = "bid__rawAmountOut",
  bid__rawMarginalPrice = "bid__rawMarginalPrice",
  bid__rawSubmittedPrice = "bid__rawSubmittedPrice",
  Bid__referrer = "bid__referrer",
  bid__remainingCapacity = "bid__remainingCapacity",
  bid__settledAmountIn = "bid__settledAmountIn",
  bid__settledAmountInRefunded = "bid__settledAmountInRefunded",
  bid__settledAmountOut = "bid__settledAmountOut",
  Bid__status = "bid__status",
  bid__submittedPrice = "bid__submittedPrice",
  bid__transactionHash = "bid__transactionHash",
  Bidder = "bidder",
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  Date = "date",
  Id = "id",
  Lot = "lot",
  lot__auctionHouse = "lot__auctionHouse",
  lot__auctionType = "lot__auctionType",
  Lot__callbacks = "lot__callbacks",
  Lot__capacity = "lot__capacity",
  lot__capacityInitial = "lot__capacityInitial",
  Lot__chain = "lot__chain",
  Lot__conclusion = "lot__conclusion",
  lot__createdBlockNumber = "lot__createdBlockNumber",
  lot__createdBlockTimestamp = "lot__createdBlockTimestamp",
  lot__createdDate = "lot__createdDate",
  lot__createdTransactionHash = "lot__createdTransactionHash",
  Lot__curator = "lot__curator",
  lot__curatorApproved = "lot__curatorApproved",
  lot__curatorFee = "lot__curatorFee",
  lot__derivativeType = "lot__derivativeType",
  Lot__id = "lot__id",
  lot__lastUpdatedBlockNumber = "lot__lastUpdatedBlockNumber",
  lot__lastUpdatedBlockTimestamp = "lot__lastUpdatedBlockTimestamp",
  lot__lastUpdatedDate = "lot__lastUpdatedDate",
  lot__lastUpdatedTransactionHash = "lot__lastUpdatedTransactionHash",
  lot__lotId = "lot__lotId",
  lot__maxBidId = "lot__maxBidId",
  lot__protocolFee = "lot__protocolFee",
  Lot__purchased = "lot__purchased",
  lot__referrerFee = "lot__referrerFee",
  Lot__seller = "lot__seller",
  Lot__sold = "lot__sold",
  Lot__start = "lot__start",
  lot__wrapDerivative = "lot__wrapDerivative",
  transactionHash = "transactionHash",
}

export type BatchBidDecrypted = {
  amountIn: Scalars["BigDecimal"]["output"];
  amountOut?: Maybe<Scalars["BigDecimal"]["output"]>;
  bid: BatchBid;
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  date: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lot: BatchAuctionLot;
  transactionHash: Scalars["Bytes"]["output"];
};

export type BatchBidDecrypted_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amountIn?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountIn_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountIn_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountIn_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amountIn_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountIn_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountIn_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountIn_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amountOut?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountOut_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountOut_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountOut_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amountOut_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountOut_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountOut_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountOut_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<BatchBidDecrypted_Filter>>>;
  bid?: InputMaybe<Scalars["String"]["input"]>;
  bid_?: InputMaybe<BatchBid_Filter>;
  bid_contains?: InputMaybe<Scalars["String"]["input"]>;
  bid_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bid_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  bid_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bid_gt?: InputMaybe<Scalars["String"]["input"]>;
  bid_gte?: InputMaybe<Scalars["String"]["input"]>;
  bid_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  bid_lt?: InputMaybe<Scalars["String"]["input"]>;
  bid_lte?: InputMaybe<Scalars["String"]["input"]>;
  bid_not?: InputMaybe<Scalars["String"]["input"]>;
  bid_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  bid_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bid_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  bid_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bid_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  bid_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  bid_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bid_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  bid_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  date_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_gt?: InputMaybe<Scalars["String"]["input"]>;
  date_gte?: InputMaybe<Scalars["String"]["input"]>;
  date_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_lt?: InputMaybe<Scalars["String"]["input"]>;
  date_lte?: InputMaybe<Scalars["String"]["input"]>;
  date_not?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  id_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_gt?: InputMaybe<Scalars["String"]["input"]>;
  id_gte?: InputMaybe<Scalars["String"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_lt?: InputMaybe<Scalars["String"]["input"]>;
  id_lte?: InputMaybe<Scalars["String"]["input"]>;
  id_not?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot?: InputMaybe<Scalars["String"]["input"]>;
  lot_?: InputMaybe<BatchAuctionLot_Filter>;
  lot_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_gt?: InputMaybe<Scalars["String"]["input"]>;
  lot_gte?: InputMaybe<Scalars["String"]["input"]>;
  lot_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_lt?: InputMaybe<Scalars["String"]["input"]>;
  lot_lte?: InputMaybe<Scalars["String"]["input"]>;
  lot_not?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<BatchBidDecrypted_Filter>>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum BatchBidDecrypted_OrderBy {
  amountIn = "amountIn",
  amountOut = "amountOut",
  Bid = "bid",
  bid__amountIn = "bid__amountIn",
  bid__amountOut = "bid__amountOut",
  bid__bidId = "bid__bidId",
  Bid__bidder = "bid__bidder",
  bid__blockNumber = "bid__blockNumber",
  bid__blockTimestamp = "bid__blockTimestamp",
  Bid__date = "bid__date",
  Bid__id = "bid__id",
  Bid__outcome = "bid__outcome",
  bid__rawAmountIn = "bid__rawAmountIn",
  bid__rawAmountOut = "bid__rawAmountOut",
  bid__rawMarginalPrice = "bid__rawMarginalPrice",
  bid__rawSubmittedPrice = "bid__rawSubmittedPrice",
  Bid__referrer = "bid__referrer",
  bid__remainingCapacity = "bid__remainingCapacity",
  bid__settledAmountIn = "bid__settledAmountIn",
  bid__settledAmountInRefunded = "bid__settledAmountInRefunded",
  bid__settledAmountOut = "bid__settledAmountOut",
  Bid__status = "bid__status",
  bid__submittedPrice = "bid__submittedPrice",
  bid__transactionHash = "bid__transactionHash",
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  Date = "date",
  Id = "id",
  Lot = "lot",
  lot__auctionHouse = "lot__auctionHouse",
  lot__auctionType = "lot__auctionType",
  Lot__callbacks = "lot__callbacks",
  Lot__capacity = "lot__capacity",
  lot__capacityInitial = "lot__capacityInitial",
  Lot__chain = "lot__chain",
  Lot__conclusion = "lot__conclusion",
  lot__createdBlockNumber = "lot__createdBlockNumber",
  lot__createdBlockTimestamp = "lot__createdBlockTimestamp",
  lot__createdDate = "lot__createdDate",
  lot__createdTransactionHash = "lot__createdTransactionHash",
  Lot__curator = "lot__curator",
  lot__curatorApproved = "lot__curatorApproved",
  lot__curatorFee = "lot__curatorFee",
  lot__derivativeType = "lot__derivativeType",
  Lot__id = "lot__id",
  lot__lastUpdatedBlockNumber = "lot__lastUpdatedBlockNumber",
  lot__lastUpdatedBlockTimestamp = "lot__lastUpdatedBlockTimestamp",
  lot__lastUpdatedDate = "lot__lastUpdatedDate",
  lot__lastUpdatedTransactionHash = "lot__lastUpdatedTransactionHash",
  lot__lotId = "lot__lotId",
  lot__maxBidId = "lot__maxBidId",
  lot__protocolFee = "lot__protocolFee",
  Lot__purchased = "lot__purchased",
  lot__referrerFee = "lot__referrerFee",
  Lot__seller = "lot__seller",
  Lot__sold = "lot__sold",
  Lot__start = "lot__start",
  lot__wrapDerivative = "lot__wrapDerivative",
  transactionHash = "transactionHash",
}

export type BatchBidRefunded = {
  bid: BatchBid;
  bidder: Scalars["Bytes"]["output"];
  blockNumber: Scalars["BigInt"]["output"];
  blockTimestamp: Scalars["BigInt"]["output"];
  date: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lot: BatchAuctionLot;
  transactionHash: Scalars["Bytes"]["output"];
};

export type BatchBidRefunded_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BatchBidRefunded_Filter>>>;
  bid?: InputMaybe<Scalars["String"]["input"]>;
  bid_?: InputMaybe<BatchBid_Filter>;
  bid_contains?: InputMaybe<Scalars["String"]["input"]>;
  bid_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bid_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  bid_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bid_gt?: InputMaybe<Scalars["String"]["input"]>;
  bid_gte?: InputMaybe<Scalars["String"]["input"]>;
  bid_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  bid_lt?: InputMaybe<Scalars["String"]["input"]>;
  bid_lte?: InputMaybe<Scalars["String"]["input"]>;
  bid_not?: InputMaybe<Scalars["String"]["input"]>;
  bid_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  bid_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bid_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  bid_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bid_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  bid_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  bid_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bid_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  bid_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  bidder?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  bidder_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  date_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_gt?: InputMaybe<Scalars["String"]["input"]>;
  date_gte?: InputMaybe<Scalars["String"]["input"]>;
  date_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_lt?: InputMaybe<Scalars["String"]["input"]>;
  date_lte?: InputMaybe<Scalars["String"]["input"]>;
  date_not?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  id_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_gt?: InputMaybe<Scalars["String"]["input"]>;
  id_gte?: InputMaybe<Scalars["String"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_lt?: InputMaybe<Scalars["String"]["input"]>;
  id_lte?: InputMaybe<Scalars["String"]["input"]>;
  id_not?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot?: InputMaybe<Scalars["String"]["input"]>;
  lot_?: InputMaybe<BatchAuctionLot_Filter>;
  lot_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_gt?: InputMaybe<Scalars["String"]["input"]>;
  lot_gte?: InputMaybe<Scalars["String"]["input"]>;
  lot_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_lt?: InputMaybe<Scalars["String"]["input"]>;
  lot_lte?: InputMaybe<Scalars["String"]["input"]>;
  lot_not?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<BatchBidRefunded_Filter>>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum BatchBidRefunded_OrderBy {
  Bid = "bid",
  bid__amountIn = "bid__amountIn",
  bid__amountOut = "bid__amountOut",
  bid__bidId = "bid__bidId",
  Bid__bidder = "bid__bidder",
  bid__blockNumber = "bid__blockNumber",
  bid__blockTimestamp = "bid__blockTimestamp",
  Bid__date = "bid__date",
  Bid__id = "bid__id",
  Bid__outcome = "bid__outcome",
  bid__rawAmountIn = "bid__rawAmountIn",
  bid__rawAmountOut = "bid__rawAmountOut",
  bid__rawMarginalPrice = "bid__rawMarginalPrice",
  bid__rawSubmittedPrice = "bid__rawSubmittedPrice",
  Bid__referrer = "bid__referrer",
  bid__remainingCapacity = "bid__remainingCapacity",
  bid__settledAmountIn = "bid__settledAmountIn",
  bid__settledAmountInRefunded = "bid__settledAmountInRefunded",
  bid__settledAmountOut = "bid__settledAmountOut",
  Bid__status = "bid__status",
  bid__submittedPrice = "bid__submittedPrice",
  bid__transactionHash = "bid__transactionHash",
  Bidder = "bidder",
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  Date = "date",
  Id = "id",
  Lot = "lot",
  lot__auctionHouse = "lot__auctionHouse",
  lot__auctionType = "lot__auctionType",
  Lot__callbacks = "lot__callbacks",
  Lot__capacity = "lot__capacity",
  lot__capacityInitial = "lot__capacityInitial",
  Lot__chain = "lot__chain",
  Lot__conclusion = "lot__conclusion",
  lot__createdBlockNumber = "lot__createdBlockNumber",
  lot__createdBlockTimestamp = "lot__createdBlockTimestamp",
  lot__createdDate = "lot__createdDate",
  lot__createdTransactionHash = "lot__createdTransactionHash",
  Lot__curator = "lot__curator",
  lot__curatorApproved = "lot__curatorApproved",
  lot__curatorFee = "lot__curatorFee",
  lot__derivativeType = "lot__derivativeType",
  Lot__id = "lot__id",
  lot__lastUpdatedBlockNumber = "lot__lastUpdatedBlockNumber",
  lot__lastUpdatedBlockTimestamp = "lot__lastUpdatedBlockTimestamp",
  lot__lastUpdatedDate = "lot__lastUpdatedDate",
  lot__lastUpdatedTransactionHash = "lot__lastUpdatedTransactionHash",
  lot__lotId = "lot__lotId",
  lot__maxBidId = "lot__maxBidId",
  lot__protocolFee = "lot__protocolFee",
  Lot__purchased = "lot__purchased",
  lot__referrerFee = "lot__referrerFee",
  Lot__seller = "lot__seller",
  Lot__sold = "lot__sold",
  Lot__start = "lot__start",
  lot__wrapDerivative = "lot__wrapDerivative",
  transactionHash = "transactionHash",
}

export type BatchBid_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amountIn?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountIn_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountIn_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountIn_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amountIn_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountIn_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountIn_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountIn_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amountOut?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountOut_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountOut_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountOut_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  amountOut_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountOut_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountOut_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  amountOut_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<BatchBid_Filter>>>;
  bidId?: InputMaybe<Scalars["BigInt"]["input"]>;
  bidId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  bidId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  bidId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  bidId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  bidId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  bidId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  bidId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  bidder?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  bidder_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  bidder_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  blockNumber?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockNumber_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockNumber_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  blockTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  claimed_?: InputMaybe<BatchBidClaimed_Filter>;
  date?: InputMaybe<Scalars["String"]["input"]>;
  date_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_gt?: InputMaybe<Scalars["String"]["input"]>;
  date_gte?: InputMaybe<Scalars["String"]["input"]>;
  date_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_lt?: InputMaybe<Scalars["String"]["input"]>;
  date_lte?: InputMaybe<Scalars["String"]["input"]>;
  date_not?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  date_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  date_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  date_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  decrypted_?: InputMaybe<BatchBidDecrypted_Filter>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  id_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_gt?: InputMaybe<Scalars["String"]["input"]>;
  id_gte?: InputMaybe<Scalars["String"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_lt?: InputMaybe<Scalars["String"]["input"]>;
  id_lte?: InputMaybe<Scalars["String"]["input"]>;
  id_not?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot?: InputMaybe<Scalars["String"]["input"]>;
  lot_?: InputMaybe<BatchAuctionLot_Filter>;
  lot_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_gt?: InputMaybe<Scalars["String"]["input"]>;
  lot_gte?: InputMaybe<Scalars["String"]["input"]>;
  lot_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_lt?: InputMaybe<Scalars["String"]["input"]>;
  lot_lte?: InputMaybe<Scalars["String"]["input"]>;
  lot_not?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<BatchBid_Filter>>>;
  outcome?: InputMaybe<Scalars["String"]["input"]>;
  outcome_contains?: InputMaybe<Scalars["String"]["input"]>;
  outcome_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  outcome_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  outcome_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  outcome_gt?: InputMaybe<Scalars["String"]["input"]>;
  outcome_gte?: InputMaybe<Scalars["String"]["input"]>;
  outcome_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  outcome_lt?: InputMaybe<Scalars["String"]["input"]>;
  outcome_lte?: InputMaybe<Scalars["String"]["input"]>;
  outcome_not?: InputMaybe<Scalars["String"]["input"]>;
  outcome_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  outcome_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  outcome_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  outcome_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  outcome_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  outcome_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  outcome_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  outcome_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  outcome_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  rawAmountIn?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawAmountIn_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawAmountIn_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawAmountIn_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rawAmountIn_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawAmountIn_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawAmountIn_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawAmountIn_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rawAmountOut?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawAmountOut_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawAmountOut_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawAmountOut_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rawAmountOut_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawAmountOut_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawAmountOut_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawAmountOut_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rawMarginalPrice?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawMarginalPrice_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawMarginalPrice_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawMarginalPrice_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rawMarginalPrice_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawMarginalPrice_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawMarginalPrice_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawMarginalPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rawSubmittedPrice?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawSubmittedPrice_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawSubmittedPrice_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawSubmittedPrice_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  rawSubmittedPrice_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawSubmittedPrice_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawSubmittedPrice_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  rawSubmittedPrice_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  referrer?: InputMaybe<Scalars["Bytes"]["input"]>;
  referrer_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  referrer_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  referrer_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  referrer_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  referrer_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  referrer_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  referrer_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  referrer_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  referrer_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  refunded_?: InputMaybe<BatchBidRefunded_Filter>;
  remainingCapacity?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  remainingCapacity_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  remainingCapacity_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  remainingCapacity_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  remainingCapacity_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  remainingCapacity_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  remainingCapacity_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  remainingCapacity_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  settledAmountIn?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  settledAmountInRefunded?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  settledAmountInRefunded_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  settledAmountInRefunded_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  settledAmountInRefunded_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  settledAmountInRefunded_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  settledAmountInRefunded_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  settledAmountInRefunded_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  settledAmountInRefunded_not_in?: InputMaybe<
    Array<Scalars["BigDecimal"]["input"]>
  >;
  settledAmountIn_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  settledAmountIn_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  settledAmountIn_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  settledAmountIn_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  settledAmountIn_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  settledAmountIn_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  settledAmountIn_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  settledAmountOut?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  settledAmountOut_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  settledAmountOut_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  settledAmountOut_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  settledAmountOut_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  settledAmountOut_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  settledAmountOut_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  settledAmountOut_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  status_contains?: InputMaybe<Scalars["String"]["input"]>;
  status_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  status_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  status_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  status_gt?: InputMaybe<Scalars["String"]["input"]>;
  status_gte?: InputMaybe<Scalars["String"]["input"]>;
  status_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  status_lt?: InputMaybe<Scalars["String"]["input"]>;
  status_lte?: InputMaybe<Scalars["String"]["input"]>;
  status_not?: InputMaybe<Scalars["String"]["input"]>;
  status_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  status_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  status_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  status_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  status_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  status_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  status_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  status_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  status_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  submittedPrice?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  submittedPrice_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  submittedPrice_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  submittedPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  submittedPrice_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  submittedPrice_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  submittedPrice_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  submittedPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  transactionHash?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  transactionHash_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  transactionHash_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
};

export enum BatchBid_OrderBy {
  amountIn = "amountIn",
  amountOut = "amountOut",
  bidId = "bidId",
  Bidder = "bidder",
  blockNumber = "blockNumber",
  blockTimestamp = "blockTimestamp",
  Claimed = "claimed",
  Claimed__bidder = "claimed__bidder",
  claimed__blockNumber = "claimed__blockNumber",
  claimed__blockTimestamp = "claimed__blockTimestamp",
  Claimed__date = "claimed__date",
  Claimed__id = "claimed__id",
  claimed__transactionHash = "claimed__transactionHash",
  Date = "date",
  Decrypted = "decrypted",
  decrypted__amountIn = "decrypted__amountIn",
  decrypted__amountOut = "decrypted__amountOut",
  decrypted__blockNumber = "decrypted__blockNumber",
  decrypted__blockTimestamp = "decrypted__blockTimestamp",
  Decrypted__date = "decrypted__date",
  Decrypted__id = "decrypted__id",
  decrypted__transactionHash = "decrypted__transactionHash",
  Id = "id",
  Lot = "lot",
  lot__auctionHouse = "lot__auctionHouse",
  lot__auctionType = "lot__auctionType",
  Lot__callbacks = "lot__callbacks",
  Lot__capacity = "lot__capacity",
  lot__capacityInitial = "lot__capacityInitial",
  Lot__chain = "lot__chain",
  Lot__conclusion = "lot__conclusion",
  lot__createdBlockNumber = "lot__createdBlockNumber",
  lot__createdBlockTimestamp = "lot__createdBlockTimestamp",
  lot__createdDate = "lot__createdDate",
  lot__createdTransactionHash = "lot__createdTransactionHash",
  Lot__curator = "lot__curator",
  lot__curatorApproved = "lot__curatorApproved",
  lot__curatorFee = "lot__curatorFee",
  lot__derivativeType = "lot__derivativeType",
  Lot__id = "lot__id",
  lot__lastUpdatedBlockNumber = "lot__lastUpdatedBlockNumber",
  lot__lastUpdatedBlockTimestamp = "lot__lastUpdatedBlockTimestamp",
  lot__lastUpdatedDate = "lot__lastUpdatedDate",
  lot__lastUpdatedTransactionHash = "lot__lastUpdatedTransactionHash",
  lot__lotId = "lot__lotId",
  lot__maxBidId = "lot__maxBidId",
  lot__protocolFee = "lot__protocolFee",
  Lot__purchased = "lot__purchased",
  lot__referrerFee = "lot__referrerFee",
  Lot__seller = "lot__seller",
  Lot__sold = "lot__sold",
  Lot__start = "lot__start",
  lot__wrapDerivative = "lot__wrapDerivative",
  Outcome = "outcome",
  rawAmountIn = "rawAmountIn",
  rawAmountOut = "rawAmountOut",
  rawMarginalPrice = "rawMarginalPrice",
  rawSubmittedPrice = "rawSubmittedPrice",
  Referrer = "referrer",
  Refunded = "refunded",
  Refunded__bidder = "refunded__bidder",
  refunded__blockNumber = "refunded__blockNumber",
  refunded__blockTimestamp = "refunded__blockTimestamp",
  Refunded__date = "refunded__date",
  Refunded__id = "refunded__id",
  refunded__transactionHash = "refunded__transactionHash",
  remainingCapacity = "remainingCapacity",
  settledAmountIn = "settledAmountIn",
  settledAmountInRefunded = "settledAmountInRefunded",
  settledAmountOut = "settledAmountOut",
  Status = "status",
  submittedPrice = "submittedPrice",
  transactionHash = "transactionHash",
}

export type BatchEncryptedMarginalPriceLot = {
  hasPartialFill?: Maybe<Scalars["Boolean"]["output"]>;
  id: Scalars["String"]["output"];
  lot: BatchAuctionLot;
  marginalPrice?: Maybe<Scalars["BigDecimal"]["output"]>;
  minBidSize: Scalars["BigDecimal"]["output"];
  minFilled: Scalars["BigDecimal"]["output"];
  minPrice: Scalars["BigDecimal"]["output"];
  partialBidId?: Maybe<Scalars["BigInt"]["output"]>;
  settlementSuccessful: Scalars["Boolean"]["output"];
  status: Scalars["String"]["output"];
};

export type BatchEncryptedMarginalPriceLot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BatchEncryptedMarginalPriceLot_Filter>>>;
  hasPartialFill?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasPartialFill_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  hasPartialFill_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  hasPartialFill_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  id_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_gt?: InputMaybe<Scalars["String"]["input"]>;
  id_gte?: InputMaybe<Scalars["String"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_lt?: InputMaybe<Scalars["String"]["input"]>;
  id_lte?: InputMaybe<Scalars["String"]["input"]>;
  id_not?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot?: InputMaybe<Scalars["String"]["input"]>;
  lot_?: InputMaybe<BatchAuctionLot_Filter>;
  lot_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_gt?: InputMaybe<Scalars["String"]["input"]>;
  lot_gte?: InputMaybe<Scalars["String"]["input"]>;
  lot_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_lt?: InputMaybe<Scalars["String"]["input"]>;
  lot_lte?: InputMaybe<Scalars["String"]["input"]>;
  lot_not?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  marginalPrice?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  marginalPrice_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  marginalPrice_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  marginalPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  marginalPrice_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  marginalPrice_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  marginalPrice_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  marginalPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  minBidSize?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  minBidSize_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  minBidSize_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  minBidSize_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  minBidSize_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  minBidSize_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  minBidSize_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  minBidSize_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  minFilled?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  minFilled_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  minFilled_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  minFilled_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  minFilled_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  minFilled_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  minFilled_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  minFilled_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  minPrice?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  minPrice_gt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  minPrice_gte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  minPrice_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  minPrice_lt?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  minPrice_lte?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  minPrice_not?: InputMaybe<Scalars["BigDecimal"]["input"]>;
  minPrice_not_in?: InputMaybe<Array<Scalars["BigDecimal"]["input"]>>;
  or?: InputMaybe<Array<InputMaybe<BatchEncryptedMarginalPriceLot_Filter>>>;
  partialBidId?: InputMaybe<Scalars["BigInt"]["input"]>;
  partialBidId_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  partialBidId_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  partialBidId_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  partialBidId_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  partialBidId_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  partialBidId_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  partialBidId_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  settlementSuccessful?: InputMaybe<Scalars["Boolean"]["input"]>;
  settlementSuccessful_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  settlementSuccessful_not?: InputMaybe<Scalars["Boolean"]["input"]>;
  settlementSuccessful_not_in?: InputMaybe<Array<Scalars["Boolean"]["input"]>>;
  status?: InputMaybe<Scalars["String"]["input"]>;
  status_contains?: InputMaybe<Scalars["String"]["input"]>;
  status_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  status_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  status_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  status_gt?: InputMaybe<Scalars["String"]["input"]>;
  status_gte?: InputMaybe<Scalars["String"]["input"]>;
  status_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  status_lt?: InputMaybe<Scalars["String"]["input"]>;
  status_lte?: InputMaybe<Scalars["String"]["input"]>;
  status_not?: InputMaybe<Scalars["String"]["input"]>;
  status_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  status_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  status_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  status_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  status_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  status_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  status_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  status_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  status_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
};

export enum BatchEncryptedMarginalPriceLot_OrderBy {
  hasPartialFill = "hasPartialFill",
  Id = "id",
  Lot = "lot",
  lot__auctionHouse = "lot__auctionHouse",
  lot__auctionType = "lot__auctionType",
  Lot__callbacks = "lot__callbacks",
  Lot__capacity = "lot__capacity",
  lot__capacityInitial = "lot__capacityInitial",
  Lot__chain = "lot__chain",
  Lot__conclusion = "lot__conclusion",
  lot__createdBlockNumber = "lot__createdBlockNumber",
  lot__createdBlockTimestamp = "lot__createdBlockTimestamp",
  lot__createdDate = "lot__createdDate",
  lot__createdTransactionHash = "lot__createdTransactionHash",
  Lot__curator = "lot__curator",
  lot__curatorApproved = "lot__curatorApproved",
  lot__curatorFee = "lot__curatorFee",
  lot__derivativeType = "lot__derivativeType",
  Lot__id = "lot__id",
  lot__lastUpdatedBlockNumber = "lot__lastUpdatedBlockNumber",
  lot__lastUpdatedBlockTimestamp = "lot__lastUpdatedBlockTimestamp",
  lot__lastUpdatedDate = "lot__lastUpdatedDate",
  lot__lastUpdatedTransactionHash = "lot__lastUpdatedTransactionHash",
  lot__lotId = "lot__lotId",
  lot__maxBidId = "lot__maxBidId",
  lot__protocolFee = "lot__protocolFee",
  Lot__purchased = "lot__purchased",
  lot__referrerFee = "lot__referrerFee",
  Lot__seller = "lot__seller",
  Lot__sold = "lot__sold",
  Lot__start = "lot__start",
  lot__wrapDerivative = "lot__wrapDerivative",
  marginalPrice = "marginalPrice",
  minBidSize = "minBidSize",
  minFilled = "minFilled",
  minPrice = "minPrice",
  partialBidId = "partialBidId",
  settlementSuccessful = "settlementSuccessful",
  Status = "status",
}

export type BatchLinearVestingLot = {
  expiryDate: Scalars["String"]["output"];
  expiryTimestamp: Scalars["BigInt"]["output"];
  id: Scalars["String"]["output"];
  lot: BatchAuctionLot;
  startDate: Scalars["String"]["output"];
  startTimestamp: Scalars["BigInt"]["output"];
};

export type BatchLinearVestingLot_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BatchLinearVestingLot_Filter>>>;
  expiryDate?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_contains?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_gt?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_gte?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  expiryDate_lt?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_lte?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_not?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  expiryDate_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  expiryDate_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  expiryTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiryTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiryTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiryTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  expiryTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiryTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiryTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  expiryTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  id_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_gt?: InputMaybe<Scalars["String"]["input"]>;
  id_gte?: InputMaybe<Scalars["String"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_lt?: InputMaybe<Scalars["String"]["input"]>;
  id_lte?: InputMaybe<Scalars["String"]["input"]>;
  id_not?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  id_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  id_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  id_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot?: InputMaybe<Scalars["String"]["input"]>;
  lot_?: InputMaybe<BatchAuctionLot_Filter>;
  lot_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_gt?: InputMaybe<Scalars["String"]["input"]>;
  lot_gte?: InputMaybe<Scalars["String"]["input"]>;
  lot_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_lt?: InputMaybe<Scalars["String"]["input"]>;
  lot_lte?: InputMaybe<Scalars["String"]["input"]>;
  lot_not?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lot_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  lot_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<BatchLinearVestingLot_Filter>>>;
  startDate?: InputMaybe<Scalars["String"]["input"]>;
  startDate_contains?: InputMaybe<Scalars["String"]["input"]>;
  startDate_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  startDate_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  startDate_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  startDate_gt?: InputMaybe<Scalars["String"]["input"]>;
  startDate_gte?: InputMaybe<Scalars["String"]["input"]>;
  startDate_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startDate_lt?: InputMaybe<Scalars["String"]["input"]>;
  startDate_lte?: InputMaybe<Scalars["String"]["input"]>;
  startDate_not?: InputMaybe<Scalars["String"]["input"]>;
  startDate_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  startDate_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  startDate_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  startDate_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  startDate_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startDate_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  startDate_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  startDate_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  startDate_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  startTimestamp?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  startTimestamp_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  startTimestamp_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export enum BatchLinearVestingLot_OrderBy {
  expiryDate = "expiryDate",
  expiryTimestamp = "expiryTimestamp",
  Id = "id",
  Lot = "lot",
  lot__auctionHouse = "lot__auctionHouse",
  lot__auctionType = "lot__auctionType",
  Lot__callbacks = "lot__callbacks",
  Lot__capacity = "lot__capacity",
  lot__capacityInitial = "lot__capacityInitial",
  Lot__chain = "lot__chain",
  Lot__conclusion = "lot__conclusion",
  lot__createdBlockNumber = "lot__createdBlockNumber",
  lot__createdBlockTimestamp = "lot__createdBlockTimestamp",
  lot__createdDate = "lot__createdDate",
  lot__createdTransactionHash = "lot__createdTransactionHash",
  Lot__curator = "lot__curator",
  lot__curatorApproved = "lot__curatorApproved",
  lot__curatorFee = "lot__curatorFee",
  lot__derivativeType = "lot__derivativeType",
  Lot__id = "lot__id",
  lot__lastUpdatedBlockNumber = "lot__lastUpdatedBlockNumber",
  lot__lastUpdatedBlockTimestamp = "lot__lastUpdatedBlockTimestamp",
  lot__lastUpdatedDate = "lot__lastUpdatedDate",
  lot__lastUpdatedTransactionHash = "lot__lastUpdatedTransactionHash",
  lot__lotId = "lot__lotId",
  lot__maxBidId = "lot__maxBidId",
  lot__protocolFee = "lot__protocolFee",
  Lot__purchased = "lot__purchased",
  lot__referrerFee = "lot__referrerFee",
  Lot__seller = "lot__seller",
  Lot__sold = "lot__sold",
  Lot__start = "lot__start",
  lot__wrapDerivative = "lot__wrapDerivative",
  startDate = "startDate",
  startTimestamp = "startTimestamp",
}

export type BlockChangedFilter = {
  number_gte: Scalars["Int"]["input"];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars["Bytes"]["input"]>;
  number?: InputMaybe<Scalars["Int"]["input"]>;
  number_gte?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = "asc",
  Desc = "desc",
}

export type Query = {
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  atomicAuctionCancelled?: Maybe<AtomicAuctionCancelled>;
  atomicAuctionCancelleds: Array<AtomicAuctionCancelled>;
  atomicAuctionCreated?: Maybe<AtomicAuctionCreated>;
  atomicAuctionCreateds: Array<AtomicAuctionCreated>;
  atomicAuctionCurated?: Maybe<AtomicAuctionCurated>;
  atomicAuctionCurateds: Array<AtomicAuctionCurated>;
  atomicAuctionLot?: Maybe<AtomicAuctionLot>;
  atomicAuctionLots: Array<AtomicAuctionLot>;
  atomicFixedPriceSaleLot?: Maybe<AtomicFixedPriceSaleLot>;
  atomicFixedPriceSaleLots: Array<AtomicFixedPriceSaleLot>;
  atomicLinearVestingLot?: Maybe<AtomicLinearVestingLot>;
  atomicLinearVestingLots: Array<AtomicLinearVestingLot>;
  atomicPurchase?: Maybe<AtomicPurchase>;
  atomicPurchases: Array<AtomicPurchase>;
  auctionHouseModuleInstalled?: Maybe<AuctionHouseModuleInstalled>;
  auctionHouseModuleInstalleds: Array<AuctionHouseModuleInstalled>;
  auctionHouseModuleSunset?: Maybe<AuctionHouseModuleSunset>;
  auctionHouseModuleSunsets: Array<AuctionHouseModuleSunset>;
  auctionHouseOwnershipTransferred?: Maybe<AuctionHouseOwnershipTransferred>;
  auctionHouseOwnershipTransferreds: Array<AuctionHouseOwnershipTransferred>;
  batchAuctionAborted?: Maybe<BatchAuctionAborted>;
  batchAuctionAborteds: Array<BatchAuctionAborted>;
  batchAuctionCancelled?: Maybe<BatchAuctionCancelled>;
  batchAuctionCancelleds: Array<BatchAuctionCancelled>;
  batchAuctionCreated?: Maybe<BatchAuctionCreated>;
  batchAuctionCreateds: Array<BatchAuctionCreated>;
  batchAuctionCurated?: Maybe<BatchAuctionCurated>;
  batchAuctionCurateds: Array<BatchAuctionCurated>;
  batchAuctionLot?: Maybe<BatchAuctionLot>;
  batchAuctionLots: Array<BatchAuctionLot>;
  batchAuctionSettled?: Maybe<BatchAuctionSettled>;
  batchAuctionSettleds: Array<BatchAuctionSettled>;
  batchBid?: Maybe<BatchBid>;
  batchBidClaimed?: Maybe<BatchBidClaimed>;
  batchBidClaimeds: Array<BatchBidClaimed>;
  batchBidDecrypted?: Maybe<BatchBidDecrypted>;
  batchBidDecrypteds: Array<BatchBidDecrypted>;
  batchBidRefunded?: Maybe<BatchBidRefunded>;
  batchBidRefundeds: Array<BatchBidRefunded>;
  batchBids: Array<BatchBid>;
  batchEncryptedMarginalPriceLot?: Maybe<BatchEncryptedMarginalPriceLot>;
  batchEncryptedMarginalPriceLots: Array<BatchEncryptedMarginalPriceLot>;
  batchLinearVestingLot?: Maybe<BatchLinearVestingLot>;
  batchLinearVestingLots: Array<BatchLinearVestingLot>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryAtomicAuctionCancelledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAtomicAuctionCancelledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AtomicAuctionCancelled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AtomicAuctionCancelled_Filter>;
};

export type QueryAtomicAuctionCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAtomicAuctionCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AtomicAuctionCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AtomicAuctionCreated_Filter>;
};

export type QueryAtomicAuctionCuratedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAtomicAuctionCuratedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AtomicAuctionCurated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AtomicAuctionCurated_Filter>;
};

export type QueryAtomicAuctionLotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAtomicAuctionLotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AtomicAuctionLot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AtomicAuctionLot_Filter>;
};

export type QueryAtomicFixedPriceSaleLotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAtomicFixedPriceSaleLotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AtomicFixedPriceSaleLot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AtomicFixedPriceSaleLot_Filter>;
};

export type QueryAtomicLinearVestingLotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAtomicLinearVestingLotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AtomicLinearVestingLot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AtomicLinearVestingLot_Filter>;
};

export type QueryAtomicPurchaseArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAtomicPurchasesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AtomicPurchase_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AtomicPurchase_Filter>;
};

export type QueryAuctionHouseModuleInstalledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAuctionHouseModuleInstalledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuctionHouseModuleInstalled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuctionHouseModuleInstalled_Filter>;
};

export type QueryAuctionHouseModuleSunsetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAuctionHouseModuleSunsetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuctionHouseModuleSunset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuctionHouseModuleSunset_Filter>;
};

export type QueryAuctionHouseOwnershipTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryAuctionHouseOwnershipTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuctionHouseOwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuctionHouseOwnershipTransferred_Filter>;
};

export type QueryBatchAuctionAbortedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBatchAuctionAbortedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchAuctionAborted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchAuctionAborted_Filter>;
};

export type QueryBatchAuctionCancelledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBatchAuctionCancelledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchAuctionCancelled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchAuctionCancelled_Filter>;
};

export type QueryBatchAuctionCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBatchAuctionCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchAuctionCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchAuctionCreated_Filter>;
};

export type QueryBatchAuctionCuratedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBatchAuctionCuratedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchAuctionCurated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchAuctionCurated_Filter>;
};

export type QueryBatchAuctionLotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBatchAuctionLotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchAuctionLot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchAuctionLot_Filter>;
};

export type QueryBatchAuctionSettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBatchAuctionSettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchAuctionSettled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchAuctionSettled_Filter>;
};

export type QueryBatchBidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBatchBidClaimedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBatchBidClaimedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchBidClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchBidClaimed_Filter>;
};

export type QueryBatchBidDecryptedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBatchBidDecryptedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchBidDecrypted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchBidDecrypted_Filter>;
};

export type QueryBatchBidRefundedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBatchBidRefundedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchBidRefunded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchBidRefunded_Filter>;
};

export type QueryBatchBidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchBid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchBid_Filter>;
};

export type QueryBatchEncryptedMarginalPriceLotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBatchEncryptedMarginalPriceLotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchEncryptedMarginalPriceLot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchEncryptedMarginalPriceLot_Filter>;
};

export type QueryBatchLinearVestingLotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBatchLinearVestingLotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchLinearVestingLot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchLinearVestingLot_Filter>;
};

export type QueryTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type Subscription = {
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  atomicAuctionCancelled?: Maybe<AtomicAuctionCancelled>;
  atomicAuctionCancelleds: Array<AtomicAuctionCancelled>;
  atomicAuctionCreated?: Maybe<AtomicAuctionCreated>;
  atomicAuctionCreateds: Array<AtomicAuctionCreated>;
  atomicAuctionCurated?: Maybe<AtomicAuctionCurated>;
  atomicAuctionCurateds: Array<AtomicAuctionCurated>;
  atomicAuctionLot?: Maybe<AtomicAuctionLot>;
  atomicAuctionLots: Array<AtomicAuctionLot>;
  atomicFixedPriceSaleLot?: Maybe<AtomicFixedPriceSaleLot>;
  atomicFixedPriceSaleLots: Array<AtomicFixedPriceSaleLot>;
  atomicLinearVestingLot?: Maybe<AtomicLinearVestingLot>;
  atomicLinearVestingLots: Array<AtomicLinearVestingLot>;
  atomicPurchase?: Maybe<AtomicPurchase>;
  atomicPurchases: Array<AtomicPurchase>;
  auctionHouseModuleInstalled?: Maybe<AuctionHouseModuleInstalled>;
  auctionHouseModuleInstalleds: Array<AuctionHouseModuleInstalled>;
  auctionHouseModuleSunset?: Maybe<AuctionHouseModuleSunset>;
  auctionHouseModuleSunsets: Array<AuctionHouseModuleSunset>;
  auctionHouseOwnershipTransferred?: Maybe<AuctionHouseOwnershipTransferred>;
  auctionHouseOwnershipTransferreds: Array<AuctionHouseOwnershipTransferred>;
  batchAuctionAborted?: Maybe<BatchAuctionAborted>;
  batchAuctionAborteds: Array<BatchAuctionAborted>;
  batchAuctionCancelled?: Maybe<BatchAuctionCancelled>;
  batchAuctionCancelleds: Array<BatchAuctionCancelled>;
  batchAuctionCreated?: Maybe<BatchAuctionCreated>;
  batchAuctionCreateds: Array<BatchAuctionCreated>;
  batchAuctionCurated?: Maybe<BatchAuctionCurated>;
  batchAuctionCurateds: Array<BatchAuctionCurated>;
  batchAuctionLot?: Maybe<BatchAuctionLot>;
  batchAuctionLots: Array<BatchAuctionLot>;
  batchAuctionSettled?: Maybe<BatchAuctionSettled>;
  batchAuctionSettleds: Array<BatchAuctionSettled>;
  batchBid?: Maybe<BatchBid>;
  batchBidClaimed?: Maybe<BatchBidClaimed>;
  batchBidClaimeds: Array<BatchBidClaimed>;
  batchBidDecrypted?: Maybe<BatchBidDecrypted>;
  batchBidDecrypteds: Array<BatchBidDecrypted>;
  batchBidRefunded?: Maybe<BatchBidRefunded>;
  batchBidRefundeds: Array<BatchBidRefunded>;
  batchBids: Array<BatchBid>;
  batchEncryptedMarginalPriceLot?: Maybe<BatchEncryptedMarginalPriceLot>;
  batchEncryptedMarginalPriceLots: Array<BatchEncryptedMarginalPriceLot>;
  batchLinearVestingLot?: Maybe<BatchLinearVestingLot>;
  batchLinearVestingLots: Array<BatchLinearVestingLot>;
  token?: Maybe<Token>;
  tokens: Array<Token>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionAtomicAuctionCancelledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAtomicAuctionCancelledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AtomicAuctionCancelled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AtomicAuctionCancelled_Filter>;
};

export type SubscriptionAtomicAuctionCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAtomicAuctionCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AtomicAuctionCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AtomicAuctionCreated_Filter>;
};

export type SubscriptionAtomicAuctionCuratedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAtomicAuctionCuratedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AtomicAuctionCurated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AtomicAuctionCurated_Filter>;
};

export type SubscriptionAtomicAuctionLotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAtomicAuctionLotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AtomicAuctionLot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AtomicAuctionLot_Filter>;
};

export type SubscriptionAtomicFixedPriceSaleLotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAtomicFixedPriceSaleLotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AtomicFixedPriceSaleLot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AtomicFixedPriceSaleLot_Filter>;
};

export type SubscriptionAtomicLinearVestingLotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAtomicLinearVestingLotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AtomicLinearVestingLot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AtomicLinearVestingLot_Filter>;
};

export type SubscriptionAtomicPurchaseArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAtomicPurchasesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AtomicPurchase_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AtomicPurchase_Filter>;
};

export type SubscriptionAuctionHouseModuleInstalledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAuctionHouseModuleInstalledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuctionHouseModuleInstalled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuctionHouseModuleInstalled_Filter>;
};

export type SubscriptionAuctionHouseModuleSunsetArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAuctionHouseModuleSunsetsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuctionHouseModuleSunset_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuctionHouseModuleSunset_Filter>;
};

export type SubscriptionAuctionHouseOwnershipTransferredArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionAuctionHouseOwnershipTransferredsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<AuctionHouseOwnershipTransferred_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<AuctionHouseOwnershipTransferred_Filter>;
};

export type SubscriptionBatchAuctionAbortedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBatchAuctionAbortedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchAuctionAborted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchAuctionAborted_Filter>;
};

export type SubscriptionBatchAuctionCancelledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBatchAuctionCancelledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchAuctionCancelled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchAuctionCancelled_Filter>;
};

export type SubscriptionBatchAuctionCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBatchAuctionCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchAuctionCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchAuctionCreated_Filter>;
};

export type SubscriptionBatchAuctionCuratedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBatchAuctionCuratedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchAuctionCurated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchAuctionCurated_Filter>;
};

export type SubscriptionBatchAuctionLotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBatchAuctionLotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchAuctionLot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchAuctionLot_Filter>;
};

export type SubscriptionBatchAuctionSettledArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBatchAuctionSettledsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchAuctionSettled_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchAuctionSettled_Filter>;
};

export type SubscriptionBatchBidArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBatchBidClaimedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBatchBidClaimedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchBidClaimed_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchBidClaimed_Filter>;
};

export type SubscriptionBatchBidDecryptedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBatchBidDecryptedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchBidDecrypted_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchBidDecrypted_Filter>;
};

export type SubscriptionBatchBidRefundedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBatchBidRefundedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchBidRefunded_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchBidRefunded_Filter>;
};

export type SubscriptionBatchBidsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchBid_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchBid_Filter>;
};

export type SubscriptionBatchEncryptedMarginalPriceLotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBatchEncryptedMarginalPriceLotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchEncryptedMarginalPriceLot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchEncryptedMarginalPriceLot_Filter>;
};

export type SubscriptionBatchLinearVestingLotArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBatchLinearVestingLotsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<BatchLinearVestingLot_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BatchLinearVestingLot_Filter>;
};

export type SubscriptionTokenArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars["ID"]["input"];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokensArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Token_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Token_Filter>;
};

export type Token = {
  address: Scalars["Bytes"]["output"];
  decimals: Scalars["Int"]["output"];
  id: Scalars["Bytes"]["output"];
  name: Scalars["String"]["output"];
  symbol: Scalars["String"]["output"];
  totalSupply: Scalars["BigInt"]["output"];
};

export type Token_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  address?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  address_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  address_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  and?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  decimals?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_gt?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_gte?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  decimals_lt?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_lte?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_not?: InputMaybe<Scalars["Int"]["input"]>;
  decimals_not_in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  id?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_gte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  id_lt?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_lte?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_contains?: InputMaybe<Scalars["Bytes"]["input"]>;
  id_not_in?: InputMaybe<Array<Scalars["Bytes"]["input"]>>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  name_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_gt?: InputMaybe<Scalars["String"]["input"]>;
  name_gte?: InputMaybe<Scalars["String"]["input"]>;
  name_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_lt?: InputMaybe<Scalars["String"]["input"]>;
  name_lte?: InputMaybe<Scalars["String"]["input"]>;
  name_not?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  name_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  name_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  name_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Token_Filter>>>;
  symbol?: InputMaybe<Scalars["String"]["input"]>;
  symbol_contains?: InputMaybe<Scalars["String"]["input"]>;
  symbol_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_gt?: InputMaybe<Scalars["String"]["input"]>;
  symbol_gte?: InputMaybe<Scalars["String"]["input"]>;
  symbol_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  symbol_lt?: InputMaybe<Scalars["String"]["input"]>;
  symbol_lte?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_contains?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_contains_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_ends_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_ends_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  symbol_not_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_not_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  symbol_starts_with?: InputMaybe<Scalars["String"]["input"]>;
  symbol_starts_with_nocase?: InputMaybe<Scalars["String"]["input"]>;
  totalSupply?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_gt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_gte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
  totalSupply_lt?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_lte?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_not?: InputMaybe<Scalars["BigInt"]["input"]>;
  totalSupply_not_in?: InputMaybe<Array<Scalars["BigInt"]["input"]>>;
};

export enum Token_OrderBy {
  Address = "address",
  Decimals = "decimals",
  Id = "id",
  Name = "name",
  Symbol = "symbol",
  totalSupply = "totalSupply",
}

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars["Bytes"]["output"]>;
  /** The block number */
  number: Scalars["Int"]["output"];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars["Int"]["output"]>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars["String"]["output"];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars["Boolean"]["output"];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = "allow",
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = "deny",
}

export type AtomicCommonFieldsFragment = {
  id: string;
  chain: string;
  auctionHouse: string;
  lotId: string;
  createdBlockNumber: string;
  createdBlockTimestamp: string;
  createdDate: string;
  createdTransactionHash: string;
  capacityInitial: string;
  start: string;
  conclusion: string;
  auctionType: string;
  seller: string;
  derivativeType?: string | null;
  wrapDerivative: boolean;
  curator?: string | null;
  curatorApproved: boolean;
  curatorFee: string;
  protocolFee: string;
  referrerFee: string;
  capacity: string;
  sold: string;
  purchased: string;
  lastUpdatedBlockNumber: string;
  lastUpdatedBlockTimestamp: string;
  lastUpdatedDate: string;
  lastUpdatedTransactionHash: string;
  linearVesting?: {
    id: string;
    startDate: string;
    expiryDate: string;
    startTimestamp: string;
    expiryTimestamp: string;
  } | null;
  baseToken: {
    totalSupply: string;
    address: string;
    decimals: string;
    symbol: string;
    name: string;
  };
  quoteToken: {
    address: string;
    decimals: string;
    symbol: string;
    name: string;
  };
  created: { infoHash: string };
  curated?: { curator: string } | null;
};

export type BatchCommonFieldsFragment = {
  id: string;
  chain: string;
  auctionHouse: string;
  lotId: string;
  createdBlockNumber: string;
  createdBlockTimestamp: string;
  createdDate: string;
  createdTransactionHash: string;
  capacityInitial: string;
  start: string;
  conclusion: string;
  auctionType: string;
  seller: string;
  derivativeType?: string | null;
  wrapDerivative: boolean;
  curator?: string | null;
  curatorApproved: boolean;
  curatorFee: string;
  protocolFee: string;
  referrerFee: string;
  capacity: string;
  sold: string;
  purchased: string;
  lastUpdatedBlockNumber: string;
  lastUpdatedBlockTimestamp: string;
  lastUpdatedDate: string;
  lastUpdatedTransactionHash: string;
  linearVesting?: {
    id: string;
    startDate: string;
    expiryDate: string;
    startTimestamp: string;
    expiryTimestamp: string;
  } | null;
  baseToken: {
    totalSupply: string;
    address: string;
    decimals: string;
    symbol: string;
    name: string;
  };
  quoteToken: {
    address: string;
    decimals: string;
    symbol: string;
    name: string;
  };
  created: { infoHash: string };
  curated?: { curator: string } | null;
};

export type AtomicAuctionFieldsFragment = {
  capacityInQuote: boolean;
  purchases: Array<{
    amount: string;
    buyer: string;
    date: string;
    payout: string;
    transactionHash: string;
    referrer: string;
  }>;
  fixedPriceSale?: { maxPayout: string; price: string; id: string } | null;
};

export type BatchAuctionFieldsFragment = {
  maxBidId: string;
  bids: Array<{
    bidId: string;
    bidder: string;
    blockTimestamp: string;
    date: string;
    amountIn: string;
    rawAmountIn: string;
    rawAmountOut?: string | null;
    rawMarginalPrice?: string | null;
    rawSubmittedPrice?: string | null;
    submittedPrice?: string | null;
    settledAmountIn?: string | null;
    settledAmountInRefunded?: string | null;
    settledAmountOut?: string | null;
    status: string;
    outcome?: string | null;
    referrer?: string | null;
    claimed?: { id: string } | null;
  }>;
  bidsDecrypted: Array<{ id: string }>;
  bidsClaimed: Array<{ id: string }>;
  bidsRefunded: Array<{ id: string }>;
  encryptedMarginalPrice?: {
    id: string;
    status: string;
    settlementSuccessful: boolean;
    minPrice: string;
    minFilled: string;
    minBidSize: string;
    marginalPrice?: string | null;
    hasPartialFill?: boolean | null;
  } | null;
  settled?: { id: string } | null;
};

export type GetAuctionLotsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAuctionLotsQuery = {
  batchAuctionLots: Array<{
    id: string;
    chain: string;
    auctionHouse: string;
    lotId: string;
    createdBlockNumber: string;
    createdBlockTimestamp: string;
    createdDate: string;
    createdTransactionHash: string;
    capacityInitial: string;
    start: string;
    conclusion: string;
    auctionType: string;
    seller: string;
    derivativeType?: string | null;
    wrapDerivative: boolean;
    curator?: string | null;
    curatorApproved: boolean;
    curatorFee: string;
    protocolFee: string;
    referrerFee: string;
    capacity: string;
    sold: string;
    purchased: string;
    lastUpdatedBlockNumber: string;
    lastUpdatedBlockTimestamp: string;
    lastUpdatedDate: string;
    lastUpdatedTransactionHash: string;
    maxBidId: string;
    linearVesting?: {
      id: string;
      startDate: string;
      expiryDate: string;
      startTimestamp: string;
      expiryTimestamp: string;
    } | null;
    baseToken: {
      totalSupply: string;
      address: string;
      decimals: string;
      symbol: string;
      name: string;
    };
    quoteToken: {
      address: string;
      decimals: string;
      symbol: string;
      name: string;
    };
    created: { infoHash: string };
    curated?: { curator: string } | null;
    bids: Array<{
      bidId: string;
      bidder: string;
      blockTimestamp: string;
      date: string;
      amountIn: string;
      rawAmountIn: string;
      rawAmountOut?: string | null;
      rawMarginalPrice?: string | null;
      rawSubmittedPrice?: string | null;
      submittedPrice?: string | null;
      settledAmountIn?: string | null;
      settledAmountInRefunded?: string | null;
      settledAmountOut?: string | null;
      status: string;
      outcome?: string | null;
      referrer?: string | null;
      claimed?: { id: string } | null;
    }>;
    bidsDecrypted: Array<{ id: string }>;
    bidsClaimed: Array<{ id: string }>;
    bidsRefunded: Array<{ id: string }>;
    encryptedMarginalPrice?: {
      id: string;
      status: string;
      settlementSuccessful: boolean;
      minPrice: string;
      minFilled: string;
      minBidSize: string;
      marginalPrice?: string | null;
      hasPartialFill?: boolean | null;
    } | null;
    settled?: { id: string } | null;
  }>;
  atomicAuctionLots: Array<{
    id: string;
    chain: string;
    auctionHouse: string;
    lotId: string;
    createdBlockNumber: string;
    createdBlockTimestamp: string;
    createdDate: string;
    createdTransactionHash: string;
    capacityInitial: string;
    start: string;
    conclusion: string;
    auctionType: string;
    seller: string;
    derivativeType?: string | null;
    wrapDerivative: boolean;
    curator?: string | null;
    curatorApproved: boolean;
    curatorFee: string;
    protocolFee: string;
    referrerFee: string;
    capacity: string;
    sold: string;
    purchased: string;
    lastUpdatedBlockNumber: string;
    lastUpdatedBlockTimestamp: string;
    lastUpdatedDate: string;
    lastUpdatedTransactionHash: string;
    capacityInQuote: boolean;
    linearVesting?: {
      id: string;
      startDate: string;
      expiryDate: string;
      startTimestamp: string;
      expiryTimestamp: string;
    } | null;
    baseToken: {
      totalSupply: string;
      address: string;
      decimals: string;
      symbol: string;
      name: string;
    };
    quoteToken: {
      address: string;
      decimals: string;
      symbol: string;
      name: string;
    };
    created: { infoHash: string };
    curated?: { curator: string } | null;
    purchases: Array<{
      amount: string;
      buyer: string;
      date: string;
      payout: string;
      transactionHash: string;
      referrer: string;
    }>;
    fixedPriceSale?: { maxPayout: string; price: string; id: string } | null;
  }>;
};

export type GetAtomicAuctionLotQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetAtomicAuctionLotQuery = {
  atomicAuctionLot?: {
    id: string;
    chain: string;
    auctionHouse: string;
    lotId: string;
    createdBlockNumber: string;
    createdBlockTimestamp: string;
    createdDate: string;
    createdTransactionHash: string;
    capacityInitial: string;
    start: string;
    conclusion: string;
    auctionType: string;
    seller: string;
    derivativeType?: string | null;
    wrapDerivative: boolean;
    curator?: string | null;
    curatorApproved: boolean;
    curatorFee: string;
    protocolFee: string;
    referrerFee: string;
    capacity: string;
    sold: string;
    purchased: string;
    lastUpdatedBlockNumber: string;
    lastUpdatedBlockTimestamp: string;
    lastUpdatedDate: string;
    lastUpdatedTransactionHash: string;
    capacityInQuote: boolean;
    linearVesting?: {
      id: string;
      startDate: string;
      expiryDate: string;
      startTimestamp: string;
      expiryTimestamp: string;
    } | null;
    baseToken: {
      totalSupply: string;
      address: string;
      decimals: string;
      symbol: string;
      name: string;
    };
    quoteToken: {
      address: string;
      decimals: string;
      symbol: string;
      name: string;
    };
    created: { infoHash: string };
    curated?: { curator: string } | null;
    purchases: Array<{
      amount: string;
      buyer: string;
      date: string;
      payout: string;
      transactionHash: string;
      referrer: string;
    }>;
    fixedPriceSale?: { maxPayout: string; price: string; id: string } | null;
  } | null;
};

export type GetBatchAuctionLotQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetBatchAuctionLotQuery = {
  batchAuctionLot?: {
    id: string;
    chain: string;
    auctionHouse: string;
    lotId: string;
    createdBlockNumber: string;
    createdBlockTimestamp: string;
    createdDate: string;
    createdTransactionHash: string;
    capacityInitial: string;
    start: string;
    conclusion: string;
    auctionType: string;
    seller: string;
    derivativeType?: string | null;
    wrapDerivative: boolean;
    curator?: string | null;
    curatorApproved: boolean;
    curatorFee: string;
    protocolFee: string;
    referrerFee: string;
    capacity: string;
    sold: string;
    purchased: string;
    lastUpdatedBlockNumber: string;
    lastUpdatedBlockTimestamp: string;
    lastUpdatedDate: string;
    lastUpdatedTransactionHash: string;
    maxBidId: string;
    linearVesting?: {
      id: string;
      startDate: string;
      expiryDate: string;
      startTimestamp: string;
      expiryTimestamp: string;
    } | null;
    baseToken: {
      totalSupply: string;
      address: string;
      decimals: string;
      symbol: string;
      name: string;
    };
    quoteToken: {
      address: string;
      decimals: string;
      symbol: string;
      name: string;
    };
    created: { infoHash: string };
    curated?: { curator: string } | null;
    bids: Array<{
      bidId: string;
      bidder: string;
      blockTimestamp: string;
      date: string;
      amountIn: string;
      rawAmountIn: string;
      rawAmountOut?: string | null;
      rawMarginalPrice?: string | null;
      rawSubmittedPrice?: string | null;
      submittedPrice?: string | null;
      settledAmountIn?: string | null;
      settledAmountInRefunded?: string | null;
      settledAmountOut?: string | null;
      status: string;
      outcome?: string | null;
      referrer?: string | null;
      claimed?: { id: string } | null;
    }>;
    bidsDecrypted: Array<{ id: string }>;
    bidsClaimed: Array<{ id: string }>;
    bidsRefunded: Array<{ id: string }>;
    encryptedMarginalPrice?: {
      id: string;
      status: string;
      settlementSuccessful: boolean;
      minPrice: string;
      minFilled: string;
      minBidSize: string;
      marginalPrice?: string | null;
      hasPartialFill?: boolean | null;
    } | null;
    settled?: { id: string } | null;
  } | null;
};

export type GetInstalledModulesQueryVariables = Exact<{ [key: string]: never }>;

export type GetInstalledModulesQuery = {
  auctionHouseModuleInstalleds: Array<{
    keycode: string;
    address: string;
    auctionHouse: string;
  }>;
};

export const AtomicCommonFieldsFragmentDoc = `
    fragment AtomicCommonFields on AtomicAuctionLot {
  id
  chain
  auctionHouse
  lotId
  createdBlockNumber
  createdBlockTimestamp
  createdDate
  createdTransactionHash
  capacityInitial
  start
  conclusion
  auctionType
  seller
  derivativeType
  wrapDerivative
  curator
  curatorApproved
  curatorFee
  protocolFee
  referrerFee
  capacity
  sold
  purchased
  lastUpdatedBlockNumber
  lastUpdatedBlockTimestamp
  lastUpdatedDate
  lastUpdatedTransactionHash
  linearVesting {
    id
    startDate
    expiryDate
    startTimestamp
    expiryTimestamp
  }
  baseToken {
    totalSupply
    address
    decimals
    symbol
    name
  }
  quoteToken {
    address
    decimals
    symbol
    name
  }
  created {
    infoHash
  }
  curated {
    curator
  }
}
    `;
export const BatchCommonFieldsFragmentDoc = `
    fragment BatchCommonFields on BatchAuctionLot {
  id
  chain
  auctionHouse
  lotId
  createdBlockNumber
  createdBlockTimestamp
  createdDate
  createdTransactionHash
  capacityInitial
  start
  conclusion
  auctionType
  seller
  derivativeType
  wrapDerivative
  curator
  curatorApproved
  curatorFee
  protocolFee
  referrerFee
  capacity
  sold
  purchased
  lastUpdatedBlockNumber
  lastUpdatedBlockTimestamp
  lastUpdatedDate
  lastUpdatedTransactionHash
  linearVesting {
    id
    startDate
    expiryDate
    startTimestamp
    expiryTimestamp
  }
  baseToken {
    totalSupply
    address
    decimals
    symbol
    name
  }
  quoteToken {
    address
    decimals
    symbol
    name
  }
  created {
    infoHash
  }
  curated {
    curator
  }
}
    `;
export const AtomicAuctionFieldsFragmentDoc = `
    fragment AtomicAuctionFields on AtomicAuctionLot {
  capacityInQuote
  purchases {
    amount
    buyer
    date
    payout
    transactionHash
    referrer
  }
  fixedPriceSale {
    maxPayout
    price
    id
  }
}
    `;
export const BatchAuctionFieldsFragmentDoc = `
    fragment BatchAuctionFields on BatchAuctionLot {
  maxBidId
  bids {
    bidId
    bidder
    blockTimestamp
    date
    amountIn
    rawAmountIn
    rawAmountOut
    rawMarginalPrice
    rawSubmittedPrice
    submittedPrice
    settledAmountIn
    settledAmountInRefunded
    settledAmountOut
    status
    outcome
    referrer
    claimed {
      id
    }
  }
  bidsDecrypted {
    id
  }
  bidsClaimed {
    id
  }
  bidsRefunded {
    id
  }
  encryptedMarginalPrice {
    id
    status
    settlementSuccessful
    minPrice
    minFilled
    minBidSize
    marginalPrice
    hasPartialFill
  }
  settled {
    id
  }
}
    `;
export const GetAuctionLotsDocument = `
    query getAuctionLots {
  batchAuctionLots(orderBy: createdBlockNumber, orderDirection: asc) {
    ...BatchCommonFields
    ...BatchAuctionFields
  }
  atomicAuctionLots(orderBy: createdBlockNumber, orderDirection: asc) {
    ...AtomicCommonFields
    ...AtomicAuctionFields
  }
}
    ${BatchCommonFieldsFragmentDoc}
${BatchAuctionFieldsFragmentDoc}
${AtomicCommonFieldsFragmentDoc}
${AtomicAuctionFieldsFragmentDoc}`;

export const useGetAuctionLotsQuery = <
  TData = GetAuctionLotsQuery,
  TError = unknown,
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: GetAuctionLotsQueryVariables,
  options?: Omit<
    UseQueryOptions<GetAuctionLotsQuery, TError, TData>,
    "queryKey"
  > & {
    queryKey?: UseQueryOptions<GetAuctionLotsQuery, TError, TData>["queryKey"];
  },
) => {
  return useQuery<GetAuctionLotsQuery, TError, TData>({
    queryKey:
      variables === undefined
        ? ["getAuctionLots"]
        : ["getAuctionLots", variables],
    queryFn: fetcher<GetAuctionLotsQuery, GetAuctionLotsQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GetAuctionLotsDocument,
      variables,
    ),
    ...options,
  });
};

export const GetAtomicAuctionLotDocument = `
    query getAtomicAuctionLot($id: ID!) {
  atomicAuctionLot(id: $id) {
    ...AtomicCommonFields
    ...AtomicAuctionFields
  }
}
    ${AtomicCommonFieldsFragmentDoc}
${AtomicAuctionFieldsFragmentDoc}`;

export const useGetAtomicAuctionLotQuery = <
  TData = GetAtomicAuctionLotQuery,
  TError = unknown,
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: GetAtomicAuctionLotQueryVariables,
  options?: Omit<
    UseQueryOptions<GetAtomicAuctionLotQuery, TError, TData>,
    "queryKey"
  > & {
    queryKey?: UseQueryOptions<
      GetAtomicAuctionLotQuery,
      TError,
      TData
    >["queryKey"];
  },
) => {
  return useQuery<GetAtomicAuctionLotQuery, TError, TData>({
    queryKey: ["getAtomicAuctionLot", variables],
    queryFn: fetcher<
      GetAtomicAuctionLotQuery,
      GetAtomicAuctionLotQueryVariables
    >(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GetAtomicAuctionLotDocument,
      variables,
    ),
    ...options,
  });
};

export const GetBatchAuctionLotDocument = `
    query getBatchAuctionLot($id: ID!) {
  batchAuctionLot(id: $id) {
    ...BatchCommonFields
    ...BatchAuctionFields
  }
}
    ${BatchCommonFieldsFragmentDoc}
${BatchAuctionFieldsFragmentDoc}`;

export const useGetBatchAuctionLotQuery = <
  TData = GetBatchAuctionLotQuery,
  TError = unknown,
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables: GetBatchAuctionLotQueryVariables,
  options?: Omit<
    UseQueryOptions<GetBatchAuctionLotQuery, TError, TData>,
    "queryKey"
  > & {
    queryKey?: UseQueryOptions<
      GetBatchAuctionLotQuery,
      TError,
      TData
    >["queryKey"];
  },
) => {
  return useQuery<GetBatchAuctionLotQuery, TError, TData>({
    queryKey: ["getBatchAuctionLot", variables],
    queryFn: fetcher<GetBatchAuctionLotQuery, GetBatchAuctionLotQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GetBatchAuctionLotDocument,
      variables,
    ),
    ...options,
  });
};

export const GetInstalledModulesDocument = `
    query getInstalledModules {
  auctionHouseModuleInstalleds {
    keycode
    address
    auctionHouse
  }
}
    `;

export const useGetInstalledModulesQuery = <
  TData = GetInstalledModulesQuery,
  TError = unknown,
>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: GetInstalledModulesQueryVariables,
  options?: Omit<
    UseQueryOptions<GetInstalledModulesQuery, TError, TData>,
    "queryKey"
  > & {
    queryKey?: UseQueryOptions<
      GetInstalledModulesQuery,
      TError,
      TData
    >["queryKey"];
  },
) => {
  return useQuery<GetInstalledModulesQuery, TError, TData>({
    queryKey:
      variables === undefined
        ? ["getInstalledModules"]
        : ["getInstalledModules", variables],
    queryFn: fetcher<
      GetInstalledModulesQuery,
      GetInstalledModulesQueryVariables
    >(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      GetInstalledModulesDocument,
      variables,
    ),
    ...options,
  });
};
