
import { expect, Locator, Page } from "@playwright/test";
import { testInputs } from "../testDatas/testData";
import { WebActions } from "@lib/WebActions";
// currently below are not used 
/* import { content } from "@testDatas/textContent";
import { waitTime } from "@testDatas/time";
import { professionalProfilePage } from "./professionalProfilePage"; */
import { homePageElements } from "./pageElementsList/dashboard";
let webActions: WebActions;
let db: homePageElements;
export class homepage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
    webActions = new WebActions(this.page);
    db = new homePageElements(this.page);
  }
  async closePopUpWindow(): Promise<void> {
    await webActions.confirmElementIsReadyForInteraction(db.closeIconInFrame);
    await db.closeIconInFrame.click({
      timeout: testInputs.waitTime.extendedLongWaits,
    });
  }
  async openProfessionalProfileModule(): Promise<void> {
    await webActions.confirmElementIsReadyForInteraction(db.professionalProfileModule);
    await db.professionalProfileModule.click({ timeout: testInputs.waitTime.mediumWaits });
  }
}
