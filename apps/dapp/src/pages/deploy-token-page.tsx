import {
  Button,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  FormField,
  FormItemWrapper,
  Input,
  LabelWrapper,
  ScrollArea,
} from "@repo/ui";
import { PageContainer } from "modules/app/page-container";
import { useDeployToken } from "modules/token/use-deploy-token";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { BlockExplorerLink } from "components/blockexplorer-link";
import { useChainId } from "wagmi";
import useERC20 from "loaders/use-erc20";
import React, { useCallback, useState } from "react";
import { useMintToken } from "modules/token/use-mint-token";
import type { Token } from "@axis-finance/types";
import { Address, isAddress } from "viem";
import { useDeployedTokens } from "state/deployedTokens";
import useClipboard from "modules/token/use-copy";
import { ClipboardIcon, X } from "lucide-react";

const schema = z.object({
  name: z.string(),
  symbol: z.string(),
  decimals: z.number().or(z.string().transform((v) => Number(v))),
});

export type TokenConfig = z.infer<typeof schema>;

export function DeployTokenPage() {
  const [dialogToggle, setDialogToggle] = useState(false);
  const deployedTokens = useDeployedTokens();
  const copy = useClipboard();
  const chainId = useChainId();
  const form = useForm<TokenConfig>({
    defaultValues: {
      name: "USD Token",
      symbol: "USDX",
      decimals: 6,
    },
    resolver: zodResolver(schema),
  });

  const addTokenForm = useForm<Token>({
    resolver: zodResolver(
      z
        .object({
          name: z.string(),
          symbol: z.string(),
          decimals: z.number().or(z.string().transform((v) => Number(v))),
          address: z.string(),
          chainId: z.number().or(z.string().transform((v) => Number(v))),
          mintable: z.boolean().default(true),
          logoURI: z.string(),
        })
        .refine(
          (data) =>
            deployedTokens.data?.find((t) => t.address === data.address) ===
            undefined,
          {
            message: "Token already exists",
            path: ["address"],
          },
        )
        .refine(
          (data) =>
            deployedTokens.data?.find((t) => t.name === data.name) ===
            undefined,
          {
            message: "Token already exists",
            path: ["name"],
          },
        )
        .refine((data) => isAddress(data.address), {
          message: "Invalid address",
          path: ["address"],
        }),
    ),
  });

  const [amount, setAmount] = React.useState("10000");

  const [address, setAddress] = React.useState<Address>();
  const { address: deployedAddress, ...deploy } = useDeployToken();

  const resolvedAddress = address ?? deployedAddress;

  const { token } = useERC20({ chainId, address: resolvedAddress });
  const mint = useMintToken(token as Token, amount);

  const disabled = deploy.receipt.isLoading || !mint.mintCall.isSuccess;

  const onAdd = useCallback(
    (token: Token) => {
      deployedTokens.add(token);
      setDialogToggle(false);
    },
    [deployedTokens],
  );

  const close = useCallback(() => {
    setDialogToggle(false);
  }, []);

  return (
    <PageContainer id="__AXIS_DEPLOY_PAGE__">
      <div className="container">
        <h1 className="mb-8">Token Utilities</h1>
        <div className="mb-5 flex items-center gap-5">
          <h4>Previously Deployed</h4>
          <Button className="h-8 w-fit" onClick={() => setDialogToggle(true)}>
            Add
          </Button>
          <DialogRoot
            open={dialogToggle}
            onOpenChange={(value) => {
              setDialogToggle(value);
              if (!value) {
                addTokenForm.reset();
              }
            }}
          >
            <DialogContent className="bg-surface">
              <DialogHeader>
                <DialogTitle>Add Existing Token</DialogTitle>
              </DialogHeader>

              <FormProvider {...addTokenForm}>
                <form onSubmit={addTokenForm.handleSubmit(onAdd)}>
                  <div className="w-[450px] py-5">
                    <p className="text-red-500 empty:hidden">
                      {Object.values(addTokenForm.formState.errors)[0]?.message}
                    </p>
                    <FormField
                      control={addTokenForm.control}
                      name="address"
                      render={({ field }) => (
                        <FormItemWrapper label="Token Address">
                          <Input
                            autoComplete="off"
                            placeholder="0xdeadbeef..."
                            data-testid="add-token-address"
                            {...field}
                          />
                        </FormItemWrapper>
                      )}
                    />
                    <FormField
                      control={addTokenForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItemWrapper label="Token Name">
                          <Input data-testid="add-token-name" {...field} />
                        </FormItemWrapper>
                      )}
                    />
                    <FormField
                      control={addTokenForm.control}
                      name="symbol"
                      render={({ field }) => (
                        <FormItemWrapper label="Symbol">
                          <Input data-testid="add-token-symbol" {...field} />
                        </FormItemWrapper>
                      )}
                    />
                    <FormField
                      control={addTokenForm.control}
                      name="decimals"
                      render={({ field }) => (
                        <FormItemWrapper label="Decimals">
                          <Input data-testid="add-token-decimals" {...field} />
                        </FormItemWrapper>
                      )}
                    />
                    <FormField
                      control={addTokenForm.control}
                      name="chainId"
                      render={({ field }) => (
                        <FormItemWrapper label="Chain ID">
                          <Input data-testid="add-token-chain-id" {...field} />
                        </FormItemWrapper>
                      )}
                    />
                    <FormField
                      control={addTokenForm.control}
                      name="logoURI"
                      render={({ field }) => (
                        <FormItemWrapper label="Logo URI">
                          <Input data-testid="add-token-logo-uri" {...field} />
                        </FormItemWrapper>
                      )}
                    />
                  </div>
                  <DialogFooter>
                    <Button
                      type="button"
                      size="md"
                      variant="secondary"
                      onClick={() => close()}
                    >
                      Cancel
                    </Button>
                    <Button
                      data-testid="add-existing-token-button"
                      type="submit"
                      size="md"
                    >
                      Add
                    </Button>
                  </DialogFooter>
                </form>
              </FormProvider>
            </DialogContent>
          </DialogRoot>
        </div>
        {deployedTokens.data && deployedTokens.data.length > 0 && (
          <>
            <ScrollArea className="max-h-80">
              {deployedTokens.data.map((t) => (
                <div
                  className="bg-surface mb-3 flex items-center justify-between rounded px-4 shadow-md"
                  key={t.address}
                >
                  <div className="flex items-center gap-x-2">
                    <span className="font-semibold">{t.name}</span>
                    <span className="text-secondary">({t.symbol})</span>
                    <span className="text-sm text-gray-500">
                      [{t.decimals}]
                    </span>
                    <div
                      className={`flex items-center text-xs ${
                        copy.isCopied ? "text-green-500" : "text-gray-400"
                      } cursor-pointer hover:underline`}
                      onClick={() => copy.copyToClipboard(t.address)}
                    >
                      {t.address}
                      {copy.isCopied ? (
                        " Copied!"
                      ) : (
                        <ClipboardIcon className="ml-1 inline w-4" />
                      )}
                    </div>

                    <BlockExplorerLink
                      showName
                      chainId={chainId}
                      address={t.address}
                      className="text-blue-500 hover:underline"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <span title="Forget?">
                      <Button
                        className="px-0"
                        variant="ghost"
                        onClick={() => deployedTokens.remove(t)}
                      >
                        <X className="text-red-500 hover:underline" />
                      </Button>
                    </span>
                  </div>
                </div>
              ))}
            </ScrollArea>
          </>
        )}
        <div className="mt-8 flex">
          <div className="flex w-1/2 flex-col items-center justify-center gap-y-2">
            <h4>Deploy</h4>
            <FormProvider {...form}>
              <form
                onSubmit={form.handleSubmit(deploy.handleDeploy)}
                className="flex w-full flex-col items-center justify-center"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItemWrapper label="Name">
                      <Input data-testid="deploy-token-name" {...field} />
                    </FormItemWrapper>
                  )}
                />
                <FormField
                  control={form.control}
                  name="symbol"
                  render={({ field }) => (
                    <FormItemWrapper label="Symbol">
                      <Input data-testid="deploy-token-symbol" {...field} />
                    </FormItemWrapper>
                  )}
                />
                <FormField
                  control={form.control}
                  name="decimals"
                  render={({ field }) => (
                    <FormItemWrapper label="Decimals">
                      <Input data-testid="deploy-token-decimals" {...field} />
                    </FormItemWrapper>
                  )}
                />

                <Button
                  type="submit"
                  className="mx-auto mt-8 flex max-w-sm"
                  data-testid="deploy-button"
                >
                  DEPLOY
                </Button>
              </form>
            </FormProvider>
          </div>
          <div className="mt-1 flex w-1/2 flex-col items-center ">
            <h4>Mint</h4>
            <LabelWrapper content="Address" className="mt-2">
              <Input
                value={resolvedAddress}
                onChange={(e) =>
                  isAddress(e.target.value) && setAddress(e.target.value)
                }
              />
            </LabelWrapper>
            <LabelWrapper content="Amount" className="mt-1">
              <Input
                data-testid="mint-amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </LabelWrapper>
            <Button
              data-testid="mint-button"
              disabled={disabled}
              className="mt-4 uppercase"
              onClick={mint.handleMint}
            >
              Mint
            </Button>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex w-1/2 max-w-sm flex-col text-wrap">
            <h4>Deploy Status</h4>
            {deploy.mutation.isPending && "Waiting for signature..."}
            {deploy.receipt.isLoading && (
              <div>
                <div>
                  View transaction on&nbsp;
                  <BlockExplorerLink
                    address={deployedAddress}
                    chainId={chainId}
                  />
                </div>
                <p>Waiting for confirmation...</p>
              </div>
            )}

            {deploy.receipt.isSuccess && (
              <div>
                <p data-testid="deploy-success-message">
                  Token Deployed at address
                </p>
                <BlockExplorerLink
                  address={deployedAddress}
                  chainId={chainId}
                />
              </div>
            )}
            <div className="overflow-x-scroll">
              {deploy.mutation.isError && deploy.mutation.error.message}
            </div>
          </div>
          <div className="text-right">
            <h4>Mint Status</h4>
            {mint.mintTx.isSuccess && (
              <p>
                View transaction on&nbsp;
                <BlockExplorerLink
                  showName
                  hash={mint.mintTx.data}
                  chainId={chainId}
                />
              </p>
            )}
            {mint.mintTx.isPending && <p>Waiting for signature...</p>}
            {mint.mintReceipt.isLoading && <p>Waiting for confirmation...</p>}
            {mint.mintReceipt.isSuccess && (
              <p data-testid="mint-success-message">Success</p>
            )}
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
