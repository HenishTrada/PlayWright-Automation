# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Day03/mouseEvent.spec.ts >> Drag and Drop Event
- Location: tests/Day03/mouseEvent.spec.ts:37:5

# Error details

```
Error: expect.toBeVisible: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import test, { expect } from "@playwright/test";
  2  | 
  3  | test("Hover Event", async ({ page }) => {
  4  |     await page.goto("https://www.flipkart.com/", {
  5  |         waitUntil: "domcontentloaded",
  6  |     });
  7  | 
  8  |     const loginPop = page.locator(".q7ywiQ");
  9  |     await expect(loginPop).toBeVisible();
  10 | 
  11 |     if (await loginPop.isVisible()) {
  12 |         await loginPop.locator('.b3wTlE').click();
  13 |     }
  14 | 
  15 |     // Generic click
  16 |     // await page.getByRole('button', { name: "Search for Products, Brands and More" }).click();
  17 | 
  18 |     const searchBar = page.getByPlaceholder("Search for Products, Brands and More").and(page.getByRole("textbox"));
  19 |     await searchBar.fill("mobile");
  20 |     await searchBar.press("Enter");
  21 | 
  22 |     const divOppo = page.locator('div[title="vivo"]');
  23 |     const oppoCheckbox = divOppo.locator(`input[type="checkbox"]`);
  24 | 
  25 |     await divOppo.locator('label').click();
  26 |     await expect(oppoCheckbox).toBeChecked();
  27 | 
  28 |     // Hover over element
  29 |     const navigationItem = page.locator('.OqYNhN').filter({ hasText: "Men" }).first();
  30 |     await navigationItem.hover();
  31 | 
  32 |     // Click on the sub-menu item that appears after hover
  33 |     await page.getByRole("link", { name: `T-Shirts` }).click()
  34 | 
  35 | });
  36 | 
  37 | test("Drag and Drop Event", async ({ page }) => {
  38 |     await page.goto("https://testautomationpractice.blogspot.com/");
  39 | 
  40 |     await page.locator("#datepicker").click();
  41 |     await page.locator("#ui-datepicker-div").getByRole('link', { name: '22' }).click();
  42 | 
  43 |     await page.getByPlaceholder("Start Date").fill("2026-05-22");
  44 | 
  45 | 
  46 |     const source = page.locator('#draggable');
  47 |     const target = page.locator('#droppable');
  48 | 
  49 |     await expect(source).toBeVisible();
> 50 |     await expect(target).toBeVisible();
     |                          ^ Error: expect.toBeVisible: Target page, context or browser has been closed
  51 | 
  52 |     await source.dragTo(target);
  53 | 
  54 |     await expect(target).toContainText('Dropped!');
  55 | 
  56 |     await page.waitForTimeout(2000);
  57 | 
  58 | });
  59 | 
  60 | test("Slider - Mouse up and Down Event", async ({ page }) => {
  61 |     
  62 |     await page.goto("https://testautomationpractice.blogspot.com/");
  63 | 
  64 |     const minHandle = page.locator('#slider-range .ui-slider-handle').first();
  65 | 
  66 |     const box = await minHandle.boundingBox();
  67 | 
  68 |     await page.mouse.move(
  69 |         box.x + box.width / 2,
  70 |         box.y + box.height / 2
  71 |     );
  72 | 
  73 |     await page.mouse.down();
  74 | 
  75 |     // Move 15 pixels right
  76 |     await page.mouse.move(
  77 |         box.x + box.width / 2 + 15,
  78 |         box.y + box.height / 2,
  79 |         { steps: 10 }
  80 |     );
  81 | 
  82 |     await page.mouse.up();
  83 | })
```