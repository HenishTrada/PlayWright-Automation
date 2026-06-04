import { Locator, Page, expect } from "@playwright/test";

export class ProductPage {

    page: Page;
    deliveryTime: Locator;
    freeDeliveryStatus: Locator;
    product : Locator;
    cartButton : Locator;

    constructor(page: Page) {

        this.page = page;
        this.deliveryTime = page.getByLabel('Apply the filter Get It in 2 Days to narrow results');
        this.freeDeliveryStatus = page.getByLabel('Apply the filter Free Shipping to narrow results');
        this.product = page.getByRole('button', { name: 'Add to cart' }).first();
        this.cartButton = page.locator("#nav-cart-count-container");

    }

    async selectingDeliveryTime() {
        await this.deliveryTime.waitFor({state : "visible"});
        await this.deliveryTime.click();
    }

    async selectFreeDelivery() {
        await this.freeDeliveryStatus.waitFor({state : "visible"});
        await this.freeDeliveryStatus.click();
    }

    async addProductToCart(){
        await this.product.waitFor({state : "visible"});
        await this.product.click();
    }

    async openCartPage(){
        await this.cartButton.click();
    }
}