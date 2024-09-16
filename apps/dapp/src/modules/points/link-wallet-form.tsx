import type React from "react";
import { useAccount } from "wagmi";
import { Check, TriangleAlert, Info } from "lucide-react";
import { Button, Text, useToast } from "@/components";
import { LinkedWalletsTable } from "./linked-wallets-table";
import { ConnectedWallet } from "./connected-wallet";
import { useProfile } from "./hooks/use-profile";

export function LinkWalletForm({
  onSuccess,
  footer,
}: {
  footer?: React.ReactNode;
  onSuccess?: () => void;
}) {
  const { address } = useAccount();
  const { profile, linkWallet } = useProfile();
  const { toast } = useToast();

  const handleSubmit = () => {
    linkWallet.mutate(undefined, {
      onError: (e) => {
        toast({
          // variant: "destructive",
          title: (
            <div className="flex items-center gap-x-2">
              <TriangleAlert size="16" /> Failed to link wallet
            </div>
          ),
        });
        console.log({ e });
      },
      onSuccess: () => {
        onSuccess?.();

        toast({
          title: (
            <div className="flex items-center gap-x-2">
              <Check size="16" /> Wallet successfully linked
            </div>
          ),
        });
      },
    });
  };

  if (profile == null) return null;

  const isConnectedWalletLinked = profile.wallets?.some(
    (w) => w.address?.toLowerCase() === address?.toLowerCase(),
  );

  return (
    <div className="gap-y-md flex flex-col">
      <ConnectedWallet trim={true} />

      <div className="flex items-center gap-x-2">
        <Info size="18" />

        {isConnectedWalletLinked && (
          <Text>
            You already linked this wallet. To link a new wallet, switch to the
            new wallet now.
          </Text>
        )}
        {!isConnectedWalletLinked && (
          <Text>You&apos;re linking a new wallet</Text>
        )}
      </div>

      <LinkedWalletsTable
        visibleColumns={["totalPoints"]}
        // trimWalletAddress={false}
        showSubtitle={false}
      />
      <Button
        variant="primary"
        onClick={handleSubmit}
        disabled={isConnectedWalletLinked}
      >
        Link wallet
      </Button>

      {footer}
    </div>
  );
}
