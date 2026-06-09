import { expect, Locator, Page } from "@playwright/test";

export class PriceFilterPage {
  page: Page;
  priceSlider: Locator;
  minThumb: Locator;
  maxThumb: Locator;

  constructor(page: Page) {
    this.page = page;
    this.priceSlider = page.locator(".horizontal-slider");
    this.minThumb = this.priceSlider.locator(".slider-thumb-0");
    this.maxThumb = this.priceSlider.locator(".slider-thumb-1");
  }

  private async getEffectiveSliderWidth(){
    const maxThumbLeft = await this.maxThumb.evaluate((el) =>
      parseFloat((el as HTMLElement).style.left || "0")
    );

    const minValue = Number(await this.minThumb.getAttribute("aria-valuemin"));
    const maxValue = Number(await this.minThumb.getAttribute("aria-valuemax"));

    if (!maxThumbLeft || Number.isNaN(maxThumbLeft)) {
      throw new Error("Unable to read max thumb left style");
    }

    return {maxThumbLeft, minValue, maxValue}; // 249.203 in your HTML
  }

  private async getTargetX(targetValue: number): Promise<number> {
    const sliderBox = await this.priceSlider.boundingBox();

    if (!sliderBox) {
      throw new Error("Slider bounding box not found");
    }

    const {maxThumbLeft, maxValue, minValue}  = await this.getEffectiveSliderWidth();

    const ratio = (maxThumbLeft) / (maxValue - minValue);

    return  targetValue * ratio;
  }

  private async dragThumbToValue(
    thumb: Locator,
    targetValue: number
  ): Promise<void> {
    await expect(thumb).toBeVisible();

    const thumbBox = await thumb.boundingBox();
    const sliderBox = await this.priceSlider.boundingBox();

    if (!thumbBox || !sliderBox) {
      throw new Error("Thumb or slider bounding box not found");
    }

    const startX = thumbBox.x + thumbBox.width / 2;
    const startY = thumbBox.y + thumbBox.height / 2;

    const targetX = await this.getTargetX(targetValue) + startX;
    const targetY = startY;
    console.log(targetX," ", startX," ", sliderBox.x);
    await this.page.mouse.move(startX, startY);
    await this.page.mouse.down();
    await this.page.mouse.move(targetX, targetY, { steps: 30 });
    await this.page.mouse.up();
  }

  async setPriceRange(minPrice: number, maxPrice: number): Promise<void> {
    if (minPrice >= maxPrice) {
      throw new Error("Minimum price must be less than maximum price");
    }

    await this.dragThumbToValue(this.minThumb, minPrice);
    // await this.dragThumbToValue(this.maxThumb, maxPrice);
  }
}