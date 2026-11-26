import { test, expect } from '@playwright/test';

test('deve exibir o título correto', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Lunar Pass — Passagens para a Lua");
});

