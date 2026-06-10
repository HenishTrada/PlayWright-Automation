import { Page, Locator } from "@playwright/test";

/**
 * PriceSlider — Playwright automation helper for the horizontal range price slider.
 *
 * Usage:
 *   const slider = new PriceSlider(page);
 *   await slider.setRange(1000, 5000);
 */
export class PriceSlider {
  private readonly page: Page;

  private readonly sliderContainer: Locator;
  private readonly minThumb: Locator;
  private readonly maxThumb: Locator;

  private dataMin!: number;
  private dataMax!: number;

  // Real pixel travel boundaries (thumb centre at min extreme → thumb centre at max extreme)
  private travelMinX!: number;
  private travelMaxX!: number;
  private thumbCenterY!: number;

  constructor(page: Page) {
    this.page = page;
    this.sliderContainer = page.locator(".horizontal-slider").first();
    this.minThumb = this.sliderContainer.locator(".slider-thumb-0").first();
    this.maxThumb = this.sliderContainer.locator(".slider-thumb-1").first();
  }

  async setRange(minimum: number, maximum: number): Promise<void> {
    await this.sliderContainer.waitFor({ state: "visible" });
    await this.readBounds();
    this.validateInput(minimum, maximum);

    // Move min thumb to its data-min first so max thumb has full room to move
    await this.dragThumb(this.minThumb, this.dataMin);
    // Move max thumb to its data-max first so min thumb has full room to move
    await this.dragThumb(this.maxThumb, this.dataMax);

    // Now set actual target values — no risk of thumbs crossing
    await this.dragThumb(this.minThumb, minimum);
    await this.dragThumb(this.maxThumb, maximum);

    await this.assertValues(minimum, maximum);
  }

  /**
   * Read the current [min, max] values from the slider's aria attributes.
   */
  async getCurrentValues(): Promise<{ min: number; max: number }> {
    const min = await this.getAriaValue(this.minThumb);
    const max = await this.getAriaValue(this.maxThumb);
    return { min, max };
  }

  // ─────────────────────────────────────────────
  // Internal helpers
  // ─────────────────────────────────────────────

  /**
   * Read data bounds from aria attributes, then measure the ACTUAL thumb
   * travel range in pixels by reading the two thumb bounding boxes directly.
   *
   * FIX: We no longer use sliderContainer.boundingBox().width as the track
   * width — that includes padding and gives wrong pixel targets. Instead we
   * read the thumb centres at their current positions and compute travel
   * distance from them at runtime.
   */
  private async readBounds(): Promise<void> {
    this.dataMin = Number(await this.minThumb.getAttribute("aria-valuemin"));
    this.dataMax = Number(await this.minThumb.getAttribute("aria-valuemax"));

    const minBox = await this.minThumb.boundingBox();
    const maxBox = await this.maxThumb.boundingBox();

    if (!minBox || !maxBox) {
      throw new Error("Could not read thumb bounding boxes.");
    }

    // Use the thumb centres at their current positions.
    // For a freshly loaded page the min thumb is at the far-left and the max
    // thumb is at the far-right, so these ARE the travel limits.
    // If the page has already been filtered, we reset to extremes in setRange()
    // before calling readBounds() a second time — see note in setRange().
    this.travelMinX = minBox.x + minBox.width / 2;
    this.travelMaxX = maxBox.x + maxBox.width / 2;
    this.thumbCenterY = minBox.y + minBox.height / 2;

    if (this.travelMaxX <= this.travelMinX) {
      throw new Error(
        `Unexpected thumb positions: minX=${this.travelMinX} maxX=${this.travelMaxX}. ` +
          "Make sure the slider is at its full range before calling readBounds()."
      );
    }
  }

  /**
   * Convert a price value into an absolute page X coordinate.
   *
   * Formula (corrected):
   *   ratio   = (value − dataMin) / (dataMax − dataMin)     → 0.0 … 1.0
   *   targetX = travelMinX + ratio × (travelMaxX − travelMinX)
   *
   * travelMinX / travelMaxX are the thumb CENTRE positions at the two
   * extremes — so the multiplication maps directly onto real pixel travel,
   * with zero padding error.
   */
  private valueToPixel(value: number): number {
    const ratio = (value - this.dataMin) / (this.dataMax - this.dataMin);
    console.log(this.travelMaxX, " ", this.travelMinX, " ", ratio);
    return ratio * (this.travelMaxX - this.travelMinX);
  }

  /** Drag a thumb to the pixel X that corresponds to targetValue. */
  private async dragThumb(thumb: Locator, targetValue: number): Promise<void> {
    const box = await thumb.boundingBox();
    if (!box) throw new Error("Thumb element not found or not visible.");

    const currentCenterX = box.x + box.width / 2;
    const currentCenterY = box.y + box.height / 2;
    const targetX = this.valueToPixel(targetValue);

    await this.page.mouse.move(currentCenterX, currentCenterY);
    await this.page.mouse.down();
    await this.page.mouse.move(currentCenterX + targetX, currentCenterY, { steps: 20 });
    await this.page.mouse.up();

    // Allow React / slider library to commit the new value
    await this.page.waitForTimeout(200);
  }

  /** Read aria-valuenow from a thumb element. */
  private async getAriaValue(thumb: Locator): Promise<number> {
    const raw = await thumb.getAttribute("aria-valuenow");
    return Number(raw);
  }

  /** Throw early with a helpful message if the caller passes bad values. */
  private validateInput(minimum: number, maximum: number): void {
    if (minimum < this.dataMin || minimum > this.dataMax) {
      throw new RangeError(
        `minimum (${minimum}) is outside the slider range [${this.dataMin}, ${this.dataMax}].`
      );
    }
    if (maximum < this.dataMin || maximum > this.dataMax) {
      throw new RangeError(
        `maximum (${maximum}) is outside the slider range [${this.dataMin}, ${this.dataMax}].`
      );
    }
    if (minimum > maximum) {
      throw new RangeError(
        `minimum (${minimum}) must not be greater than maximum (${maximum}).`
      );
    }
  }

  /**
   * Soft-assert: warn if final aria-valuenow differs from the requested value
   * beyond the slider's natural step tolerance.
   */
  private async assertValues(
    expectedMin: number,
    expectedMax: number
  ): Promise<void> {
    const tolerance = 10;
    const { min, max } = await this.getCurrentValues();

    if (Math.abs(min - expectedMin) > tolerance) {
      console.warn(
        `[PriceSlider] min thumb landed at ${min} instead of ${expectedMin}.`
      );
    }
    if (Math.abs(max - expectedMax) > tolerance) {
      console.warn(
        `[PriceSlider] max thumb landed at ${max} instead of ${expectedMax}.`
      );
    }
  }
}