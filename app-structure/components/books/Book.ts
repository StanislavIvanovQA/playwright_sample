import {BaseComponent} from "../BaseComponent";
import {BookLink} from "../../pages/books/BookLink";
import {Title} from "../common-components/title/Title";

export type BookContent = {
    ISBN: number,
    Title: string,
    SubTitle: string,
    Author: string,
    Publisher: string,
    TotalPages: number,
    Description: string,
    Website: string,
}

export class Book extends BaseComponent {
    public link = new BookLink({
        name: 'Book Link',
        locator: this.locator.getByRole('link')
    })
    public title = new Title({
        name: 'Book Link',
        locator: this.locator.getByRole('link')
    })
    public author = new Title({
        name: 'Book Author Title',
        locator: this.locator.locator('//div[3]')
    })
    public publisher = new Title({
        name: 'Book Publisher Title',
        locator: this.locator.locator('//div[4]')
    })
}