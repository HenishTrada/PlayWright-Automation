import { test } from "@playwright/test";
import { AmazonHomePage } from "../../pages/AmazonHomePage";
import { ProductPage } from "../../pages/ProductPage";
import { Cartpage } from "../../pages/CartPage";

test("Search Product Item", async ({page}) => {

  const searchProduct = new AmazonHomePage(page);
  const productDetail = new ProductPage(page);
  const cartDetail = new Cartpage(page);
  await searchProduct.amazonURL();

  await searchProduct.searchingProduct("iphone");
  
  await productDetail.selectingDeliveryTime();
  await productDetail.selectFreeDelivery()

  await productDetail.addProductToCart();

  await productDetail.openCartPage();

  await page.waitForTimeout(3000);

  await cartDetail.enableGiftCheckBox();
  await cartDetail.increaseCartItem();

  await page.waitForTimeout(2000);
  await cartDetail.proceedingToCheckout();

})