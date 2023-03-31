import { Locator, Page } from "@playwright/test";
import { content } from "@testDatas/textContent";
export class login {

    readonly submit: Locator;
    readonly userName: Locator;
    readonly password: Locator;
    readonly appLogo: Locator;
    readonly forgotPwd: Locator;
    readonly backToLoginPage: Locator;
    readonly sendResetLink: Locator;
    readonly content1: Locator;
    readonly content2: Locator;
    readonly headername: Locator;
    readonly loginMail: Locator;
    readonly resetConfMsg: Locator;
    readonly loginPageToolTip: Locator;
    readonly warningMessagesverification1: Locator;
    readonly warningMessagesverification2: Locator;
    readonly invalidMail: Locator;
    constructor(page: Page) {
        this.invalidMail = page.locator('span.invalid-feedback');
        this.warningMessagesverification1 = page.locator('#email-error');
        this.warningMessagesverification2 = page.locator('#password-error');
        this.loginPageToolTip = page.getByRole('button').first();
        this.loginMail = page.locator('div input[type="email"]');
        this.sendResetLink = page.locator('div.form-group:nth-child(3)');
        this.resetConfMsg = page.locator('div.card-body').last();
        this.headername = page.locator('label[for="email"]').first();
        this.content1 = page.locator('div p').first();
        this.content2 = page.locator('div p').last();
        this.forgotPwd = page.locator('a[href*="password/reset"]');
        this.backToLoginPage = page.locator('a[href*="/login"]');
        this.appLogo = page.locator('img[src="/img/logo.png"]');
        this.userName = page.locator('input[id = "email"]');
        this.password = page.locator('input[id = "password"]');
        this.submit = page.locator('button[type="submit"]');
    }
}