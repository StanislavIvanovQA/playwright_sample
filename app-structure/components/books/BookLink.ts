import {Link} from "../common-components/link/Link";
import {BookPage} from "../../pages/books/BookPage";
import {test} from "../../../utils/fixtures/custom-fixtures";

export class BookLink extends Link {
    public async openInNewTab(): Promise<BookPage> {
        const bookId = await this.getBookId()

        return test.step(`Opening Book with id ${bookId} on new page by clicking middle mouse button`,
            async () => {
                const newPagePromise = this.locator.page().context().waitForEvent('page')
                await this.click({button: 'middle'})
                const newPage = await newPagePromise

                return new BookPage(newPage, bookId)
            })
    }

    // private

    private async getBookId(): Promise<number> {
        return test.step(`Retrieving book id`, async () => {
            const bookLink = await this.locator.getAttribute('href')
            const bookIdString = bookLink?.split('=')[1]

            if (!bookIdString) throw new Error('href attribute value is not valid')

            return +bookIdString
        })
    }
}