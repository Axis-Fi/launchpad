import type { Token, AxisContractAddresses } from "@repo/types";
import type { Chain } from "viem/chains";
import type { AxisDeployment } from "./types";
import subgraphConfig from "../subgraph-config";
import tokenlistMetadata from "../tokenlist-metadata";

/** Creates a deployment configuration */
export function createDeployment(config: {
  chain: Chain;
  addresses: AxisContractAddresses;
  tokenList: Omit<Token, "chainId">[];
  rpcURL?: string;
}): AxisDeployment {
  return {
    addresses: config.addresses,
    subgraphURL: makeSubgraphURL(config.chain.id),
    chain: withCustomRPC(config.chain, config.rpcURL),
    tokenList: withMetadata(config.tokenList, config.chain.id),
  };
}

/** Creates a deployment record of deployments per chainId*/
export function createDeploymentRecord(
  chains: AxisDeployment[],
): Record<number, AxisDeployment> {
  return chains.reduce((acc, deployment) => {
    return {
      ...acc,
      [deployment.chain.id]: deployment,
    };
  }, {});
}

/** Generates a subgraph URL for a specific chain*/
function makeSubgraphURL(chainId: number) {
  return (
    subgraphConfig.baseURL +
    replaceBlastSepolia(chainId) +
    subgraphConfig.graph +
    subgraphConfig.version
  );
}

/** Adds an Axis RPC URL to an existing viem Chain*/
function withCustomRPC(chain: Chain, url?: string): Chain {
  if (!url) return chain;

  return {
    ...chain,
    rpcUrls: {
      ...chain.rpcUrls,
      axis: { http: [url] },
    },
  };
}

function withMetadata(tokens: Omit<Token, "chainId">[], chainId: number) {
  return {
    ...tokenlistMetadata,
    isActive: true,
    tokens: tokens.map((t) => ({ ...t, chainId })),
  };
}

//TODO: subgraph URL expects 65230 but actual testnet is 168587773
function replaceBlastSepolia(chainId: number) {
  return chainId === 168587773 ? 65230 : chainId;
}
