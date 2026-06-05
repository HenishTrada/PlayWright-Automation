import { test as base } from "@playwright/test";
import { Cartpage } from "../pages/CartPage";

type CartFixtures = {
  cartPage: Cartpage;
};

export const test = base.extend<CartFixtures>({
  cartPage: async ({ page }, use) => {
    const cartPage = new Cartpage(page);

    await use(cartPage);
  },
}); 

export { expect } from "@playwright/test";