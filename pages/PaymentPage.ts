import { expect, Locator, Page } from "@playwright/test";

export class PaymentPage{

    page : Page; 
    Heading : Locator;
    MainTab : Locator;
    UPITab : Locator;
    QRButton : Locator;
    QrImage : Locator;

    constructor( page : Page ){

        this.page = page;
        this.Heading = page.getByRole('heading', { name: 'Fare Summary', level: 4 });
        this.MainTab = page.locator('#main-tabs');
        this.UPITab = this.MainTab.locator("#UPI");
        this.QRButton = page.getByRole('button', {name : "Generate QR"});
        this.QrImage = page.locator('.relative.rounded-10.shadow-100');

    }

    async selectingpaymentOption(){
        await this.UPITab.waitFor({state : "visible"});
        await this.UPITab.click();
        await expect(this.UPITab).toHaveAttribute("class", /bg-common-white/);
    }

    async GenerateQRCode(){
        await expect(this.QrImage.locator("img")).toHaveAttribute("class", /blur-sm/);
        await this.QRButton.click();

        await this.QrImage.locator("svg").waitFor({state : "visible"});
        await expect(this.QrImage.locator("svg")).toBeVisible();
    }
}