import { expect, Locator, Page } from "@playwright/test";


export class PassengerInfoPage{

    InfoDialogBox : Locator;
    CloseButton : Locator;

    constructor( page : Page ){

        this.InfoDialogBox = page.locator('#login-container');
        this.CloseButton = this.InfoDialogBox.locator("#login-heading svg");

    }

    async ClosingLoginModel(){
        await expect(this.InfoDialogBox).toBeVisible();
        await this.CloseButton.click();
    }
}