import {BasePage} from "../BasePage";
import {Page} from "@playwright/test";
import {Title} from "../../components/common-components/title/Title";

export class BookPage extends BasePage {
    public isbn = new Title({
        name: 'ISBN Title',
        locator: this.page.locator('#ISBN-wrapper #userName-value')
    })
    public bookTitle = new Title({
        name: 'Book Title',
        locator: this.page.locator('#title-wrapper #userName-value')
    })
    public description = new Title({
        name: 'Description',
        locator: this.page.locator('#description-wrapper #userName-value')
    })

    constructor(page: Page, bookId: number) {
        super({
            name: 'Concrete Book Page',
            url: `books?book=${bookId}`,
            page: page,
        });
    }
}