import { QUERIES, URLS, TIME } from "./constants";

const ONE_WEEK_IN_MS = 7 * 24 * 60 * 60 * 1000;
const FIVE_MINS_IN_MS = 5 * 60 * 1000;

/**
 * These constants are generated deterministically by forking base sepolia at the configured block number.
 * If you change the block number, the state will be differnt, so you will need to update these constants.
 * To do that, just run ./scripts/create-test-fixtures.sh and the tests below will fail with
 * the correct addresses you need to update.
 */
export const PAYOUT_TOKEN_ADDRESS =
  "0x493f79a2839ef984a78f7ff7002e1901e93aa2d3";
export const QUOTE_TOKEN_ADDRESS = "0x4c9d75fbdf764d05df654340a48f85bc0216f8ab";

/**
 * These parameters are used to create a test launch in the fixture setup.
 * This launch is merged into the chain state which is used for the tests.
 */
export const LAUNCH_PARAMS = {
  minFillPercent: [50],
  auctionType: "FPBA",
  // Auctions start date must be set in the future
  start: new Date(new Date().getTime() + FIVE_MINS_IN_MS).toISOString(),
  dtlProceedsPercent: [100],
  baselineFloorReservesPercent: [50],
  baselineFloorRangeGap: "0",
  baselineAnchorTickU: "0",
  baselineAnchorTickWidth: "10",
  name: "fpb-bid-test",
  tagline: "fpb-bid-test-tagline",
  projectLogo: "http://test.com/logo",
  projectBanner: "http://test.com/banner",
  website: "http://test.com/web",
  discord: "http://test.com/discord",
  twitter: "http://test.com/x",
  farcaster: "http://test.com/warp",
  description: "fpb-bid-test-description",
  payoutToken: {
    decimals: 18,
    symbol: "AXIS",
    name: "Test payout token",
    address: PAYOUT_TOKEN_ADDRESS,
    chainId: 84532,
    totalSupply: "100000",
    logoURI: "http://test.com/token-logo",
  },
  quoteToken: {
    name: "USD Coin",
    symbol: "USDC",
    logoURI:
      "https://storage.bondprotocol.finance/6e41a561-e275-4698-bc36-548d30a80e96-bucket/USDC.png",
    decimals: 18,
    address: QUOTE_TOKEN_ADDRESS,
    mintable: true,
    chainId: 84532,
  },
  capacity: "10000",
  deadline: new Date(new Date().getTime() + ONE_WEEK_IN_MS).toISOString(), //"2025-04-02T23:00:00.000Z",
  payoutTokenBalance: "100000",
  price: "1",
};

// The last lot id for the forked state is 34 (created by the fixture setup)
export const LAUNCH_LOT_ID = "34";
/**
 * This is not a test suite itself, but is used to create fixtures for the e2e tests.
 * This script executes the first time the local anvil rpc fork is started (from scripts/local-rpc.sh).
 * The anvil chain state is then dumped and subsequently used as the starting state for all the e2e test.
 * Why? This speeds up the tests significantly by not having to perform the setup every time.
 **/
describe("test fixture setup", () => {
  // Don't create the fixtures if they already exist
  before(function () {
    cy.task("fileExists", __dirname + "/state.json").then((exists) => {
      if (exists) {
        cy.log("State already exists, skipping fixture creation");
        this.skip();
      } else {
        cy.log("State does not exist, will create fixtures");
      }
    });
  });

  it("deploy and mint a payout token for launch creation", () => {
    cy.visit(URLS.HOME);
    cy.connectWallet();

    cy.deployTokenAndMint("AXIS", "Test payout token").then(
      (payoutTokenAddress) => {
        expect(payoutTokenAddress).to.eq(PAYOUT_TOKEN_ADDRESS);
      },
    );
  });

  it("mints the quote token for bidding with", () => {
    cy.visit(URLS.HOME);
    cy.connectWallet();

    cy.mintToken(QUOTE_TOKEN_ADDRESS);
  });

  it("creates a launch to test bidding", () => {
    cy.visit(URLS.HOME);
    cy.connectWallet();

    cy.visit(URLS.CREATE_LAUNCH(LAUNCH_PARAMS));

    const { CREATE_LAUNCH } = QUERIES;

    // hack: the create auction form updates balance asynchronously and isn't retriggering validation
    // so the form thinks the payout token balance is invalid when it's actually valid
    cy.get(CREATE_LAUNCH.CAPACITY_FIELD).clear().type(LAUNCH_PARAMS.capacity);

    // View launch preview
    cy.get(CREATE_LAUNCH.DEPLOY_BUTTON).click();

    // Open transaction dialog
    cy.get(CREATE_LAUNCH.CREATE_BUTTON).click();

    // Approve payout token spend
    cy.get(CREATE_LAUNCH.SUBMIT_BUTTON, {
      timeout: TIME.TXN_TIMEOUT,
    }).click();

    // Give the txn chance to complete before pressing the submit button again
    cy.contains("Deploy your Auction", {
      timeout: TIME.TXN_TIMEOUT,
    }).should("exist");

    // hack
    cy.wait(3000);

    // Upload launch metadata to IPFS and sign transaction
    cy.get(CREATE_LAUNCH.SUBMIT_BUTTON).click();

    cy.contains("View your Launch", {
      timeout: TIME.TXN_TIMEOUT,
    }).should("exist");
  });
});
