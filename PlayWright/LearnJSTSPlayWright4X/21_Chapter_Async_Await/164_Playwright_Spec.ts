import {test, expect} from '@playwright/test' ;
test('user await in a playwright test', async ({ page }) = > {
    await page.goto('https://playwright/dev');
    // page.locator();
}