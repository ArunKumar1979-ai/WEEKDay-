// Makes this file a module so names don't clash with other files in the project
export {};

// 1. Parent class - common Playwright actions
class BaseActions {
    pageName: string;

    // Constructor to set the page name
    constructor(pageName: string) {
        this.pageName = pageName;
    }

    // Method overloading - same method name with different signatures
    click(locator: string): void;
    click(locator: string, description: string): void;
    click(locator: string, description?: string): void {
        if (description) {
            console.log("BaseActions: Clicked on " + locator + " (" + description + ")");
        } else {
            console.log("BaseActions: Clicked on " + locator);
        }
    }
}

// 2. Child class - ButtonActions extends BaseActions
class ButtonActions extends BaseActions {
    // Method overriding - overrides click() and calls the parent method using super
    override click(locator: string): void;
    override click(locator: string, description: string): void;
    override click(locator: string, description?: string): void {
        if (description) {
            console.log("ButtonActions: Clicking on button - " + description);
            super.click(locator, description);
        } else {
            super.click(locator);
        }
    }

    // Additional method - simulates clicking and verifying text
    clickAndVerifyText(locator: string, expectedText: string): void {
        console.log("ButtonActions: Clicked and verifying text '" + expectedText + "' on " + locator);
    }
}

// 3. Child class - InputActions extends BaseActions
class InputActions extends BaseActions {
    // Method overriding - overrides click() and calls the parent method using super
    override click(locator: string): void;
    override click(locator: string, description: string): void;
    override click(locator: string, description?: string): void {
        if (description) {
            console.log("InputActions: Clicking on input field - " + description);
            super.click(locator, description);
        } else {
            super.click(locator);
        }
    }

    // Additional method - simulates entering text
    fill(locator: string, value: string): void {
        console.log("InputActions: Entering text '" + value + "' in " + locator);
    }
}

// 4. Create ButtonActions object and call its methods
const button = new ButtonActions("Button Page");
button.click("#submitBtn");
button.click("#submitBtn", "Submit Button");
button.clickAndVerifyText("#submitBtn", "Submit");

console.log("");

// Create InputActions object and call its methods
const input = new InputActions("Input Page");
input.click("#username", "Username Field");
input.fill("#username", "Admin");