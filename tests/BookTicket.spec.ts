import { test } from "@playwright/test";
import { AbhiBusHomePage } from "../pages/AbhiBusHomePage"; 
import { BusSelectionPage } from "../pages/BusSelectionPage"; 
import { PassengerInfoPage } from "../pages/PassengerInfoPage";
import { PaymentPage } from "../pages/PaymentPage";
import { ENV } from "../config/env";



//Grouping using ".describe" to execute the independent testcases parallel using 
test.describe("Booking Flow", () => {

  let BusSearch: AbhiBusHomePage;

  //beforeEach hook that execute before all the tests starts executing
  test.beforeEach(async ({ page }) => {

    BusSearch = new AbhiBusHomePage(page);

    await BusSearch.AbhiBusURL();
    await BusSearch.fromInputField(ENV.BOARDING_CITY);
    await BusSearch.toInputField(ENV.DESTINATION_CITY);
    await BusSearch.selectDate(ENV.DATE_OF_JOURNEY);
    await BusSearch.pressSearchButton();
  });
  
  test("Single seat selection", async ({page}) => {
  
    // const BusSearch = new AbhiBusHomePage(page);
    const BusFilter = new BusSelectionPage(page);
    const PassengerInfo = new PassengerInfoPage(page);
    const PaymentModel = new PaymentPage(page);
  
    // await BusSearch.AbhiBusURL();
    // await BusSearch.fromInputField(ENV.BOARDING_CITY);
    // await BusSearch.toInputField(ENV.DESTINATION_CITY); 
    // await BusSearch.selectDate(ENV.DATE_OF_JOURNEY);
    // await BusSearch.pressSearchButton();

    await page.waitForLoadState("load");
  
    await BusFilter.boardingPointStatus();
    await BusFilter.selectingBoardingCity();
    await page.waitForTimeout(2000);
    await BusFilter.droppingPointStatus();
    await BusFilter.selectingDroppingCity();
    await BusFilter.busFilter();
    await page.waitForTimeout(2000);
    
    await BusFilter.selectBusSeat(1);
    await BusFilter.selectBoardingPoint();
    await BusFilter.selectDroppingPoint();

    await PassengerInfo.ClosingLoginModel();
    await PassengerInfo.FillingUserInfo(ENV.BOOKING_DETAILS.contactDetails, ENV.BOOKING_DETAILS.passengers);

    await PaymentModel.selectingpaymentOption();
    await PaymentModel.GenerateQRCode();

    
  });

  test("Multiple Seat selection", async ({ page }) => {
    // const BusSearch = new AbhiBusHomePage(page);
    const BusFilter = new BusSelectionPage(page);
    const PassengerInfo = new PassengerInfoPage(page);
    const PaymentModel = new PaymentPage(page);
  
    // await BusSearch.AbhiBusURL();
    // await BusSearch.fromInputField(ENV.BOARDING_CITY);
    // await BusSearch.toInputField(ENV.DESTINATION_CITY); 
    // await BusSearch.selectDate(ENV.DATE_OF_JOURNEY);
    // await BusSearch.pressSearchButton();

    await page.waitForLoadState("load");
  
    await BusFilter.boardingPointStatus();
    await BusFilter.selectingBoardingCity();
    await page.waitForTimeout(2000);
    await BusFilter.droppingPointStatus();
    await BusFilter.selectingDroppingCity();
    await BusFilter.busFilter();
    await page.waitForTimeout(2000);
    
    await BusFilter.selectBusSeat(2);
    await BusFilter.selectBusSeat(3);

    await BusFilter.selectBoardingPoint();
    await BusFilter.selectDroppingPoint();

    await PassengerInfo.ClosingLoginModel();
    await PassengerInfo.FillingUserInfo(ENV.BOOKING_DETAILS.contactDetails, ENV.BOOKING_DETAILS.passengers);

    await page.waitForLoadState("load");

    await PaymentModel.selectingpaymentOption();
    await PaymentModel.GenerateQRCode();

    
  });
})
