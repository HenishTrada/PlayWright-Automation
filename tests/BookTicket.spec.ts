import { test } from "@playwright/test";
import { AbhiBusHomePage } from "../pages/AbhiBusHomePage"; 
import { BusSelectionPage } from "../pages/BusSelectionPage"; 
import { PassengerInfoPage } from "../pages/PassengerInfoPage";
import { PaymentPage } from "../pages/PaymentPage";
import { ENV } from "../config/env";
 
test("Book Ticket", async ({page}) => {
 
  const BusSearch = new AbhiBusHomePage(page);
  const BusFilter = new BusSelectionPage(page);
  const PassengerInfo = new PassengerInfoPage(page);
  const PaymentModel = new PaymentPage(page);
 
  await BusSearch.AbhiBusURL();
  await BusSearch.fromInputField(ENV.BOARDING_CITY);
  await BusSearch.toInputField(ENV.DESTINATION_CITY); 
  await BusSearch.selectDate(ENV.DATE_OF_JOURNEY);
  await BusSearch.pressSearchButton();

  await page.waitForLoadState("load");
 
  await BusFilter.boardingPointStatus();
  await BusFilter.selectingBoardingCity();
  await page.waitForTimeout(2000);
  await BusFilter.droppingPointStatus();
  await BusFilter.selectingDroppingCity();
  await BusFilter.busFilter();
  await page.waitForTimeout(2000);
  
  await BusFilter.selectBusSeat();
  await BusFilter.selectBoardingPoint();
  await BusFilter.selectDroppingPoint();

  await PassengerInfo.ClosingLoginModel();
  await PassengerInfo.FillingUserInfo(ENV.PassengerDetail);

  await page.waitForLoadState("load");

  await PaymentModel.selectingpaymentOption();
  await PaymentModel.GenerateQRCode();

  
});