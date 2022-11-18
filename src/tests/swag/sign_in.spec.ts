//sign_in.spec.ts
import { test, expect } from "@playwright/test";
import { HomePage } from "../../swag/pageObject/HomePage";
import { ProductsPage } from "../../swag/pageObject/ProductsPage";
import { Header } from "../../playwright/pageObject/Header";
import mainData from "../../data";

test("homepage is in a guest mode and has correct logo", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToHome();
  await homePage.checkHomePageIsValid();
  await homePage.checkHomePageisGuestMode();

});

test("login as a test user", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateToHome();
  await homePage.login(mainData.username, mainData.password);

  const productsPage = new ProductsPage(page);
  await productsPage.checkProductPageOpened();
  await page.screenshot({path: 'screenshot.png'});
});