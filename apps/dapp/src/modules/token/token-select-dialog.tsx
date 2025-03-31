import { Token } from "@axis-finance/types";
import {
  Button,
  cn,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogInputChangeHandler,
  DialogStatusChangeHandler,
  DialogTitle,
  IconedLabel,
  Tooltip,
  trimAddress,
} from "@repo/ui";
import React, { useCallback } from "react";
import { TokenListManager } from "./token-list-manager";
import { ArrowLeftIcon } from "lucide-react";
import { useTokenLists } from "state/tokenlist";
import isDeepEqual from "node_modules/@repo/ui/src/helpers/is-deep-equal";
import { Link } from "react-router-dom";

type TokenSelectDialogProps = {
  chainId: number;
  onChange?: DialogInputChangeHandler<Token>;
  setDialogOpen?: DialogStatusChangeHandler;
  value?: Token;
};

/** Shows a list of tokens per chain and a way to manage tokenlists*/
export function TokenSelectDialog({
  value,
  chainId,
  onChange,
  setDialogOpen,
}: TokenSelectDialogProps) {
  const { getTokensByChainId } = useTokenLists();
  const [token, setToken] = React.useState<Token>();
  const [view, setView] = React.useState<"manage" | "default">("default");

  const tokens = getTokensByChainId(chainId);

  const handleSelect = useCallback(
    (value: Token) => {
      setToken(value);
      onChange?.(value, {
        imgURL: value.logoURI,
        label: value.symbol,
        value: value.symbol,
      });
    },
    [onChange],
  );

  React.useEffect(() => {
    if (value && !isDeepEqual(value, token)) {
      handleSelect(value);
    }
  }, [handleSelect, value, token]);

  return (
    <DialogContent className="bg-surface max-w-lg">
      {view === "default" && (
        <>
          <DialogHeader>
            <DialogTitle>Select Token</DialogTitle>
          </DialogHeader>
          <div>
            <div className="max-h-[300px] overflow-scroll">
              {tokens
                .map((t) => ({ ...t }))
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((t, i) => (
                  <Button
                    key={i}
                    data-testid={`token-select-dialog-token-${t.symbol}`}
                    variant="secondary"
                    size="lg"
                    className={cn(
                      t.isCustom && "bg-surface",
                      "block w-full rounded-none border-x border-b-0 border-t px-2 first:rounded-t-sm last:rounded-b-sm last:border-b",
                    )}
                    onClick={() => {
                      handleSelect(t);
                      setDialogOpen?.(false);
                    }}
                  >
                    <TokenSelectRow token={t} />
                  </Button>
                ))}
            </div>
          </div>
        </>
      )}
      {view === "manage" && (
        <>
          <DialogHeader className="flex-row items-center gap-x-2">
            <Button
              onClick={() => setView("default")}
              size="icon"
              variant="ghost"
              className="size-6"
            >
              <ArrowLeftIcon />
            </Button>
            <DialogTitle>Manage Tokenlists</DialogTitle>
          </DialogHeader>
          <TokenListManager />
        </>
      )}

      <DialogFooter>
        {view === "default" && (
          <div className="flex justify-end gap-x-5">
            <Button
              onClick={(e) => {
                e.preventDefault();
                setView("manage");
              }}
            >
              Manage Tokenlists
            </Button>
            <Button asChild>
              <Link to="/deploy">Add token</Link>
            </Button>
          </div>
        )}
      </DialogFooter>
    </DialogContent>
  );
}

/** Displays token symbol, logo and contract address*/
function TokenSelectRow({ token }: { token: Token & { isCustom: boolean } }) {
  const isLongSymbol = token.symbol.length > 7;
  const label = isLongSymbol
    ? `${token.symbol.substring(0, 6)}...`
    : token.symbol;
  return (
    <div className="flex items-center justify-between gap-x-2 p-1 ">
      <Tooltip content={isLongSymbol && token.symbol}>
        <span className="flex items-center gap-3">
          <IconedLabel src={token.logoURI} label={label} />
          {token.isCustom && <span className="text-orange-400">Custom</span>}
        </span>
        <p className="text-xs">{trimAddress(token.address, 8)}</p>
      </Tooltip>
    </div>
  );
}
