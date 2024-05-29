import React from "react";
import { Button, Card } from "@repo/ui";
import { AuctionMetrics } from "../auction-metrics";
import { AuctionInputCard } from "../auction-input-card";
import { AuctionType, BatchAuction, PropsWithAuction } from "@repo/types";
import { useAccount } from "wagmi";
import { useClaimBids } from "../hooks/use-claim-bids";
import { RequiresChain } from "components/requires-chain";
import { AuctionMetric } from "../auction-metric";
import { TransactionDialog } from "modules/transaction/transaction-dialog";
import { SettledAuctionCard } from "modules/auction/settled-auction-card";
import { ProjectInfoCard } from "../project-info-card";

export function AuctionSettled({ auction }: PropsWithAuction) {
  const [open, setOpen] = React.useState(false);
  const { address } = useAccount();
  const batchAuction = auction as BatchAuction;
  const cleared = auction.formatted?.cleared;
  const isEMP = auction.auctionType === AuctionType.SEALED_BID;
  const claimBids = useClaimBids(batchAuction);
  const userHasBids = batchAuction.bids.some(
    (b) =>
      b.bidder.toLowerCase() === address?.toLowerCase() &&
      b.status !== "claimed" &&
      b.status !== "refunded",
  );

  const isWaiting =
    claimBids.claimTx.isPending || claimBids.claimReceipt.isLoading;

  return (
    <div className="flex flex-row gap-x-[32px]">
      <div className="flex flex-grow flex-col justify-between gap-y-[16px]">
        {isEMP && <SettledAuctionCard auction={auction as BatchAuction} />}

        <Card title="Launch Info">
          <AuctionMetrics>
            <AuctionMetric auction={auction} id="protocolFee" />
            <AuctionMetric auction={auction} id="minFill" />
            <AuctionMetric auction={auction} id="derivative" />
            <AuctionMetric auction={auction} id="referrerFee" />
            <AuctionMetric auction={auction} id="minPrice" />
            <AuctionMetric auction={auction} id="duration" />
          </AuctionMetrics>
        </Card>

        <ProjectInfoCard auction={auction} />

        <TransactionDialog
          open={open}
          signatureMutation={claimBids.claimTx}
          error={claimBids.claimTx.error}
          onConfirm={claimBids.handleClaim}
          mutation={claimBids.claimReceipt}
          chainId={auction.chainId}
          onOpenChange={(open: boolean) => {
            if (!open) {
              claimBids.claimTx.reset();
            }
            setOpen(open);
          }}
          hash={claimBids.claimTx.data}
          disabled={isWaiting}
          screens={{
            idle: {
              Component: () => (
                <div className="text-center">
                  You&apos;re about to claim all of your outstanding refunds and
                  payouts for this auction.
                </div>
              ),
              title: `Confirm Claim Bids`,
            },
            success: {
              Component: () => (
                <div className="flex justify-center text-center">
                  <p>Bids claimed successfully!</p>
                </div>
              ),
              title: "Transaction Confirmed",
            },
          }}
        />
      </div>
      <div className={"flex w-[496px] items-start"}>
        <AuctionInputCard title="Claim" className="w-[496px]" auction={auction}>
          <div className="text-center">
            {cleared ? (
              <h4>Payout for this auction can be claimed!</h4>
            ) : (
              <h4>Auction could not be settled. Refunds may be claimed.</h4>
            )}
          </div>
          <RequiresChain chainId={auction.chainId}>
            {userHasBids && (
              <div className="flex justify-center">
                <Button onClick={() => setOpen(true)} className="mt-4">
                  {cleared ? "CLAIM BIDS" : "CLAIM REFUND"}
                </Button>
              </div>
            )}
          </RequiresChain>
        </AuctionInputCard>
      </div>
    </div>
  );
}
