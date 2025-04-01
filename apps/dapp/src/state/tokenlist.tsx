import { atom, useAtomValue, useSetAtom } from "jotai";
import { TokenList } from "@axis-finance/types";
import { defaultTokenlist } from "@axis-finance/deployments";
import { deployedTokensAtom } from "./deployedTokens";
import { useCallback } from "react";

const customTokenListActiveAtom = atom(true);
const tokenListsAtom = atom<TokenList[]>([defaultTokenlist]);

export const finalTokenList = atom<TokenList[]>((get) => {
  const deployedTokens = get(deployedTokensAtom) ?? [];
  const tokenLists = get(tokenListsAtom);
  const customIsActive = get(customTokenListActiveAtom);
  const customList: TokenList = {
    name: "Custom",
    tokens: deployedTokens,
    isActive: customIsActive,
    timestamp: new Date().toISOString(),
    version: { major: 1, minor: 0, patch: 0 },
  };
  return [...(deployedTokens.length > 0 ? [customList] : []), ...tokenLists];
});

export const useTokenLists = () => {
  const setActiveLists = useSetAtom(tokenListsAtom);
  const setCustomActive = useSetAtom(customTokenListActiveAtom);
  const lists = useAtomValue(finalTokenList);

  const removeList = useCallback(
    (list: TokenList) => {
      setActiveLists((prev) => prev.filter((l) => l.name !== list.name));
    },
    [setActiveLists],
  );

  const toggleList = useCallback(
    (list: TokenList, active: boolean) => {
      if (list.name === "Custom") {
        setCustomActive(active);
      } else {
        setActiveLists((prev) =>
          prev.map((l) => {
            if (l.name === list.name) {
              l.isActive = active;
            }
            return l;
          }),
        );
      }
    },
    [setActiveLists, setCustomActive],
  );

  const addList = useCallback(
    (list: TokenList) => {
      setActiveLists((prev) => {
        const listExists = prev.some((l) => l.name === list.name);
        if (listExists) {
          return !prev.find((l) => l.name === list.name)?.isActive
            ? prev.map((l) =>
                l.name === list.name ? { ...l, isActive: true } : l,
              )
            : prev;
        } else {
          return [...prev, list];
        }
      });
    },
    [setActiveLists],
  );

  const getTokensByChainId = (chainId: number) => {
    return lists
      .filter((l) => l.isActive)
      .flatMap((l) =>
        l.tokens.map((t) => ({ ...t, isCustom: l.name === "Custom" })),
      )
      .filter((t) => t.chainId === chainId);
  };

  const getToken = ({
    chainId,
    address,
  }: {
    address: string;
    chainId: number | string;
  }) => {
    return lists
      .flatMap((t) => t.tokens)
      .find(
        (t) =>
          t.address.toLocaleLowerCase().includes(address.toLocaleLowerCase()) &&
          t.chainId == chainId,
      );
  };

  return {
    lists,
    addList,
    removeList,
    toggleList,
    getTokensByChainId,
    getToken,
  };
};
