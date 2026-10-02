// base-actions.ts

export class BaseActions {

    openUrl(url: string) {
        console.log(`Navigating to URL`);
    }

    click(locator: string) {
        console.log(`Clicked on:`);
    }

    getText(locator: string) {
        console.log(`Fetched text from:`);
    }
}
let baseActionwork = new BaseActions();
baseActionwork.click();
baseActionwork.getText();