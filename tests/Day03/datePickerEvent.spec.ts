import { test, expect } from "@playwright/test";

test("Date Picker Event", async ({ page }) => {
    await page.goto("https://www.booking.com/")

    const popUpCloseBtn = page.getByRole('button', {name : "Dismiss sign in information."});

    if (await popUpCloseBtn.isVisible()) {
        await popUpCloseBtn.click();
    }

    const datePickerButton = page.getByTestId("searchbox-dates-container");
    await datePickerButton.click();

    await datePickerButton.locator(`[data-date="2026-09-15"]`).click();
    await expect(datePickerButton.locator(`[data-date="2026-09-15"]`)).toHaveAttribute("aria-checked", "true");

    await datePickerButton.locator(`[data-date="2026-10-15"]`).click();
    await expect(datePickerButton.locator(`[data-date="2026-10-15"]`)).toHaveAttribute("aria-checked", "true");

});