import { BaseAuthFormComponent } from '../base/base_auth_form_component';
import { InputTextComponent } from '../base/input_text';
import { Locator, expect } from '@playwright/test';

export class FormRegisterComponent extends BaseAuthFormComponent {

  readonly confirmPasswordInput: InputTextComponent;
  readonly titleConfirmPassword: Locator;

  constructor(root: Locator) {
    super(root);

    this.confirmPasswordInput = new InputTextComponent(
      root,
      'confirm_password',
      'fill_lock'
    );
    this.titleConfirmPassword = this.root.getByText('Nhập lại mật khẩu', { exact: true });
  }

  async verifyVisible() {
    await this.verifyCommonFields(2);
    await this.confirmPasswordInput.verifyVisible('Nhập lại mật khẩu',2);
  }
}