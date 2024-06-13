import { differenceInDays } from "date-fns";
import {
  AuctionDerivatives,
  AuctionType,
  CallbacksType,
  type Auction,
  type BatchAuction,
  type PropsWithAuction,
} from "@repo/types";
import { Metric, MetricProps, trimAddress } from "@repo/ui";
import { trimCurrency } from "utils/currency";
import { shorten, formatPercentage } from "utils/number";
import { getCallbacksType } from "./utils/get-callbacks-type";

const getPrice = (auction: Auction): number | undefined => {
  // Fixed Price Batch
  if (auction.auctionType === AuctionType.FIXED_PRICE_BATCH) {
    return Number((auction as BatchAuction).fixedPrice?.price);
  }

  // EMP
  if (auction.auctionType === AuctionType.SEALED_BID) {
    return Number((auction as BatchAuction).encryptedMarginalPrice?.minPrice);
  }

  // Unknown
  return undefined;
};

const getMinFilled = (auction: Auction): number | undefined => {
  // Fixed Price Batch
  if (auction.auctionType === AuctionType.FIXED_PRICE_BATCH) {
    return Number((auction as BatchAuction).fixedPrice?.minFilled);
  }

  // EMP
  if (auction.auctionType === AuctionType.SEALED_BID) {
    return Number((auction as BatchAuction).encryptedMarginalPrice?.minFilled);
  }

  return undefined;
};

const getTargetRaise = (
  auction: Auction,
  price?: number,
): number | undefined => {
  if (price === undefined) return undefined;

  return Number(auction.capacityInitial) * price;
};

const getMinRaise = (
  price?: number,
  minFilled?: number,
): number | undefined => {
  if (price === undefined || minFilled === undefined) return undefined;

  return minFilled * price;
};

const handlers = {
  derivative: {
    label: "Derivative",
    handler: (auction: Auction) => {
      switch (auction.derivativeType) {
        case AuctionDerivatives.LINEAR_VESTING: {
          return "Vesting";
        }
        default:
          return "None";
      }
    },
  },
  minFill: {
    label: "Min Fill",
    handler: (auction: Auction) => {
      const minFilled = getMinFilled(auction);
      if (!minFilled) return undefined;

      return `${trimCurrency(minFilled)} ${auction.baseToken.symbol}`;
    },
  },
  protocolFee: {
    label: "Protocol Fee",
    handler: (auction: Auction) => {
      return `${+auction.protocolFee}%`;
    },
  },
  referrerFee: {
    label: "Referrer Fee",
    handler: (auction: Auction) => {
      return `${+auction.referrerFee}%`;
    },
  },
  duration: {
    label: "Duration",
    handler: (auction: Auction) => {
      const days = differenceInDays(
        new Date(+auction.conclusion * 1000),
        new Date(+auction.start * 1000),
      );
      return `${days} days`;
    },
  },
  totalRaised: {
    label: "Total Raised",
    handler: (auction: Auction) => {
      const _auction = auction as BatchAuction;
      return `${_auction.formatted?.purchased} ${_auction.quoteToken.symbol}`;
    },
  },
  targetRaise: {
    label: "Target Raise",
    handler: (auction: Auction) => {
      const price = getPrice(auction);

      const targetRaise = getTargetRaise(auction, price);
      if (targetRaise === undefined) return undefined;

      return `${trimCurrency(targetRaise)} ${auction.quoteToken.symbol}`;
    },
  },
  minRaise: {
    label: "Min Raise",
    handler: (auction: Auction) => {
      const price = getPrice(auction);
      const minFilled = getMinFilled(auction);

      const minRaise = getMinRaise(price, minFilled);
      if (minRaise === undefined) return undefined;

      return `${trimCurrency(minRaise)} ${auction.quoteToken.symbol}`;
    },
  },

  minPrice: {
    label: "Min Price",
    handler: (auction: Auction) => {
      const price = getPrice(auction);
      if (!price) return undefined;

      return `${trimCurrency(price)} ${auction.quoteToken.symbol}`;
    },
  },
  totalBids: {
    label: "Total Bids",
    handler: (auction: Auction) => {
      return `${auction.formatted?.totalBids}`;
    },
  },
  totalBidAmount: {
    label: "Total Bid Amount",
    handler: (auction: Auction) =>
      `${auction.formatted?.totalBidAmountFormatted} ${auction.quoteToken.symbol}`,
  },

  capacity: {
    label: "Tokens Available",
    handler: (auction: Auction) =>
      `${auction.formatted?.capacity || shorten(Number(auction.capacity))} ${
        auction.baseToken.symbol
      }`,
  },

  totalSupply: {
    label: "Total Supply",
    handler: (auction: Auction) =>
      shorten(Number(auction.baseToken.totalSupply)),
  },

  price: {
    label: "Price",
    handler: (auction: Auction) =>
      `${getPrice(auction)} ${auction.quoteToken?.symbol}`,
  },

  fixedPrice: {
    label: "Price",
    handler: (auction: Auction) =>
      `${getPrice(auction)} ${auction.quoteToken.symbol}`,
  },

  sold: {
    label: "Sold",
    handler: (auction: Auction) =>
      `${auction.formatted?.sold} ${auction.baseToken.symbol}`,
  },

  auctionedSupply: {
    label: "Auctioned Supply",
    handler: (auction: Auction) => {
      const res =
        (Number(auction.capacityInitial) /
          Number(auction.baseToken.totalSupply)) *
        100;

      return `${formatPercentage(res)}%`;
    },
  },
  vestingDuration: {
    label: "Vesting",
    handler: (auction: Auction) => {
      if (!auction.linearVesting) {
        return "None";
      }

      // TODO: move to formatters
      const duration = Math.floor(
        (Number(auction.linearVesting.expiryTimestamp) -
          Number(auction.linearVesting.startTimestamp)) /
          86400,
      );

      return `${duration} days`;
    },
  },
  minPriceFDV: {
    label: "Min Price FDV",
    handler: (auction: Auction) => {
      const price = getPrice(auction);
      if (!price) return undefined;

      const fdv = Number(auction.baseToken.totalSupply) * price;
      return `${shorten(fdv)} ${auction.quoteToken.symbol}`;
    },
  },
  fixedPriceFDV: {
    label: "Fixed Price FDV",
    handler: (auction: Auction) => {
      const price = getPrice(auction);
      if (!price) return undefined;

      const fdv = Number(auction.baseToken.totalSupply) * price;
      return `${shorten(fdv)} ${auction.quoteToken.symbol}`;
    },
  },
  rate: {
    label: "Rate",
    handler: (auction: Auction) => {
      return `${auction.formatted?.rate} ${auction.formatted?.tokenPairSymbols}`;
    },
  },
  started: {
    label: "Started",
    handler: (auction: Auction) => {
      return `${auction.formatted?.startDistance} ago`;
    },
  },
  ended: {
    label: "Ended",
    handler: (auction: Auction) => {
      return `${auction.formatted?.endDistance} ago`;
    },
  },
  curator: {
    label: "Curator",
    handler: (auction: Auction) => {
      if (!auction.curator) return undefined;

      return trimAddress(auction.curator, 6);
    },
  },
  saleType: {
    label: "Sale Type",
    handler: (auction: Auction) => {
      const callbacksType = getCallbacksType(auction);

      switch (callbacksType) {
        case CallbacksType.MERKLE_ALLOWLIST:
          return "Private";
        case CallbacksType.CAPPED_MERKLE_ALLOWLIST:
          return "Private (Capped)";
        case CallbacksType.ALLOCATED_MERKLE_ALLOWLIST:
          return "Private (Allocated)";
        case CallbacksType.TOKEN_ALLOWLIST:
          return "Private (Token-Gated)";
        default:
          return "Public";
      }
    },
  },
  result: {
    label: "Result",
    handler: (auction: Auction) => {
      const price = getPrice(auction);
      const minFilled = getMinFilled(auction);

      const targetRaise = getTargetRaise(auction, price);
      if (targetRaise === undefined) return undefined;

      const minRaise = getMinRaise(price, minFilled);
      if (minRaise === undefined) return undefined;

      // Total bid amount will be undefined if the data hasn't been loaded yet, but 0 if there are no bids.
      const totalBidAmount = auction.formatted?.totalBidAmountDecimal;
      if (totalBidAmount === undefined) return undefined;

      if (totalBidAmount >= targetRaise) return "Target Met";

      if (totalBidAmount >= minRaise) return "Min Raise Met";

      return "Failed";
    },
  },
};

type AuctionMetricProps = Partial<PropsWithAuction> & {
  id: keyof typeof handlers;
  className?: string;
} & Pick<MetricProps, "size">;

export function AuctionMetric(props: AuctionMetricProps) {
  const element = handlers[props.id];

  if (!props.auction) throw new Error("No auction provided");
  if (!element) throw new Error(`No auction metric found for ${props.id}`);

  const value = element.handler(props.auction);

  return (
    <Metric size={props.size} label={element.label}>
      {value || "-"}
    </Metric>
  );
}
