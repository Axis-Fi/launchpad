import { abis } from "@axis-finance/abis";
import { Address } from "viem";
import { useReadContract } from "wagmi";

type UseHasPrivateKeyParameters = {
  address: Address;
  lotId: string;
  chainId: number;
  enabled?: boolean;
};

export function useHasPrivateKey({
  lotId,
  address,
  chainId,
  enabled,
}: UseHasPrivateKeyParameters) {
  const { data, ...query } = useReadContract({
    address,
    chainId,
    abi: abis.encryptedMarginalPrice,
    functionName: "auctionData",
    args: [BigInt(lotId)],
    query: { enabled },
  });

  const privateKey = data?.[9] !== 0n;

  return {
    data: query.isSuccess && !!privateKey,
    ...query,
  };
}
