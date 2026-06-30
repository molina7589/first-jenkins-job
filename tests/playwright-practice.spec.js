import { test } from "@playwright/test";

test("Practice test", async ({ page }) => {
// navigate to google
await page.goto("https://www.google.com");
//pause for 3 seconds
await page.waitForTimeout(3000);



});
