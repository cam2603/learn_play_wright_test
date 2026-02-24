import { test } from '@playwright/test';
import { HeaderComponent } from '../../components/header_components';

test.describe('Header UI', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://hanzii.net/?hl=vi');
  });

  test('Header hiển thị đúng', async ({ page }) => {
    const header = new HeaderComponent(page);
    await header.verifyVisible();
  });

  test('Click login opens dialog', async ({ page }) => {
  const header = new HeaderComponent(page);

  await header.clickLogin();
});
});

