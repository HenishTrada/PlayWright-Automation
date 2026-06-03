# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Day05/softAssesrion.spec.ts >> Assertion
- Location: tests/Day05/softAssesrion.spec.ts:3:5

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator: locator('#popular-filters-scrollable').first().getByText('Andheri East', { exact: true })
Expected pattern: /active1/
Received string:  "btn popular-filter-44 popular-filter-btn text-neutral-800 light filled primary md rounded-md active button"
Timeout: 5000ms

Call log:
  - Expect "soft toHaveAttribute" with timeout 5000ms
  - waiting for locator('#popular-filters-scrollable').first().getByText('Andheri East', { exact: true })
    14 × locator resolved to <a class="btn popular-filter-44 popular-filter-btn text-neutral-800 light filled primary md rounded-md active button">Andheri East</a>
       - unexpected value "btn popular-filter-44 popular-filter-btn text-neutral-800 light filled primary md rounded-md active button"

```

```yaml
- text: Andheri East
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | 
  3  | test("Assertion", async ({ page }) => {
  4  |     await page.goto("https://www.abhibus.com/");
  5  | 
  6  |     const fromInput = page.getByPlaceholder("Leaving From");
  7  |     await fromInput.click();
  8  |     await fromInput.fill("Ahmedabad");
  9  |     await page.getByText("Ahmedabad", { exact: true }).first().click();
  10 | 
  11 |     await expect(fromInput).toHaveValue("Ahmedabad");
  12 | 
  13 |     const toInput = page.getByPlaceholder("Going To");
  14 |     await toInput.click();
  15 |     await toInput.fill("Mumbai");
  16 |     await page.getByText("Mumbai", { exact: true }).first().click();
  17 | 
  18 |     await expect(toInput).toHaveValue("Mumbai");
  19 | 
  20 |     await page.getByPlaceholder("Onward Journey Date").click();
  21 | 
  22 |     await page.getByRole("button", { name: "11" }).click();
  23 |     await expect(page.getByPlaceholder("Onward Journey Date")).toHaveValue("11/06/2026");
  24 | 
  25 |     await page.locator("#search-container").getByRole("button", { name: "Search" }).click();
  26 | 
  27 |     const tabsActions = page.locator('.container.tabs-actions');
  28 |     await tabsActions.waitFor({ state: "visible" });
  29 | 
  30 |     const boardingPointTab = tabsActions.getByText("Boarding Points").first();
  31 |     await expect(boardingPointTab).toHaveAttribute("class", /active/);
  32 | 
  33 |     const boardingPointsList = page.locator('#popular-filters-scrollable').first();
  34 |     const filterButton = boardingPointsList.getByText('Iskcon Circle', { exact: true });
  35 |     await filterButton.click();
  36 | 
  37 |     await page.waitForLoadState("load");
  38 |     await expect(filterButton).toHaveAttribute("class", /active/);
  39 | 
  40 |     const droppingPointTab = tabsActions.getByText("Dropping Points").first();
  41 |     await droppingPointTab.click();
  42 |     
  43 |     await page.waitForLoadState("load");
  44 |     await expect(droppingPointTab).toHaveAttribute("class", /active/);
  45 | 
  46 |     const droppingPointsList = page.locator('#popular-filters-scrollable').first();
  47 |     const filterButton2 = droppingPointsList.getByText('Andheri East', { exact: true });
  48 |     await filterButton2.click();
  49 | 
  50 |     await page.waitForLoadState("load");
> 51 |     await expect.soft(filterButton2).toHaveAttribute("class", /active1/);
     |                                      ^ Error: expect(locator).toHaveAttribute(expected) failed
  52 | 
  53 |     await page.locator(`//div[2]/div/span[4]`).click();
  54 | 
  55 | 
  56 |     const busNonAcFilterType = page.locator(`//div[2]/div/span[1]`).first();
  57 |     await expect(busNonAcFilterType).toHaveAttribute("style", /pointer-events: none;/);
  58 | 
  59 |     await page.waitForTimeout(3000);
  60 | });
  61 | 
  62 | 
```