import { Page, Locator, expect } from '@playwright/test';
import { FormLoginComponent } from '../components/login/form_login';
import { OptionPasswordComponent } from '../components/login/option_password';
import { ButtonComponent } from '../components/base/button';
import { SocialShellComponent } from '../components/base/social_shell';
import { HeaderSignUpSignInComponent } from '../components/base/header_compenent_signup_sigin';
import { RegisterComponent } from './register_pages';


export class LoginComponent {

  readonly page: Page;
  readonly dialog: Locator;
  readonly header: HeaderSignUpSignInComponent;
  readonly formLogin: FormLoginComponent;
  readonly optionPassword: OptionPasswordComponent;
  readonly buttonLogin: ButtonComponent;
  readonly loginSocial: SocialShellComponent;
  readonly changeType: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dialog = page.locator('app-login');
    const headerRoot = this.dialog.locator('.title');
    this.header = new HeaderSignUpSignInComponent(headerRoot, 'Đăng nhập');
    this.formLogin = new FormLoginComponent(this.dialog.locator('form'));
    this.optionPassword = new OptionPasswordComponent(this.dialog.locator('.box-remember'));
    this.buttonLogin = new ButtonComponent(this.dialog.locator('.btn-login'), 'Đăng nhập');
    this.loginSocial = new SocialShellComponent(page.locator('login-social'));
    this.changeType = page.locator('.change-type');
  }

  async waitForVisible() {
    await expect(this.dialog).toBeVisible();
  }

  async changeTypeClick() {
    await this.changeType.click();
    const registerComponent = new RegisterComponent(this.page);
    await registerComponent.waitForVisible();
    await registerComponent.verifyVisible();
    return registerComponent;
  }

  async verifyVisible() {
    await this.header.verifyVisible();
    await this.formLogin.verifyVisible();
    await this.optionPassword.verifyVisible();
    await this.buttonLogin.verifyVisible();
    await expect(this.changeType).toBeVisible();
  }

  async loginUsernamePasswordFailed(username: string, password: string) {
    await this.formLogin.usernameInput.enterValue(username);
    await this.formLogin.passwordInput.enterValue(password);
    await this.buttonLogin.clickButton(() => {
      return expect(this.dialog.locator('.txt-err')).toBeVisible();
    });
  }



}