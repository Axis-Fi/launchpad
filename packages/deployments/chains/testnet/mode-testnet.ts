import { modeTestnet } from "viem/chains";
import { AxisDeploymentConfig } from "../../src/types";
import { usdc, weth } from "../../tokens/common";

const config: AxisDeploymentConfig = {
  name: "mode-testnet",
  chain: modeTestnet,
  chainIconUrl: "/mode-logo.svg",
  addresses: {
    batchAuctionHouse: "0xBA00003Cc5713c5339f4fD5cA0339D54A88BC87b",
    batchCatalogue: "0x32273229B482F39f5F8fBfA71569eA743740217c",
    encryptedMarginalPrice: "0x4e519eEf63b9e127cFCeCA31C8E5485CdA65D355",
    fixedPriceBatch: "0xC818f1f000f9C24D014BCe2c5334e14B1360d9CD",
    batchLinearVesting: "0x6CC5b76C2c98cB347F07C07a74a88134265312FF",
  },
  callbacks: {
    cappedMerkleAllowlist: "0x98565d59C0E85cB2922822B941342b24e0B36710",
    merkleAllowlist: "0x98281879DF6b77eBfc3c7B584325cFE3cf3a499D",
    tokenAllowlist: "0x98Db66f6F636D6e863229c32662AFF11bE8Ab53F",
    allocatedMerkleAllowlist: "0x98aAA09Fba83eD888Fa57eBb42c2e54fA6BF3611",
  },
  subgraphURL:
    "https://api.goldsky.com/api/public/project_clu16lu24lqh201x9f0qh135t/subgraphs/axis-origin-mode-testnet/<VERSION>/gn",
  rpcURL: "https://sepolia.mode.network",
  tokenList: [
    {
      ...usdc,
      address: "0xfc3156a0a9295dcd83b8f405bae7a4b73f4e2306",
      decimals: 18,
      mintable: true,
    },
    {
      ...weth,
      address: "0xfdf5fe07a9c888f383aea34f152dee04baee7a2e",
      decimals: 18,
      mintable: true,
    },
  ],
};

export default config;
