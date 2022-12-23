const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qnk5xy',
  e2e: {
    setupNodeEvents(on, config) {
     
    }, baseUrl:"https://buger-eats-qa.vercel.app" }, viewportWidth: 1440, viewportHeight: 900, /*1440,900 */
  
  });

