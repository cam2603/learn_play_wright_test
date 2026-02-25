import { Locator, expect } from '@playwright/test';

export class InputTextComponent {
  readonly root: Locator;
  readonly input: Locator;
  readonly iconLeft?: Locator;
  readonly errorText: Locator;

  constructor(
    root: Locator,
    formControlName: string,
    iconLeftName?: string
  ) {


    this.root = root;
    this.input = root.locator(
      `input[formcontrolname="${formControlName}"]`
    );
    this.iconLeft = iconLeftName
      ? root.locator(`app-svg-icon[name="${iconLeftName}"]`)
      : undefined;
    this.errorText = root.locator('span.noti-err');
  }

  async verifyVisible(placeholder?: string) {
    await expect(this.root).toBeVisible();
    await expect(this.input).toBeVisible();

    if (this.iconLeft) {
      await expect(this.iconLeft).toBeVisible();
    }

    if (placeholder) {
      await expect(this.input).toHaveAttribute(
        'placeholder',
        placeholder
      );
    }
  }

  async verifyPasswordToggle() {
    const currentType = await this.input.getAttribute('type');
    console.log('Current input type:', currentType);

    if (currentType !== 'password' && currentType !== 'text') {
      throw new Error(`Unexpected input type: ${currentType}`);
    }

    const expectedType =
      currentType === 'password' ? 'text' : 'password';

    const currentIcon =
      currentType === 'password'
        ? 'fill_eye'
        : 'fill_eye_close';

    const nextIcon =
      currentType === 'password'
        ? 'fill_eye_close'
        : 'fill_eye';

    await this.root
      .locator(`app-svg-icon[name="${currentIcon}"]`)
      .click();

    await expect(this.input).toHaveAttribute(
      'type',
      expectedType
    );

    await expect(
      this.root.locator(`app-svg-icon[name="${nextIcon}"]`)
    ).toBeVisible();
  }
  async enterValue(value: string) {
    await this.input.fill(value);
    await this.input.blur(); // quan trọng
  }

  async validateInputInvalid(value: string, expectedError: string) {
    await this.input.fill(value);
    await this.input.blur();
      await expect(
        this.input.locator('xpath=following::span[@class="noti-err"][1]')
      ).toHaveText(expectedError);
  }

  async successfullyEnterValue() {
    await expect(this.errorText).toBeHidden();
  }


}