import {BaseComponent} from "../../BaseComponent";
import {expect} from "@playwright/test";

export class Title extends BaseComponent {
    public async shouldBe(expectedTitle: string) {
        await this.shouldHaveText(expectedTitle)
    }
}