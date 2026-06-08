import { expect, Locator, Page } from "@playwright/test";


export class PassengerInfoPage{

    page: Page;
    InfoDialogBox : Locator;
    CloseButton : Locator;
    MobileNumber : Locator;
    EmailId :Locator;
    Name : Locator;
    Age : Locator;
    Gender : Locator;
    TravelAssured : Locator;
    ContinueLink : Locator;

    constructor( page : Page ){

        this.page = page;
        this.InfoDialogBox = page.locator('#login-container');
        this.CloseButton = this.InfoDialogBox.locator("#login-heading svg");
        this.MobileNumber = page.getByPlaceholder("Mobile Number");
        this.EmailId = page.getByPlaceholder("Email ID");
        this.Name = page.getByPlaceholder("Name");
        this.Age = page.getByPlaceholder("Age");
        this.Gender = page.getByRole('button', { name: 'Male', exact : true });
        this.TravelAssured = page.locator('.checkbox-container input');
        this.ContinueLink = page.locator('a.btn > div > svg');
    }

    async ClosingLoginModel(){
        await expect(this.InfoDialogBox).toBeVisible();
        await this.CloseButton.click();
    }

    async FillingUserInfo(MobileNumber : string, EmailId : string) : Promise<void>{

        await this.MobileNumber.waitFor({state : "visible"});
        await this.MobileNumber.click();
        await this.MobileNumber.pressSequentially(MobileNumber, {delay : 200});

        await this.EmailId.click();
        await this.EmailId.pressSequentially(EmailId);

        await this.Name.click();
        await this.Name.pressSequentially("Henish Trada");

        await this.Age.click();
        await this.Age.pressSequentially("21");

        await this.Gender.click();

        await this.TravelAssured.check()
        await expect(this.TravelAssured).toBeChecked();
        await this.ContinueLink.click();
        await this.page.waitForTimeout(3000);

    }


}