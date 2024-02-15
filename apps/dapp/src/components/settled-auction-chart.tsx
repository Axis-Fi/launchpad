import {
  ReferenceLine,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import { cn } from "@repo/ui";
import { SubgraphAuctionWithEvents } from "loaders/subgraphTypes";
import { useAuction } from "loaders/useAuction";
import { formatUnits, parseUnits } from "viem";
import { useReadContract } from "wagmi";
import { axisContracts } from "@repo/contracts";
import { format } from "date-fns";
import { GemIcon, XIcon } from "lucide-react";
import { formatDate } from "src/utils/date";

type Bid = {
  id: string;
  bidder: string;
  price: number;
  amountIn: number;
  amountOut: number;
  timestamp: number;
};

type SettleData = {
  marginalPrice?: number;
  minimumPrice?: number;
  data?: Bid[];
};

const useChartData = (
  auction: SubgraphAuctionWithEvents | undefined,
): SettleData => {
  // Goal: Array of data with the following data per object:
  // - bid ID
  // - bidder
  // - price
  // - amountIn
  // - amountOut
  // - timestamp
  // - marginalPrice

  // 1. Create data array and parse inputs
  const data = !auction
    ? undefined
    : auction.bidsDecrypted.map((bid) => {
        const amountIn = Number(bid.amountIn);
        const amountOut = Number(bid.amountOut);
        const price = amountIn / amountOut;
        const timestamp = Number(bid.blockTimestamp) * 1000;

        return {
          id: bid.id,
          bidder: bid.bid.bidder,
          price,
          amountIn,
          amountOut,
          timestamp,
        };
      });

  if (!auction || !data) return {};

  // 2. Sort bids by price
  data.sort((a, b) => a.price - b.price);

  // 3. Calculate the marginal price
  // Load data from auction module for lot
  const lsbbaData = useReadContract({
    abi: axisContracts.abis.localSealedBidBatchAuction,
    address:
      axisContracts.addresses[auction.chainId].localSealedBidBatchAuction,
    functionName: "auctionData",
    args: [parseUnits(auction.lotId, 0)],
  });
  if (!lsbbaData.data) return {};
  const minimumPrice = Number(
    formatUnits(lsbbaData.data[3], Number(auction.quoteToken.decimals)),
  );
  const minimumFill = Number(
    formatUnits(lsbbaData.data[4], Number(auction.baseToken.decimals)),
  );

  // Apply marginal price algorithm
  const capacity = Number(
    formatUnits(BigInt(auction.capacity), Number(auction.baseToken.decimals)),
  );
  let marginalPrice = 0;
  let totalAmountIn = 0;
  let capacityExpended = 0;
  let lastPrice = 0;
  for (let i = 0; i < data.length; i++) {
    const bid = data[i];

    if (bid.price < minimumPrice) {
      marginalPrice = lastPrice;
      break;
    }

    lastPrice = bid.price;
    totalAmountIn += bid.amountIn;
    capacityExpended = totalAmountIn * bid.price;

    if (capacityExpended >= capacity) {
      marginalPrice = bid.price;
      break;
    }

    if (i == data.length - 1) {
      marginalPrice = bid.price;
    }
  }

  if (capacityExpended < minimumFill) {
    marginalPrice = 0;
  }

  // Return data, marginal price, and minimum price
  return { data, marginalPrice, minimumPrice };
};

type SettledAuctionChartProps = {
  lotId?: string;
};

const timestampFormatter = (timestamp: number) => {
  return format(new Date(timestamp), "MM-dd HH:mm");
};

type formatterProps = {
  dataKey: string;
  name: string;
  value: unknown;
};

const formatter = (value: unknown, _name: string, props: formatterProps) => {
  if (props.dataKey === "timestamp" && typeof value == "number") {
    return format(new Date(value), "yyyy-MM-dd HH:mm:ss");
  }

  return value;
};

export const SettledAuctionChart = ({ lotId }: SettledAuctionChartProps) => {
  const { result: auction } = useAuction(lotId);

  const start = Number(auction?.start) * 1000;
  const conclusion = Number(auction?.conclusion) * 1000;

  const {
    data: chartData,
    marginalPrice,
    minimumPrice,
  } = useChartData(auction);

  const sizeRange = [
    !chartData
      ? 0
      : chartData.reduce(
          (min, p) => (p.amountIn < min ? p.amountIn : min),
          chartData[0].amountIn,
        ),
    !chartData
      ? 0
      : chartData.reduce(
          (max, p) => (p.amountIn > max ? p.amountIn : max),
          chartData[0].amountIn,
        ),
  ];

  return (
    <div className="size-full">
      <ResponsiveContainer minWidth={300} minHeight={260}>
        <ScatterChart>
          <XAxis
            className="text-xs"
            type="number"
            tickLine={false}
            minTickGap={30}
            dataKey="timestamp"
            domain={[start, conclusion]}
            name="Bid Submitted"
            stroke="#f4f4f4"
            tickFormatter={timestampFormatter}
          />
          <YAxis
            className="text-xs"
            type="number"
            dataKey="price"
            tickLine={false}
            name="Bid Price"
            minTickGap={40}
            stroke="#f4f4f4"
            tickFormatter={(value) => value + " " + auction?.quoteToken.symbol}
          />
          <ZAxis
            type="number"
            dataKey="amountIn"
            range={sizeRange}
            name="Bid Size"
          />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            // TODO fix typing
            // @ts-expect-error
            formatter={formatter}
            wrapperStyle={{
              backgroundColor: "transparent",
              outline: "none",
            }}
            content={(props) => <CustomTooltip {...props} auction={auction} />}
          />
          <Scatter
            name="Bids"
            data={chartData}
            stroke="#FFFFFF"
            fill="#FFFFFF"
            shape={(props: any) => (
              <CustomShape {...props} marginalPrice={marginalPrice} />
            )}
          />
          <ReferenceLine
            y={marginalPrice}
            stroke="#76BDF2"
            className="relative *:absolute *:top-10"
            label={(props) => (
              <CustomLabel
                {...props}
                content="Settled Price"
                className="fill-axis-teal"
              />
            )}
          />
          <ReferenceLine
            y={minimumPrice}
            strokeDasharray="3 3"
            stroke="orange"
            label={(props) => (
              <CustomLabel
                {...props}
                content="Minimum Price"
                className="fill-axis-orange"
              />
            )}
          />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

function CustomLabel(props: any) {
  return (
    <text
      {...props?.viewBox}
      y={props.viewBox?.y - props?.offset}
      x={props.viewBox?.x}
      className={cn("absolute text-xs font-semibold", props.className)}
    >
      {props.content}
    </text>
  );
}

function CustomShape({ fill, stroke, marginalPrice, ...props }: any) {
  return marginalPrice <= props.payload.price ? (
    <GemIcon className="text-axis-green *:p-4" {...props} />
  ) : (
    <XIcon className="text-axis-red *:p-4" {...props} />
  );
}

type SettledTooltipProps = {
  auction?: SubgraphAuctionWithEvents;
} & TooltipProps<any, any>;

function CustomTooltip(props: SettledTooltipProps) {
  // TODO fix typing
  // @ts-expect-error
  const [timestamp, price, amountIn] = props.payload;
  const auction = props.auction;

  return (
    <div className="bg-secondary rounded-sm px-4 py-2">
      <div>
        Amount In: {amountIn?.value} {auction?.quoteToken.symbol}
      </div>
      <div>
        Price: {price?.value} {auction?.quoteToken.symbol}
      </div>
      <div>At {formatDate.fullLocal(timestamp?.value ?? new Date())}</div>
    </div>
  );
}
