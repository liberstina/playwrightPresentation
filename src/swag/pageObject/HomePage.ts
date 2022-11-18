import mainData from "../../data";
import { expect, Page, Locator } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly loginBtn: Locator;
  readonly username: string;
  readonly password: string;
  readonly loginButton: string;

  constructor(page: Page) {
    this.page = page;
    this.logo = page.locator('//div[@class="login_logo"]');
    this.loginButton = '//input[@data-test="login-button"]';
    this.loginBtn = page.locator(this.loginButton);
    this.username = '//input[@data-test="username"]';
    this.password = '//input[@data-test="password"]';
  }

  async navigateToHome() {
    await this.page.goto(mainData.baseUrl);
  }

  async checkHomePageIsValid(){
    await expect (this.logo).toBeVisible();
  }

  async checkHomePageisGuestMode(){
    await expect (this.loginBtn).toBeVisible();
  }

  async login(username: string, password: string){
    await this.page.fill(this.username, username);
    await this.page.fill(this.password, password);
    await this.page.click(this.loginButton);
  }
}
