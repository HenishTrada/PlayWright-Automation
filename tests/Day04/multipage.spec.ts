import { test, BrowserContext } from "@playwright/test";

test("Multiple page Handler", async ({ browser }) => {
    test.setTimeout(60000);
    const context = await browser.newContext();
    const page =await context.newPage();

    await page.goto("https://www.geeksforgeeks.org/reactjs/next-js-playwright-testing/");

    const pagePromise = context.waitForEvent("page");
    await page.locator(`li[value="1"] a`).click();
    const newPage = await pagePromise;

    await newPage.waitForLoadState();
    await newPage.locator('#ArticlePageMoreInfoNextArticleComponent_bottomCommentButton__O9Jyw').click();

    const feedBackField = newPage.frameLocator('iframe#gfg_post_1107997_ifr').locator(`html`).locator(".mce-content-body ");
    await feedBackField.fill("Well explaination");
    await newPage.locator('.submit_btn').click();
    await newPage.close();

    await page.locator('#ArticlePageMoreInfoNextArticleComponent_bottomCommentButton__O9Jyw').click();
    const feedBackField_2 = page.frameLocator('iframe#gfg_post_1284674_ifr').locator(`html`).locator(".mce-content-body ");
    await feedBackField_2.fill("Well explaination");
    await page.locator('.submit_btn').click();

    await page.waitForTimeout(2000);
});