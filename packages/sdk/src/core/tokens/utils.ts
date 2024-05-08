import * as chains from "viem/chains";
import type { Token } from "@repo/types";

type PartialTokenResponse = { coins: { [key: string]: { price: number } } };

const getMainnetName = (chainId: number): string | undefined => {
  return Object.values(chains).find((chain) => chain.id === chainId)?.name;
};

const fetchTokenPrices = async (tokens: Token[]): Promise<number[]> => {
  if (!tokens || tokens?.length === 0) {
    throw new Error("tokens is required");
  }
  const preparedTokens = tokens.map(
    (token) => `${getMainnetName(token.chainId)}:${token.address}`,
  );
  const tokenUrlQuery = preparedTokens.join(",");

  // TODO get url from env config
  const response = await fetch(
    `https://coins.llama.fi/prices/current/${tokenUrlQuery}?searchWidth=1h`,
  );
  const json = (await response.json()) as PartialTokenResponse;

  // Return the same shape array as the input tokens, undefined means a price wasn't returned from DL.
  return preparedTokens.map((token) => json?.coins[token]?.price);
};

export { fetchTokenPrices };
