import { test, expect } from "@playwright/test";

test("Soft Assertion", async ({page}) => {
    await page.goto("https://www.redbus.in/railways");

    const railWayIcon = page.locator('.lobListItem___bd5d93 a').nth(1);
    await expect(railWayIcon).toBeVisible();
    await expect.soft(railWayIcon).toHaveAttribute("aria-selected", "false");
    
    const busIcon = page.locator('.lobListItem___bd5d93 a').first();
    await expect(busIcon).toBeVisible();
    await expect(busIcon).toHaveAttribute("aria-selected", "false");

    await page.waitForTimeout(2000);
});