// Makes this file a module so names don't clash with other files in the project
export {};

// 1. Parent class - common reusable actions for all pages
class BasePage {
    pageName: string;

    // Constructor to set the page name
    constructor(pageName: string) {
        this.pageName = pageName;
    }

    // Open the given URL
    openUrl(url: string): void {
        console.log(this.pageName + ": Navigating to URL: " + url);
    }

    // Return the page title (e.g., "OrangeHRM - Login" or "OrangeHRM - Dashboard")
    getTitle(): string {
        return "OrangeHRM - " + this.pageName.replace("Page", "");
    }

    // Click on an element
    click(locator: string): void {
        console.log(this.pageName + ": Clicking on " + locator);
    }

    // Enter text in an element
    fill(locator: string, value: string): void {
        console.log(this.pageName + ": Entering text '" + value + "' in " + locator);
    }
}

// 2. Child class - LoginPage extends BasePage
class LoginPage extends BasePage {
    // Additional properties - locators
    usernameLocator: string = "#username";
    passwordLocator: string = "#password";
    loginButtonLocator: string = "#loginBtn";

    // Additional method - simulates login using parent class methods
    login(username: string, password: string): void {
        this.click(this.usernameLocator);
        this.fill(this.usernameLocator, username);
        this.click(this.passwordLocator);
        this.fill(this.passwordLocator, password);
        this.click(this.loginButtonLocator);
        console.log(this.pageName + ": Login action completed for user: " + username);
    }
}

// 3. Child class - DashboardPage extends BasePage
class DashboardPage extends BasePage {
    // Additional property - locator
    welcomeMessageLocator: string = "#welcome";

    // Additional method - simulates welcome message validation using parent method getTitle()
    verifyWelcomeMessage(): void {
        console.log(this.pageName + ": Validating welcome message");
        console.log(this.pageName + ": Page title: " + this.getTitle());
        console.log(this.pageName + ": Welcome message is displayed successfully.");
    }
}

// 4. Create LoginPage object and call its methods
const loginPage = new LoginPage("LoginPage");
loginPage.openUrl("https://opensource-demo.orangehrmlive.com/");
loginPage.login("Admin", "admin123");

console.log("");

// Create DashboardPage object and call its methods
const dashboardPage = new DashboardPage("DashboardPage");
dashboardPage.verifyWelcomeMessage();