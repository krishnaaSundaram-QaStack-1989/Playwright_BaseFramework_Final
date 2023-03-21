/* To locally run the failed cases and verify the failed cases
*  example : 
Example - use forward slash 
npx playwright test ./regressionTests/tests/1_test.spec.ts --config=playwright2.config.ts --headed --project=chromium --debug --trace on
*/
import type { PlaywrightTestConfig } from "@playwright/test";
import devices from "@playwright/test";
import { testInputs } from "@testDatas/testData";
require("dotenv").config();
const config: PlaywrightTestConfig = {
    use: {
        actionTimeout: 15000,
        screenshot: "only-on-failure",
    },
    testDir: "./src/tests/",
    timeout: 60 * 1000,
    expect: {
        timeout: testInputs.waitTime.longWaits,
    },
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    //reporter: process.env.CI ? 'github' : [["html", { open: "on-failure", outputFolder: "automation-report" }]],
    reporter: [["html", { open: "on-failure", outputFolder: "automation-report" }]],
    //retries: 4,
    workers: process.env.CI ? 4 : undefined,
    projects: [
        {
            name: "chromium",
            use: {
                ...devices["Desktop Chrome"],
            },
        },
        {
            name: "firefox",
            use: {
                ...devices["Desktop Firefox"],
            },
        },
    ],
};
export default config;