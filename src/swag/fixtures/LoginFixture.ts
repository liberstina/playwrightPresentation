import { test as base } from '@playwright/test';
import { HomePage } from "../pageObject/HomePage";
import { ProductsPage } from '../pageObject/ProductsPage';

 type LoginOptions = {
  username: string,
  password: string
}

type LoginFixture = {
    homePage: HomePage,
    productsPage: ProductsPage
  };

 export const test = base.extend<LoginOptions & LoginFixture>({

    homePage: async ({page}, use) => {
      const username = 'problem_user';
      const password = 'secret_sauce';
      const homePage = new HomePage(page);
      homePage.navigateToHome();
      homePage.checkHomePageisGuestMode()
      homePage.login(username, password)
      await use(homePage);
  }, 

  productsPage: async ({page}, use) => {
    const productsPage = new ProductsPage(page);
    productsPage.checkProductPageOpened();   
  }
  })

export const expect = test.expect;