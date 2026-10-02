import { test } from "@playwright/test";

test("Test to verify the user is able to handle window", async ({ page, context }) => {

    //create the reference for the newly opened page

    //Load the url
    await page.goto("https://www.amazon.in/");

    //search mobiles
    await page.getByRole("searchbox", { name: "Search Amazon.in" }).fill("Mobiles");

    //Click the search button
    await page.locator("[id='nav-search-submit-button']").click();

    //Waiting for the event
    const newPagePromise = context.waitForEvent("page");

    //Clicking the first matching mobile
    await page.locator("//a[@class='a-link-normal s-line-clamp-3 s-link-style a-text-normal']/h2").first().click();

    //creating the reference for newly opened page
    const newPage = await newPagePromise;

    //wait for the page to be loaded - additional method
    await newPage.waitForLoadState();

    //Click the join prime
    await newPage.locator("[id='prime-abb-signup-button']").click();
    console.log(newPage.title());

    page.bringToFront();

    //search mobiles
    await page.getByRole("searchbox", { name: "Search Amazon.in" }).fill("Home appliances");

    //Click the search button
    await page.locator("[id='nav-search-submit-button']").click();

    await page.waitForTimeout(10_000);
});