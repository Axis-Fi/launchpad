import { useState } from "react";
import { useAccount } from "wagmi";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";

import { Badge, Button, Card } from "@repo/ui";
import type { BatchAuction, PropsWithAuction } from "@repo/types";
import { RequiresChain } from "components/requires-chain";
import { TransactionDialog } from "modules/transaction/transaction-dialog";
import { useClaimBids } from "modules/auction/hooks/use-claim-bids";
import { BidInfoCard } from "./bid-info-card";
import { BidOutcome } from "../bid-outcome";

export function UserBidsClaimCard({ auction: _auction }: PropsWithAuction) {
  const auction = _auction as BatchAuction;
  const { address } = useAccount();
  const [isTxnDialogOpen, setTxnDialogOpen] = useState(false);
  const claimBidsTxn = useClaimBids(auction);

  const userBids = auction.bids.filter(
    (bid) => bid.bidder.toLowerCase() === address?.toLowerCase(),
  );

  const userTotalSuccessfulBidAmount = userBids.reduce(
    (acc, bid) => acc + Number(bid.settledAmountIn ?? 0),
    0,
  );

  const userHasClaimed = userBids.every(
    (bid) => bid.status === "claimed" || bid.status === "refunded",
  );

  const buttonText =
    userTotalSuccessfulBidAmount > 0 ? "Claim winnings" : "Claim refund";
  const badgeText = userTotalSuccessfulBidAmount > 0 ? "You Won!" : "You Lost";
  const badgeColour = userTotalSuccessfulBidAmount > 0 ? "active" : "alert";

  return (
    <div className="gap-y-md flex flex-col">
      <Card
        title="Claim"
        className="lg:w-[496px]"
        headerRightElement={<Badge color={badgeColour}>{badgeText}</Badge>}
      >
        <RequiresChain chainId={auction.chainId}>
          <div className="gap-y-md flex flex-col">
            <BidOutcome auction={auction} />

            {!userHasClaimed && (
              <Button
                size="lg"
                className="w-full"
                onClick={() => setTxnDialogOpen(true)}
              >
                {buttonText}
              </Button>
            )}
            {userHasClaimed && (
              <Link to="/auctions">
                <Button size="lg" variant="secondary" className="w-full">
                  View live auctions <ArrowRightIcon className="size-6" />
                </Button>
              </Link>
            )}
          </div>
        </RequiresChain>

        <TransactionDialog
          open={isTxnDialogOpen}
          signatureMutation={claimBidsTxn.claimTx}
          error={claimBidsTxn.error}
          onConfirm={claimBidsTxn.handleClaim}
          mutation={claimBidsTxn.claimReceipt}
          chainId={auction.chainId}
          onOpenChange={(open: boolean) => {
            if (!open) {
              claimBidsTxn.claimTx.reset();
            }
            setTxnDialogOpen(open);
          }}
          hash={claimBidsTxn.claimTx.data}
          disabled={claimBidsTxn.isWaiting}
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
      </Card>

      <BidInfoCard auction={auction} userBids={userBids} />
    </div>
  );
}
