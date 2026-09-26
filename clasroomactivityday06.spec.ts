import { test } from "@playwright/test";

test("Salesforce Login Test", async ({ page }) => {

  // Open Salesforce
  await page.goto("https://login.salesforce.com/?locale=in");

  // Wait for the page to finish loading
  await page.waitForLoadState("domcontentloaded");

  // Take screenshot of the actual page
  await page.screenshot({
    path: "salesforce-login.png",
    fullPage: true
  });

  // Print the current URL
  console.log("Current URL:", page.url());

  // Print page title
  console.log("Page Title:", await page.title());

  // Check username using CSS
  console.log(
    "Username count:",
    await page.locator("#username").count()
  );

  // Check password using CSS
  console.log(
    "Password count:",
    await page.locator("#password").count()
  );

  // Check password using XPath
  console.log(
    "Password XPath count:",
    await page.locator('//input[@id="password"]').count()
  );

  // Check all input elements
  console.log(
    "Input count:",
    await page.locator("input").count()
  );

  // Enter username
  await page.locator("#username").fill(
    "dilipkumar.rajendran@testleaf.com"
  );

  // Wait briefly so we can inspect the DOM
  await page.waitForTimeout(2000);
});