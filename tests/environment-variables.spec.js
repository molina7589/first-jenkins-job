import { test } from '@playwright/test';

test.describe('Environment Variables', () => {
  test('Check environment variables', async ({ page }) => {

   // console.log(process.env.PRACTICE_USERNAME);
   // console.log(process.env.PRACTICE_PASSWORD);

    console.log(`Username: ${process.env.PRACTICE_USERNAME}, Password: ${process.env.PRACTICE_PASSWORD}`);
  });

});