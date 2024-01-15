import {Page} from "@playwright/test";

export class Mock {
    constructor(private page: Page) {
    }

    public async route(url: string, body: any) {
        await this.page.route(url, async (route, request) => {
            // if (request.method() === 'POST') {
            //     await route.continue()
            //     return
            // }
            await route.fulfill({
                json: body,
                status: 200
            })
        })
    }
}