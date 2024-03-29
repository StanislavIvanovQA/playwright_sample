import {Page} from "@playwright/test";
import {LoginPage} from "../../app-structure/pages/login/LoginPage";
import {BooksPage} from "../../app-structure/pages/books/BooksPage";

export class App {
    constructor(protected page: Page) {
    }

    public loginPage = new LoginPage(this.page)
    public booksPage = new BooksPage(this.page)

    /**
     * @deprecated
     * for debug purpose only
     * don't forget to delete all executions before commit
     */
    public async pause() {
        await this.page.pause()
    }
}
