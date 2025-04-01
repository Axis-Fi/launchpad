import { Token } from "@axis-finance/types";
import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useCallback } from "react";

export const deployedTokensAtom = atomWithStorage<Token[] | null>(
  "deployed_tokens",
  null,
  undefined,
  { getOnInit: true },
);

export const useDeployedTokens = () => {
  const [data, set] = useAtom(deployedTokensAtom);

  const add = useCallback(
    (token: Token) => {
      set((prev) => [...(prev ?? []), token]);
    },
    [set],
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
