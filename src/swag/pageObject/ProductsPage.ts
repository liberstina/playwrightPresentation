import mainData from "../../data";
import { expect, Page, Locator } from "@playwright/test";

export class ProductsPage {
  readonly page: Page;
  readonly title: Locator;


  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('//span[@class="title"]');
  }

  async checkProductPageOpened() {
    await expect (this.title).toBeVisible();
    await expect (this.title).toContainText('Products');
  }
}