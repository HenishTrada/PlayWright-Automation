import { test, expect, type Page } from "@playwright/test";

async function closeSignInPopup(page: Page) {
  const closeBtn = page.locator('.fd1bba3c6c.a5d282bede').getByRole("button");

  if (await closeBtn.isVisible()) {
    await closeBtn.click();
  }
}

async function selectCustomDate(page: Page, targetDate: string) {

  const calendar = page.getByTestId("searchbox-datepicker-calendar");
  const targetDateLocator = calendar.locator(`[data-date="${targetDate}"]`);
  const nextMonthButton = calendar.getByRole("button", { name: "Next month"});
  const previousMonthButton = calendar.getByRole("button", {name: "Previous month"});
  const target = new Date(targetDate);

  for (let i = 0; i < 24; i++) {
    if (await targetDateLocator.isVisible().catch(() => false)) {
      await targetDateLocator.click();
      await expect(targetDateLocator).toHaveAttribute("aria-checked","true");
      return;
    }

    const visibleMonthText = await calendar.locator("h3").first().innerText();
    const visibleMonthDate = new Date(`${visibleMonthText} 1`);
    if (target > visibleMonthDate) {
      await nextMonthButton.click();
    } else {
      await previousMonthButton.click();
    }
    await page.waitForTimeout(300);
  }

  throw new Error(`Date ${targetDate} was not found in calendar`);
}

test("Booking.com date picker selection", async ({ page }) => {
  await page.goto("https://www.booking.com/", {
    waitUntil: "domcontentloaded",
  });

  await closeSignInPopup(page);
  await page.getByTestId("searchbox-dates-container").click();
  await expect(page.getByTestId("searchbox-datepicker-calendar")).toBeVisible();
  await selectCustomDate(page, "2026-09-15");
  await selectCustomDate(page, "2026-10-15");

  await expect(page.locator('[data-date="2026-09-15"]')).toHaveAttribute("aria-checked", "true");
  await expect(page.locator('[data-date="2026-10-15"]')).toHaveAttribute("aria-checked", "true");
});