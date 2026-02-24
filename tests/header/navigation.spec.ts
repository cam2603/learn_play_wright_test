import { test, expect } from '@playwright/test';
import { HeaderComponent } from '../../components/header_components';

test('Click login điều hướng đúng', async ({ page }) => {
  await page.goto('https://hanzii.net/?hl=vi');

  const header = new HeaderComponent(page);
  await header.clickLogin();
  await expect(page).toHaveURL(/login/);
  await header.clickMenu('Dịch');
  await expect(page).toHaveURL(/translate/);
  await header.clickMenu('Thi thử');
  await expect(page).toHaveURL(/test?hl=vi/);

});