import { baseSepolia } from "viem/chains";
import { environment } from "utils/environment";
import { Environment } from "@axis-finance/env";
import type { Address } from "@axis-finance/types";
import { metadataRegistryAbi } from "./axis-metadata-registry-abi";

// TODO: move to ui-libs/packages/deployments
const deployments = {
  testnet: {
    chainId: baseSepolia.id,
    address: "0xc94404218178149ebebfc1f47f0df14b5fd881c5" as Address,
    blockNumber: 19947467n,
    abi: metadataRegistryAbi,
  },
  // TODO: update to base and set address/blockNumber when deployed to mainnet
  production: {
    chainId: baseSepolia.id,
    address: "0xc94404218178149ebebfc1f47f0df14b5fd881c5" as Address,
    blockNumber: 19947467n,
    abi: metadataRegistryAbi,
  },
} as const;

const curatorRegistryDeployment =
  environment.current === Environment.PRODUCTION
    ? deployments.production
    : deployments.testnet;

export { curatorRegistryDeployment };
