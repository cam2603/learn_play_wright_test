import { Page, Locator, expect } from '@playwright/test';
import { HeaderComponent } from './header_compenent';
import { FormLoginComponent } from './form_login';
import { OptionPasswordComponent } from './option_password';
import { ButtonComponent } from '../base/button';


export class LoginComponent {

  readonly page: Page;
  readonly dialog: Locator;
  readonly header: HeaderComponent;
  readonly formLogin: FormLoginComponent;
  readonly optionPassword: OptionPasswordComponent;
  readonly buttonLogin: ButtonComponent;

  constructor(page: Page) {
    this.page = page;
    this.dialog = page.locator('app-login');
    const headerRoot = this.dialog.locator('.title');
    this.header = new HeaderComponent(headerRoot);
    this.formLogin = new FormLoginComponent(this.dialog.locator('form'));
    this.optionPassword = new OptionPasswordComponent(this.dialog.locator('.box-remember'));
    this.buttonLogin = new ButtonComponent(this.dialog.locator('.btn-login'), 'Đăng nhập');
  }

  async waitForVisible() {
    await expect(this.dialog).toBeVisible();
  }

  async verifyVisible() {
    await this.header.verifyVisible();
    await this.formLogin.verifyVisible();
    await this.optionPassword.verifyVisible();
    await this.buttonLogin.verifyVisible();
  }

  async loginUsernamePasswordFailed(username: string, password: string) {
    await this.formLogin.usernameInput.enterValue(username);
    await this.formLogin.passwordInput.enterValue(password);
    await this.buttonLogin.clickButton(() => {
      return expect(this.dialog.locator('.txt-err')).toBeVisible();
  });
  }

}