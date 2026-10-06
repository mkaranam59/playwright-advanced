import { test, expect } from '@playwright/test';
import { required } from './env';

test('inventory shows six products', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Username').fill(required('SAUCE_USER'));
  await page.getByPlaceholder('Password').fill(required('SAUCE_PASSWORD'));
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('.inventory_item')).toHaveCount(6);
});