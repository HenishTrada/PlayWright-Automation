import { test, expect } from '@playwright/test';

// page.locator(.classname)
// page.locator(#id)
// page.locator(css attribute)
// page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.
// page.getByLabel() to locate a form control by associated label's text.
// page.getByPlaceholder() to locate an input by placeholder.
// page.getByAltText() to locate an element, usually image, by its text alternative.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).

test("Locator Strategy", async ({ page }) => {
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
    await page.waitForTimeout(2000);

});