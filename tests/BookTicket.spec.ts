import { test } from "@playwright/test";
import { AbhiBusHomePage } from "../pages/AbhiBusHomePage"; 
import { BusSelectionPage } from "../pages/BusSelectionPage"; 
 
test("Book Ticket", async ({page}) => {
 
  const BusSearch = new AbhiBusHomePage(page);
  const BusFilter = new BusSelectionPage(page);
 
  await BusSearch.AbhiBusURL();
  await BusSearch.fromInputField("Ahmedabad");
  await BusSearch.toInputField("Mumbai");
  await BusSearch.selectDate();
  await BusSearch.pressSearchButton();
  await page.waitForLoadState("load");
 
  await BusFilter.boardingPointStatus();
  await BusFilter.selectingBoardingCity();
  await page.waitForTimeout(2000);
  await BusFilter.droppingPointStatus();
  await BusFilter.selectingDroppingCity();
  await BusFilter.busFilter();
  await page.waitForTimeout(2000);
  await page.pause();
  await BusFilter.selectBusSeat();
  await BusFilter.selectBoardingPoint();
});