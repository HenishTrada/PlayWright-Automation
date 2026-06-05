import {Page, Locator, expect} from "@playwright/test"
 
export class BusSelectionPage{
 
    page : Page;
    tabsActions : Locator;
    boardingPointsList : Locator;
    droppingPointsList : Locator;
    busACFilterButton : Locator;
    busNonAcFilterButton : Locator;
    selectBus : Locator;
    seatLayoutContainer : Locator;
    BoardingAndDroppingTabs : Locator;
    BoardingAndDroppingList : Locator;

    constructor(page : Page){
 
        this.page = page;
        this.tabsActions = page.locator('.container.tabs-actions').first();
        this.boardingPointsList = page.locator('#popular-filters-scrollable').first();
        this.droppingPointsList = page.locator('#popular-filters-scrollable').first();;
        this.busACFilterButton = page.locator(`//div[2]/div/span[4]`);
        this.busNonAcFilterButton = page.locator(`//div[2]/div/span[1]`).first();
        this.selectBus = page.locator('#service-4255579535').getByRole("button", {name: `Select Seats`});
        this.seatLayoutContainer = page.locator('#service-4255579535').locator("#seat-layout-container");
        this.BoardingAndDroppingTabs = page.locator('#service-4255579535').locator("#seating-container").locator(".tabs-actions");
        this.BoardingAndDroppingList = page.locator('#service-4255579535').locator("#seating-container").locator(`.tabs-viewport`);
    }
 
    async boardingPointStatus(){
        await this.tabsActions.waitFor({state : "visible"});
        const boardingPointTab = this.tabsActions.getByText("Boarding Points").first();
        await expect(boardingPointTab).toHaveAttribute("class", /active/);
    }
 
    async selectingBoardingCity(){
        const boardingPointCity = this.boardingPointsList.getByText('Iskcon Circle', { exact: true });
        await boardingPointCity.click();
        await this.page.waitForLoadState("load");
        await expect(boardingPointCity).toHaveAttribute("class", /active/);
    }
 
    async droppingPointStatus(){
        const droppingPointTab = this.tabsActions.getByText("Dropping Points").first();
        await droppingPointTab.click();
        await this.page.waitForLoadState("load");
        await expect(droppingPointTab).toHaveAttribute("class", /active/);
    }
 
    async selectingDroppingCity(){
        const droppingPoint = this.droppingPointsList.getByText('Andheri East', { exact: true });
        await droppingPoint.click();
        await this.page.waitForLoadState("load");
        await expect.soft(droppingPoint).toHaveAttribute("class", /active/);
    }
 
    async busFilter(){
        await this.busACFilterButton.click();
        await expect(this.busNonAcFilterButton).toHaveAttribute("style", /pointer-events: none;/);
    }
 
    async selectBusSeat(){
        await this.selectBus.scrollIntoViewIfNeeded();
        await this.selectBus.waitFor({state : "visible"});
        await this.selectBus.click();
 
        const availableSeats = this.seatLayoutContainer.locator(`button.seat.seat-button`);
        const seatCount = await availableSeats.count();
 
        if (seatCount === 0) {
            throw new Error("No available seats found");
        }
        else {
            await availableSeats.first().waitFor({state : "visible"});
            await availableSeats.first().click();   
        }
    }

    async selectBoardingPoint(){
        const boardingTabStatus = await this.BoardingAndDroppingTabs.getByText("Boarding Points").nth(1);
        // await expect(boardingTabStatus).toHaveAttribute("class", /active/); 

        const boardingLocation = this.BoardingAndDroppingList.locator(`.radio-container`).filter({ hasText: `Iscon Char Rasta.`});
        await boardingLocation.scrollIntoViewIfNeeded();
        await boardingLocation.waitFor({state : "visible"});
        await boardingLocation.click();
    }
}
 