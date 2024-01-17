import {BaseComponent} from "../BaseComponent";
import {Input} from "../common-components/input/Input";
import {Button} from "../common-components/button/Button";
import {test} from "../../../utils/fixtures/custom-fixtures";

export class LoginForm extends BaseComponent {
    private loginInput = new Input({
        name: 'LoginPage Input',
        locator: this.locator.locator('#userName')
    })
    private passwordInput = new Input({
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

        await test.step(`Logging in with default credentials from env file`, async () => {
            await this.loginWithCredentials(login, password)
        })
    }

    public async loginWithCredentials(login: string, password: string) {
        await test.step(`
        Logging in with login: ${login}
        and password: ${password}`,
            async () => {
                await this.loginInput.enterText(login)
                await this.passwordInput.enterText(password)
                await this.loginButton.click()
            })
    }
}