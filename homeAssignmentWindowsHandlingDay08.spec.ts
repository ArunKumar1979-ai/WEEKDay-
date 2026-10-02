import { test, expect } from "@playwright/test";

test("Merge two contacts using From/To Contact lookup widgets", async ({ page, context }) => {
  test.setTimeout(90_000);

  // ---- Login ----
  await page.goto("http://leaftaps.com/opentaps/control/login");
  await page.setViewportSize({ width: 1600, height: 900 });

  await page.locator("#username").fill("Demosalesmanager");
  await page.locator("#password").fill("crmsfa");
  await page.locator(".decorativeSubmit").click();

  // ---- Navigate: CRM/SFA -> Contacts -> Merge Contacts ----
  await page.getByRole("link", { name: "CRM/SFA" }).click();
  await page.getByRole("link", { name: "Contacts", exact: true }).click();
  await page.getByRole("link", { name: "Merge Contacts" }).click();

  // ---- From Contact: click widget, handle popup, pick first contact ----
  const fromContactPopupPromise = context.waitForEvent("page");
  // VERIFY: locator for the "From Contact" lookup/widget icon
  await page.getByRole("link", { name: "Lookup" }).first().click();
  const fromContactPopup = await fromContactPopupPromise;
  await fromContactPopup.waitForLoadState();

  // VERIFY: locator for the first row/link in the contact search results
  await fromContactPopup.locator("table tbody tr:has(a):visible").first().locator("a").first().click();
  // This type of OFBiz lookup popup sets the value on the opener page and
  // closes itself automatically once a result is clicked -- no explicit
  // popup.close() should be needed. If it doesn't auto-close in your run,
  // uncomment the next line:
  // if (!fromContactPopup.isClosed()) await fromContactPopup.close();

  // Back on the main page automatically -- `page` was never switched away from.

  // ---- To Contact: click widget, handle popup, pick second contact ----
  const toContactPopupPromise = context.waitForEvent("page");
  // VERIFY: locator for the "To Contact" lookup/widget icon
  await page.getByRole("link", { name: "Lookup" }).nth(1).click();
  const toContactPopup = await toContactPopupPromise;
  await toContactPopup.waitForLoadState();

  // VERIFY: locator/index for the second row/link in the contact search results
  const toContactRows = toContactPopup.locator("table tbody tr:has(a):visible");
  await toContactRows.nth(1).locator("a").first().click();

  // ---- Merge: handle the confirmation alert ----
  const dialogMessagePromise = new Promise<string>((resolve) => {
    page.once("dialog", async (dialog) => {
      const message = dialog.message();
      await dialog.accept();
      resolve(message);
    });
  });

  const mergeNavigationPromise = page.waitForNavigation({
    waitUntil: "domcontentloaded",
    timeout: 60_000,
  });
  await page.getByRole("link", { name: "Merge", exact: true }).click();
  const dialogMessage = await dialogMessagePromise;
  console.log("Alert message:", dialogMessage);
  expect(dialogMessage).toBe("Are you sure?");
  await mergeNavigationPromise;

  // ---- Verify the page title after merge ----
  await expect(page).toHaveTitle(/Contact/i);
});