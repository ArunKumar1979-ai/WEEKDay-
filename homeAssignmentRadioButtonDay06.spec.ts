
import { test, expect } from '@playwright/test';

test('LeafGround Radio Button - Day 06 Home Assignment', async ({ page }) => {

    // 1. Navigate to LeafGround Radio Button page
    await page.goto('https://leafground.com/radio.xhtml');

    // Verify page title
    await expect(page).toHaveTitle(/Radio/);


    // 2. Identify and assert the default selected radio button
    //
    // The first radio button group on the page has a default selection.
    // We locate all radio buttons and find the one that is already checked.

    const radioButtons = page.locator('input[type="radio"]');

    const radioCount = await radioButtons.count();

    console.log('Total radio buttons:', radioCount);

    let defaultSelectedFound = false;

    for (let i = 0; i < radioCount; i++) {

        const radio = radioButtons.nth(i);

        if (await radio.isChecked()) {
            console.log('Default selected radio button:', i);
            defaultSelectedFound = true;

            // Assert that the radio button is selected
            await expect(radio).toBeChecked();

            break;
        }
    }

    // Make sure a default radio button was actually selected
    expect(defaultSelectedFound).toBe(true);


    // 3. Click your most favorite browser and assert that the browser is enabled
    //
    // Example: Chrome
    // LeafGround labels the browser radio buttons.
    
    const browserSection = page
        .getByRole('heading', { name: 'Your most favorite browser', exact: true })
        .locator('..');
    const chromeRadio = browserSection.getByLabel('Chrome', { exact: true });

    // Verify Chrome radio button is enabled
    await expect(chromeRadio).toBeEnabled();

    // Click Chrome
    await chromeRadio.evaluate((radio: HTMLInputElement) => radio.click());

    // Assert Chrome is selected
    await expect(chromeRadio).toBeChecked();

    console.log('Chrome radio button is selected and enabled.');


    // 4. Click one of the cities
    //
    // Example: Chennai
    const chennaiRadio = page.getByLabel('Chennai');

    await chennaiRadio.evaluate((radio: HTMLInputElement) => radio.click());

    // Assert Chennai is selected
    await expect(chennaiRadio).toBeChecked();

    console.log('Chennai city selected.');


    // 5. Select the age group
    //
    // Example: 21-40 Years
    const ageGroupRadio = page.getByLabel('21-40 Years', { exact: true });

    // Check whether the age group is enabled
    await expect(ageGroupRadio).toBeEnabled();

    // Select the age group
    await ageGroupRadio.evaluate((radio: HTMLInputElement) => radio.click());

    // Assert that the age group is selected
    await expect(ageGroupRadio).toBeChecked();

    console.log('Age group 21-40 Years selected.');


    // Assert the selected age group
    const selectedAgeGroup = page.locator(
        'input[type="radio"]:checked'
    ).last();

    await expect(selectedAgeGroup).toBeChecked();

    console.log('Selected age group is checked.');

});
