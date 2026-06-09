import { expect, Locator, Page } from "@playwright/test";
import { ENV } from "../config/env";
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
 
    async AbhiBusURL(): Promise<void> {
        await this.page.goto(ENV.BASE_URL);
        // console.log("Current URL:", this.page.url());
        await expect(this.page).toHaveURL(/abhibus/);
        await expect(this.fromInput).toBeVisible({timeout: 30000});
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
 
    async selectDate(date : string ) : Promise<void>{
        await this.datePicker.click();
        await this.page.getByRole("button", { name: date }).click();
        await expect(this.datePicker).toHaveValue(`${date}/06/2026`);
    }
 
    async pressSearchButton(){
        await this.searchButton.click();
    }
 
}