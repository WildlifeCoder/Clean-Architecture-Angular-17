import { devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: '*.spec.ts',
  reporter: [
    ['list'],
    ['junit', { outputFile: 'reports/xmlReport/results.xml' }],
    ['json', { outputFile: 'reports/jsonReport/results.json' }],
    ['html', { outputFolder: 'reports/htmlReport', open: 'never' }],
  ],
  timeout: 60000,
  retries: 3,
  fullyParallel: false,
  workers: 3,
  use: {
    ignoreHTTPSErrors: true,
    headless: false,
    screenshot: 'on',
    video: 'off',
    trace: 'on',
    launchOptions: {
      slowMo: 50,
    },
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
};
export default config;
