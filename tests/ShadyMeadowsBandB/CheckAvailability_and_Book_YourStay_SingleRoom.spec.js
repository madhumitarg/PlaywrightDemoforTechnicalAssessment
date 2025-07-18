import { test, expect } from '@playwright/test';
// import { Console } from 'console';
const jsonTestData = JSON.parse (JSON.stringify (require ("../ShadyMeadowsBandB/testdata.json")))

// -------------------These test data has beem moved to json test data file to give imput
// let fname = "Richard";
// let lname = 'Osman'
// let email = "rosman@testmail.com";
// let phnumber = "98765432123";
// let chInDate = "19/08/2025";
// let choutDate = "20/08/2025";

// Taking input from external json file


test('test', async ({ page }) => {
  await page.goto('https://automationintesting.online/');
  
const homePageName = await page.locator("//h1[@class = 'display-4 fw-bold mb-4']").textContent()
console.log ("Page title is showing as "+homePageName)
expect (homePageName.includes("Welcome to Shady")).toBeTruthy

await page.locator('div').filter({ hasText: /^Check In$/ }).getByRole('textbox').click();

await page.waitForTimeout(2000);
await page.locator("//input[contains(@class,'react-datepicker')]").fill (jsonTestData.chInDate)

await page.locator('div').filter({ hasText: /^Check Out$/ }).getByRole('textbox').click();

await page.locator("//input[contains(@class,'react-datepicker')]").fill (jsonTestData.choutDate)
await page.getByRole('button', { name: 'Check Availability' }).click();
  
 await page.waitForTimeout(2000);

await page.locator("(//a[@class='btn btn-primary'][normalize-space()='Book now'])[contains(@href,'/reservation/1?')]").click();

const roomName= await page.locator("//h1[.='Single Room']").textContent();
console.log("Room Details"+roomName)
expect (roomName.includes("Single Room")).toBeTruthy

// const isSelected = await page.getByTitle("Selected").textContent();
// Console.log("Is date selected"+isSelected);


// const isRoomSelected = await page.locator("//h2[normalize-space()='Book This Room']").textContent()
// Console.log("Is the Room  selected"+isRoomSelected);
// expect (isRoomSelected.includes("Book This Room")).toBeTruthy;

   
await page.getByRole('button', { name: 'Reserve Now' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).click();
  await page.getByRole('textbox', { name: 'Firstname' }).fill(jsonTestData.fname);
  await page.getByRole('textbox', { name: 'Lastname' }).click();
  await page.getByRole('textbox', { name: 'Lastname' }).fill(jsonTestData.lname);
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(jsonTestData.email); 
  await page.getByRole('textbox', { name: 'Phone' }).fill(jsonTestData.phnumber);

    await page.waitForTimeout(3000);                // ---- give  a wait  to see that page has been filled with the data correctly
  await page.getByRole('button', { name: 'Reserve Now' }).click();
  await page.waitForTimeout(3000);

  const successMsg  = await page.locator ("//h2[contains(@class,'card-title')]").textContent();
  console.log ( "Successful Message is "+successMsg);
  expect (successMsg.includes("Booking Confirmed")).toBeTruthy

  await page.waitForTimeout(3000)
  await page.getByRole('link', { name: 'Return home' }).click();
const homePageName1 = await page.locator("//h1[@class = 'display-4 fw-bold mb-4']").textContent()
console.log ("Page title is showing as "+ homePageName1 +". User is back to Home Page")
expect (homePageName.includes("Welcome to Shady")).toBeTruthy

});