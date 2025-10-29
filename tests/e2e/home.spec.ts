import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('displays the landing hero content', async ({ page }) => {
    await page.goto('/');

    await expect(
      page.getByRole('heading', { name: /next\.js starter with typescript & tailwind/i })
    ).toBeVisible();
    await expect(page.getByRole('article', { name: /introducing codex sample/i })).toBeVisible();
  });
});
