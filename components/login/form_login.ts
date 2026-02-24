import { Locator, expect } from '@playwright/test';
import { InputTextComponent } from '../base/input_text';

export class FormLoginComponent {

    readonly root: Locator;
    readonly titleEmail: Locator;
    readonly titlePassword: Locator;
    readonly usernameInput: InputTextComponent;
    readonly passwordInput: InputTextComponent;




    constructor(root: Locator) {
        this.root = root;
        this.titleEmail = this.root.getByText('Email');
        this.titlePassword = this.root.getByText('Mật khẩu');
        const usernameInputRoot = new InputTextComponent(this.root, 'email', 'fill_mail');
        const passwordInputRoot = new InputTextComponent(this.root, 'password', 'fill_lock');
        this.usernameInput = usernameInputRoot;
        this.passwordInput = passwordInputRoot;
    }

    async verifyVisible() {
        await this.verifyEmailVisible();
        await this.verifyPasswordVisible();
    }

    private async verifyEmailVisible() {
        await expect(this.titleEmail).toBeVisible();
        await this.usernameInput.verifyVisible('Email');
    }

    private async verifyPasswordVisible() {
                await expect(this.titlePassword).toBeVisible();

        await this.passwordInput.verifyVisible('Mật khẩu');
    }
    async verifyPasswordToggle() {
        await this.passwordInput.verifyPasswordToggle();
    }
}