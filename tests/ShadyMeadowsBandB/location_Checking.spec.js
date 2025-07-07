import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.getByRole('link', { name: 'Location' }).click();

  const loc= await page.getByRole('link', { name: 'Location' }).textContent();
expect (loc.includes("Our Location")).toBeTruthy

/// Address Checking 
await page.locator('#location').getByText('Shady Meadows B&B, Shadows').click();
await page.getByRole('heading', { name: 'Address' }).click();

const address = await page.locator('#location').getByText('Shady Meadows B&B, Shadows').textContent();
console.log("Address Details   "+address)
expect (address.includes("Address")).toBeTruthy

// Phone number Checking

  await page.getByRole('heading', { name: 'Phone' }).click();
  await page.locator('#location').getByText('012345678901').click();
  const ph = await page.locator('#location').getByText('012345678901').textContent();
console.log("Phoen NUmber   "+ph)


  await page.getByRole('heading', { name: 'Email' }).click();
  
  
  await page.locator('#location').getByText('fake@fakeemail.com').click();
  await page.locator('#location').getByText('Welcome to Shady Meadows, a').click();
  await page.locator('.pigeon-overlays').click();
});