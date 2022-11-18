import data from '../../data';
import { expect, Page, Locator  } from '@playwright/test';
import mainData from '../../data';

export class Home {

    readonly page: Page;
    readonly getStartedBtn: Locator;    

constructor(page: Page) {
    this.page = page;
    this.getStartedBtn = page.locator('a', { hasText: 'Get started' });
}

async clickGetStarted(){
    await this.getStartedBtn.click();
}

async navigateToHome(){
    await this.page.goto(mainData.playwrightUrl);
    await expect(this.getStartedBtn).toBeVisible();
}

}

