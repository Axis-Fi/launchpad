import { URLS, QUERIES, TIME } from "../../constants";

const { VIEW_LAUNCH } = QUERIES;

describe("fixed price launch", () => {
  it("makes a bid", () => {
    cy.visit(URLS.HOME);
    cy.connectWallet();

    cy.visit(URLS.LAUNCH());

    cy.get(VIEW_LAUNCH.AMOUNT_INPUT).clear().type("1000");

    // Approve spend
    cy.get(VIEW_LAUNCH.BID_SUBMIT_BUTTON).click();

    // Wait for approval txn confirmation
    cy.get(VIEW_LAUNCH.BID_SUBMIT_BUTTON, { timeout: TIME.TXN_TIMEOUT }).should(
      "have.text",
      "BID",
    );

    // Cypress can be too fast with async React rerenders changing DOM
    cy.wait(500);

    // Trigger transaction dialog
    cy.get(VIEW_LAUNCH.BID_SUBMIT_BUTTON).click();

    // Submit bid
    cy.get(VIEW_LAUNCH.TX_DIALOG_CONFIRM_BUTTON, {
      timeout: TIME.TXN_TIMEOUT,
    }).click();

    // Wait for bid txn confirmation
    cy.get(VIEW_LAUNCH.TX_DIALOG_TITLE, {
      timeout: TIME.TXN_TIMEOUT,
    }).should("have.text", "Transaction Confirmed");
  });
});
