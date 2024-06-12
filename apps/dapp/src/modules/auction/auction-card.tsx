import { Button, Card, IconedLabel, Skeleton, Text, cn } from "@repo/ui";
import { SocialRow } from "components/social-row";
import { AuctionListed, AuctionType, PropsWithAuction } from "@repo/types";
import { AuctionCardBanner } from "./auction-card-banner";
import { getChainById } from "utils";
import { AuctionMetricsContainer } from "./auction-metrics-container";
import { AuctionMetric } from "./auction-metric";
import { AuctionStatusBadge } from "./auction-status-badge";
import React from "react";
import { Link } from "react-router-dom";

type AuctionCardConditionalProps =
  | { loading: true; auction?: never }
  | { loading?: false; auction: AuctionListed };

type AuctionCardProps = React.HTMLAttributes<HTMLDivElement> & {
  isGrid?: boolean;
} & AuctionCardConditionalProps;

export function AuctionCard({ auction, ...props }: AuctionCardProps) {
  return (
    <Card
      className={cn(
        "border-surface-tertiary hover:bg-surface-tertiary group size-full overflow-hidden hover:border-neutral-400",
        props.isGrid ? "relative h-[368px] min-w-[470px] gap-y-3" : "p-8",
        props.className,
      )}
    >
      {props.loading || !auction ? (
        <Skeleton className="h-[332px] w-full" />
      ) : (
        <div
          className={cn(
            "flex h-full gap-x-8",
            props.isGrid ? "flex-col" : "*:w-1/2",
          )}
        >
          <AuctionCardBanner
            //TODO: replace with a better named property, likely projectBanner
            image={auction.auctionInfo?.links?.projectLogo}
            deadline={auction.formatted?.endDate}
            chain={getChainById(auction?.chainId)}
            isGrid={props.isGrid}
          />
          <AuctionCardDetails isGrid={props.isGrid} auction={auction} />
        </div>
      )}
    </Card>
  );
}

function AuctionCardDetails(
  props: PropsWithAuction & {
    isGrid?: boolean;
  },
) {
  const isEMP = props.auction.auctionType === AuctionType.SEALED_BID;
  const isFPB = props.auction.auctionType === AuctionType.FIXED_PRICE_BATCH;
  const hasCurator = !!props.auction.curator && props.auction.curatorApproved;

  return (
    <div
      className={cn("flex flex-col justify-between", props.isGrid && "h-1/2")}
    >
      <div>
        <div
          className={cn("flex justify-between", props.isGrid && "items-center")}
        >
          <IconedLabel
            large
            alt={props.auction.baseToken.symbol}
            src={props.auction.auctionInfo?.links?.projectLogo}
          >
            {props.auction.auctionInfo?.name}
          </IconedLabel>
          <AuctionStatusBadge
            large={!props.isGrid}
            className={cn(!props.isGrid && "-mr-6 -mt-6")}
            status={props.auction.status}
          />
        </div>
        <SocialRow {...props.auction.auctionInfo?.links} />
        <div className="flex h-full flex-col items-end text-wrap">
          <Text color="secondary" className="hidden group-hover:block">
            {props.auction.auctionInfo?.description}
          </Text>
          <Text color="secondary" className="group-hover:hidden">
            {props.auction.auctionInfo?.description}
          </Text>
        </div>
      </div>

      {isEMP && !props.isGrid && (
        <AuctionMetricsContainer
          className="group-hover:hidden md:grid-cols-2"
          auction={props.auction}
        >
          <AuctionMetric id="targetRaise" />
          <AuctionMetric id="minRaise" />
          <AuctionMetric id="minPrice" size="s" />
          <AuctionMetric id="auctionedSupply" size="s" />
          {hasCurator && <AuctionMetric id="curator" size="s" />}
        </AuctionMetricsContainer>
      )}

      {isFPB && !props.isGrid && (
        <AuctionMetricsContainer
          className="group-hover:hidden md:grid-cols-2"
          auction={props.auction}
        >
          <AuctionMetric id="totalSupply" />
          <AuctionMetric id="capacity" />
          <AuctionMetric id="fixedPrice" size="s" />
          <AuctionMetric id="auctionedSupply" size="s" />
          {hasCurator && <AuctionMetric id="curator" size="s" />}
        </AuctionMetricsContainer>
      )}

      <Link
        className={cn("self-end", !props.isGrid && "hidden group-hover:block")}
        to={`/auction/${props.auction.auctionType}/${props.auction.id}`}
      >
        <Button
          className={cn(
            "self-end uppercase transition-all ",
            props.isGrid &&
              "absolute bottom-0 right-0 mb-3 mr-3 opacity-0 group-hover:opacity-100",
          )}
        >
          View Auction
        </Button>
      </Link>
    </div>
  );
}
