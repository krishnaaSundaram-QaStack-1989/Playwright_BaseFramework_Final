import { expect, Locator, Page } from "@playwright/test";
import { waitTime } from "@testDatas/time";

export class WebActions {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  /*
   * This methods help to navigate any webpage url 
   */
  async navigateToURL(url: string): Promise<void> {
    await this.page.goto(url, {
      timeout: waitTime.extendedLongWaits,
      waitUntil: "domcontentloaded",
    });
  }

  /*
   * This methods help to check the lables names and Text verification exactly matching with data 
   */

  async checkLabels(locator: any, text: string | RegExp, customeMessage: string): Promise<void> {
    await expect.soft(locator, customeMessage).toHaveText(text);
  }

  /*
   * This methods help to click on any webElement in page
   */
  async clickElement(locator: any): Promise<void> {
    await this.elementVisibilityCheck(locator);
    await locator.click({ timeout: waitTime.extendedLongWaits });
  }

  /*
   * This methods help to compare the compare two screens 
   */
  async compareScreenshots(locator: Locator): Promise<void> {
    await expect.soft(locator, "Image Assertion failed : " + locator).toHaveScreenshot();
  }

  /*
   * This methods help to check the element is present in the web page
   */
  async checkElementPresence(locator: string): Promise<void> {
    await this.page
      .locator(locator)
      .waitFor({ state: "attached", timeout: waitTime.mediumWaits });
  }

  /*
   * This methods help to enter the text into text box
   */
  async enterElementText(locator: any, text: any): Promise<void> {
    await this.elementVisibilityCheck(locator);
    await locator.fill(text, { timeout: waitTime.mediumWaits });
  }

  /*
   * This methods help to check the element locator visiable on webpage
   */
  async elementVisibilityCheck(locator: any): Promise<void> {
    await expect(locator, "checking element visibility failed " + locator).toBeVisible({
      timeout: waitTime.extendedLongWaits,
    });
  }

  /*
   * This methods help to check the current page url ,Verify the page url is correct with testdata
   */
  async checkCurrentPageUrl(
    text: string | RegExp,
    assertionType: "url" | "title",
    customeMessage: string
  ): Promise<void> {
    if ((assertionType = "url")) {
      await expect.soft(this.page, customeMessage).toHaveURL(text);
    }
    else if ((assertionType = "title")) {
      await expect.soft(this.page, customeMessage).toHaveTitle(text);
    }
  }

  /*
   * checks current page url
   */
  async checkCurrentUrl(text: string | RegExp, customeMessage: string): Promise<void> {
    await expect.soft(this.page, customeMessage).toHaveURL(text);
  }


  /*
   * This methods help to check the lables names and Text verification exactly matching with data
   */
  async checkLabelsOrTextContent(locator: any, text: string | RegExp, customeMessage: string): Promise<void> {
    await expect.soft(locator, customeMessage).toHaveText(text, { timeout: waitTime.longWaits });
  }

  /*
   * This methods help to check the lables names and Text verification partial matching with data
   */

  async checkPartialTextContent(locator: any, text: string | RegExp, customeMessage: string): Promise<void> {
    await expect.soft(locator, customeMessage).toContainText(text, { timeout: waitTime.extendedLongWaits });
  }

  /*
   * This methods help to check the Webelement ready for intteraction before perfrom action on the element
   */
  async confirmElementIsReadyForInteraction(locator: any | Locator) {
    await locator.waitFor({
      state: "attached",
      timeout: waitTime.longWaits,
    });

    await locator.waitFor({
      state: "visible",
      timeout: waitTime.longWaits,
    });
  }

  /*
   * This methods help to check the Webelement Visible on Webpage before perform action on the element
   */
  async checkElementVisibility(locator: any | Locator) {

    await locator.waitFor({
      state: "visible",
      timeout: waitTime.longWaits,
    });
  }

  /*
   * This methods help to check the webelement is ready for interaction and perform the click operation
   */
  async confirmAndClickElement(locator: any | Locator, timeouts: any | null) {
    await this.confirmElementIsReadyForInteraction(locator);
    await locator.click({ timeout: timeouts });
  }

  /*
   * This methods help to check the webelement is ready for interaction and Enter the data into the textfields
   */
  async confirmAndEnterInputs(locator: any, text: any, timeouts: null | Number): Promise<void> {
    await this.confirmElementIsReadyForInteraction(locator);
    await locator.fill(text, { timeout: timeouts });
  }

  /*
   * This methods help to check the webelement is hidden in the webpage
   */

  async waitForElementInvisibility(locator: any | Locator) {
    await locator.waitFor({
      state: "hidden",
      timeout: waitTime.longWaits,
    });
  }

  /**
   * uploads a sample file from our repository
   * ensure the upload file is present in your repository
   */
  async uploadDefaultFile(): Promise<void> {
    await this.page
      .locator('input[name="file"]')
      .setInputFiles("src/attachments/Test evidence.png");
  }

  /**
   * Preferred method for entering inputs 
   */
  async clearAndEnterInputs(locator: any, text: string | number, timeouts: null | Number) {
    await this.confirmAndEnterInputs(locator, '', timeouts);
    await this.confirmAndEnterInputs(locator, text, timeouts);
  }

  /*
   * This methods help to check the webelement contains text and validate with data
   */
  async verifyElementContainsText(locator: any, text: string): Promise<void> {
    await this.elementVisibilityCheck(locator);
    await expect(locator).toContainText(text);
  }

  /*
   * This methods help to click or input values on frame pop up
   */

  async goToFrameAndPerformOperations(
    frameLocator: string,
    locator: string,
    operation: "click" | "input values",
    inputValues: string | null,
    timeTowait: number
  ) {
    if (operation == "click") {
      await this.page
        .frameLocator(frameLocator)
        .locator(locator)
        .click({ timeout: timeTowait });
    } else if (operation == "input values" && inputValues == null) {
      await this.page
        .frameLocator(frameLocator)
        .locator(locator)
        //@ts-expect-error
        .fill(inputValues);
    }
  }

}
