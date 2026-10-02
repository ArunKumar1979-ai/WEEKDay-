import { test, expect } from "@playwright/test";
import path from "path";
import fs from "fs";

test("Download a file and save it under original and custom filenames", async ({ page }) => {
  // 1. Launch the application
  await page.goto("https://demoqa.com/upload-download");

  // 2 & 3. Register the download event listener BEFORE clicking,
  //         then click the "Download" button -- paired via Promise.all
  //         so Playwright doesn't miss the event.
  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.locator("#downloadButton").click(),
  ]);

  // 4. Capture the downloaded file reference (done above as `download`)

  // 5. Save the downloaded file using its original suggested filename
  const originalFileName = download.suggestedFilename();
  const originalSavePath = path.join(__dirname, "downloads", originalFileName);
  await download.saveAs(originalSavePath);

  // 6. Save the downloaded file again with a customized filename
  const customSavePath = path.join(__dirname, "downloads", "TestleafLogo.png");
  await download.saveAs(customSavePath);

  // 7. Wait for the download operation to complete / verify both files exist
  expect(fs.existsSync(originalSavePath)).toBeTruthy();
  expect(fs.existsSync(customSavePath)).toBeTruthy();
});