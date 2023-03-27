// For date functions use below 2 lines of code
// import { testInputs } from "@testDatas/testData"; -- value not used
// import { waitTime } from "@testDatas/time"; -- value not used
// page, WebActions and proProfile are declared as part of typescript configuration
import { Page } from "@playwright/test";
import { WebActions } from "@lib/WebActions";
import { proProfile } from "./pageElementsList/proProfile"; // Step 1 --- Locator element List called 
require("dotenv").config(); // dotenv dependencies to be installed
let webActions: WebActions;
let proPro: proProfile; // Step 2 --- Locator element declared as a variable with classname
export class professionalProfilePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
    proPro = new proProfile(this.page); // Step 3 --- Declared variable is called in constructor 
    webActions = new WebActions(this.page);
  }
  async verifyProfessionalProfilePage(): Promise<void> {
    // Step 4 --- Now we can access all list of elements in the given page 
    await webActions.checkElementVisibility(proPro.heading1);
    await webActions.checkElementVisibility(proPro.heading2);
    await webActions.checkElementVisibility(proPro.heading3);
    await webActions.checkElementVisibility(proPro.heading4);
    await webActions.checkElementVisibility(proPro.heading5);
  }
}
