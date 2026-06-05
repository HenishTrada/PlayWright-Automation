import { expect, Locator, Page } from "@playwright/test";
 
export class AbhiBusHomePage {
 
    page: Page;
    searchButton: Locator;
    fromInput: Locator;
    toInput: Locator;
    datePicker: Locator;
 
    constructor(page: Page) {
 
        this.page = page;
        this.fromInput = page.getByPlaceholder("Leaving From");
        this.toInput = page.getByPlaceholder("Going To");
        this.searchButton = page.locator("#search-container").getByRole("button", { name: "Search" });
        this.datePicker = page.getByPlaceholder("Onward Journey Date");
 
    }
 
    async AbhiBusURL() {
        await this.page.goto("https://www.abhibus.com/");
    }
 
    async fromInputField(leavingCityName: string): Promise<void>{
        await this.fromInput.click();
        await this.fromInput.fill(leavingCityName);
        await this.page.getByText(leavingCityName, { exact: true }).first().click();
        await expect(this.fromInput).toHaveValue(leavingCityName);
 
    }
 
    async toInputField(destinationCityName: string): Promise<void> {
        await this.toInput.click();
        await this.toInput.fill(destinationCityName);
        await this.page.getByText(destinationCityName, { exact: true }).first().click();
        await expect(this.toInput).toHaveValue(destinationCityName);
    }
 
    async selectDate(){
        await this.datePicker.click();
        await this.page.getByRole("button", { name: "11" }).click();
        await expect(this.datePicker).toHaveValue(`11/06/2026`);
    }
 
    async pressSearchButton(){
        await this.searchButton.click();
    }
 
}