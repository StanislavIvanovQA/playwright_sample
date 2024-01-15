import {test as base} from "@playwright/test";
import {App} from "./App";
import {Mock} from "./Mock";
import {mock} from "node:test";

type CustomFixtures = {
    app: App
    mock: Mock
}

export const test = base.extend<CustomFixtures>({
    app: async ({page}, use) => {
        await use(new App(page))
    },

    mock: async ({page}, use) => {
        await use(new Mock(page))
    }
});

export {expect} from '@playwright/test';