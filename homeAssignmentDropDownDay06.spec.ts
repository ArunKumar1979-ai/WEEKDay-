import { test, expect } from '@playwright/test';

test('LeafGround Dropdown - Day 06 Home Assignment', async ({ page }) => {

    // 1. Navigate to LeafGround Dropdown page
    await page.goto('https://leafground.com/select.xhtml');

    // Verify page title
    await expect(page).toHaveTitle('Select Components');


    // 2. Select your favorite UI automation tool
    // Example: Playwright
    const automationToolDropdown = page.locator('select').nth(0);

    await automationToolDropdown.selectOption({ label: 'Playwright' });

    // Verify selected value
    await expect(automationToolDropdown).toHaveValue(/playwright/i);


    // 3. Get the count and print all the values
    const automationOptions = automationToolDropdown.locator('option');

    const automationOptionCount = await automationOptions.count();

    console.log('Number of UI Automation Tools:', automationOptionCount);

    for (let i = 0; i < automationOptionCount; i++) {
        console.log(
            'UI Automation Tool:',
            await automationOptions.nth(i).textContent()
        );
    }


    // 4. Choose your preferred Country
    // Example: India
    const countryDropdown = page.locator('#j_idt87\\:country');
    await countryDropdown.locator('.ui-selectonemenu-label').click();
    await page.getByRole('option', { name: 'India', exact: true }).click();

    // Verify Country selection
    await expect(countryDropdown.locator('.ui-selectonemenu-label')).toHaveText('India');


    // 5. Confirm Cities belonging to Country are loaded
    const cityDropdown = page.locator('select').nth(2);

    // Verify that city dropdown has options
    const cityOptions = cityDropdown.locator('option');

    await expect(cityOptions).not.toHaveCount(0);

    console.log('Cities available after selecting India:');

    const cityCount = await cityOptions.count();

    for (let i = 0; i < cityCount; i++) {
        console.log(
            'City:',
            await cityOptions.nth(i).textContent()
        );
    }


    // 6. Choose any three courses from the dropdown
    // LeafGround uses a multi-select dropdown for courses.
    const coursesDropdown = page.getByRole('textbox', { name: 'Choose Course' });
    const courses = ['Playwright', 'Appium', 'JMeter'];

    for (const course of courses) {
        await page.getByRole('button', { name: 'Show Options' }).click();
        await page.locator('[role="option"]:visible', {
            hasText: course
        }).click();
    }

    // Verify three courses are selected
    const selectedCourses = await page.locator('#j_idt87\\:auto-complete_hinput option:checked').count();

    expect(selectedCourses).toBe(3);

    console.log('Number of selected courses:', selectedCourses);


    // 7. Choose a language and print all the values from the dropdown
    const languageDropdown = page.locator('#j_idt87\\:lang');
    await languageDropdown.locator('.ui-selectonemenu-label').click();
    await page.getByRole('option', { name: 'English', exact: true }).click();

    // Verify selected language
    await expect(languageDropdown.locator('.ui-selectonemenu-label')).toHaveText('English');

    // Get all language options
    const languageOptions = page.locator('#j_idt87\\:lang_input option');

    const languageCount = await languageOptions.count();

    console.log('Number of languages:', languageCount);

    console.log('All available languages:');

    for (let i = 0; i < languageCount; i++) {
        console.log(
            'Language:',
            await languageOptions.nth(i).textContent()
        );
    }


    // 8. Select 'Two' irrespective of the language chosen
    const valuesDropdown = page.locator('#j_idt87\\:value');
    await valuesDropdown.locator('.ui-selectonemenu-label').click();
    await page.getByRole('option', { name: 'Two', exact: true }).click();

    await expect(
        valuesDropdown.locator('.ui-selectonemenu-label')
    ).toHaveText('Two');

    console.log('Successfully selected: Two');

});