import { Page, Locator, expect } from '@playwright/test';

export class LoginComponent {

    readonly page: Page;
    readonly loginTitle: Locator;
    readonly cancelLogin: Locator;

    constructor(page: Page) {
        this.page = page;

        this.loginTitle = page.locator('app-login .space-between .title: has-text("Đăng nhập")');
        this.cancelLogin = page.locator('app-login .space-between .btn-close .cursor-pointer .svg-container');

    }

     async verifyVisible() {
    await expect(this.loginTitle).toBeVisible();
    await expect(this.cancelLogin).toBeVisible();
  }
}