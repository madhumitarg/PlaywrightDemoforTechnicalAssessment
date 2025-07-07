import { test, expect } from '@playwright/test';
const testdataQuickEnq = JSON.parse (JSON.stringify (require ("../ShadyMeadowsBandB/testdataQuickEnq.json")))


/// ----- Input Test Data From estdataQuickEnq.json file
// let name = "Richard Osman";
// let email = "rosman@testmail.com";
// let phnumber = "98765432123";



test('test', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  await page.locator('#navbarNav').getByRole('link', { name: 'Contact' }).click();
  await page.getByRole('heading', { name: 'Send Us a Message' }).click();
  await page.getByTestId('ContactName').click();
  await page.getByTestId('ContactName').fill(testdataQuickEnq.name);
  await page.getByTestId('ContactEmail').click();
  await page.getByTestId('ContactEmail').fill(testdataQuickEnq.email);
  await page.getByTestId('ContactPhone').click();
  await page.getByTestId('ContactPhone').fill(testdataQuickEnq.phnumber);
  await page.getByTestId('ContactSubject').click();
  await page.getByTestId('ContactSubject').fill(testdataQuickEnq.subject);
  await page.getByTestId('ContactDescription').click();
  await page.getByTestId('ContactDescription').fill(testdataQuickEnq.message);
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('heading', { name: 'Thanks for getting in touch' }).click();
 
  await page.waitForTimeout (2000); // purposefully waiting here to 2min for showing;

  // const successmsg1= await page.locator("//h3[normalize-space()='Thanks for getting in touch']").textContent();
  const successmsg1= await page.locator("//p[normalize-space()='as soon as possible.']").textContent();
  expect (successmsg1.includes("Thanks for getting in touch")).toBeTruthy


}

);