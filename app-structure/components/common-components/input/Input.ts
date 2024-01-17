import {BaseComponent} from "../../BaseComponent";
import {test} from "@playwright/test";

export class Input extends BaseComponent {
    public async enterText(text: string) {
        await test.step(`Entering text ${text} to ${this.name}`, async () => {
            await this.locator.fill(text)
        })
    }
}