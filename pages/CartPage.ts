import {Page, Locator, expect} from "@playwright/test"

export class Cartpage{

    page : Page;
    giftCheckBox : Locator;
    incrementButton : Locator;
    proceedToButButton : Locator;

    constructor(page : Page){

        this.page = page;
        this.giftCheckBox = page.locator('.a-label.a-checkbox-label').first();
        this.incrementButton = page.locator('.a-icon.a-icon-small-add');
        this.proceedToButButton = page.locator(`input[name='proceedToRetailCheckout']`);

    }

    async enableGiftCheckBox(){
        await this.giftCheckBox.check();
        await expect(this.giftCheckBox).toBeChecked();
    }

    async increaseCartItem(){
        await this.incrementButton.click();
    }

    async proceedingToCheckout(){
        await this.proceedToButButton.waitFor({state : "visible"});
        await this.proceedToButButton.click();
    }
}