import {test, expect} from '@playwright/test';

test.describe.skip('Bookstore', () => {
    test('Have correct title', async ({page}) => {
        await page.goto('books', {
            waitUntil: 'domcontentloaded'
        })

        const headerElement = page
            .locator('.main-header')

        await expect(headerElement).toHaveText('BookPage Store')
    })

    test('BookPage count test', async ({page}) => {
        const bookNames = [
            'Git Pocket Guide',
            'Learning JavaScript Design Patterns',
            'Designing Evolvable Web APIs with ASP.NET',
            'Speaking JavaScript',
            "You Don't Know JS",
            'Programming JavaScript Applications',
            'Eloquent JavaScript, Second Edition',
            'Understanding ECMAScript 6',
        ]

        await page.goto('books', {
            waitUntil: 'domcontentloaded'
        })

        const books = page.getByRole('gridcell').getByRole('link')
        await expect(books).toHaveCount(8)

        for (const [index, book] of (await books.all()).entries()) {
            await expect(book).toHaveText(bookNames[index])
            console.log(`Element have an expected name: ${bookNames[index]}`)
        }
    })

    test('BooksPage test', async ({page}) => {
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
    })
})
