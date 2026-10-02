// inheritance-demo.ts

import { LoginActions } from "./login_actions_file";
import { DashboardActions } from "./dashBoard_actions_file";

let login = new LoginActions();
login.openUrl("https://opensource-demo.orangehrmlive.com/");
login.click("#loginBtn");
login.login("Admin", "admin123");

let dashboard = new DashboardActions();
dashboard.openUrl("https://opensource-demo.orangehrmlive.com/");
dashboard.verifyDashboard();