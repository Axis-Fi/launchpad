import { Token, TokenList } from "@axis-finance/types";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useCallback } from "react";

export const deployedTokensAtom = atomWithStorage<Token[] | null>(
  "deployed_tokens",
  null,
  undefined,
  { getOnInit: true },
);

export const useDeployedTokens = ({
  onChange,
}: { onChange?: (token: TokenList) => void } = {}) => {
  const [data, set] = useAtom(deployedTokensAtom);

  const add = useCallback(
    (token: Token) => {
      set((prev) => {
        const tokens = [...(prev ?? []), token];
        onChange?.({
          name: "Custom",
          logoURI: "https://www.fillmurray.com/100/100",
          tokens: tokens.map((t) => ({
            address: t.address,
            chainId: t.chainId,
            decimals: t.decimals,
            name: t.name,
            symbol: t.symbol,
            totalSupply: t.totalSupply,
          })),
          timestamp: "",
          version: {
            major: 0,
            minor: 0,
            patch: 0,
          },
        });
        return tokens;
      });
    },
    [onChange, set],
  );

  const remove = useCallback(
    (token: Token) => {
      set((prev) => {
        const filtered = prev?.filter((t) => t.address !== token.address);
        return filtered ?? null;
      });
    },
    [set],
  );

  return {
    data,
    set,
    add,
    remove,
  };
};
