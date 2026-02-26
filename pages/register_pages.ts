import { Page, Locator, expect } from '@playwright/test';
import { ButtonComponent } from '../components/base/button';
import { FormRegisterComponent } from '../components/register/form_register_component';
import { SocialShellComponent } from '../components/base/social_shell';
import { HeaderSignUpSignInComponent } from '../components/base/header_compenent_signup_sigin';


export class RegisterComponent {

  readonly page: Page;
  readonly dialog: Locator;
  readonly header: HeaderSignUpSignInComponent;
  readonly formRegister: FormRegisterComponent;
  readonly buttonRegister: ButtonComponent;
  readonly registerSocial: SocialShellComponent;
  readonly changeType: Locator;

  constructor(page: Page) {
    this.page = page;
    this.dialog = page.locator('app-register');
    const headerRoot = this.dialog.locator('.title');
    this.header = new HeaderSignUpSignInComponent(headerRoot, 'Đăng ký');
    this.formRegister = new FormRegisterComponent(this.dialog.locator('form'));
    this.buttonRegister = new ButtonComponent(this.dialog.locator('.btn-login'), 'Đăng ký');
    this.registerSocial = new SocialShellComponent(page.locator('login-social'));
    this.changeType = page.locator('.change-type');
  }

  async waitForVisible() {

    await expect(this.dialog).toBeVisible();
  }

  async changeTypeClick() {
    await this.changeType.click();
  }

  async verifyVisible() {
    await this.header.verifyVisible();
    await this.formRegister.verifyVisible();
    await this.buttonRegister.verifyVisible();
    await this.changeType.isVisible();
  }

  async loginUsernamePasswordFailed(username: string, password: string) {
    await this.formRegister.usernameInput.enterValue(username);
    await this.formRegister.passwordInput.enterValue(password);
    await this.buttonRegister.clickButton(() => {
      return expect(this.dialog.locator('.txt-err')).toBeVisible();
    });
  }

}