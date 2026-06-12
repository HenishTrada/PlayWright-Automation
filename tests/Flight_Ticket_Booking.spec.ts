import { test } from "@playwright/test";
import { AbhiBusHomePage } from "../pages/AbhiBusHomePage";
import { AbhiBusFlightsPage } from "../pages/FlightHomePage";
import { FlightSelectionPage } from "../pages/FlightSelectionPage";

test('Flight booking flow', async ({ page }) => {
    test.setTimeout(60000);
    const homePage = new AbhiBusHomePage(page);
    const flightsPage = new AbhiBusFlightsPage(page);
    const flightFilter = new FlightSelectionPage(page);

    await homePage.AbhiBusURL();
    await flightsPage.goToFlightsTab();

    await flightsPage.selectOrigin('Ahmedabad', 'Sardar Vallabhbhai Patel International Airport');
    await flightsPage.selectDestination('Mumbai', 'Mumbai, Maharashtra, India');

    await flightsPage.selectDepartureDate('June 18, 2026');
    await flightsPage.selectReturnDate('June 25, 2026');

    await flightsPage.setTravellers(4);

    await flightsPage.pressSearchButton();

    await flightFilter.closeDialogBox();

    await flightFilter.selectAirline();
    await flightFilter.priceSlider.dragToValue(8000);
    await flightFilter.durationSlider.dragToValue(10);
    await page.waitForTimeout(4000);
    await flightFilter.selectDepartureAndArrivalTime();

    await flightFilter.proceedToBook();
});