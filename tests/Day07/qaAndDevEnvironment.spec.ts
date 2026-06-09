import { expect, test } from "@playwright/test";
import { ENV } from "../../config/env";

test("Go to Specific Environment", async ({ page }) => {
    await page.goto(ENV.CONNECTHQ_BASE_URL);
    console.log("Current URL:", page.url());
    await expect(page).toHaveURL(/qaconnecthq/);
    await page.waitForTimeout(3000);
})

