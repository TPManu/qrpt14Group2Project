// This test will navigate to the 2 different games on the website
import { Manu } from "../manuPage";
import {WebDriver} from "selenium-webdriver";
const fs = require('fs')
const page = new Manu
//const websiteUrl = 'https://robertsspaceindustries.com/'

test('Successfully navigate through the games drop down menu', async () => {
    await page.navigate()
    await page.click(page.popCloseBtn);
    await page.click(page.gamesBtn);
    await page.click(page.starCitizen);
    await page.click(page.gamesBtn);
    await page.click(page.squadron42);
    await page.click(page.homePage);
    await page.click(page.gamesBtn);
    await page.click(page.rsi);
    await page.driver.sleep(3000);
    await page.driver.quit();
})