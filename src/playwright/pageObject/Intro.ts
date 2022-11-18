import data from '../../data';
import { expect, Page, Locator  } from '@playwright/test';

export class Intro {

    readonly page: Page;
    readonly installationTitle: Locator;    

constructor(page: Page) {
    this.page = page;
    this.installationTitle = page.locator("header h1:has-text('Installation')")
}

async checkIntroIsOpened(){
    await expect(this.installationTitle).toBeVisible();
}
}

