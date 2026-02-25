import { test } from '@playwright/test';
import { HeaderComponent } from '../../components/header_components';

test.describe('Login UI', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://hanzii.net/?hl=vi');
    });

    test('Validate lỗi username không đúng định dạng', async ({ page }) => {
        const header = new HeaderComponent(page);
        const loginDialog = await header.clickLogin();
        await loginDialog.buttonLogin.clickButton();
        await loginDialog.formLogin.usernameInput.validateInputInvalid('', 'Bạn chưa nhập email');
        await loginDialog.formLogin.usernameInput.validateInputInvalid('invalid-email', 'Định dạng email không đúng');

        await loginDialog.formLogin.usernameInput.validateInputInvalid('  A@GMAIL.COM', 'Định dạng email không đúng');

        await loginDialog.formLogin.usernameInput.validateInputInvalid('A@GMAIL.COM ', 'Định dạng email không đúng');

        await loginDialog.formLogin.usernameInput.validateInputInvalid('A @GMAIL.COM', 'Định dạng email không đúng');

        // await loginDialog.formLogin.usernameInput.validateInputInvalid('aw-1_@gmail.com', 'Định dạng email không đúng');

        // await loginDialog.formLogin.usernameInput.validateInputInvalid('a1@gamil.comm', 'Định dạng email không đúng');

    });

    test('Validate lỗi password không đúng định dạng', async ({ page }) => {
        const header = new HeaderComponent(page);
        const loginDialog = await header.clickLogin();
        await loginDialog.formLogin.usernameInput.enterValue('a1@gamil.comm');
        await loginDialog.buttonLogin.clickButton();
        await loginDialog.formLogin.passwordInput.validateInputInvalid('123', 'Mật khẩu phải có độ dài tối thiểu 6 kí tự');
        await loginDialog.formLogin.passwordInput.validateInputInvalid('123     ', 'Mật khẩu phải có độ dài tối thiểu 6 kí tự');
        await loginDialog.formLogin.passwordInput.validateInputInvalid('     123', 'Mật khẩu phải có độ dài tối thiểu 6 kí tự');
        await loginDialog.formLogin.passwordInput.validateInputInvalid(' 123456', 'Mật khẩu phải có độ dài tối thiểu 6 kí tự');

    });


    test('Validate password empty', async ({ page }) => {
        const header = new HeaderComponent(page);
        const loginDialog = await header.clickLogin();

        await loginDialog.formLogin.usernameInput.enterValue('a1@gamil.comm');
        await loginDialog.buttonLogin.clickButton();
        await loginDialog.formLogin.passwordInput.validateInputInvalid('', 'Bạn chưa nhập mật khẩu');
        await loginDialog.formLogin.passwordInput.validateInputInvalid('      ', 'Bạn chưa nhập mật khẩu');
        

    });
    test('Validate user password thành công', async ({ page }) => {
        const header = new HeaderComponent(page);
        const loginDialog = await header.clickLogin();
        await loginDialog.formLogin.usernameInput.enterValue('a1@gamil.com');
        await loginDialog.formLogin.passwordInput.enterValue('123456');
        await loginDialog.buttonLogin.clickButton();
        await loginDialog.formLogin.usernameInput.successfullyEnterValue();
    });
});