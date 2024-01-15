import {Page} from "@playwright/test";
import {test} from "../../utils/fixtures/custom-fixtures";

export type PageObjectProps = {
    name: string,
    url: string,
    page: Page,
}

export abstract class BasePage {
    protected name: string;
    protected url: string;
    protected page: Page;

    protected constructor({name, url, page}: PageObjectProps
    ) {
        this.name = name
        this.url = url
        this.page = page
    }

    public async visit() {
        await test.step(`Going to ${this.name} by URL: ${this.url}`, async () => {
            await this.page.goto(this.url, {waitUntil: 'domcontentloaded'})
        })
    }
}