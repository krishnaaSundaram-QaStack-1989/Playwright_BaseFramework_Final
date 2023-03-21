import type { PlaywrightTestConfig } from "@playwright/test";
import devices from "@playwright/test";
import { testInputs } from "@testDatas/testData";
require("dotenv").config();
const config: PlaywrightTestConfig = {
  use: {
    actionTimeout: 15000,
    screenshot: "on",
  },
  testDir: "./src/tests/",
  timeout: 60 * 1000,
  expect: {
    timeout: testInputs.waitTime.mediumWaits,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 2,
  reportSlowTests: { max: 10, threshold: 60000 },
  repeatEach: 1,
  workers: process.env.CI ? 4 : undefined,
  reporter: [['line'], ['allure-playwright']],
  projects: [
    {
      name: "smokeTests",
      testDir: "src/tests/smokeTests",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "regressionTests",
      testDir: "src/tests/regressionTests",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
    {
      name: "New-flows",
      testDir: "src/tests/regressionTests/tests/",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
};
export default config;