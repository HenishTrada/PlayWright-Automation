import { test, expect } from "@playwright/test";

test("Drop Down Event", async ({page}) => {
    await page.goto("https://semantic-ui.com/modules/dropdown.html");

    const dropdown_1 =  page.locator('.ui.selection.dropdown').first();
    await dropdown_1.click();
    await dropdown_1.locator('.item').getByText("Male").first().click();

    //using css selector
//    const dropdown_2 =  page.locator('.another.dropdown.example').locator(`.ui.dropdown.selection`).first();
//    await dropdown_2.click();
//    await dropdown_2.locator('.menu .item[data-value="1"]').click();

    //using xpath selector
    await page.locator("//div[contains(@class,'another dropdown example')]//div[contains(@class,'ui dropdown selection')]").click();
    await page.locator("//div[@class='menu transition visible']//div[@class='item'][normalize-space()='Male']").click();
 




    await page.waitForTimeout(2000);
})