import { Page, Locator, expect } from '@playwright/test';
import { LoginComponent } from './login/login_component';

export class HeaderComponent {

  readonly page: Page;
  readonly logo: Locator;
  readonly loginButton: Locator;
  readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.logo = page.getByRole('link', { name: 'Hanzii', exact: true });

    this.loginButton = page.locator(
      'app-header .menu-right .box-login .btn-brand:has-text("Đăng nhập")'
    );


    this.registerButton = page.locator('app-header .menu-right .btn-register:has-text("Đăng ký")');


  }

  async verifyVisible() {
    await expect(this.logo).toBeVisible();
    await expect(this.loginButton).toBeVisible();
    await expect(this.registerButton).toBeVisible();
  }

  async clickLogin() {
    await this.loginButton.click();
    const loginComponent = new LoginComponent(this.page);
    await loginComponent.waitForVisible();
    await loginComponent.verifyVisible();

    return loginComponent;// 👈 trả về dialog
  }

  async clickMenu(name: string) {
    await this.page.getByRole('link', { name }).click();
  }

  async verifyMenuVisible(name: string) {
    await expect(this.page.getByRole('link', { name })).toBeVisible();
  }
}