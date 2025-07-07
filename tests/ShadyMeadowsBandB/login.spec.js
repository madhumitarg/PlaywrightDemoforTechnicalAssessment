import { test, expect } from '@playwright/test';

const jsonTestDatalogin = JSON.parse (JSON.stringify (require ("./testdataLogin.json")))


test('test', async ({ page }) => {

  await page.goto('https://automationintesting.online/');

  await page.getByRole('link', { name: 'Admin', exact: true }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(jsonTestDatalogin.user);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(jsonTestDatalogin.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(2000);

  await page.getByRole('button', { name: 'Logout' }).click();

   await page.waitForTimeout(2000);

  const homePageName1 = await page.locator("//h1[@class = 'display-4 fw-bold mb-4']").textContent()
console.log ("Page title is showing as "+ homePageName1 +". User is back to Home Page")
expect (homePageName1.includes("Welcome to Shady")).toBeTruthy


});