import { expect, test } from "@playwright/test";

test("Simple Alert", async ({ page }) => {
    await page.goto("https://qaplayground.vercel.app/");

    page.on("dialog", async (dialog) => {
        expect(dialog.type()).toBe("alert");
        expect(dialog.message()).toContain("This is a simple alert!");
        await dialog.accept();
    });

    await page.locator("#btn-simple-alert").click();
    await expect(page.locator("#alert-output")).toHaveText("Simple alert was accepted");

    await page.waitForTimeout(2000);
})

test("Confirm Alert", async ({ page }) => {
    await page.goto("https://qaplayground.vercel.app/");

    page.on("dialog", async (dialog) => {
        expect(dialog.type()).toBe("confirm");
        expect(dialog.message()).toContain("Do you want to proceed?");
        await dialog.accept();
    });

    await page.locator("#btn-confirm-alert").click();

    await expect(page.locator("#alert-output")).toHaveText("✓ Confirmation accepted");
});

test("Prompt Alert", async ({ page }) => {
    await page.goto("https://qaplayground.vercel.app/");

    page.on("dialog", async (dialog) => {
        expect(dialog.type()).toBe("prompt");
        expect(dialog.message()).toContain("Enter your name:");
        await dialog.accept("Henish");
    });

    await page.locator("#btn-prompt-alert").click();
    await expect(page.locator("#alert-output")).toHaveText(`✓ Prompt input: "Henish"`);

});

test("Model Popup Handling", async ({ page }) => {
    await page.goto("https://qaplayground.vercel.app/");

    const modelSection = page.getByTestId("section-modal");
    await modelSection.getByRole("button", { name: "Open Modal" }).click();
    await expect(modelSection.locator("#modal-output")).toHaveText("Modal is open");

    await page.getByPlaceholder("Type something inside the modal").fill("Hello, Modal!");
    await page.getByTestId("btn-modal-confirm").click();
});