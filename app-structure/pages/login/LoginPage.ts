import {BasePage} from "../BasePage";
import {expect, Page} from "@playwright/test";
import {Button} from "../../components/common-components/button/Button";
import {Input} from "../../components/common-components/input/Input";
import {LoginForm} from "../../components/login/LoginForm";

export class LoginPage extends BasePage {
    public loginForm = new LoginForm({
        locator: this.page.locator('#userForm')
    })

    constructor(page: Page) {
        super({name: 'Login Page', url: 'login', page});
    }
}