import { Locator, Page, expect } from "@playwright/test";

export class AbhiBusFlightsPage {
    page: Page;
    flightsLink: Locator;
    closeButton: Locator;
    fromTrigger: Locator;
    toTrigger: Locator;
    fromInput: Locator;
    toInput: Locator;
    departureDate: Locator;
    returnDate: Locator;
    travellersTrigger: Locator;
    searchButton: Locator;

    loginButton: Locator;
    mobileNumberField: Locator;
    continueButton: Locator;
    verifyHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.flightsLink = page.getByRole('link', { name: 'Flights' });
        this.closeButton = page.locator(".closeButton");
        this.fromTrigger = page.locator('div').filter({ hasText: /^From$/ }).nth(1);
        this.toTrigger = page.locator('div').filter({ hasText: /^To$/ }).nth(1);
        this.fromInput = page.locator(`//div/div[2]/input`).nth(1);
        this.toInput = page.locator(`//div/div[2]/input`).nth(1);
        this.departureDate = page.getByTestId('departureDate');
        this.returnDate = page.locator('div').filter({ hasText: /^Return$/ }).nth(2);
        this.travellersTrigger = page.getByTestId('pax');
        this.searchButton = page.getByRole('button', { name: 'Search' });

        this.loginButton = page.getByRole('button', { name: 'Log in/Sign up' }).first();
        this.mobileNumberField = page.getByRole('textbox', { name: 'Enter Mobile Number' });
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.verifyHeading = page.getByRole('heading', { name: 'Verify Your Mobile Number', level: 5 });
    }

    async closeOfferbanner() {
        const isPresent = await this.closeButton
            .waitFor({ state: 'visible', timeout: 3000 })
            .then(() => true)
            .catch(() => false);

        if (isPresent) {
            await this.closeButton.click();
        }
    }

    async goToFlightsTab(): Promise<void> {
        await this.flightsLink.click();
        await this.closeOfferbanner();
        // await expect(this.fromTrigger).toBeVisible({ timeout: 30000 });
    }

    async selectOrigin(cityName: string, airportName: string): Promise<void> {
        await this.fromTrigger.click();
        await this.fromTrigger.pressSequentially(cityName, { delay: 200, timeout: 4000 });
        await this.page.getByText(airportName, { exact: true }).click();
    }

    async selectDestination(cityName: string, locationName: string): Promise<void> {
        // await this.toTrigger.click();
        await this.toTrigger.pressSequentially(cityName, { delay: 200, timeout: 4000 });
        await this.page.getByText(locationName, { exact: true }).click();
    }

    async selectDepartureDate(ariaLabel: string): Promise<void> {
        await this.departureDate.click();
        await this.page.locator(`abbr[aria-label='${ariaLabel}']`).click();
    }

    async selectReturnDate(ariaLabel: string): Promise<void> {
        await this.returnDate.click();
        await this.page.locator(`abbr[aria-label='${ariaLabel}']`).click();
    }

    async setTravellers(adultsCount: number): Promise<void> {
        await this.travellersTrigger.click();
        await this.page.locator(`[data-testid="${adultsCount}"]`).first().click();
    }

    async pressSearchButton(): Promise<void> {
        await this.searchButton.click();
    }

    async loginFunc() {
        await expect(this.loginButton).toBeVisible({ timeout: 4000 });
        await this.loginButton.click();

        await this.mobileNumberField.click();
        await this.mobileNumberField.pressSequentially("8200079192");
        await this.continueButton.click();

        await expect(this.verifyHeading).toBeVisible({ timeout: 4000 });

    }

    async fillOtp(page: Page, otp: string): Promise<void> {
        const digits = otp.split('');
        const inputs = page.locator('#otp [type="number"]');

        await expect(inputs).toHaveCount(digits.length);

        for (let i = 0; i < digits.length; i++) {
            await inputs.nth(i).fill(digits[i]);
        }
    }
}