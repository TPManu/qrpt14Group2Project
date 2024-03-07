import { Manu } from "../manuPage";
import { WebDriver } from "selenium-webdriver"
const fs = require('fs')
const page = new Manu

test('test this locator', async () => {
    await page.navigate();
    await page.click(page.popCloseBtn);
    await page.click(page.viewAllBtn);
    await page.click(page.devPost);
    await page.driver.sleep(3000);
    await page.driver.quit();
    //await page.driver.quit();
})