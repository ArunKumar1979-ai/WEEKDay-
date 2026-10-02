// login-actions.ts

import { BaseActions } from "./base_actions_file";

export class LoginActions extends BaseActions {

    login(username: string, password: string) {
        console.log(`Login action called for user: ${username}`);
    }
}

//Step1: ChildClass should extends Parent
//Step2: export the Parent Class
//Step3: import the parent Class in the Child Class

const loginActions = new LoginActions();
loginActions.openUrl("https://example.com/login");
loginActions.login("DemoUser", "DemoPassword");