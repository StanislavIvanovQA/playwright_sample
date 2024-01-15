import {BaseComponent} from "../BaseComponent";
import {Input} from "../common-components/input/Input";
import {Button} from "../common-components/button/Button";

export class LoginForm extends BaseComponent {
    private loginInput = new Input({
        name: 'LoginPage Input',
        locator: this.locator.locator('#userName')
    })
    private passwordInput =new Input({
        name: 'Password Input',
        locator: this.locator.locator('#password')
    })
    private loginButton = new Button({
        name: 'LoginPage Button',
        locator: this.locator.locator('#login')
    })

    public async loginWithDefaultCredentials() {
        const login = process.env.LOGIN
        const password = process.env.PASSWORD

        if (!login || !password) throw new Error(
            `login (${login}) or password (${password}) was not provided from env file`
        )

        await this.loginWithCredentials(login, password)
    }

    public async loginWithCredentials(login: string, password: string) {
        await this.loginInput.enterText(login)
        await this.passwordInput.enterText(password)
        await this.loginButton.click()
    }
}