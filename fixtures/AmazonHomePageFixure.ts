import { test as base } from "@playwright/test";
import { AmazonHomePage } from "../pages/AmazonHomePage";

type AmazonFixtures = {
  amazonHomePage: AmazonHomePage;
};

export const test = base.extend<AmazonFixtures>({
  amazonHomePage: async ({ page }, use) => {
    const amazonHomePage = new AmazonHomePage(page);
    await use(amazonHomePage);
  },
});

export { expect } from "@playwright/test";