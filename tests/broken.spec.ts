import { test, expect } from '@playwright/test';

test('page title is correct', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Swag Labs');
});