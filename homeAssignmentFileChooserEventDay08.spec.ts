import { test, expect } from "@playwright/test";
import path from "path";

test("Upload a file using Playwright's filechooser event", async ({ page }) => {
  // 1. Launch the application
  await page.goto("https://blazorise.com/docs/components/file-picker");

  // 2 & 3. Register the filechooser event listener BEFORE clicking,
  //         then click the "Choose files" element -- both happen together
  //         via Promise.all so Playwright doesn't miss the event.
  const [fileChooser] = await Promise.all([
    page.waitForEvent("filechooser"),
    page.getByRole("button", { name: "Choose files" }).first().click(),
  ]);

  // 4. Capture the file chooser reference (done above as `fileChooser`)

  // 5. Upload TestleafLogo.png using setFiles()
  const filePath = path.join(__dirname, "TestleafLogo.png");
  await fileChooser.setFiles(filePath);

  // 6. Verify that the selected file is attached to the file input.
  await expect(page.locator('input[type="file"]').first()).toHaveValue(
    /TestleafLogo\.png$/
  );
});