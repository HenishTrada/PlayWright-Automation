import { test, expect } from "@playwright/test";

test("Date Picker Event", async ({ page }) => {
  await page.goto("https://www.abhibus.com/");

  const fromInput = page.getByPlaceholder("Leaving From");
  await fromInput.click();
  await fromInput.fill("Ahmedabad");
  await page.getByText("Ahmedabad", { exact: true }).first().click();

  const toInput = page.getByPlaceholder("Going To");
  await toInput.click();
  await toInput.fill("Mumbai");
  await page.getByText("Mumbai", { exact: true }).first().click();

  await page.getByPlaceholder("Onward Journey Date").click();

  await page.getByRole("button", {name : "11" }).click();

  await page.locator("#search-container").getByRole("button", { name: "Search" }).click();

  await page.waitForTimeout(3000);
});