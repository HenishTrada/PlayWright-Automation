import { test, expect } from "@playwright/test";

test("Assertion", async ({ page }) => {
    await page.goto("https://www.abhibus.com/");

    const fromInput = page.getByPlaceholder("Leaving From");
    await fromInput.click();
    await fromInput.fill("Ahmedabad");
    await page.getByText("Ahmedabad", { exact: true }).first().click();

    await expect(fromInput).toHaveValue("Ahmedabad");

    const toInput = page.getByPlaceholder("Going To");
    await toInput.click();
    await toInput.fill("Mumbai");
    await page.getByText("Mumbai", { exact: true }).first().click();

    await expect(toInput).toHaveValue("Mumbai");

    await page.getByPlaceholder("Onward Journey Date").click();

    await page.getByRole("button", { name: "11" }).click();
    await expect(page.getByPlaceholder("Onward Journey Date")).toHaveValue("11/06/2026");

    await page.locator("#search-container").getByRole("button", { name: "Search" }).click();

    const tabsActions = page.locator('.container.tabs-actions');
    await tabsActions.waitFor({ state: "visible" });

    const boardingPointTab = tabsActions.getByText("Boarding Points").first();
    await expect(boardingPointTab).toHaveAttribute("class", /active/);

    const boardingPointsList = page.locator('#popular-filters-scrollable').first();
    const filterButton = boardingPointsList.getByText('Iskcon Circle', { exact: true });
    await filterButton.click();

    await page.waitForLoadState("load");
    await expect(filterButton).toHaveAttribute("class", /active/);

    const droppingPointTab = tabsActions.getByText("Dropping Points").first();
    await droppingPointTab.click();
    
    await page.waitForLoadState("load");
    await expect(droppingPointTab).toHaveAttribute("class", /active/);

    const droppingPointsList = page.locator('#popular-filters-scrollable').first();
    const filterButton2 = droppingPointsList.getByText('Andheri East', { exact: true });
    await filterButton2.click();

    await page.waitForLoadState("load");
    await expect.soft(filterButton2).toHaveAttribute("class", /active1/);

    await page.locator(`//div[2]/div/span[4]`).click();


    const busNonAcFilterType = page.locator(`//div[2]/div/span[1]`).first();
    await expect(busNonAcFilterType).toHaveAttribute("style", /pointer-events: none;/);

    await page.waitForTimeout(3000);
});

