import { BaseAuthFormComponent } from '../base/base_auth_form_component';
import { InputTextComponent } from '../base/input_text';
import { Locator, expect } from '@playwright/test';

export class FormRegisterComponent extends BaseAuthFormComponent {

  readonly confirmPasswordInput: InputTextComponent;

  constructor(root: Locator) {
    super(root);

    this.confirmPasswordInput = new InputTextComponent(
      root,
      'confirmPassword',
      'fill_lock'
    );
  }

  async verifyVisible() {
    await this.verifyCommonFields();
    await this.confirmPasswordInput.verifyVisible('Nhập lại mật khẩu');
  }
}