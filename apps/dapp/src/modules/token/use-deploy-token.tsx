import {
  useAccount,
  useChainId,
  usePublicClient,
  useWaitForTransactionReceipt,
  useWalletClient,
} from "wagmi";
import type { Address, Hex, Chain, WalletClient } from "viem";
import { useMutation } from "@tanstack/react-query";
import { chains } from "@axis-finance/env";
import type { TokenConfig } from "pages/deploy-token-page";
import { testnetERC20 as ERC20 } from "@axis-finance/abis";

import { environment } from "utils/environment";
import { useDeployedTokens } from "state/deployedTokens";
import { useMemo } from "react";

const activeChains = chains.activeChains(environment.isTestnet);

const deploy = (
  walletClient: WalletClient,
  account: Address,
  chain: Chain,
  values: TokenConfig,
) => {
  return walletClient.deployContract({
    account,
    abi: ERC20.abi,
    bytecode: ERC20.bytecode.object as Hex,
    args: [values.name, values.symbol, values.decimals],
    chain,
  });
};

export function useDeployToken() {
  const deployedTokens = useDeployedTokens();
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();
  const { address } = useAccount();
  const chainId = useChainId();
  const chain = useMemo(
    () => activeChains.find((c) => c.id === chainId),
    [chainId],
  );

  const mutation = useMutation({
    mutationFn: (values: TokenConfig) => {
      return deploy(
        walletClient! as WalletClient,
        address!,
        chain! as Chain,
        values,
      );
    },
    onSuccess: async (tx, values) => {
      const receipt = await publicClient?.waitForTransactionReceipt({
        hash: tx ?? "0x0",
      });

      if (receipt) {
        if (!receipt.contractAddress) {
          throw new Error("Contract not successfully deployed");
        }

        deployedTokens.add({
          address: receipt.contractAddress,
          chainId: chainId,
          name: values.name,
          mintable: true,
          symbol: values.symbol,
          decimals: values.decimals,
        });
      }
    },
  });

  const receipt = useWaitForTransactionReceipt({
    hash: mutation.data,
  });

  const handleDeploy = (values: TokenConfig) => {
    if (walletClient && address && chain) {
      mutation.mutate(values);
    }
  };

  return {
    handleDeploy,
    address: receipt.data?.contractAddress as Address,
    receipt,
    mutation,
  };
}
