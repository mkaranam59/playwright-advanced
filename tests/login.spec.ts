import { test, expect } from '@playwright/test';
import {required} from './env';

test('standard user can log in', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Username').fill(required('SAUCE_USER'));
  await page.getByPlaceholder('Password').fill(required('SAUCE_PASSWORD'));
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/inventory/);
});

test('locked user sees an error', async ({ page }) => {
  await page.goto('/');
  await page.getByPlaceholder('Username').fill('locked_out_user');
  await page.getByPlaceholder('Password').fill(required('SAUCE_PASSWORD'));
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('locked out')).toBeVisible();
});