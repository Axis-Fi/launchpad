import { URLS } from "./constants";

/**
 * These constants are generated deterministically by forking base sepolia at the configured block number.
 * If you change the block number, the state will be differnt, so you will need to update these constants.
 * To do that easily, just run ./scripts/create-test-fixtures.sh and the tests below will fail with
 * the correct addresses you need to update.
 */
export const PAYOUT_TOKEN_ADDRESS =
  "0x493f79a2839ef984a78f7ff7002e1901e93aa2d3";
export const QUOTE_TOKEN_ADDRESS = "0x8e7e3e449a6a5d36c810fc692ce26a1e862abb66";

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
});
