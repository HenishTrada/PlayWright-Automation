# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BookTicket.spec.ts >> Book Ticket
- Location: tests/BookTicket.spec.ts:5:5

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://www.abhibus.com/", waiting until "load"

```

# Test source

```ts
  1  | import { expect, Locator, Page } from "@playwright/test";
  2  |  
  3  | export class AbhiBusHomePage {
  4  |  
  5  |     page: Page;
  6  |     searchButton: Locator;
  7  |     fromInput: Locator;
  8  |     toInput: Locator;
  9  |     datePicker: Locator;
  10 |  
  11 |     constructor(page: Page) {
  12 |  
  13 |         this.page = page;
  14 |         this.fromInput = page.getByPlaceholder("Leaving From");
  15 |         this.toInput = page.getByPlaceholder("Going To");
  16 |         this.searchButton = page.locator("#search-container").getByRole("button", { name: "Search" });
  17 |         this.datePicker = page.getByPlaceholder("Onward Journey Date");
  18 |  
  19 |     }
  20 |  
  21 |     async AbhiBusURL() {
> 22 |         await this.page.goto("https://www.abhibus.com/");
     |                         ^ Error: page.goto: Test ended.
  23 |     }
  24 |  
  25 |     async fromInputField(leavingCityName: string): Promise<void>{
  26 |         await this.fromInput.click();
  27 |         await this.fromInput.fill(leavingCityName);
  28 |         await this.page.getByText(leavingCityName, { exact: true }).first().click();
  29 |         await expect(this.fromInput).toHaveValue(leavingCityName);
  30 |  
  31 |     }
  32 |  
  33 |     async toInputField(destinationCityName: string): Promise<void> {
  34 |         await this.toInput.click();
  35 |         await this.toInput.fill(destinationCityName);
  36 |         await this.page.getByText(destinationCityName, { exact: true }).first().click();
  37 |         await expect(this.toInput).toHaveValue(destinationCityName);
  38 |     }
  39 |  
  40 |     async selectDate(){
  41 |         await this.datePicker.click();
  42 |         await this.page.getByRole("button", { name: "11" }).click();
  43 |         await expect(this.datePicker).toHaveValue(`11/06/2026`);
  44 |     }
  45 |  
  46 |     async pressSearchButton(){
  47 |         await this.searchButton.click();
  48 |     }
  49 |  
  50 | }
```