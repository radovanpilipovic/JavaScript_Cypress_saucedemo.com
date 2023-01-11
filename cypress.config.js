const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    video: false,
    screenshotOnRunFailure: false,
    env:
    {
        url: "https://saucedemo.com/",
        standard_user: "standard_user",
        password: "secret_sauce"
    },
  },
});
