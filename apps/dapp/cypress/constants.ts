import { LAUNCH_LOT_ID } from "./create-fixtures";

const BASE_URL = Cypress.env("VITE_APP_URL");

const BASE_SEPOLIA_CHAIN_ID = "84532";

const URLS = {
  HOME: `${BASE_URL}/#/`,
  CREATE_LAUNCH: (params?: unknown) =>
    `${BASE_URL}/#/create/auction?data=${JSON.stringify(params)}`,
  CURATOR: `${BASE_URL}/#/curator`,
  CURATORS: `${BASE_URL}/#/curators`,
  REFERRALS: `${BASE_URL}/#/refer`,
  LAUNCH: (
    chainId: string = BASE_SEPOLIA_CHAIN_ID,
    lotId: string = LAUNCH_LOT_ID,
  ) => `${BASE_URL}/#/${chainId}/${lotId}`,

  /** TESTNET ONLY PAGES */
  FAUCET: `${BASE_URL}/#/faucet`,
  DEPLOY: `${BASE_URL}/#/deploy`,
} as const;

const testId = (id: string) => `[data-testid='${id}']`;

const QUERIES = {
  DATE_PICKER: {
    CALENDAR_DAY_BUTTON: "button[name='day']",
    TIME_FIELD: testId("date-picker-time"),
    CONFIRM_BUTTON: testId("date-picker-confirm"),
  },
  SELECT_ITEM: (label: string) => testId(`select-item-${label}`),
  DIALOG_SUBMIT_BUTTON: testId("dialog-submit"),
  BLOCK_EXPLORER_LINK: testId("block-explorer-link"),
  TOKEN_PICKER: {
    ADDRESS_FIELD: testId("token-picker-address"),
    LOGO_FIELD: testId("token-picker-logo"),
  },
  DEPLOY: {
    TOKEN_NAME_FIELD: testId("deploy-token-name"),
    TOKEN_SYMBOL_FIELD: testId("deploy-token-symbol"),
    SUCCESS_MESSAGE: testId("deploy-success-message"),
    DEPLOY_BUTTON: testId("deploy-button"),
  },
  MINT: {
    ADDRESS_FIELD: testId("mint-address"),
    AMOUNT_FIELD: testId("mint-amount"),
    MINT_BUTTON: testId("mint-button"),
    SUCCESS_MESSAGE: testId("mint-success-message"),
  },
  CREATE_LAUNCH: {
    NAME_FIELD: testId("create-launch-name"),
    TAGLINE_FIELD: testId("create-launch-tagline"),
    PROJECT_LOGO_FIELD: testId("create-launch-project-logo"),
    PROJECT_BANNER_FIELD: testId("create-launch-project-banner"),
    WEBSITE_FIELD: testId("create-launch-website"),
    DISCORD_FIELD: testId("create-launch-discord"),
    TWITTER_FIELD: testId("create-launch-twitter"),
    FARCASTER_FIELD: testId("create-launch-farcaster"),
    DESCRIPTION_FIELD: testId("create-launch-description"),
    PAYOUT_TOKEN_FIELD: testId("create-launch-payout-token"),
    QUOTE_TOKEN_FIELD: testId("create-launch-quote-token"),
    QUOTE_TOKEN_PICKER: (tokenSymbol: string) =>
      testId(`token-select-dialog-token-${tokenSymbol}`),
    START_FIELD: testId("create-launch-start"),
    NEXT_MONTH_BUTTON: "button[name='next-month']",
    DEADLINE_FIELD: testId("create-launch-deadline"),
    AUCTION_TYPE_FIELD: testId("create-launch-auction-type"),
    CAPACITY_FIELD: testId("create-launch-capacity"),
    PRICE_FIELD: testId("create-launch-price"),
    DEPLOY_BUTTON: testId("create-launch-deploy-button"),
    CREATE_BUTTON: testId("create-launch-create-button"),
    SUBMIT_BUTTON: testId("create-launch-submit-button"),
    SUCCESS_BUTTON: testId("create-launch-success-button"),
  },
  VIEW_LAUNCH: {
    AUCTION_BID_CARD: testId("auction-bid-card"),
    AMOUNT_INPUT: testId("bid-amount-input"),
    PRICE_INPUT: testId("bid-price-input"),
    BID_SUBMIT_BUTTON: testId("bid-submit-button"),
    TX_DIALOG: testId("tx-dialog"),
    TX_DIALOG_TITLE: testId("tx-dialog-title"),
    TX_DIALOG_TRIGGER_BUTTON: testId("tx-dialog-trigger-button"),
    TX_DIALOG_CONFIRM_BUTTON: testId("tx-dialog-confirm-button"),
  },
};

const TIME = {
  TXN_TIMEOUT: 20 * 1000,
};

export { URLS, QUERIES, TIME };
