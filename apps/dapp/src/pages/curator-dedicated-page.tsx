import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useReadContract } from "wagmi";
import { verifiedFetch } from "utils/verified-fetch";
import { allowedCurators } from "modules/app/curators";
import { Address } from "viem";
import type { CuratorProfile } from "@repo/ipfs-api/src/types";
import type { Curator } from "@axis-finance/types";
import CuratorLaunchPage from "./curator-launch-page";
import { curatorRegistryDeployment } from "modules/curator/deployment";

export function CuratorDedicatedPage() {
  const params = useParams();

  const [isResolvingCurator, setIsResolvingCurator] = useState(false);
  const [curator, setCurator] = useState<CuratorProfile | undefined>();
  const [staticCurator, setStaticCurator] = useState<Curator | undefined>();

  const curatorIpfsCid = useReadContract({
    chainId: curatorRegistryDeployment.chainId,
    abi: curatorRegistryDeployment.abi,
    address: curatorRegistryDeployment.address,
    functionName: "curatorMetadata",
    args: [
      BigInt(
        Number.isInteger(Number(params.curatorId))
          ? Number(params.curatorId)
          : 0,
      ),
    ],
    query: {
      enabled: Number.isInteger(Number(params.curatorId)),
    },
  });

  useEffect(() => {
    async function resolveCurator() {
      if (curator != null || curatorIpfsCid.isLoading) return;

      if (curatorIpfsCid.data != null) {
        setIsResolvingCurator(true);

        const ipfsCuratorRequest = await verifiedFetch(
          `ipfs://${curatorIpfsCid.data}`,
        );

        const ipfsCurator = (await ipfsCuratorRequest.json()) as CuratorProfile;
        setIsResolvingCurator(false);
        return setCurator(ipfsCurator);
      }

      const fromStatic = allowedCurators.find((c) => c.id === params.curatorId);
      setStaticCurator(fromStatic);
    }

    resolveCurator();
  }, [curator, curatorIpfsCid, params.curatorId]);

  if (curatorIpfsCid.isLoading || isResolvingCurator) {
    return <div>Loading...</div>;
  }

  if (!curator && !staticCurator) {
    return <div>Curator not found.</div>;
  }

  return (
    <CuratorLaunchPage
      curator={
        staticCurator || {
          id: curator!.id,
          name: curator!.name,
          type: "curator",
          address: curator!.address as Address,
          twitter: curator!.twitter,
          website: curator!.links.website,
          avatar: curator!.links.avatar,
          banner: curator!.links.banner,
          description: curator!.description,
          options: curator!.options,
        }
      }
    />
  );
}
