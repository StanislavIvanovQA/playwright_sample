import {expect, test as setup} from '@playwright/test';
import {STORAGE_STATE} from "../playwright.config";

// Example of how login can be performed before all tests
// (Should be in separate project and then included in dependencies to another projects)

setup.skip('Setup', async ({page}) => {
    const login = 'Playwright Demo'
    const password = 'ThePassword@123'

    const loginInput = page.locator('#userName')
    const passwordInput = page.locator('#password')
    const loginButton = page.locator('#login')
    const userNameTitle = page.locator('#userName-value')

    await page.goto('login', {
        waitUntil: 'domcontentloaded'
    })
    await loginInput.fill(login)
    await passwordInput.fill(password)
    await loginButton.click()


    await expect(userNameTitle).toBeVisible()
    await expect(userNameTitle).toHaveText(login)

    await page.context().storageState({ path: STORAGE_STATE });
})