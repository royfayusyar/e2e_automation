const { defineConfig } = require('cypress')

module.exports = defineConfig({
 e2e: {
   projectId: "8ke32t",
   chromeWebSecurity: false,
   baseUrl: 'https://www.saucedemo.com/',
   specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
   screenshotsFolder: "cypress/screenshots",
   screenshotOnRunFailure: false,
   videosFolder: "cypress/videos",
   video: true
  }

  
  
})

