import { test } from "@playwright/test";
import { AbhiBusHomePage } from "../pages/AbhiBusHomePage"; 
import { BusSelectionPage } from "../pages/BusSelectionPage"; 
import { PassengerInfoPage } from "../pages/PassengerInfoPage";
import { PaymentPage } from "../pages/PaymentPage";
import { ENV } from "../config/env";
import testData from "../test-data/testFile.json"
import { PriceSlider } from "../pages/PriceRangeSlider";

//Grouping using ".describe" to execute the independent testcases parallel using 
test.describe("Bus Booking Flow", () => {

  test.beforeAll(async ({}, workerInfo) => {
    console.log("beforeAll");
    console.log("worker:", workerInfo.workerIndex);
    console.log("Workers are assign for the test execution.")
  });

  let BusSearch: AbhiBusHomePage;
  //beforeEach hook that execute before every test starts executing
  test.beforeEach(async ({ page }) => {

    BusSearch = new AbhiBusHomePage(page);

    await BusSearch.AbhiBusURL();
    await BusSearch.fromInputField(testData.Journey_Detail.BOARDING_CITY);
    await BusSearch.toInputField(testData.Journey_Detail.DESTINATION_CITY);
    await BusSearch.selectDate(testData.Journey_Detail.DATE_OF_JOURNEY);
    await BusSearch.pressSearchButton();
  });
  
  test("Singel seat selection @regression", async ({page}) => {
  
    const BusFilter = new BusSelectionPage(page);
    const PassengerInfo = new PassengerInfoPage(page);
    const PaymentModel = new PaymentPage(page);
    const PriceRangeSlider = new PriceSlider(page);

    await page.waitForLoadState("load");
  
    await BusFilter.boardingPointStatus();
    await BusFilter.selectingBoardingCity();
    await page.waitForTimeout(2000);
    await BusFilter.droppingPointStatus();
    await BusFilter.selectingDroppingCity();
    await BusFilter.busFilter();
    await page.waitForTimeout(2000);
    await PriceRangeSlider.setRange(800, 2000);
    
    await BusFilter.selectBusSeat(1);
    await BusFilter.selectBoardingPoint();
    await BusFilter.selectDroppingPoint();

    await PassengerInfo.ClosingLoginModel();
    await PassengerInfo.FillingUserInfo(testData.BOOKING_DETAILS.contactDetails, testData.BOOKING_DETAILS.passengers);

    await PaymentModel.selectingpaymentOption();
    await PaymentModel.GenerateQRCode();
  });

  test("Multiple Seat selection", async ({ page }) => {

    const BusFilter = new BusSelectionPage(page);
    const PassengerInfo = new PassengerInfoPage(page);
    const PaymentModel = new PaymentPage(page);

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

    await page.waitForLoadState("domcontentloaded");

    await PaymentModel.selectingpaymentOption();
    await PaymentModel.GenerateQRCode();
  });

})
