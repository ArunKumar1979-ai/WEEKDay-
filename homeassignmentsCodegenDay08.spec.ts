import { test, expect } from '@playwright/test';

test('Search for a Dell laptop and verify it in the cart', async ({ page }) => {
  test.setTimeout(90_000);

  await page.goto('https://www.amazon.in/');

  const searchBox = page.getByRole('searchbox', { name: 'Search Amazon.in' });
  await searchBox.fill('Dell laptop');
  await page.getByRole('button', { name: 'Go', exact: true }).click();

  const selectedProductLink = page
    .locator('a:has(h2)')
    .filter({ hasText: /Dell/i })
    .first();
  await expect(selectedProductLink).toBeVisible();
  const selectedProductName = (await selectedProductLink.innerText()).trim();
  expect(selectedProductName).toMatch(/Dell/i);

  const popupPromise = page.waitForEvent('popup', { timeout: 3000 }).catch(() => null);
  await selectedProductLink.click();
  const productPage = (await popupPromise) ?? page;
  await productPage.waitForLoadState('domcontentloaded');

  const productTitle = productPage.locator('span#productTitle');
  await expect(productTitle).toContainText(/Dell/i);
  const confirmedProductName = (await productTitle.innerText()).trim();

  await productPage.getByRole('button', { name: /Add to Cart/i }).click();
  const cartPagePromise = productPage.context()
    .waitForEvent('page', { timeout: 5000 })
    .catch(() => null);
  await productPage.locator('#sw-gtc').getByRole('link', { name: /Go to Cart/i }).click();
  const cartPage = (await cartPagePromise) ?? productPage;
  await cartPage.waitForLoadState('domcontentloaded');

  await expect(cartPage).toHaveURL(/cart/i);
  await expect(cartPage.locator('body')).toContainText(confirmedProductName);
});