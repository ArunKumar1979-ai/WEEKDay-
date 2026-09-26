import { test, expect } from "@playwright/test";

test.describe("Frame + Alert (prompt) handling with Playwright", () => {

  test("Accept the prompt inside the iframe and verify displayed text", async ({ page }) => {
    const name = "Arun";

    // 1. Navigate to the given URL
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt");

    // 2. Maximize the browser window using an appropriate viewport configuration
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Dismiss cookie consent banner if it appears, so it doesn't block clicks
    const acceptCookies = page.locator("#accept-choices");
    if (await acceptCookies.isVisible().catch(() => false)) {
      await acceptCookies.click();
    }

    // 3. Identify the iframe containing the "Try It" button and JS demo
    const resultFrame = page.frameLocator("#iframeResult");

    // 4. Register the dialog handler BEFORE clicking, so Playwright is
    //    ready to catch the prompt() as soon as it fires.
    page.once("dialog", async (dialog) => {
      console.log("Dialog type:", dialog.type());
      console.log("Dialog message:", dialog.message());

      if (dialog.type() === "prompt") {
        // 5 & 6. Accept the prompt and enter a name
        await dialog.accept(name);
      }
    });

    // 7. Click the "Try It" button INSIDE the iframe (this triggers the prompt)
    await resultFrame.getByRole("button", { name: "Try it" }).click();

    // Give the iframe a moment to update the DOM after the dialog closes
    await page.waitForTimeout(1000);

    // 8. Verify the displayed text inside the iframe, since the prompt was accepted
    const demoText = resultFrame.locator("#demo");
    await expect(demoText).toHaveText(`Hello ${name}! How are you today?`);
  });

  test("Dismiss the prompt inside the iframe and verify displayed text", async ({ page }) => {
    // 1. Navigate to the given URL
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt");

    // 2. Maximize the browser window using an appropriate viewport configuration
    await page.setViewportSize({ width: 1920, height: 1080 });

    const acceptCookies = page.locator("#accept-choices");
    if (await acceptCookies.isVisible().catch(() => false)) {
      await acceptCookies.click();
    }

    // 3. Identify the iframe containing the "Try It" button and JS demo
    const resultFrame = page.frameLocator("#iframeResult");
    const demoText = resultFrame.locator("#demo");

    // 4. Register the dialog handler BEFORE clicking
    page.once("dialog", async (dialog) => {
      console.log("Dialog type:", dialog.type());
      console.log("Dialog message:", dialog.message());

      if (dialog.type() === "prompt") {
        // 5, 6 & 7. Dismiss the prompt (equivalent to Cancel)
        await dialog.dismiss();
      }
    });

    // Click the "Try It" button INSIDE the iframe (this triggers the prompt)
    await resultFrame.getByRole("button", { name: "Try it" }).click();

    await page.waitForTimeout(1000);

    // 8. Verify the text: since the prompt was dismissed/cancelled, the sample's
    //    own if/else branch runs its "cancelled" message instead of a greeting.
    await expect(demoText).toHaveText("User cancelled the prompt.");
  });

});