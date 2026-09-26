import { test } from "@playwright/test";

test("Create Lead using Playwright Locators", async ({ page }) => {

  // 1. Open the application
  await page.goto("http://leaftaps.com/opentaps/control/main");

  // Wait for the page to finish loading
  await page.waitForLoadState("domcontentloaded");

  // Take screenshot of Login page
  await page.screenshot({
    path: "leaftaps-login.png",
    fullPage: true
  });

  // Print current URL
  console.log("Current URL:", page.url());

  // Print page title
  console.log("Page Title:", await page.title());

  // ---------------------------------------------------------
  // 2. Enter Username
  // ---------------------------------------------------------

  console.log(
    "Username count:",
    await page.locator("#username").count()
  );

  await page.locator("#username").fill("Demosalesmanager");

  // ---------------------------------------------------------
  // 3. Enter Password
  // ---------------------------------------------------------

  console.log(
    "Password count:",
    await page.locator("#password").count()
  );

  await page.locator("#password").fill("crmsfa");

  // ---------------------------------------------------------
  // 4. Click Login
  // ---------------------------------------------------------

  await page.locator(".decorativeSubmit").click();

  // Wait for navigation
  await page.waitForLoadState("domcontentloaded");

  console.log("After Login URL:", page.url());

  // ---------------------------------------------------------
  // 5. Click CRM/SFA
  // ---------------------------------------------------------

  await page.getByText("CRM/SFA", { exact: true }).click();

  await page.waitForLoadState("domcontentloaded");

  console.log("CRM/SFA URL:", page.url());

  // ---------------------------------------------------------
  // 6. Click Leads
  // ---------------------------------------------------------

  await page.getByText("Leads", { exact: true }).click();

  await page.waitForLoadState("domcontentloaded");

  console.log("Leads URL:", page.url());

  // ---------------------------------------------------------
  // 7. Click Create Lead
  // ---------------------------------------------------------

  await page.getByText("Create Lead", { exact: true }).click();

  await page.waitForLoadState("domcontentloaded");

  console.log("Create Lead URL:", page.url());

  // Take screenshot of Create Lead page
  await page.screenshot({
    path: "create-lead-page.png",
    fullPage: true
  });

  // ---------------------------------------------------------
  // 8. Fill Company Name
  // ---------------------------------------------------------

  console.log(
    "Company Name count:",
    await page.locator("#createLeadForm_companyName").count()
  );

  await page
    .locator("#createLeadForm_companyName")
    .fill("TestLeaf");

  // ---------------------------------------------------------
  // 9. Fill First Name
  // ---------------------------------------------------------

  console.log(
    "First Name count:",
    await page.locator("#createLeadForm_firstName").count()
  );

  await page
    .locator("#createLeadForm_firstName")
    .fill("John");

  // ---------------------------------------------------------
  // 10. Fill Last Name
  // ---------------------------------------------------------

  console.log(
    "Last Name count:",
    await page.locator("#createLeadForm_lastName").count()
  );

  await page
    .locator("#createLeadForm_lastName")
    .fill("Doe");

  // ---------------------------------------------------------
  // 11. Fill Salutation
  // ---------------------------------------------------------

  console.log(
    "Salutation count:",
    await page.locator("#createLeadForm_personalTitle").count()
  );

  await page
    .locator("#createLeadForm_personalTitle")
    .fill("Mr.");

  // ---------------------------------------------------------
  // 12. Fill Title
  // ---------------------------------------------------------

  console.log(
    "Title count:",
    await page.locator("#createLeadForm_generalProfTitle").count()
  );

  await page
    .locator("#createLeadForm_generalProfTitle")
    .fill("Test Engineer");

  // ---------------------------------------------------------
  // 13. Fill Annual Revenue
  // ---------------------------------------------------------

  console.log(
    "Annual Revenue count:",
    await page.locator("#createLeadForm_annualRevenue").count()
  );

  await page
    .locator("#createLeadForm_annualRevenue")
    .fill("500000");

  // ---------------------------------------------------------
  // 14. Fill Department
  // ---------------------------------------------------------

  console.log(
    "Department count:",
    await page.locator("#createLeadForm_departmentName").count()
  );

  await page
    .locator("#createLeadForm_departmentName")
    .fill("Quality Assurance");

  // ---------------------------------------------------------
  // 15. Fill Phone Number
  // ---------------------------------------------------------

  console.log(
    "Phone Number count:",
    await page.locator("#createLeadForm_primaryPhoneNumber").count()
  );

  await page
    .locator("#createLeadForm_primaryPhoneNumber")
    .fill("9876543210");

  // ---------------------------------------------------------
  // 16. Click Create Lead button
  // ---------------------------------------------------------

  console.log(
    "Create Lead button count:",
    await page
      .locator("input[type='submit']")
      .count()
  );

  await page
    .locator("input[type='submit']")
    .filter({ hasText: "Create Lead" })
    .click();

  // Wait for page to load
  await page.waitForLoadState("domcontentloaded");

  // Final URL
  console.log("Final URL:", page.url());

  // Final screenshot
  await page.screenshot({
    path: "lead-created.png",
    fullPage: true
  });

  // Optional verification
  console.log(
    "Page Title after Lead Creation:",
    await page.title()
  );

});