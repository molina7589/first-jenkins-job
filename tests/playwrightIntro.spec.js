    //const {test} = require("@playwright/test");
    import { test } from "@playwright/test";
    
    test('should display the correct title', async ({ page }) => {
       // test code
       await page.goto('https://www.google.com');

       await page.waitForTimeout(3000); 
      
       // search for "big booty latinas"
       await page.locator("//*[@class='gLFyf']").fill("big booty latinas");
       await page.locator("//*[@class='gLFyf']").press("Enter");
       await page.waitForTimeout(3000);



    }); 