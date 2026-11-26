import { test, expect } from '@playwright/test';

test('deve validar o título na aba do navegador', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Lunar Pass — Passagens para a Lua");
});


test('deve exibir o slogan da homepage', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect the slogan to be visible.
  const slogan = page.locator('h1');
  await expect(slogan).toBeVisible();
  await expect(slogan).toHaveText('Sua viagem para a Lua começa aqui.');
});