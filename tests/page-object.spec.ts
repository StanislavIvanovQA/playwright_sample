import {test} from '../utils/fixtures/custom-fixtures';
import {BookContent} from "../app-structure/components/books/Book";
import {GET_BOOKS, ONE_BOOK_MOCK} from "../mocks/book-mocks";

const expectedBookNames = [
    'Git Pocket Guide',
    'Learning JavaScript Design Patterns',
    'Designing Evolvable Web APIs with ASP.NET',
    'Speaking JavaScript',
    "You Don't Know JS",
    'Programming JavaScript Applications',
    'Eloquent JavaScript, Second Edition',
    'Understanding ECMAScript 6',
]

const expectedBook: BookContent = {
    ISBN: 9781449325862,
    Title: 'Git Pocket Guide',
    SubTitle: 'A Working Introduction',
    Author: 'Richard E. Silverman',
    Publisher: "O'Reilly Media",
    TotalPages: 234,
    Description: 'This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git exp',
    Website: 'http://chimera.labs.oreilly.com/books/1230000000561/index.html'
}

test.describe('Example tests with Page Object Model and custom fixtures', () => {
    test('BooksPage test', async ({app}) => {
        const userName = process.env.LOGIN as string

        await app.loginPage.visit()
        await app.loginPage.loginForm.loginWithDefaultCredentials()

        await app.booksPage.userNameTitle.shouldBeVisible()
        await app.booksPage.userNameTitle.shouldHaveText(userName)
    })

    test('Have correct title', async ({app}) => {
        await app.booksPage.visit()

        await app.booksPage.headerTitle.shouldBeVisible()
        await app.booksPage.headerTitle.shouldHaveText('Book Store')
    })

    test('BookPage count test', async ({app}) => {
        const expectedBooksCount = expectedBookNames.length

        await app.booksPage.visit()

        await app.booksPage.books.shouldHaveCount(expectedBooksCount)
    })

    for (const bookTitle of expectedBookNames) {
        test(`Checking that book with name ${bookTitle} is present on page`, async ({app}) => {
            await app.booksPage.visit()

            await app.booksPage.books.bookWithTitle(bookTitle).shouldBeVisible()
        })
    }

    test('Book Content Test', async ({app}) => {
        await app.booksPage.visit()
        const bookToTest = await app.booksPage.books.bookByNumber(1)
        const bookPage = await bookToTest.link.openInNewTab()

        await bookPage.isbn.shouldHaveText(expectedBook.ISBN)
        await bookPage.bookTitle.shouldHaveText(expectedBook.Title)
        await bookPage.description.shouldHaveText(expectedBook.Description)
    })

    test('Mock book list test', async ({app, mock}) => {
        await mock.route(GET_BOOKS, ONE_BOOK_MOCK)

        await app.booksPage.visit()
        await app.booksPage.books.shouldHaveCount(1)
        const testedBook = await app.booksPage.books.bookByNumber(1)

        await testedBook.title.shouldBe('The Darkness That Comes Before')
        await testedBook.author.shouldBe('Scott Bakker')
        await testedBook.publisher.shouldBe('Orbit')
    })


    test('Failing test', async ({app}) => {
        await app.booksPage.visit()
        const bookToTest = await app.booksPage.books.bookByNumber(1)
        const bookPage = await bookToTest.link.openInNewTab()

        await bookPage.isbn.shouldHaveText(expectedBook.ISBN)
        await bookPage.bookTitle.shouldHaveText(expectedBook.Title)
        await bookPage.description.shouldHaveText('Fail')
    })
})
