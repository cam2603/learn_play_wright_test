
import { Locator, expect } from '@playwright/test';
import { InputTextComponent } from './input_text';
export class BaseAuthFormComponent {
  readonly root: Locator;
  readonly titleEmail: Locator;
    readonly titlePassword: Locator;
  readonly usernameInput: InputTextComponent;
  readonly passwordInput: InputTextComponent;

  constructor(root: Locator) {
    this.root = root;
      this.titleEmail = this.root.getByText('Email');
        this.titlePassword = this.root.getByText('Mật khẩu' ,{ exact: true });
    this.usernameInput = new InputTextComponent(root, 'email', 'fill_mail');
    this.passwordInput = new InputTextComponent(root, 'password', 'fill_lock');
  }

  async verifyCommonFields(numberIconPassword?: number) {
    await expect(this.titleEmail).toBeVisible();
     await expect(this.titlePassword).toBeVisible();
    await this.usernameInput.verifyVisible('Email');
    await this.passwordInput.verifyVisible('Mật khẩu', numberIconPassword??1);
  }
}