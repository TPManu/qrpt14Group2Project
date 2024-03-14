import { robertsspaceindustries } from "../pageObject"
const fs = require ('fs');
const page = new robertsspaceindustries();

test ( 'find a game', async () => {
    await page.navigate();
    await page.click(page.gamesBtn);
    await page.driver.sleep(2000);
    await page.click(page.squadBtn);
    let pageurl = await page.driver.getCurrentUrl();
    expect (pageurl).toBe('https://robertsspaceindustries.com/squadron42');
    await fs.writeFile(`${__dirname}/squadron42.png`,
    await page.driver.takeScreenshot(),"base64",
    (e)=>{
        if (e) console.error (e)
        else console.log("saved")});

});
test ( 'locate an app', async () => {
    await page.navigate();
    await page.click(page.appsBtn);
    await page.driver.sleep(2000);
    await page.click(page.communityHubBtn);
    let pageurl = await page.driver.getCurrentUrl();
    expect (pageurl).toBe('https://robertsspaceindustries.com/community-hub');
    await fs.writeFile(`${__dirname}/communityHub.png`,
    await page.driver.takeScreenshot(),"base64",
    (e) =>{
        if (e) console.error (e)
        else console.log("saved")});

});
test ('loacte an app ', async () => {
    await page.navigate();
    await  page.click(page.appsBtn);
    await page.driver.sleep(2000);
    await page.click(page.spectrumBtn);
    let pageurl = await page.driver.getCurrentUrl();
    expect (pageurl).toBe('https://robertsspaceindustries.com/spectrum/community/SC');
    await fs.writeFile(`${__dirname}/spectrum.png`,
    await page.driver.takeScreenshot(),"base64",
    (e) =>{
        if (e) console.error (e)
        else console.log("saved")});
    await page.driver.quit();
});
    
