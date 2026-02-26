import { Page, Locator, expect } from '@playwright/test';
export class HeaderSignUpSignInComponent {

  readonly root: Locator;
  readonly title: Locator;
  readonly icon: Locator;

  constructor(root: Locator, title: string) {
    this.root = root;

    this.title = this.root.getByText(title);
    this.icon = this.root.locator('app-svg-icon[name="fill_close"]');
  }

  async verifyVisible() {
    await expect(this.title).toBeVisible();
    await expect(this.icon).toBeVisible();
  }
}