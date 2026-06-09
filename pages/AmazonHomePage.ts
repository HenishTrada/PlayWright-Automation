import { expect, Locator, Page } from "@playwright/test";
import { ENV } from "../config/env"

export class AmazonHomePage{

    page : Page;
    searchBar : Locator;

    constructor(page : Page){
        
        this.page = page;
        this.searchBar = page.getByPlaceholder("Search Amazon.in");
        
    }

    async amazonURL(){
        await this.page.goto(ENV.AMAZON_BASE_URL);
    }

    async searchingProduct(productName : string): Promise<void>{
        await this.searchBar.waitFor({state : "visible"});
        await this.searchBar.pressSequentially(productName, {delay : 200});
        await this.searchBar.press("Enter");
    }
}