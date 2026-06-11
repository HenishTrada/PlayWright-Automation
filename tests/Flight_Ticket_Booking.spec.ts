import { test } from "@playwright/test";
import { AbhiBusHomePage } from "../pages/AbhiBusHomePage";
import { AbhiBusFlightsPage } from "../pages/FlightHomePage";

test('Flight booking flow', async ({ page }) => {
    test.setTimeout(60000);
    const homePage = new AbhiBusHomePage(page);
    const flightsPage = new AbhiBusFlightsPage(page);

    await homePage.AbhiBusURL();
    await flightsPage.goToFlightsTab();
    // await page.pause();
    await flightsPage.selectOrigin('Ahmedabad', 'Sardar Vallabhbhai Patel International Airport');
    await flightsPage.selectDestination('mumbai', 'Mumbai, Maharashtra, India');

    await flightsPage.selectDepartureDate('June 18, 2026');
    await flightsPage.selectReturnDate('June 25, 2026');

    await flightsPage.setTravellers(4);

    await flightsPage.pressSearchButton();

    await page.waitForTimeout(5000);

    // await flightsPage.loginFunc();
    // await flightsPage.fillOtp(page, "125487");
    await page.pause();

    // await page.context().storageState({
        // path: 'test-data/userAuth.json',
    // });

});