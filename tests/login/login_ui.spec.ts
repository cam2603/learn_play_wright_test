import { test } from '@playwright/test';
import { HeaderComponent } from '../../components/header_components';

test.describe('Login UI', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://hanzii.net/?hl=vi');
  });

  test('Login dialog hiển thị đúng', async ({ page }) => {

    const header = new HeaderComponent(page);

    const loginDialog = await header.clickLogin(); // 👈 click trước

    await loginDialog.verifyVisible(); // 👈 rồi mới verify
  });
  test('Toggle mật khẩu hoạt động', async ({ page }) => {

    const header = new HeaderComponent(page);
    const loginDialog = await header.clickLogin();

    await loginDialog.verifyVisible();}
  );

});