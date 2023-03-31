import { Locator, Page } from "@playwright/test";
export class homePageElements {
    readonly popUpFrame_1: string;
    readonly popUpFrame_1_closeIcon: string;
    readonly closeIconInFrame: Locator;
    readonly timeSheetModule: Locator;
    readonly timesheetlabel: Locator;
    readonly wellnessModule: Locator;
    readonly SignUp: Locator;
    readonly SignUpLabel: Locator;
    readonly skillDevelopment: Locator;
    readonly rewardsModule: Locator;
    readonly dashboardModule: Locator;
    readonly MyActiveContractsViewAll: Locator;
    readonly RewardsViewAll: Locator;
    readonly Rewards_Image1: Locator;
    readonly Rewards_Image2: Locator;
    readonly WellnessViewAll: Locator;
    readonly SkillDevelopmentViewAll: Locator;
    readonly professionalProfile: Locator;
    readonly userSettings: Locator;
    readonly timesheetViewFromDashboard: Locator;
    readonly contractsLabel: Locator;
    readonly professionalProfileLabel: Locator;
    readonly userSettingsLabel: Locator;
    readonly UserSettingsFromDashboard: Locator;
    readonly userSettingsLabel2: Locator;
    readonly professionalProfileModule: Locator;
    readonly TermsAndConditions: Locator;
    readonly PrivacyStatement: Locator;
    readonly UserGuide: Locator;
    readonly ReleaseNotes: Locator;
    readonly UserGuideLabel: Locator;
    readonly contractsModule: Locator;
    readonly ReleaseNotesLabel: Locator;
    readonly termsAndConditionsLabel: Locator;
    readonly privacyStatementLabel: Locator;
    readonly termsAndConditionsCloseIcon: Locator;
    readonly TermsAndConditionsIframe: any;
    /**
     * Sections in dashboard
     */
    readonly proProfile_TextInfo_1: Locator;
    readonly proProfile_TextInfo_2: Locator;
    /**
     * upcoming contracts section
     */
    readonly upcomingContract_Header: Locator;
    readonly upcomingContracts_body: Locator;
    readonly upcomingContracts_bodyText: Locator;
    /**
     * I'm available from section in dashboard
     */
    readonly ImAvailableFrom_prevMonth: Locator;
    readonly ImAvailableFrom_nextMonth: Locator;
    readonly ImAvailableFrom_selectDate: Locator;
    readonly ImAvailableFrom_resetDatefield: Locator;
    readonly ImAvailableFrom_info1: Locator;
    readonly ImAvailableFrom_Icon: Locator;
    readonly ImAvailableFrom_datefield: Locator;
    //readonly newDateSelected:Locator;
    //readonly resetDate:Locator;
    /**
     * "New offer/extension section
     */
    readonly newOfferExtension_Header: Locator;
    readonly newOfferExtension_body: Locator;
    readonly newOfferExtension_bodyText: Locator;
    /**
     * logout - usersettings - notifications - engage name panel
     */
    readonly engageNamePanelInDashboard: Locator;
    readonly userSettingsNearLogOut: Locator;
    readonly logout: Locator;
    /**
     * wellness section
     */
    readonly wellnessLeftArrow: Locator;
    readonly wellnessRightArrow: Locator;
    readonly wellness_article_1: Locator;
    readonly wellness_article_2: Locator;
    /**
       * rewards section
       */
    readonly rewards_Header: Locator;
    readonly rewards_RightArrow: Locator;
    readonly rewards_LeftArrow: Locator;
    constructor(page: Page) {
        this.Rewards_Image1 = page.locator('.reward-img').first();
        this.Rewards_Image2 = page.locator('div:nth-child(2) > .reward-article > div > .reward-img');
        this.rewards_LeftArrow = page.locator('.bg-white > .horizontal-scroll-container > div').first();
        this.rewards_Header = page.locator('p:has-text("Rewards")');
        this.rewards_RightArrow = page.locator('.bg-white > .horizontal-scroll-container > div:nth-child(3)').first();
        this.ImAvailableFrom_prevMonth = page.locator('.flatpickr-prev-month');
        this.ImAvailableFrom_nextMonth = page.locator('.flatpickr-next-month');
        this.ImAvailableFrom_selectDate = page.locator('span:nth-child(9)');
        this.ImAvailableFrom_resetDatefield = page.locator('span:has-text("14")').nth(2);
        this.ImAvailableFrom_Icon = page.locator('.available-from > div > img');
        this.ImAvailableFrom_datefield = page.locator('input[type="text"]');
        this.ImAvailableFrom_info1 = page.getByText('I’m Available from');
        this.engageNamePanelInDashboard = page.getByRole('link', { name: 'Dashboard' });
        this.userSettingsNearLogOut = page.getByRole('link', { name: 'Peter' });
        this.logout = page.getByRole('link', { name: 'Logout' });
        this.wellness_article_1 = page.locator('.wellness-article').first();
        this.wellness_article_2 = page.locator('div:nth-child(2) > .wellness-article');
        this.wellnessRightArrow = page.locator('i[class="fas fa-chevron-right"]').last();
        this.wellnessLeftArrow = page.locator('i[class="fas fa-chevron-left"]').last();
        this.upcomingContract_Header = page.locator('.col-lg-4 > div:nth-child(2) > .d-flex').first();
        this.upcomingContracts_body = page.getByRole('main').locator('div:has-text("No upcoming contracts yet")').nth(3);
        this.upcomingContracts_bodyText = page.getByRole('heading', { name: 'No upcoming contracts yet' });
        this.newOfferExtension_Header = page.getByText('New Offer/ extension for you!');
        this.newOfferExtension_body = page.getByRole('main').locator('div:has-text("No offer/extension yet")').nth(3);
        this.newOfferExtension_bodyText = page.getByRole('heading', { name: 'No offer/extension yet' });
        this.TermsAndConditions = page.locator('a[data-type="terms"]').first();
        this.proProfile_TextInfo_2 = page.getByRole('main').locator('div:has-text("My Professional profile")').nth(3);
        this.proProfile_TextInfo_1 = page.getByRole('main').locator('div:has-text("% complete")').nth(3);
        this.PrivacyStatement = page.locator('a[data-type="privacy"]').first();
        this.UserGuide = page.locator('a[data-type="user-guide"]');
        this.ReleaseNotes = page.locator('a[data-type="release-note"]');
        this.timeSheetModule = page.locator("a[href*='timesheets']").first();
        this.UserGuideLabel = page.locator('.text-blue > h3:nth-child(1)');
        this.ReleaseNotesLabel = page.locator('.text-blue > h3:nth-child(1)');
        this.termsAndConditionsLabel = page.locator('.text-blue > h3:nth-child(1)');
        this.termsAndConditionsCloseIcon = page.locator('button img[src*="cancel"]');
        this.privacyStatementLabel = page.locator('.text-blue > h3:nth-child(1)');
        this.SignUpLabel = page.locator('.mt-3 > h3:nth-child(1)');
        this.SignUp = page.locator('div a[data-type="sign-up-guide"]');
        this.contractsLabel = page.locator('h1.mb-0');
        this.contractsModule = page.locator('ul li a img[src*= "contracts"]');
        this.professionalProfileModule = page.locator('ul li a img[src*= "professional-profile"]');
        this.professionalProfileLabel = page.locator('.white-bg');
        this.userSettingsLabel2 = page.locator('text=Personal Details');
        this.MyActiveContractsViewAll = page.locator('.text-bluewin');
        this.UserSettingsFromDashboard = page.locator('ul li a[href*="user/settings"]').last();
        this.professionalProfile = page.locator('.professional-profile');
        this.userSettingsLabel = page.locator('h1.mb-0');
        this.RewardsViewAll = page.locator('a[href="/rewards"]');
        this.SkillDevelopmentViewAll = page.locator('a[href="/skill-development"]');
        this.WellnessViewAll = page.locator('a[href="/articles"]');
        this.userSettings = page.locator('ul li:nth-child(1) a[href*="user/settings"]');
        this.timesheetViewFromDashboard = page.locator('a[href*="timesheet"][class="non-link"]').first();
        this.timesheetlabel = page.locator('h1.mb-0');
        this.rewardsModule = page.locator('ul li a img[src*= "rewards"]');
        this.dashboardModule = page.locator('ul li a img[src*= "dashboard"]');
        this.skillDevelopment = page.locator('ul li a img[src*= "skill-development"]');
        this.popUpFrame_1 = "#wfx-frame-popup";
        this.popUpFrame_1_closeIcon =
            '[aria-label="Click on Close Icon to close the popup"]';
        this.closeIconInFrame = page
            .frameLocator(this.popUpFrame_1)
            .locator(this.popUpFrame_1_closeIcon);
        this.wellnessModule = page.locator(
            'ul li a img[src*= "wellness"]'
        );
    }
}