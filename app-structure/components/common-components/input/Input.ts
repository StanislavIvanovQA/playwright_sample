import {BaseComponent} from "../../BaseComponent";

export class Input extends BaseComponent {
    public async enterText(text: string) {
        await this.locator.fill(text)
    }
}