import { test, expect } from "@playwright/test";

test("Drop Down Event", async ({page}) => {
    await page.goto("https://semantic-ui.com/modules/dropdown.html");

    const dropdown_1 =  page.locator('.ui.selection.dropdown').first();
    await dropdown_1.click();
    await dropdown_1.locator('.item').getByText("Male").first().click();

    const dropdown_2 =  page.locator('.another.dropdown.example').locator(`.ui.dropdown.selection`).first();


    const dropdown_3 = page.getByRole('textbox').first();
    await dropdown_3.click();
    await dropdown_3.pressSequentially("India");
    await dropdown_3.getByText('India').first().click();


    await page.waitForTimeout(2000);
})