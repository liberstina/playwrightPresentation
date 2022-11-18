import data from '../../data';
import { expect, Page, Locator  } from '@playwright/test';

export class Header {

    readonly page: Page;
    readonly searchField: Locator;    
    readonly searchPanel: Locator;  
    readonly annotationsSection: Locator; 

    constructor(page: Page) {
        this.page = page;
        this.searchField = page.locator("//span[text()='Search']");
        this.searchPanel = page.locator("//input[@id='docsearch-input']");
        this.annotationsSection = page.locator("//a[@href='/docs/test-annotations']")
    }  

    async searchByKeyword(keyword: string){
        await this.searchField.click();
        await this.searchPanel.fill(keyword);
        expect(this.annotationsSection).toBeVisible;
    }
}