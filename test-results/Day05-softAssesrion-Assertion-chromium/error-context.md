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

Locator: locator('.container.tabs-actions').getByText('Boarding Points').first()
Expected pattern: /active/
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveAttribute" with timeout 5000ms
  - waiting for locator('.container.tabs-actions').getByText('Boarding Points').first()

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
- textbox "Onward Journey Date": 11/06/2026
- button "Today"
- button "Tomorrow"
- button "Search":
  - img
  - text: Search
- img
- text: India has over 1.7 million buses!
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
> 31 |     await expect(boardingPointTab).toHaveAttribute("class", /active/);
     |                                    ^ Error: expect(locator).toHaveAttribute(expected) failed
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
  51 |     await expect.soft(filterButton2).toHaveAttribute("class", /active1/);
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