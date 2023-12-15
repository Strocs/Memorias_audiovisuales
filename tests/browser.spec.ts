import { test, expect } from '@playwright/test';

const LOCAL_URL = 'http://localhost:4321'
const URL = 'https://memorias-audiovisuales.vercel.app/'

test('has title', async ({ page }) => {
  await page.goto(LOCAL_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Memoria Audiovisual/);
});
