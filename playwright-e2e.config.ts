/* eslint-disable import/no-extraneous-dependencies */
import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  reporter: [['list'], ['junit', { outputFile: 'test-results/e2e.xml' }]],
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:3000/',
  },
  testDir: 'src/tests/e2e',
  webServer: {
    command: 'npm run dev',
    port: 3000,
    reuseExistingServer: !process.env.CI,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          ignoreDefaultArgs: ['--headless'],
          args: ['--headless=new'],
        },
      },
    },
  ],
};

export default config;
