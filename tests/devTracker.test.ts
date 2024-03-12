// This test will open the website and navigate to the community posts
import { Manu } from "../manuPage";
import { WebDriver, Builder, By, Capabilities, until, WebElement } from "selenium-webdriver";
const fs = require('fs');
const page = new Manu;
//const websiteUrl = 'https://robertsspaceindustries.com/';

test('Successfully Navigate to the community posts page', async () => {
    await page.navigate();
    await page.click(page.popCloseBtn);
    await page.click(page.viewAllBtn);
    await page.click(page.devPost);
    await page.driver.sleep(3000);
    await page.driver.quit();
});
