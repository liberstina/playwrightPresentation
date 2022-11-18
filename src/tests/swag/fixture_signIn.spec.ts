//fixture_signIn.spec.ts
import { test, expect } from "../../swag/fixtures/LoginFixture";
import { HomePage } from "../../swag/pageObject/HomePage";
import { ProductsPage } from "../../swag/pageObject/ProductsPage";
import { Header } from "../../playwright/pageObject/Header";

test("login as a test user using fixture", async ({ homePage, page }) => {
  const productsPage = new ProductsPage(page);
  await productsPage.checkProductPageOpened();
});