import { test } from '@playwright/test';
import { HeaderComponent } from '../../components/header_components';


test.describe('Login UI', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://hanzii.net/?hl=vi');
    });

    test('Register dialog hiển thị đúng', async ({ page }) => {
        const header = new HeaderComponent(page);

        const loginDialog = await header.clickLogin();
        const dialogRegister = await loginDialog.changeTypeClick();
        await dialogRegister.verifyVisible();
    });
});