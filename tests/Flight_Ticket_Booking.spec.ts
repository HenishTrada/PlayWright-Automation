import { test } from "@playwright/test";
import { AbhiBusHomePage } from "../pages/AbhiBusHomePage";
import { AbhiBusFlightsPage } from "../pages/FlightHomePage";
import { FlightSelectionPage } from "../pages/FlightSelectionPage";
import { FlightPassengerInfoPage } from "../pages/FlightPassengerInfoPage";
import testData from "../test-data/testFile.json";
import { FlightSeatSelectionPage } from "../pages/FlightSeatSelection";
import { PaymentPage } from "../pages/PaymentPage";

test('Flight booking flow', async ({ page }) => {
    test.setTimeout(600000);
    const homePage = new AbhiBusHomePage(page);
    const flightsPage = new AbhiBusFlightsPage(page);
    const flightFilter = new FlightSelectionPage(page);
    const flightPassengerInfoPage = new FlightPassengerInfoPage(page);
    const seatSelectionPage = new FlightSeatSelectionPage(page);
    const paymentpage = new PaymentPage(page);

    await homePage.AbhiBusURL();
    await flightsPage.goToFlightsTab();

    await flightsPage.selectOrigin('Ahmedabad', 'Sardar Vallabhbhai Patel International Airport');
    await flightsPage.selectDestination('Mumbai', 'Mumbai, Maharashtra, India');

    await flightsPage.selectDepartureDate('June 18, 2026');

    await flightsPage.setTravellers(4);

    await flightsPage.pressSearchButton();

    await flightFilter.closeDialogBox();

    await flightFilter.selectAirline();
    await flightFilter.priceSlider.dragToValue(8000);
    await flightFilter.durationSlider.dragToValue(10);
    await page.waitForTimeout(4000);
    await flightFilter.selectDepartureAndArrivalTime();
    await flightFilter.proceedToBook();

    await flightPassengerInfoPage.cancleFreeCancellation();
    await flightPassengerInfoPage.fillAllPassengers(testData.Flight_Passenger_Detail);

    await flightPassengerInfoPage.addEmailAddress();

    await flightPassengerInfoPage.proceedToBook();
    await seatSelectionPage.selectFirstNAvailableSeats(4);
    await seatSelectionPage.skipToPaymentPage();    
    
    await seatSelectionPage.handleFareIncreasePopup();

    await paymentpage.selectingpaymentOption();
    await paymentpage.GenerateQRCode();
});