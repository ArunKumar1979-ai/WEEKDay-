import { test, expect } from "@playwright/test";
import path from "node:path";

test("Upload a file directly using Playwright's setInputFiles()", async ({ page }) => {
  // 1. Launch the application
  await page.goto("https://demoqa.com/upload-download");

  // 2. Locate the "Choose File" upload element
  const uploadInput = page.locator("#uploadFile");

  // 3. Upload TestleafLogo.png using setInputFiles()
  const filePath = path.join(__dirname, "TestleafLogo.png");
  await uploadInput.setInputFiles(filePath);

  // 4. Wait for the upload operation to complete -- verify the uploaded
  //    file's name is now displayed on the page.
  await expect(page.locator("#uploadedFilePath")).toHaveText(/TestleafLogo\.png/, { timeout: 10000 });
});