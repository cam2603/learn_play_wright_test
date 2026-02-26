import { Locator, expect } from '@playwright/test';
export class OptionPasswordComponent {

  readonly root: Locator;
  readonly circle: Locator;
  readonly textCircle: Locator;
  readonly forgetPasswordText: Locator;


  constructor(root: Locator) {
    this.root = root;
    this.circle = this.root.locator('app-svg-icon');
    this.textCircle = this.root.getByText('Nhớ mật khẩu');
    this.forgetPasswordText = this.root.getByText('Quên mật khẩu?');
  }

  async verifyVisible() {
    await expect(this.circle).toHaveCount(1);
    await expect(this.circle).toBeVisible();

    await expect(this.textCircle).toBeVisible();
    await expect(this.forgetPasswordText).toBeVisible();
  }
  async clickRememberPassword() {
    await expect(this.circle).toHaveCount(1);

    // get current state of the circle (checked or unchecked)
    const currentIcon = await this.circle.getAttribute('name');
    console.log('Current circle state:', currentIcon);
    const expectedIcon = currentIcon === 'outline_circle' ? 'fill_check_2' : 'outline_circle';
    await this.circle.click();
    // verify the state has toggled
    await expect(this.circle).toHaveAttribute('name', expectedIcon);
    const currentIcon1 = await this.circle.getAttribute('name');
    console.log('Current circle state:', currentIcon1);
  }
}