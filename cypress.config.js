require("dotenv").config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.VITE_APP_URL || "http://localhost:9000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      VITE_APP_URL: process.env.VITE_APP_URL || "http://localhost:9000",
    },
  },
});
