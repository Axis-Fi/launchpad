import atomicCatalogue from "./AtomicCatalogue.json";
import batchCatalogue from "./BatchCatalogue.json";
import _atomicAuctionHouse from "./AtomicAuctionHouse.json";
import _batchAuctionHouse from "./BatchAuctionHouse.json";
import encryptedMarginalPrice from "./EncryptedMarginalPrice.json";
import fixedPriceSale from "./FixedPriceSale.json";
import linearVesting from "./LinearVesting.json";
import testnetERC20 from "./TestnetERC20.json";

//Fetch errors from modules to include in the AuctionHouse ABI
const errors = [
  encryptedMarginalPrice.abi,
  fixedPriceSale.abi,
  linearVesting.abi,
].flatMap((e) => e.filter((e) => e.type === "error"));

//Merge errors
const batchAuctionHouse = {
  abi: [..._batchAuctionHouse.abi, ...errors],
} as const;

const atomicAuctionHouse = {
  abi: [..._atomicAuctionHouse.abi, ...errors],
} as const;

export { testnetERC20 };

export default {
  atomicCatalogue,
  atomicAuctionHouse,
  batchCatalogue,
  batchAuctionHouse,
  encryptedMarginalPrice,
  fixedPriceSale,
  linearVesting,
} as const;
