import { test } from "@playwright/test";


// Test Group
test.describe("User Story:Practice.cydeo", () => {

  // Before each test
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");

  });

  // After each test
  test.afterEach(async ({ page }) => {
    await page.waitForTimeout(3000);
  });

  test("title of page", async ({ page }) => {
    const title = await page.title();
    console.log("Title of the page:", title);
   // await page.waitForTimeout(3000);
  });

  test("url of the page", async ({ page }) => {
    const url = await page.url();
    console.log("URL of the page:", url);
   // await page.waitForTimeout(3000);
  });

});