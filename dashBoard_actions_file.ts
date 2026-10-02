// dashboard-actions.ts

import { BaseActions } from "./base_actions_file";

export class DashboardActions extends BaseActions {

    verifyDashboard() {
        this.getText("#welcomeText");
        console.log("Dashboard welcome text: Welcome Admin");
    }
}