import {BasePage} from "../BasePage";
import {expect, Page} from "@playwright/test";
import {Title} from "../../components/common-components/title/Title";
import {BooksList} from "../../components/books/BooksList";

export class BooksPage extends BasePage {
    public userNameTitle = new Title({
        name: 'User Name Title',
        locator: this.page.locator('#userName-value')
    })
    public headerTitle = new Title({
        name: 'Header Title',
        locator: this.page.locator('.main-header')
    })
    public books = new BooksList({
        locator: this.page.locator('//div[@role="gridcell"]//a[@href]/ancestor::div[@class="rt-tr-group"]')
    })

    constructor(page: Page) {
        super({name: 'Books Page', url: 'books', page});
    }
}