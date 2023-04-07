/**
 * Test Scenarios covered
 * -----------------------
 * we use try and catch to click and close a pop up window if its available 
 * else we catch the error
 */

import { test, Page } from "@playwright/test";
import { loginPage } from "src/pages/loginPage";
require("dotenv").config();

test.describe.configure({ mode: "serial" });

let page: Page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    const lp = new loginPage(page);
    await lp.navigateToApp();
});

test.afterAll(async () => {
    await page.close();
});

test('Test case 1 - close a pop up window if its open ', async () => {
    const lp = new loginPage(page);
    // 2 times we're trying to close this pop up window 
    // if no pop up are present then we catch the error 
    try {
        await lp.closepopUpwindow(); // this is a dummy method not present actually
    } catch (error) {
        console.log("issues closing pop up window" + error);
    }

    try {
        await lp.closepopUpwindow(); // this is a dummy method not present actually
    } catch (error) {
        console.log("issues closing pop up window" + error);
    }
    await page.reload();
});
