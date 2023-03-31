import { Locator, Page } from "@playwright/test";
// import { content } from "@testDatas/textContent";
import { WebActions } from "@lib/WebActions";
import { waitTime } from "@testDatas/time";
import { login } from "./pageElementsList/loginScreen";
//import { testInputs } from "@testDatas/testData";
require("dotenv").config();
let webActions: WebActions;
let lp: login;
export class loginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
    webActions = new WebActions(this.page);
    lp = new login(this.page);
  }
  async navigateToURL(url: any): Promise<void> {
    await this.page.goto(url, {
      timeout: waitTime.extendedLongWaits,
      waitUntil: "domcontentloaded"
    });
  }
  async navigateToApp(): Promise<void> {
    await this.navigateToURL(process.env.url);
  }
  async loginToApplication(): Promise<void> {
    await webActions.elementVisibilityCheck(lp.appLogo);
    await webActions.enterElementText(lp.userName, process.env.uname);
    await webActions.enterElementText(lp.password, process.env.pwd);
    await webActions.clickElement(lp.submit);
  }
  async loginToApp(uname: String): Promise<void> {
    await webActions.elementVisibilityCheck(lp.appLogo);
    await webActions.enterElementText(lp.userName, uname);
    await webActions.enterElementText(lp.password, process.env.pwd);
    await webActions.clickElement(lp.submit);
  }
  async resetPasswordWithNewMailID(): Promise<void> {
    await webActions.confirmElementIsReadyForInteraction(lp.forgotPwd);
    await lp.forgotPwd.click({ timeout: waitTime.mediumWaits });
    await webActions.confirmElementIsReadyForInteraction(lp.loginMail);
    await webActions.enterElementText(lp.loginMail, process.env.uname);
    await webActions.confirmElementIsReadyForInteraction(lp.sendResetLink);
    await lp.sendResetLink.click({ timeout: waitTime.mediumWaits });
    await webActions.confirmElementIsReadyForInteraction(lp.resetConfMsg);
  }
}