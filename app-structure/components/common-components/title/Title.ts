import {BaseComponent} from "../../BaseComponent";
import {expect} from "@playwright/test";
import {test} from "../../../../utils/fixtures/custom-fixtures";

export class Title extends BaseComponent {
    public async shouldBe(expectedTitle: string) {
        await test.step(`Checking that ${this.name} text eqals: ${expectedTitle}`, async () => {
            await this.shouldHaveText(expectedTitle)
        })
    }
}