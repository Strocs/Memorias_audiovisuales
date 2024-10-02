import { GRADUATES } from '@data/GRADUATES';
import { test, expect } from '@playwright/test';

const LOCAL_URL = 'http://localhost:4321'
const URL = 'https://memorias-audiovisuales.vercel.app/'


test('has title', async ({ page }) => {
  await page.goto(LOCAL_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Memoria Audiovisual/);
});

test('reel must be muted on load', async ({ page }) => {
  await page.goto(LOCAL_URL);

  await expect(page.getByTestId('reel-1')).toHaveJSProperty('muted', true)
})

test('reel have to unmute if video is clicked', async ({ page }) => {
  await page.goto(LOCAL_URL);

  const firstReel = page.getByTestId('reel-1')

  await firstReel.click()

  await expect(firstReel).toHaveJSProperty('muted', false)
})
