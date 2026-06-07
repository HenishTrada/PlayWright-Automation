import { Page, Locator, expect } from "@playwright/test"

export class BusSelectionPage {

    page: Page;
    tabsActions: Locator;
    boardingPointsList: Locator;
    droppingPointsList: Locator;
    busACFilterButton: Locator;
    busNonAcFilterButton: Locator;
    selectBus: Locator;
    seatLayoutContainer: Locator;
    BoardingAndDroppingTabs: Locator;
    BoardingAndDroppingList: Locator;
    ProceedButton : Locator;

    constructor(page: Page) {

        this.page = page;
        this.tabsActions = page.locator('.container.tabs-actions').first();
        this.boardingPointsList = page.locator('#popular-filters-scrollable').first();
        this.droppingPointsList = page.locator('#popular-filters-scrollable').first();;
        this.busACFilterButton = page.locator(`//div[2]/div/span[4]`);
        this.busNonAcFilterButton = page.locator(`//div[2]/div/span[1]`).first();
        this.selectBus = page.locator('#service-4255579535');
        this.seatLayoutContainer = this.selectBus.locator("#seat-layout-container");
        this.BoardingAndDroppingTabs = this.selectBus.locator(`.tabs-actions a`);
        this.BoardingAndDroppingList = this.selectBus.locator(`.tabs-viewport .scrollable-container`);
        this.ProceedButton = this.selectBus.getByRole('button', { name: 'Proceed' });
    }

    async boardingPointStatus() {
        await this.tabsActions.waitFor({ state: "visible" });
        const boardingPointTab = this.tabsActions.getByText("Boarding Points").first();
        await expect(boardingPointTab).toHaveAttribute("class", /active/);
    }

    async selectingBoardingCity() {
        const boardingPointCity = this.boardingPointsList.getByText('Iskcon Circle', { exact: true });
        await boardingPointCity.click();
        await this.page.waitForLoadState("load");
        await expect(boardingPointCity).toHaveAttribute("class", /active/);
    }

    async droppingPointStatus() {
        const droppingPointTab = this.tabsActions.getByText("Dropping Points").first();
        await droppingPointTab.click();
        await this.page.waitForLoadState("load");
        await expect(droppingPointTab).toHaveAttribute("class", /active/);
    }

    async selectingDroppingCity() {
        const droppingPoint = this.droppingPointsList.getByText('Andheri East', { exact: true });
        await droppingPoint.click();
        await this.page.waitForLoadState("load");
        await expect.soft(droppingPoint).toHaveAttribute("class", /active/);
    }

    async busFilter() {
        await this.busACFilterButton.click();
        await expect(this.busNonAcFilterButton).toHaveAttribute("style", /pointer-events: none;/);
    }

    async selectBusSeat() {
        await this.selectBus.getByRole("button", { name: `Select Seats` }).scrollIntoViewIfNeeded();
        await this.page.waitForLoadState("load");
        await this.selectBus.getByRole("button", { name: `Select Seats` }).click();

        const availableSeats_1 = this.seatLayoutContainer.locator(`button.seat.seat-button`);
        await availableSeats_1.first().waitFor({ state: "visible" });
        const seatCount_1 = await availableSeats_1.count();

        if (seatCount_1 === 0) {
            throw new Error("No available seats found");
        }
        else {
            await availableSeats_1.first().waitFor({ state: "visible" });
            await availableSeats_1.first().click();
        }
    }

    async selectBoardingPoint() {
        const boardingTabStatus = this.BoardingAndDroppingTabs.first();
        await expect(boardingTabStatus).toHaveAttribute("class", /active/); 
        // await this.page.pause();
        const boardingLocation = this.BoardingAndDroppingList.locator('#place-195361-4255579535');
        await boardingLocation.waitFor({ state: "visible" });
        await boardingLocation.click();
    }

    async selectDroppingPoint(){
        const selectDroppingTab = this.BoardingAndDroppingTabs.nth(1);
        // await selectDroppingTab.click();
        await expect(selectDroppingTab).toHaveAttribute("class", /active/);

        const droppingLocation = this.BoardingAndDroppingList.locator(`#place-317941-4255579535` );
        await this.BoardingAndDroppingList.scrollIntoViewIfNeeded();
        await droppingLocation.click();

        await this.page.waitForTimeout(2000);

        await this.ProceedButton.waitFor({state : "visible"});
        await this.ProceedButton.click();

        await this.page.waitForLoadState("load");
    }
}
