import { test, expect } from '@playwright/test';

test('LeafGround Checkbox - Day 06 Home Assignment', async ({ page }) => {

    // 1. Navigate to LeafGround Checkbox page
    await page.goto('https://leafground.com/checkbox.xhtml');

    // Verify page title
    await expect(page).toHaveTitle(/checkbox/i);

    // 2. Click on the "Basic Checkbox"
    const basicCheckbox = page.getByLabel('Basic', { exact: true });

    await basicCheckbox.evaluate((checkbox: HTMLInputElement) => checkbox.click());

    // Verify Basic Checkbox is selected
    await expect(basicCheckbox).toBeChecked();


    // 3. Click on the "Notification Checkbox"
    const notificationCheckbox = page.getByLabel('Ajax', { exact: true });

    await notificationCheckbox.evaluate((checkbox: HTMLInputElement) => checkbox.click());

    // Verify Notification Checkbox is selected
    await expect(notificationCheckbox).toBeChecked();


    // 4. Verify that the expected message is displayed
    // LeafGround displays a message after clicking the notification checkbox
    await expect(page.locator('.ui-growl-message')).toContainText('Checked');


    // 5. Click on your favorite language
    // Example: Select Java
    const javaCheckbox = page.getByLabel('Java', { exact: true });

    await javaCheckbox.evaluate((checkbox: HTMLInputElement) => checkbox.click());

    // Verify Java checkbox is selected
    await expect(javaCheckbox).toBeChecked();


    // 6. Click on the "Tri-State Checkbox"
    const triStateCheckbox = page
        .getByRole('heading', { name: 'Tri State Checkbox', exact: true })
        .locator('..')
        .getByRole('textbox');

    await triStateCheckbox.evaluate((checkbox: HTMLInputElement) => checkbox.click());


    // 7. Verify which tri-state option has been chosen
    // Verify that the tri-state message is displayed
    await expect(page.locator('.ui-growl-message')).toBeVisible();


    // 8. Click on the "Toggle Switch"
    const toggleSwitch = page
        .getByRole('heading', { name: 'Toggle Switch', exact: true })
        .locator('..')
        .getByRole('checkbox');

    await toggleSwitch.evaluate((checkbox: HTMLInputElement) => checkbox.click());


    // 9. Verify that the expected message is displayed
    await expect(page.locator('.ui-growl-message')).toBeVisible();


    // 10. Verify if the Checkbox is disabled
    // Locate the disabled checkbox using its disabled attribute
    const disabledCheckbox = page.locator('input[type="checkbox"][disabled]').first();

    await expect(disabledCheckbox).toBeDisabled();


    // 11. Select multiple options on the page
    // Select several programming languages
    const javascriptCheckbox = page.getByLabel('Javascript', { exact: true });
    const pythonCheckbox = page.getByLabel('Python', { exact: true });

    await javascriptCheckbox.evaluate((checkbox: HTMLInputElement) => checkbox.click());
    await pythonCheckbox.evaluate((checkbox: HTMLInputElement) => checkbox.click());

    // Verify multiple selections
    await expect(javascriptCheckbox).toBeChecked();
    await expect(pythonCheckbox).toBeChecked();


    // 12. Additional verification
    // Verify the Basic Checkbox is still checked
    await expect(basicCheckbox).toBeChecked();

    // Verify Notification Checkbox is still checked
    await expect(notificationCheckbox).toBeChecked();

    // 13. Browser will automatically close after the test
});