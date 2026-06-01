import { expect, test } from "@playwright/test";
 
test("login Flow", async ({page}) => {
     test.setTimeout(90000);
  
    await page.goto("https://www.ikea.com/in/en/");
 
    //using class locator strategy
    const cookiesBanner = page.locator(".ot-sdk-row");
 
    //using getByRole locator strategy
    if(await cookiesBanner.isVisible()) {
        await cookiesBanner.getByRole("button", { name: "Ok", exact: true }).click();
    }
 
    //using tag[attribute="value"] and getByText locator strategy
    await page.locator("nav[aria-label='Shopping links']").getByText("Log in").click();
 
    //using getByLabel locator strategy
    const emailInput = page.getByLabel("Email or Verified Mobile Number");
    await expect(emailInput).toBeVisible();
    await emailInput.fill("tradahenish94@gmail.com");

    const passwordInput = page.getByLabel("Password");
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill("HeNiSh94");
 
    //using id locator strategy
    await page.locator("#submitButton").click();
 
    //Further due to bot security reasons, we cannot automate the complete process, so we will stop the test here.
 
});
 
test("search for a product", async ({page}) => {
 
    await page.goto("https://www.ikea.com/in/en/");
 
     const cookiesBanner = page.locator(".ot-sdk-row");
 
    //using getByRole locator strategy
    if(await cookiesBanner.isVisible()) {
        await cookiesBanner.getByRole("button", { name: "Ok", exact: true }).click();
    }
 
    const seachBar = page.locator(".search-box-container");
 
    //using getByPlaceholder locator strategy
    await seachBar.getByPlaceholder("What are you looking for?").fill("Sofa");
    
    //using getByText locator strategy
    await page.locator("ol[aria-label='Search suggestions']").getByText("cum bed").click();
 
    const productCard =  page.locator('[data-testid="plp-product-card"]');
    await productCard.first().waitFor();
 
    //using nth locator strategy - add product to favourite list
    await productCard.nth(0).locator("svg").nth(2).click();
 
    //using filter to search for a specific product
    await productCard.filter({hasText: 'FRIDHULT, Sofa-bed, Skiftebo yellow' }).getByRole("checkbox").check();
    await productCard.nth(1).getByLabel("Compare").click();
 
    await page.locator('#plp-comparison-bar').getByRole('link', { name: 'Compare products' }).click();
 
    await page.waitForTimeout(5000);
});