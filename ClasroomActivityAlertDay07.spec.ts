import { test, expect } from "@playwright/test";

test("test to verify the user is able to handle prompt alert", async ({ page }) => {
  await page.goto("https://demoqa.com/alerts");

  page.on("dialog", async (dialog) => {
    console.log("Dialog message:", dialog.message());

    if (dialog.type() === "prompt") {
      await dialog.accept("Arun");
      await page.waitForTimeout(3000);
    }
  });

  await page.locator("#promtButton").click();

  await expect(page.locator("#promptResult")).toHaveText("You entered Arun");
  await page.waitForTimeout(3000);
});