// Makes this file a module so names don't clash with other files in the project
export {};

// 1. Interface - common contract for page actions
interface IPageActions {
    open(url: string): void;
    getTitle(): string;
    isElementVisible(locator: string): boolean;
}

// 2. Abstract class - implements the interface and provides shared functionality
abstract class BasePage implements IPageActions {
    pageName: string;

    // Constructor to set the page name
    constructor(pageName: string) {
        this.pageName = pageName;
    }

    // Concrete method - common for all pages
    logPageInfo(): void {
        console.log("Page:", this.pageName);
    }

    // Abstract methods - must be implemented by child classes
    abstract open(url: string): void;
    abstract getTitle(): string;
    abstract isElementVisible(locator: string): boolean;
}

// 3. Child class - LoginPage
class LoginPage extends BasePage {
    override open(url: string): void {
        console.log("Navigating to login page:", url);
    }

    override getTitle(): string {
        return "Login Page - OrangeHRM";
    }

    override isElementVisible(locator: string): boolean {
        console.log("Element " + locator + " is visible: true");
        return true;
    }

    // Additional method - simulates login action
    login(username: string, password: string): void {
        console.log("Performing login with username: " + username + ", password: " + password);
    }
}

// 4. Child class - DashboardPage
class DashboardPage extends BasePage {
    override open(url: string): void {
        console.log("Navigating to dashboard page:", url);
    }

    override getTitle(): string {
        return "Dashboard - OrangeHRM";
    }

    override isElementVisible(locator: string): boolean {
        console.log("Element " + locator + " is visible: true");
        return true;
    }

    // Additional method - simulates welcome message validation
    verifyWelcomeMessage(): void {
        console.log("Dashboard welcome message is displayed successfully.");
    }
}

// 5. Create LoginPage object and call its methods
const loginPage = new LoginPage("LoginPage");
loginPage.logPageInfo();
loginPage.open("https://opensource-demo.orangehrmlive.com/");
console.log("Title:", loginPage.getTitle());
loginPage.isElementVisible("#username");
loginPage.login("Admin", "admin123");

console.log("");

// Create DashboardPage object and call its methods
const dashboardPage = new DashboardPage("DashboardPage");
dashboardPage.logPageInfo();
dashboardPage.open("https://opensource-demo.orangehrmlive.com/");
console.log("Title:", dashboardPage.getTitle());
dashboardPage.isElementVisible("#welcome");
dashboardPage.verifyWelcomeMessage();