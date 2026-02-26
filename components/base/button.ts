import { Locator, expect } from '@playwright/test';

export class ButtonComponent {
    readonly root: Locator;
    readonly buttonText: Locator;

    constructor(root: Locator, buttonText: string) {
        this.root = root;
        this.buttonText = root.getByText(buttonText);
    }

    async verifyVisible() {
        await expect(this.buttonText).toBeVisible();
    }

    async clickButton(onClick?: () => Promise<void> | void) {
        await this.buttonText.click();
        if (onClick) {
            await onClick();
        }
    }

}