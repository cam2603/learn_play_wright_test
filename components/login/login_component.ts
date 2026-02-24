import { Page, Locator, expect } from '@playwright/test';
import { HeaderComponent } from './header_compenent';
import { FormLoginComponent } from './form_login';


export class LoginComponent {

  readonly page: Page;
  readonly dialog: Locator;
  readonly header: HeaderComponent;
  readonly formLogin: FormLoginComponent;

  constructor(page: Page) {
    this.page = page;
 this.dialog = page.locator('app-login');
    const headerRoot = this.dialog.locator('.title');
    this.header = new HeaderComponent(headerRoot);
    this.formLogin = new FormLoginComponent(this.dialog.locator('form'));
  }

  async waitForVisible() {
    await expect(this.dialog).toBeVisible();
  }
  
  async verifyVisible() {
    await this.header.verifyVisible();
    await this.formLogin.verifyVisible();
  }
  async clickTogglePassword() {
    await this.formLogin.verifyPasswordToggle();
  }
  
}