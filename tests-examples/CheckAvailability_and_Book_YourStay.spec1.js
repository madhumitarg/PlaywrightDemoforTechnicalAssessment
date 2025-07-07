import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  // await expect (page).toHaveTitle(/automationintesting.online/)
  
  await page.locator('div').filter({ hasText: /^Check In$/ }).getByRole('textbox').click();
  await page.getByRole('option', { name: 'Choose Friday, 18 July' }).click();

  await page.locator('div').filter({ hasText: /^Check Out$/ }).getByRole('textbox').click();

  await page.getByRole('option', { name: 'Choose Tuesday, 22 July' }).click();

  await page.getByRole('button', { name: 'Check Availability' }).click();

  await page.locator('div').filter({ hasText: Book now }).getByRole('link').click();

  await page.getByRole('button', { name: 'Reserve Now' }).click();
  await page.waitForTimeout (2000);
  //await page.getByRole('textbox', { name: 'Firstname' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).fill('Pravat');
 // await page.getByRole('textbox', { name: 'Lastname' }).click();
  await page.getByRole('textbox', { name: 'Lastname' }).fill('Sen');
 //  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('pravatsen@fakemail.com');
 // await page.getByRole('textbox', { name: 'Phone' }).click();
  await page.getByRole('textbox', { name: 'Phone' }).fill('098765432123');
  await page.getByRole('button', { name: 'Reserve Now' }).click();
  await page.getByRole('heading', { name: 'Booking Confirmed' }).click();
  await page.waitForTimeout (4000); // purposefully waiting here to 4min for showing;
  await page.getByRole('link', { name: 'Return home' }).click();
  
  await page.waitForTimeout (2000); // purposefully waiting here.


});