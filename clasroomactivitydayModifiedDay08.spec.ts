import { test, expect } from "@playwright/test";

test("Test to verify the user is able to handle window", async ({ page, context }) => {

    //create the reference for the newly opened page

    //Load the url
    await page.goto("https://www.amazon.in/");

    //search furniture
    await page.getByRole("searchbox", { name: "Search Amazon.in" }).fill("Furniture");

    //Click the search button
    await page.locator("[id='nav-search-submit-button']").click();

    //Waiting for the event
    const newPagePromise = context.waitForEvent("page");

    //Clicking the first matching furniture product
    await page.locator("//a[@class='a-link-normal s-line-clamp-3 s-link-style a-text-normal']/h2").first().click();

    //creating the reference for newly opened page
    const newPage = await newPagePromise;

    //wait for the page to be loaded
    await newPage.waitForLoadState();

    //Click Add to Cart
    await newPage.locator("[id='add-to-cart-button']").click();

    //Click No thanks on the protection plan popup
    await newPage.getByRole("button", { name: "No thanks" }).click();

    //Confirm product is added to cart
    await expect(newPage.getByText("Added to Cart", { exact: false })).toBeVisible();

    console.log("Product successfully added to cart");

    console.log(await newPage.title());

});