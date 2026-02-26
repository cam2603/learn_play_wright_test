import { Locator, expect } from '@playwright/test';
export class SocialShellComponent {
    readonly root: Locator;
    readonly title: Locator;
    readonly googleButton: Locator;
    readonly appleButton: Locator;
    readonly facebookButton: Locator;  

    constructor(root: Locator) {
        this.root = root;
        this.title = root.getByText('/hoặc/i');
        this.googleButton = root.locator('#loginGG');
        this.appleButton = root.locator('app-svg-icon[name="color_apple"]');
        this.facebookButton = root.locator('app-svg-icon[name="color_facebook"]');
    }

    async verifyVisible() {
        await expect(this.title).toBeVisible();
        await expect(this.googleButton).toBeVisible();
        await expect(this.appleButton).toBeVisible();
        await expect(this.facebookButton).toBeVisible();
    }

    async clickGoogleLogin(onClick?: () => Promise<void> | void) {
        await this.googleButton.click();
         if (onClick) {
            await onClick();
        }
    }

    async clickAppleLogin(onClick?: () => Promise<void> | void) {
        await this.appleButton.click();
         if (onClick) {
            await onClick();
        }
    }

    async clickFacebookLogin(onClick?: () => Promise<void> | void) {
        await this.facebookButton.click();
            if (onClick) {      
            await onClick();
        }
    }

}