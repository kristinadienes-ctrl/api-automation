require('dotenv').config();
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 30000,
  retries: 1,
  use: {
    baseURL: process.env.BASE_URL,
    extraHTTPHeaders: {
      'x-api-key': process.env.API_KEY,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  },
  reporter: [['html', { open: 'never' }]],
});
