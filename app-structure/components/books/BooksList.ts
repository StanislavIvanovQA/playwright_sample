import {BaseComponent} from "../BaseComponent";
import {expect} from "@playwright/test";
import {Book} from "./Book";
import {test} from "../../../utils/fixtures/custom-fixtures";

export class BooksList extends BaseComponent {
    public async shouldHaveCount(expectedCountOfBooks: number): Promise<void> {
        await test.step(`Checking that book list have count of books equal ${expectedCountOfBooks}`,
            async () => {
                await expect(this.locator).toHaveCount(expectedCountOfBooks)
            })
    }

    public async bookByNumber(bookNumber: number): Promise<Book> {
        return test.step(`Searching the book in list by number ${bookNumber}`, () => {
            return new Book({
                locator: this
                    .locator
                    .locator('//div[@role="row"]', {
                        has: this.locator.getByRole('link')
                    }).nth(bookNumber - 1)
            })
        })
    }

    public bookWithTitle(bookTitle: string): Book {
        return new Book({
            locator: this
                .locator
                .locator('//div[@role="row"]', {
                    has: this.locator.getByRole('link', {name: bookTitle})
                })
        })
    }
}