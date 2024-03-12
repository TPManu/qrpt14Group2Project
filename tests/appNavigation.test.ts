// this test will navigate through the apps dropdown menu and return to the home page
import { Manu } from "../manuPage";
import { WebDriver, Builder, By, Capabilities, until, WebElement } from "selenium-webdriver";
const fs = require('fs');
const page = new Manu;

test('Successfully navigate through the apps drop down menu', async () => {
    await page.navigate();
    await page.click(page.popCloseBtn);
    await page.driver.sleep(3000);
    await page.click(page.apps);
    await page.click(page.comHub);
    await page.navigate();
    await page.click(page.popCloseBtn);
    await page.driver.sleep(3000);
    await page.click(page.apps);
    await page.click(page.roadMap);
    await page.driver.sleep(1500);
    await page.navigate();
    await page.click(page.popCloseBtn);
    await page.driver.sleep(3000);
    await page.click(page.apps);
    await page.click(page.starMap);
    await page.driver.sleep(1500);
    await page.navigate();
    await page.click(page.popCloseBtn);
    await page.driver.sleep(3000);
    await page.click(page.apps);
    await page.click(page.spectrum);
    await page.driver.sleep(1500);
    await page.navigate();
    await page.click(page.popCloseBtn);
    await page.driver.sleep(3000);
    await page.click(page.apps);
    await page.click(page.telemetry);
    //await page.driver.sleep(1500);
   // await page.navigate();
    //await page.click(page.popCloseBtn);
   // await page.driver.sleep(3000);
    //await page.driver.quit();
    await page.navigate();
    //await page.click(page.popCloseBtn);
    await page.click(page.apps);
    //await page.click(page.apps2);
    await page.click(page.galactapedia);
   // await page.driver.sleep(1500);
    await page.navigate();
   // await page.click(page.popCloseBtn);
    //await page.driver.sleep(3000);
    await page.click(page.apps);
    await page.click(page.launcher);
    //await page.driver.sleep(1500);
    await page.navigate();
    //await page.click(page.popCloseBtn);
   // await page.driver.sleep(3000);
    await page.click(page.apps);
    await page.click(page.issueCouncil);
    await page.navigate();
    await page.driver.quit();
});
