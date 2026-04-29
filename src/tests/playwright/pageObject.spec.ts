//pageObject.spec.ts
import { test, expect } from "@playwright/test";
import { Home } from "../../playwright/pageObject/Home";
import { Intro } from "../../playwright/pageObject/Intro";
import { Header } from "../../playwright/pageObject/Header";

test("homepage has Playwright in title and get started link linking to the intro page", async ({
  page,
}) => {
  const homePage = new Home(page);
  const intro = new Intro(page);

  await homePage.navigateToHome();
  await homePage.clickGetStarted();
  await intro.checkIntroIsOpened();
  await expect(page).toHaveURL(/.*intro/);
});

test("search in Playwright", async ({ page }) => {
  const homePage = new Home(page);
  const header = new Header(page);

  await homePage.navigateToHome();
  await header.searchByKeyword("annotations");
});
