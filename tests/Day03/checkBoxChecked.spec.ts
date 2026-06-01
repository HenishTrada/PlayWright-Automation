import { test, type Page, expect } from "@playwright/test";


async function cookieHandler(page: Page) {

    const cookiesBanner = page.locator(".ot-sdk-row");

    //using getByRole locator strategy
    if (await cookiesBanner.isVisible()) {
        await cookiesBanner.getByRole("button", { name: "Ok", exact: true }).click();
    }
}

test("Check Box Checked", async ({ page }) => {
    await page.goto("https://www.ikea.com/in/en/");

    await cookieHandler(page);

    const productCards = page.locator('.hri-teaser__content');
    await productCards.first().waitFor();

    await page.locator(".hri-compact-card__title").filter({ hasText: 'Outdoor furniture' }).click();

    const heading = page.getByRole("heading", { name: "outdoor furniture", level: 1 });
    await heading.waitFor({ state: "visible" });

    //using getByTestId locator and check() to check the checkbox
    const checkBox_TopSeller = page.locator('.plp-filter-side-bar').getByTestId("plp-checkbox-label-TOP_SELLER");
    await checkBox_TopSeller.check();

    //using toBeChecked assertion to verify that the checkbox is checked
    await expect(checkBox_TopSeller).toBeChecked();
    await page.waitForTimeout(2000);

    const checkBox_lastChance = page.locator('.plp-filter-side-bar').getByTestId("plp-checkbox-label-LAST_CHANCE");
    await checkBox_lastChance.check();


    await expect(checkBox_lastChance).toBeChecked();
    await checkBox_TopSeller.uncheck();

    await expect(checkBox_TopSeller).not.toBeChecked();

    await page.waitForTimeout(2000);

});

test("Check Box Checked - Negative Scenario", async ({ page }) => {
    await page.goto("https://www.ikea.com/in/en/");

    await cookieHandler(page);

    const productCards = page.locator('.hri-teaser__content');
    await productCards.first().waitFor();

    await page.locator(".hri-compact-card__title").filter({ hasText: 'Outdoor furniture' }).click();

    const heading = page.getByRole("heading", { name: "outdoor furniture", level: 1 });
    await heading.waitFor({ state: "visible" });

    //using getByTestId locator and check() to check the checkbox
    const checkBox_TopSeller = page.locator('.plp-filter-side-bar').getByTestId("plp-checkbox-label-TOP_SELLER");
    await checkBox_TopSeller.check();

    //using toBeChecked assertion to verify that the checkbox is checked
    await expect(checkBox_TopSeller).toBeChecked();
    await page.waitForTimeout(2000);

    const checkBox_specialPrice = page.locator('.plp-filter-side-bar').getByTestId("plp-checkbox-label-SPECIAL_PRICE");
    await checkBox_specialPrice.check();


    await expect(checkBox_specialPrice).not.toBeChecked();

    await page.waitForTimeout(2000);
});

test("Check Box Checked - 2", async ({ page }) => {
    await page.goto("https://www.flipkart.com/");

     const loginPop = page.locator(".q7ywiQ");

    if (await loginPop.isVisible()) {
        await loginPop.getByRole('button', { name: '✕' }).click();
    }

    const searchBar = page.getByPlaceholder('Search for Products, Brands and More').first();
    await searchBar.fill("mobile");
    await searchBar.press("Enter");

    await page.waitForTimeout(2000);
});