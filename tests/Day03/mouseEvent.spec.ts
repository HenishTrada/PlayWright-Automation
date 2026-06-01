import test, { expect } from "@playwright/test";

test("Hover Event", async ({ page }) => {
    await page.goto("https://www.flipkart.com/");

    const loginPop = page.locator(".q7ywiQ");

    if (await loginPop.isVisible()) {
        await loginPop.getByRole('button', { name: '✕' }).click();
    }

    // Generic click
    await page.getByRole('button', { name: "Search for Products, Brands and More" }).click();

    const searchBar = page.getByPlaceholder("Search for Products, Brands and More").and(page.getByRole("textbox"));
    await searchBar.fill("mobile");
    await searchBar.press("Enter");

    const divOppo = page.locator('div[title="vivo"]');
    const oppoCheckbox = divOppo.locator(`input[type="checkbox"]`);

    await divOppo.locator('label').click();
    await expect(oppoCheckbox).toBeChecked();

    // Hover over element
    const navigationItem = page.locator('.OqYNhN').filter({ hasText: "Men" }).first();
    await navigationItem.hover();

    // Click on the sub-menu item that appears after hover
    await page.getByRole("link", { name: `T-Shirts` }).click()

});

test("Drag and Drop Event", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("#datepicker").click();
    await page.locator("#ui-datepicker-div").getByRole('link', { name: '22' }).click();

    await page.getByPlaceholder("Start Date").fill("2026-05-22");


    const source = page.locator('#draggable');
    const target = page.locator('#droppable');

    await expect(source).toBeVisible();
    await expect(target).toBeVisible();

    await source.dragTo(target);

    await expect(target).toContainText('Dropped!');

    await page.waitForTimeout(2000);

});

test("Slider - Mouse up and Down Event", async ({ page }) => {
    
    await page.goto("https://testautomationpractice.blogspot.com/");

    const minHandle = page.locator('#slider-range .ui-slider-handle').first();

    const box = await minHandle.boundingBox();

    await page.mouse.move(
        box.x + box.width / 2,
        box.y + box.height / 2
    );

    await page.mouse.down();

    // Move 15 pixels right
    await page.mouse.move(
        box.x + box.width / 2 + 15,
        box.y + box.height / 2,
        { steps: 10 }
    );

    await page.mouse.up();
})