import { test, type Page, expect } from "@playwright/test";


async function cookieHandler(page: Page) {

    const cookiesBanner = page.locator(".ot-sdk-row");

    //using getByRole locator strategy
    if (await cookiesBanner.isVisible()) {
        await cookiesBanner.getByRole("button", { name: "Ok", exact: true }).click();
    }
}

// test("Check Box Checked", async ({ page }) => {
//     await page.goto("https://www.ikea.com/in/en/");

//     const cookiesBanner = page.locator(".ot-sdk-row");

//     //using getByRole locator strategy
//     await cookiesBanner.waitFor({ state: "visible", timeout: 5000 });
//     await cookiesBanner.getByRole("button", { name: "Ok", exact: true }).click();
//     await expect(cookiesBanner).toBeHidden({ timeout: 5000 });

//     // const productCards = page.locator('.hri-teaser__content');
//     // await productCards.first().waitFor();

//     // await page.locator(".hri-compact-card__title").filter({ hasText: 'Outdoor furniture' }).click();

//     // const heading = page.getByRole("heading", { name: "outdoor furniture", level: 1 });
//     // await heading.waitFor({ state: "visible" });
//     const searchPlaceholder = await page.getByPlaceholder('What are you looking for?');
//     await searchPlaceholder.fill("old furniture");
//     await expect(searchPlaceholder).toHaveValue("old furniture");
//     await searchPlaceholder.press("Enter");

//     //using getByTestId locator and check() to check the checkbox
//     const checkBox_TopSeller = page.locator('.plp-filter-side-bar').getByTestId("plp-checkbox-label-TOP_SELLER");
//     await checkBox_TopSeller.check();

//     //using toBeChecked assertion to verify that the checkbox is checked
//     await expect(checkBox_TopSeller).toBeChecked();
//     await page.waitForTimeout(2000);

//     const checkBox_lastChance = page.locator('.plp-filter-side-bar').getByTestId("plp-checkbox-label-LAST_CHANCE");
//     await checkBox_lastChance.check();


//     await expect(checkBox_lastChance).toBeChecked();
//     await checkBox_TopSeller.uncheck();

//     await expect(checkBox_TopSeller).not.toBeChecked();

//     await page.waitForTimeout(2000);

// });

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