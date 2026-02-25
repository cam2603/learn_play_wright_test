import { BaseAuthFormComponent } from '../base/base_auth_form_component';


export class FormLoginComponent extends BaseAuthFormComponent {

  async verifyVisible() {
    await this.verifyCommonFields();
  }
}