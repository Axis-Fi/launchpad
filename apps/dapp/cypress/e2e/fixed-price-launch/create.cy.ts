import { URLS, QUERIES, TIME } from "../../constants";
import { PAYOUT_TOKEN_ADDRESS } from "../../create-fixtures";

const { CREATE_LAUNCH } = QUERIES;

describe("fixed price launch", () => {
  it.skip("creates a fixed price launch", () => {
    cy.visit(URLS.HOME);
    cy.connectWallet();

    cy.visit(URLS.CREATE_LAUNCH());

    // Fill in the initial text fields
    cy.get(CREATE_LAUNCH.NAME_FIELD).type("Test Launch");
    cy.get(CREATE_LAUNCH.TAGLINE_FIELD).type("Test tagline");
    cy.get(CREATE_LAUNCH.PROJECT_LOGO_FIELD).type("https://test.com/logo.png");
    cy.get(CREATE_LAUNCH.PROJECT_BANNER_FIELD).type(
      "https://test.com/banner.png",
    );
    cy.get(CREATE_LAUNCH.WEBSITE_FIELD).type("https://test.com");
    cy.get(CREATE_LAUNCH.DISCORD_FIELD).type("https://test.com/discord");
    cy.get(CREATE_LAUNCH.TWITTER_FIELD).type("https://test.com/twitter");
    cy.get(CREATE_LAUNCH.FARCASTER_FIELD).type("https://test.com/farcaster");
    cy.get(CREATE_LAUNCH.DESCRIPTION_FIELD).type("Test description");

    // Enter payout token details
    cy.get(CREATE_LAUNCH.PAYOUT_TOKEN_FIELD).click();
    cy.get(QUERIES.TOKEN_PICKER.ADDRESS_FIELD).type(PAYOUT_TOKEN_ADDRESS);
    cy.get(QUERIES.TOKEN_PICKER.LOGO_FIELD).type("http://test.com/logo.png");
    cy.get(QUERIES.DIALOG_SUBMIT_BUTTON).click();

    // Enter quote token details
    cy.get(CREATE_LAUNCH.QUOTE_TOKEN_FIELD).click();
    cy.get(CREATE_LAUNCH.QUOTE_TOKEN_PICKER("USDC")).click();

    // Choose auction type
    cy.get(CREATE_LAUNCH.AUCTION_TYPE_FIELD).click();
    cy.get(QUERIES.SELECT_ITEM("Fixed Price")).click();

    cy.get(CREATE_LAUNCH.CAPACITY_FIELD).type("1000");
    cy.get(CREATE_LAUNCH.PRICE_FIELD).type("1");

    // Enter start date
    cy.get(CREATE_LAUNCH.START_FIELD).click();
    cy.wait(100); // flaky button, wait before clicking
    cy.get(CREATE_LAUNCH.NEXT_MONTH_BUTTON).click();
    cy.get(QUERIES.DATE_PICKER.CALENDAR_DAY_BUTTON)
      .contains(/^1$/)
      .filter(":visible")
      .click();
    cy.get(QUERIES.DATE_PICKER.TIME_FIELD).type("0000");
    cy.get(QUERIES.DATE_PICKER.CONFIRM_BUTTON).click();

    // Enter end date
    cy.get(CREATE_LAUNCH.DEADLINE_FIELD).click();
    cy.wait(100); // flaky button, wait before clicking
    cy.get(CREATE_LAUNCH.NEXT_MONTH_BUTTON).click();
    cy.get(QUERIES.DATE_PICKER.CALENDAR_DAY_BUTTON)
      .contains(/^2$/)
      .filter(":visible")
      .click();
    cy.get(QUERIES.DATE_PICKER.TIME_FIELD).type("0005");
    cy.get(QUERIES.DATE_PICKER.CONFIRM_BUTTON).click();

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
