import { expect, test } from "@playwright/test";
import { AbhiBusHomePage } from "../pages/AbhiBusHomePage";
import testData from "../test-data/testFile.json";


test("Invalid Route", async ({ page }) => {

    const BusSearch = new AbhiBusHomePage(page);

    await BusSearch.AbhiBusURL();
    await BusSearch.fromInputField(testData.Invalid_Journey_Detail.BOARDING_CITY);
    await BusSearch.toInputField(testData.Invalid_Journey_Detail.DESTINATION_CITY);
    await BusSearch.selectDate(testData.Invalid_Journey_Detail.DATE_OF_JOURNEY);
    await BusSearch.pressSearchButton();

    await BusSearch.verifyNoServiceMessage();
})