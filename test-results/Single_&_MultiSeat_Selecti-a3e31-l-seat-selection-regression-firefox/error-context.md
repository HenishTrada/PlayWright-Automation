# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Single_&_MultiSeat_Selection.spec.ts >> Bus Booking Flow >> Singel seat selection @regression
- Location: tests/Single_&_MultiSeat_Selection.spec.ts:32:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('#service-cards-container .container.card').first().getByRole('button', { name: 'Hide Seats' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('#service-cards-container .container.card').first().getByRole('button', { name: 'Hide Seats' })

```

```yaml
- banner:
  - navigation:
    - link "abhibus.com":
      - /url: /
      - img
      - img
  - navigation:
    - text: Buses
    - link "Flights":
      - /url: https://www.ixigo.com/flights?utm_source=abhibus&utm_medium=abhiwebf
    - text: Trains
    - link "Hotels":
      - /url: https://www.ixigo.com/hotels?utm_source=abhibus&utm_medium=abhiwebh
  - navigation:
    - img
    - text: Offers
    - img
    - text: Track Ticket
    - img
    - text: Need Help?
    - img
    - text: Login/SignUp
- img
- textbox "Leaving From": Ahmedabad
- img
- img
- textbox "Going To": Mumbai
- heading "Departure" [level=3]
- img
- textbox "Onward Journey Date": 12/06/2026
- button "Today"
- button "Tomorrow"
- button "Search":
  - img
  - text: Search
- paragraph: Filters
- button "Clear All"
- separator
- paragraph: Bus Type
- img
- text: Non AC
- img
- text: Sleeper
- img
- text: Seater
- img
- text: AC
- img
- text: Bus Track
- img
- text: New Buses
- img
- text: Offers
- paragraph: Price Range
- slider: ₹2097
- slider: ₹9499
- paragraph: Departure Time
- img
- text: Before 10 AM
- img
- text: 10 AM - 5 PM
- img
- text: 5 PM - 11 PM
- img
- text: After 11 PM Bus Partner
- img
- text: Boarding Point 01
- img
- text: Dropping Point 01
- img
- text: Too many filters applied! Couldn't find any buses Try clearing few filters
- img
- text: Reset
- img
- text: AC
- img
- text: ₹2097-₹9499
- img
- text: Iskcon Circle
- img
- text: Andheri East
- img
- separator
- text: OR
- separator
- img
- img "Bus Icon"
- text: Total 244 buses are available on this route Ahmedabad
- img
- text: Mumbai View all buses
- img "assured-logo"
- text: "Flash Offer : ₹145 off per seat! Extra ₹50 off. Code:RETURN500W"
- heading "Shree Patel Travels (SRT) (On Board Washroom)AD" [level=5]
- text: AC Sleeper (2 + 1) 17:15 Ahmedabad
- img
- separator
- text: 11h
- separator
- img
- text: 04:15 Mumbai 9 Single Berths (LB-4, UB-5) Toilet
- separator
- img
- text: "3.2"
- img
- text: "447"
- img
- img
- img
- img
- text: 1 Yr Old Bus
- img
- text: Brand New*
- img
- text: Bus Safety Check Bus details
- img
- text: Save ₹195 ₹1450 From ₹1255
- contentinfo:
  - text: Top Bus Routes Buses From Top Cities Top RTC Buses Top Bus Services Quick Links
  - link "Hyderabad to Bangalore Bus":
    - /url: https://www.abhibus.com/buses/1/Hyderabad-Bangalore
  - link "Hyderabad to Vijayawada Bus":
    - /url: https://www.abhibus.com/buses/7/Hyderabad-Vijayawada
  - link "Hyderabad to Mumbai Bus":
    - /url: https://www.abhibus.com/buses/9/Hyderabad-Mumbai
  - link "Vijayawada to Bangalore Bus":
    - /url: https://www.abhibus.com/buses/77/Vijayawada-Bangalore
  - link "Vijayawada to Hyderabad Bus":
    - /url: https://www.abhibus.com/buses/79/Vijayawada-Hyderabad
  - link "Bangalore to Hyderabad Bus":
    - /url: https://www.abhibus.com/buses/10/Bangalore-Hyderabad
  - link "Bangalore to Chennai Bus":
    - /url: https://www.abhibus.com/buses/2/Bangalore-Chennai
  - link "Chennai to Bangalore Bus":
    - /url: https://www.abhibus.com/buses/23/Chennai-Bangalore
  - link "Chennai to Madurai Bus":
    - /url: https://www.abhibus.com/buses/30/Chennai-Madurai
  - link "Chennai to Coimbatore Bus":
    - /url: https://www.abhibus.com/buses/24/Chennai-Coimbatore
  - link "Mumbai to Pune Bus":
    - /url: https://www.abhibus.com/buses/47/Mumbai-Pune
  - link "Mumbai to Hyderabad Bus":
    - /url: https://www.abhibus.com/buses/46/Mumbai-Hyderabad
  - link "Mumbai to Ahmedabad Bus":
    - /url: https://www.abhibus.com/buses/43/Mumbai-Ahmedabad
  - link "Indore to Bhopal Bus":
    - /url: https://www.abhibus.com/buses/139/Indore-Bhopal
  - link "Indore to Ahmedabad Bus":
    - /url: https://www.abhibus.com/buses/141/Indore-Ahmedabad
  - link "Ahmedabad to Jaipur Bus":
    - /url: https://www.abhibus.com/buses/106/Ahmedabad-Jaipur
  - link "Ahmedabad to Rajkot Bus":
    - /url: https://www.abhibus.com/buses/103/Ahmedabad-Rajkot
  - link "Ahmedabad to Indore Bus":
    - /url: https://www.abhibus.com/buses/312/Ahmedabad-Indore
  - link "Udaipur to Jaipur Bus":
    - /url: https://www.abhibus.com/buses/914/Udaipur-Jaipur
  - link "Jaipur to Delhi Bus":
    - /url: https://www.abhibus.com/buses/120/Jaipur-Delhi
  - link "Jaipur to Ahmedabad Bus":
    - /url: https://www.abhibus.com/buses/94/Jaipur-Ahmedabad
  - link "Delhi to Lucknow Bus":
    - /url: https://www.abhibus.com/buses/107/Delhi-Lucknow
  - link "Delhi to Gorakhpur Bus":
    - /url: https://www.abhibus.com/buses/6116/Delhi-Gorakhpur
  - link "Delhi to Shimla Bus":
    - /url: https://www.abhibus.com/buses/415/Delhi-Shimla
  - link "Delhi to Jaipur Bus":
    - /url: https://www.abhibus.com/buses/39/Delhi-Jaipur
  - separator
  - heading "Important Links" [level=2]
  - link "Home":
    - /url: /
  - link "Offer":
    - /url: /bus-ticket-offers
  - link "About":
    - /url: /about
  - link "Contact":
    - /url: /contact
  - link "FAQ's":
    - /url: /faq
  - link "Terms":
    - /url: /terms
  - link "Privacy":
    - /url: /privacy
  - link "Responsible Disclosure":
    - /url: /responsible-disclosure-policy
  - link "Operators":
    - /url: /operators
  - link "Routes":
    - /url: /routes
  - link "Careers":
    - /url: /careers
  - link "Our Management":
    - /url: https://careers.ixigo.com/about
  - link "Investors Relations":
    - /url: https://www.ixigo.com/about/investor-relations
  - text: AbhiBus | ixigo | Confirm Tkt © 2025 Le Travenues Technology Ltd. India. All brands are trademarks of their respective owners
  - link "• Privacy":
    - /url: /privacy
  - link "• Terms of Use":
    - /url: /terms
  - link "• Career":
    - /url: /career
  - link "• Customer Service":
    - /url: /contact
  - img
  - img
  - img
  - img
  - img
```

# Test source

```ts
  1   | import { Page, Locator, expect } from "@playwright/test"
  2   | import { PriceFilterPage } from "./PriceRangeSlider";
  3   | 
  4   | export class BusSelectionPage {
  5   | 
  6   |     page: Page;
  7   |     tabsActions: Locator;
  8   |     boardingPointsList: Locator;
  9   |     droppingPointsList: Locator;
  10  |     busACFilterButton: Locator;
  11  |     busNonAcFilterButton: Locator;
  12  |     selectBus: Locator;
  13  |     seatLayoutContainer: Locator;
  14  |     BoardingAndDroppingTabs: Locator;
  15  |     BoardingAndDroppingList: Locator;
  16  |     ProceedButton: Locator;
  17  | 
  18  |     constructor(page: Page) {
  19  | 
  20  |         this.page = page;
  21  |         this.tabsActions = page.locator('.container.tabs-actions').first();
  22  |         this.boardingPointsList = page.locator('#popular-filters-scrollable').first();
  23  |         this.droppingPointsList = page.locator('#popular-filters-scrollable').first();;
  24  |         this.busACFilterButton = page.locator(`//div[2]/div/span[4]`);
  25  |         this.busNonAcFilterButton = page.locator(`//div[2]/div/span[1]`).first();
  26  |         this.selectBus = page.locator('#service-cards-container .container.card').first();
  27  |         this.seatLayoutContainer = this.selectBus.locator("#seat-layout-container");
  28  |         this.BoardingAndDroppingTabs = this.selectBus.locator(`.tabs-actions a`);
  29  |         this.BoardingAndDroppingList = this.selectBus.locator(`.tabs-viewport .scrollable-container`);
  30  |         this.ProceedButton = this.selectBus.getByRole('button', { name: 'Proceed' });
  31  |     }
  32  | 
  33  |     async boardingPointStatus() {
  34  |         await this.tabsActions.waitFor({ state: "visible" });
  35  |         const boardingPointTab = this.tabsActions.getByText("Boarding Points").first();
  36  |         await expect(boardingPointTab).toHaveAttribute("class", /active/);
  37  |     }
  38  | 
  39  |     async selectingBoardingCity() {
  40  |         const boardingPointCity = this.boardingPointsList.getByText('Iskcon Circle', { exact: true });
  41  |         await boardingPointCity.click();
  42  |         await this.page.waitForLoadState("load");
  43  |         await expect(boardingPointCity).toHaveAttribute("class", /active/);
  44  |     }
  45  | 
  46  |     async droppingPointStatus() {
  47  |         const droppingPointTab = this.tabsActions.getByText("Dropping Points").first();
  48  |         await droppingPointTab.click();
  49  |         await this.page.waitForLoadState("load");
  50  |         await expect(droppingPointTab).toHaveAttribute("class", /active/);
  51  |     }
  52  | 
  53  |     async selectingDroppingCity() {
  54  |         const droppingPoint = this.droppingPointsList.getByText('Andheri East', { exact: true });
  55  |         await droppingPoint.click();
  56  |         await this.page.waitForLoadState("load");
  57  |         await expect.soft(droppingPoint).toHaveAttribute("class", /active/);
  58  |     }
  59  | 
  60  |     async busFilter() {
  61  |         await this.busACFilterButton.click();
  62  |         await expect(this.busNonAcFilterButton).toHaveAttribute("style", /pointer-events: none;/);
  63  |     }
  64  | 
  65  |     async selectBusSeat(seatNo: number): Promise<void> {
  66  | 
  67  |         const selectSeatsButton = this.selectBus.getByRole("button", {
  68  |             name: "Select Seats",
  69  |         });
  70  | 
  71  |         const hideSeatsButton = this.selectBus.getByRole("button", {
  72  |             name: "Hide Seats",
  73  |         });
  74  | 
  75  |         if (await selectSeatsButton.isVisible().catch(() => false)) {
  76  |             await selectSeatsButton.scrollIntoViewIfNeeded();
  77  |             await this.page.waitForLoadState("load");
  78  |             await selectSeatsButton.click();
  79  |         } else {
> 80  |             await expect(hideSeatsButton).toBeVisible();
      |                                           ^ Error: expect(locator).toBeVisible() failed
  81  |         }
  82  | 
  83  | 
  84  |         const availableSeats_1 = this.seatLayoutContainer.locator(`button.seat.seat-button`);
  85  |         await availableSeats_1.first().waitFor({ state: "visible" });
  86  |         const seatCount_1 = await availableSeats_1.count();
  87  | 
  88  |         if (seatCount_1 === 0) {
  89  |             throw new Error("No available seats found");
  90  |         }
  91  | 
  92  |         if (seatNo >= seatCount_1) {
  93  |             throw new Error(
  94  |                 `Seat index ${seatNo} is invalid. Available seats: ${seatCount_1}`
  95  |             );
  96  |         }
  97  | 
  98  |         await availableSeats_1.first().waitFor({ state: "visible" });
  99  |         await availableSeats_1.nth(seatNo).click();
  100 |     }
  101 | 
  102 |     async selectBoardingPoint() {
  103 |         const boardingTabStatus = this.BoardingAndDroppingTabs.first();
  104 |         await expect(boardingTabStatus).toHaveAttribute("class", /active/);
  105 |         // await this.page.pause();
  106 |         const boardingLocation = this.BoardingAndDroppingList.locator('.container  ').first();
  107 |         await boardingLocation.waitFor({ state: "visible" });
  108 |         await boardingLocation.click();
  109 |     }
  110 | 
  111 |     async selectDroppingPoint() {
  112 |         const selectDroppingTab = this.BoardingAndDroppingTabs.nth(1);
  113 |         // await selectDroppingTab.click();
  114 |         await expect(selectDroppingTab).toHaveAttribute("class", /active/);
  115 | 
  116 |         const droppingLocation = this.BoardingAndDroppingList.locator('.container  ').first();
  117 |         await this.BoardingAndDroppingList.scrollIntoViewIfNeeded();
  118 |         await droppingLocation.click();
  119 | 
  120 |         await this.page.waitForTimeout(2000);
  121 | 
  122 |         await this.ProceedButton.waitFor({ state: "visible" });
  123 |         await this.ProceedButton.click();
  124 | 
  125 |         await this.page.waitForLoadState("load");
  126 |     }
  127 | }
```