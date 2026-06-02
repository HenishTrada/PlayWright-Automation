import { test, expect } from "@playwright/test";

test("Iframe Handling", async ({ page }) => {
    test.setTimeout(60000);
    await page.goto("https://www.saffrony.ac.in/admissions/admission-process/", );


    await page.locator('li:has-text("Admissions")').click();
    const iframeElement = page.locator('iframe');
    await expect(iframeElement).toBeVisible();

    const frame = await iframeElement.contentFrame();
    
    await frame.getByPlaceholder("Full Name *").fill("Henish Trada");
    await frame.getByPlaceholder("Enter Mobile Number *").fill("1234567890");

    await frame.locator('#StateId').selectOption({ label: "Gujarat" });
    await frame.locator('#CityId').selectOption({ label: "Ahmedabad" });
    await frame.locator('#UniversityId').selectOption({value : "1508539"});
});