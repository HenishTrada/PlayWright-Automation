import { mergeTests } from "@playwright/test";

import { test as amazonHomePage } from "./AmazonHomePageFixure";
import { test as cartPage } from "./CartPageFixture"; 
import { test as productPage } from "./ProductPageFixture";

export const test = mergeTests(amazonHomePage, cartPage, productPage);

export { expect } from "@playwright/test";