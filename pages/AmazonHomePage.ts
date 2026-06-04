import { expect, Locator, Page } from "@playwright/test";

export class AmazonHomePage{

    page : Page;
    searchBar : Locator;

    constructor(page : Page){
        
        this.page = page;
        this.searchBar = page.getByPlaceholder("Search Amazon.in");
        
    }

    async amazonURL(){
        await this.page.goto("https://www.amazon.in/");
    }

    async searchingProduct(productName : string): Promise<void>{
        await expect(this.searchBar).toBeVisible();
        await this.searchBar.pressSequentially(productName, {delay : 200});
        await this.searchBar.press("Enter");
    }
}