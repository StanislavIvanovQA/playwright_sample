import {BaseComponent} from "../BaseComponent";
import {expect} from "@playwright/test";
import {Book} from "./Book";
import {test} from "../../../utils/fixtures/custom-fixtures";

export type BookListItem = {
    title: string
    author: string
    publisher: string
}

export class BooksList extends BaseComponent {
    public async shouldHaveCount(expectedCountOfBooks: number) {
        await expect(this.locator).toHaveCount(expectedCountOfBooks)
    }

    public async bookByNumber(bookNumber: number) {
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

    public bookWithTitle(bookTitle: string) {
        return new Book({
            locator: this
                .locator
                .locator('//div[@role="row"]', {
                    has: this.locator.getByRole('link', {name: bookTitle})
                })
        })
    }
}