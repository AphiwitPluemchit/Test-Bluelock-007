require("dotenv").config();
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || "http://localhost:9000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
