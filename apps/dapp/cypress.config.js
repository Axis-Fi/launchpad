import * as fs from "fs";
import { defineConfig } from "cypress";

export default defineConfig({
  env: process.env,
  defaultBrowser: "chrome",
  retries: {
    openMode: 0,
  },
  e2e: {
    baseUrl: process.env.VITE_APP_URL,
    screenshotOnRunFailure: false,
    video: false,
    specPattern: ["cypress/smoke.cy.ts", "cypress/e2e/**/*.cy.ts"],
    setupNodeEvents(on, config) {
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
        fileExists(filePath) {
          return fs.existsSync(filePath);
        },
      });

      return config;
    },
  },
});
