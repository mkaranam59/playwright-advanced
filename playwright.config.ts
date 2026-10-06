import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,          // fail the build if someone left test.only in
  retries: process.env.CI ? 2 : 0,       // retry flaky tests, on CI only
  workers: process.env.CI ? 1 : undefined, // one worker on CI: steadier on small machines
  reporter: process.env.CI
    ? [['github'], ['html', { open: 'never' }]]   // red annotations + HTML report
    : 'html',
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on-first-retry',             // record a trace when a test is retried
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
});