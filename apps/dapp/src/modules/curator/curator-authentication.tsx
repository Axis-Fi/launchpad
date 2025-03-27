import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Text } from "@repo/ui";
import { useVerifyTwitter } from "modules/auction/hooks/use-verify-twitter";
import { curatorRegistryDeployment } from "./deployment";
import { RequiresChain } from "components/requires-chain";
import { InfoIcon } from "lucide-react";

export function CuratorAuthentication() {
  const twitter = useVerifyTwitter();
  const navigate = useNavigate();

  useEffect(() => {
    if (!twitter.isLoading && twitter.isVerified) {
      navigate("/curator-verified");
    }
  }, [navigate, twitter.isLoading, twitter.isVerified]);

  return (
    <div className="mx-auto mt-20 max-w-[400px]">
      <Card className="flex  justify-center">
        <div className="flex flex-col items-center justify-center">
          <RequiresChain chainId={curatorRegistryDeployment.chainId}>
            <Button onClick={() => twitter.redirectToVerify()}>
              Authenticate with X
            </Button>
          </RequiresChain>
          <Text size="md" className="mt-4 text-center">
            Please authenticate via X to register as a curator
          </Text>
          <Text
            size="sm"
            className="gap-sm mt-4 flex items-center justify-center text-center"
          >
            <InfoIcon size="16" /> Authenticating with X prevents fake curator
            profiles
          </Text>
        </div>
      </Card>
    </div>
  );
}
