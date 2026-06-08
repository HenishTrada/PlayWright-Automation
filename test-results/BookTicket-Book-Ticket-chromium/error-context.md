# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: BookTicket.spec.ts >> Book Ticket
- Location: tests/BookTicket.spec.ts:8:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('#popular-filters-scrollable').first().getByText('Iskcon Circle', { exact: true })

```

# Test source

```ts
  1   | import { Page, Locator, expect } from "@playwright/test"
  2   | 
  3   | export class BusSelectionPage {
  4   | 
  5   |     page: Page;
  6   |     tabsActions: Locator;
  7   |     boardingPointsList: Locator;
  8   |     droppingPointsList: Locator;
  9   |     busACFilterButton: Locator;
  10  |     busNonAcFilterButton: Locator;
  11  |     selectBus: Locator;
  12  |     seatLayoutContainer: Locator;
  13  |     BoardingAndDroppingTabs: Locator;
  14  |     BoardingAndDroppingList: Locator;
  15  |     ProceedButton : Locator;
  16  | 
  17  |     constructor(page: Page) {
  18  | 
  19  |         this.page = page;
  20  |         this.tabsActions = page.locator('.container.tabs-actions').first();
  21  |         this.boardingPointsList = page.locator('#popular-filters-scrollable').first();
  22  |         this.droppingPointsList = page.locator('#popular-filters-scrollable').first();;
  23  |         this.busACFilterButton = page.locator(`//div[2]/div/span[4]`);
  24  |         this.busNonAcFilterButton = page.locator(`//div[2]/div/span[1]`).first();
  25  |         this.selectBus = page.locator('#service-cards-container .container.card').first();
  26  |         this.seatLayoutContainer = this.selectBus.locator("#seat-layout-container");
  27  |         this.BoardingAndDroppingTabs = this.selectBus.locator(`.tabs-actions a`);
  28  |         this.BoardingAndDroppingList = this.selectBus.locator(`.tabs-viewport .scrollable-container`);
  29  |         this.ProceedButton = this.selectBus.getByRole('button', { name: 'Proceed' });
  30  |     }
  31  | 
  32  |     async boardingPointStatus() {
  33  |         await this.tabsActions.waitFor({ state: "visible" });
  34  |         const boardingPointTab = this.tabsActions.getByText("Boarding Points").first();
  35  |         await expect(boardingPointTab).toHaveAttribute("class", /active/);
  36  |     }
  37  | 
  38  |     async selectingBoardingCity() {
  39  |         const boardingPointCity = this.boardingPointsList.getByText('Iskcon Circle', { exact: true });
> 40  |         await boardingPointCity.click();
      |                                 ^ Error: locator.click: Target page, context or browser has been closed
  41  |         await this.page.waitForLoadState("load");
  42  |         await expect(boardingPointCity).toHaveAttribute("class", /active/);
  43  |     }
  44  | 
  45  |     async droppingPointStatus() {
  46  |         const droppingPointTab = this.tabsActions.getByText("Dropping Points").first();
  47  |         await droppingPointTab.click();
  48  |         await this.page.waitForLoadState("load");
  49  |         await expect(droppingPointTab).toHaveAttribute("class", /active/);
  50  |     }
  51  | 
  52  |     async selectingDroppingCity() {
  53  |         const droppingPoint = this.droppingPointsList.getByText('Andheri East', { exact: true });
  54  |         await droppingPoint.click();
  55  |         await this.page.waitForLoadState("load");
  56  |         await expect.soft(droppingPoint).toHaveAttribute("class", /active/);
  57  |     }
  58  | 
  59  |     async busFilter() {
  60  |         await this.busACFilterButton.click();
  61  |         await expect(this.busNonAcFilterButton).toHaveAttribute("style", /pointer-events: none;/);
  62  |     }
  63  | 
  64  |     async selectBusSeat() {
  65  |         await this.selectBus.getByRole("button", { name: `Select Seats` }).scrollIntoViewIfNeeded();
  66  |         await this.page.waitForLoadState("load");
  67  |         await this.selectBus.getByRole("button", { name: `Select Seats` }).click();
  68  | 
  69  |         const availableSeats_1 = this.seatLayoutContainer.locator(`button.seat.seat-button`);
  70  |         await availableSeats_1.first().waitFor({ state: "visible" });
  71  |         const seatCount_1 = await availableSeats_1.count();
  72  | 
  73  |         if (seatCount_1 === 0) {
  74  |             throw new Error("No available seats found");
  75  |         }
  76  |         else {
  77  |             await availableSeats_1.first().waitFor({ state: "visible" });
  78  |             await availableSeats_1.first().click();
  79  |         }
  80  |     }
  81  | 
  82  |     async selectBoardingPoint() {
  83  |         const boardingTabStatus = this.BoardingAndDroppingTabs.first();
  84  |         await expect(boardingTabStatus).toHaveAttribute("class", /active/); 
  85  |         // await this.page.pause();
  86  |         const boardingLocation = this.BoardingAndDroppingList.locator('.container  ').first();
  87  |         await boardingLocation.waitFor({ state: "visible" });
  88  |         await boardingLocation.click();
  89  |     }
  90  | 
  91  |     async selectDroppingPoint(){
  92  |         const selectDroppingTab = this.BoardingAndDroppingTabs.nth(1);
  93  |         // await selectDroppingTab.click();
  94  |         await expect(selectDroppingTab).toHaveAttribute("class", /active/);
  95  | 
  96  |         const droppingLocation = this.BoardingAndDroppingList.locator('.container  ').first();
  97  |         await this.BoardingAndDroppingList.scrollIntoViewIfNeeded();
  98  |         await droppingLocation.click();
  99  | 
  100 |         await this.page.waitForTimeout(2000);
  101 | 
  102 |         await this.ProceedButton.waitFor({state : "visible"});
  103 |         await this.ProceedButton.click();
  104 | 
  105 |         await this.page.waitForLoadState("load");
  106 |     }
  107 | }
```