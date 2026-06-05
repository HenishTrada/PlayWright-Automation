import { test } from "../../fixtures/BaseFixture";
import { ENV } from "../../config/env"


test("Search Product Item", async ({ page, amazonHomePage, cartPage, productPage }) => {

  await amazonHomePage.amazonURL();

  await amazonHomePage.searchingProduct(ENV.PRODUCT_NAME);
  
  await productPage.selectingDeliveryTime();
  await productPage.selectFreeDelivery()
  await productPage.addProductToCart();
  await productPage.openCartPage();

  await page.waitForTimeout(3000);

  await cartPage.enableGiftCheckBox();
  await cartPage.increaseCartItem();

  await page.waitForTimeout(2000);
  await cartPage.proceedingToCheckout();

})