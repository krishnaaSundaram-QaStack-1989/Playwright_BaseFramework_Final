/**
 * This is an example of having locators in a class with constructor defined 
 * This is the best approach for maintanance purpose
 */
import { Locator, Page } from "@playwright/test";
export class proProfile {
    readonly heading1: Locator;
    readonly heading2: Locator;
    readonly heading3: Locator;
    readonly heading4: Locator;
    readonly heading5: Locator;
    readonly LocatorName: Locator; // This is an example 
    constructor(page: Page) {
        this.heading1 = page.getByRole('heading', { name: 'xxx Preferences' });
        this.heading2 = page.getByRole('heading', { name: 'Qualify' });
        this.heading3 = page.getByRole('heading', { name: 'Skill' });
        this.heading4 = page.getByRole('heading', { name: 'Work Exp' });
        this.heading5 = page.getByRole('heading', { name: 'Clearance' });
        this.LocatorName = page.locator('.card-body').first(); // This is an example  we're using indexing
    }
}