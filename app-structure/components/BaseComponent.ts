import {expect, Locator} from "@playwright/test";
import {test} from "../../utils/fixtures/custom-fixtures";
import {splitStringByCapitalLetters} from "../../utils/utils";

export type ComponentProps = {
    name?: string
    locator: Locator
}

export abstract class BaseComponent {
    protected name: string;
    protected locator: Locator;

    public constructor({name, locator}: ComponentProps) {
        this.name = name ? name : this.convertComponentNameToString()
        this.locator = locator
    }

    // actions

    public async click(...[args]: Parameters<typeof this.locator.click>) {
        await test.step(`Clicking on ${this.name} with ${args?.button ?? 'left'} mouse button`,
            async () => {
                await this.locator.click(args)
            })
    }

    // assertions

    public async shouldBeVisible() {
        await test.step(`Checking that ${this.name} is visible`, async () => {
            await expect(this.locator).toBeVisible()
        })
    }

    public async shouldHaveText(expectedText: number): Promise<void>;
    public async shouldHaveText(expectedText: string): Promise<void>;
    public async shouldHaveText(expectedTextOrNumber: string | number): Promise<void> {
        await test.step(`Checking that ${this.name} have text: ${expectedTextOrNumber}`,
            async () => {
                let expectedText
                switch (typeof expectedTextOrNumber) {
                    case 'number':
                        expectedText = expectedTextOrNumber.toString()
                        break
                    case "string":
                        expectedText = expectedTextOrNumber
                        break
                    default:
                        throw new Error(`Invalid arg: ${expectedTextOrNumber}`)
                }

                await expect(this.locator).toHaveText(expectedText)
            })
    }

    // private

    private convertComponentNameToString() {
        return splitStringByCapitalLetters(this.constructor.name)
    }
}