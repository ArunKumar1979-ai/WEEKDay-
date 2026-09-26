import { test, expect } from "@playwright/test";

test("Salesforce - Create Lead", async ({ page }) => {
  test.setTimeout(180_000);

  // 1. Open Salesforce
  await page.goto("https://login.salesforce.com");
  await page.waitForLoadState("domcontentloaded");

  console.log("Login URL:", page.url());
  console.log("Login Page Title:", await page.title());

  await page.screenshot({
    path: "salesforce-login.png",
    fullPage: true
  });

  // 2. Enter Username
  console.log("Username count:", await page.locator("#username").count());
  await page.locator("#username").fill(
    "arun.gidione2011.ad9680807f59@agentforce.com"
  );

  // 3. Continue to the password step
  await page.getByRole("button", { name: "Log In", exact: true }).click();
  await page.locator("#password").waitFor({ state: "visible" });

  // 4. Enter Password
  console.log("Password count:", await page.locator("#password").count());
  await page.locator("#password").fill("Gidione2011#");

  // 5. Click Login
  console.log("Login button count:", await page.locator("#Login").count());
  await page.locator("#Login").click();

  await page.waitForLoadState("domcontentloaded");

  // 6. Complete Salesforce identity verification when required
  if (page.url().includes("/identity/verification/")) {
    const otpField = page.locator("#emc");
    await otpField.waitFor({ state: "visible", timeout: 120_000 });
    await expect(otpField).toHaveValue(/\S+/, { timeout: 120_000 });
    await page.getByRole("button", { name: "Verify", exact: true }).click();
    await page.waitForLoadState("domcontentloaded");
  }

  console.log("After Login URL:", page.url());
  console.log("After Login Title:", await page.title());

  await page.screenshot({
    path: "salesforce-home-page.png",
    fullPage: true
  });

  // 7. Open App Launcher
  const appLauncher = page.getByRole("button", {
    name: /App Launcher/i
  });

  console.log("App Launcher count:", await appLauncher.count());
  await appLauncher.click();

  // 6. Click View All
  const viewAll = page.getByText("View All", {
    exact: true
  });

  console.log("View All count:", await viewAll.count());
  await viewAll.click();

  await page.waitForTimeout(1000);

  await page.screenshot({
    path: "salesforce-app-launcher.png",
    fullPage: true
  });

  // 7. Click Sales
  const sales = page.getByText("Sales", {
    exact: true
  });

  console.log("Sales count:", await sales.count());
  await sales.click();

  await page.waitForLoadState("domcontentloaded");

  console.log("Sales URL:", page.url());

  // 8. Click Leads
  const leads = page.getByText("Leads", {
    exact: true
  });

  console.log("Leads count:", await leads.count());
  await leads.click();

  await page.waitForTimeout(1500);

  console.log("Leads URL:", page.url());

  await page.screenshot({
    path: "salesforce-leads-page.png",
    fullPage: true
  });

  // 9. Click New
  const newButton = page.getByRole("button", {
    name: "New",
    exact: true
  });

  console.log("New button count:", await newButton.count());
  await newButton.click();

  await page.waitForTimeout(1500);

  await page.screenshot({
    path: "salesforce-new-lead.png",
    fullPage: true
  });

  // 10. Select Salutation
  const salutation = page.getByRole("combobox", {
    name: /Salutation/i
  });

  console.log("Salutation count:", await salutation.count());
  await salutation.click();

  const mrOption = page.getByText("Mr.", {
    exact: true
  });

  console.log("Mr. option count:", await mrOption.count());
  await mrOption.click();

  // 11. Enter Last Name
  const lastName = page.getByRole("textbox", {
    name: /Last Name/i
  });

  console.log("Last Name count:", await lastName.count());
  await lastName.fill("PlaywrightLead");

  // 12. Enter Company Name
  const company = page.getByRole("textbox", {
    name: /Company/i
  });

  console.log("Company count:", await company.count());
  await company.fill("PlaywrightCompany");

  // 13. Click Save
  const saveButton = page.getByRole("button", {
    name: "Save",
    exact: true
  });

  console.log("Save button count:", await saveButton.count());
  await saveButton.click();

  await page.waitForTimeout(2000);

  // 14. Verify Lead
  console.log("Final URL:", page.url());
  console.log("Final Page Title:", await page.title());

  await page.screenshot({
    path: "salesforce-lead-created.png",
    fullPage: true
  });

  const createdLead = page.getByText("PlaywrightLead", {
    exact: true
  });

  console.log("Created Lead count:", await createdLead.count());

  await expect(createdLead).toBeVisible();

  console.log("Lead created successfully.");
});
