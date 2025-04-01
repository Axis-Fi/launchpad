import { baseSepolia, mainnet } from "viem/chains";
import { environment } from "utils/environment";
import { Environment } from "@axis-finance/env";
import type { Address } from "@axis-finance/types";
import { metadataRegistryAbi } from "./axis-metadata-registry-abi";

// TODO: use @axis-finance/deployments for all deployed curator registries
const deployments = {
  testnet: {
    chainId: baseSepolia.id,
    address: "0xc94404218178149ebebfc1f47f0df14b5fd881c5" as Address,
    blockNumber: 19947467n,
    abi: metadataRegistryAbi,
  },
  production: {
    chainId: mainnet.id,
    address: "0x7020638419355ae9FB5a124c580a05226AEa9158" as Address,
    blockNumber: 22135366n,
    abi: metadataRegistryAbi,
  },
} as const;

const curatorRegistryDeployment =
  environment.current === Environment.PRODUCTION
    ? deployments.production
    : deployments.testnet;

export { curatorRegistryDeployment };
