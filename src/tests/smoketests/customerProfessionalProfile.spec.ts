/**
   Scenarios Covered
   ***************** 
 * Open and verify professional profile module 
 */
import { test, Page } from "@playwright/test";
// import { allure } from "allure-playwright/dist/helpers"; -- do npm install and uncomment this
import { professionalProfilePage } from "src/pages/professionalProfilePage";
import { homepage } from "src/pages/homePage";
import { loginPage } from "src/pages/loginPage";
test.describe.configure({ mode: "serial" })
let userStory = "Update your userstory here"; // -- This will be used in the allure reporting 

let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage(); // invoke the page before test starts
});

test.afterAll(async () => {
  await page.close(); // close page after all the test run 
});
/**
 * @testTagName - see in playwright this is used for running targetted tests
 * Const... is used to call the page file 
 * 1 - import the dependency with  a variable then
 * 2 - use Const newVariable = new classNameofImportedFile(page)
 */
test("Test case 1 - @testTagName : Login to Engage application  ", async () => {
  allure.feature("Professional Profile");
  allure.tag("Smoke Tests");
  allure.description(userStory); // allure. are all tags for allure reporting 
  allure.severity(""); //values applicable - blocker, critical,  normal,  minor, trivial see
  // https://docs.qameta.io/allure/#_graphs anyother will cause error
  /**
   * In below loginPagePageActions - variable name
   * loginPage - class name
   * For any new import we have to call them in const with variable and class name
   * await is used as its an asynchronous test with async keyword used
   */
  const loginPagePageActions = new loginPage(page);
  await loginPagePageActions.navigateToApp();
  await loginPagePageActions.loginToApplication();
});

test("Test case 2 - @testTagName : open proProfile module ", async () => {
  allure.feature("Professional Profile");
  allure.tag("Smoke Tests");
  allure.description(userStory);
  allure.severity("critical");
  const homePage = new homepage(page);
  const proProfilePages = new professionalProfilePage(page);
  await homePage.openProfessionalProfileModule();
  await proProfilePages.verifyProfessionalProfilePage();
});

test("Test case 3 - @proProfile : verify proProfile section", async () => {
  allure.feature("Professional Profile");
  allure.tag("Smoke Tests"); // helps to know the type of test in allure report
  allure.description(userStory);
  const proProfilePages = new professionalProfilePage(page);
  await proProfilePages.verifyProfessionalProfilePage();
});