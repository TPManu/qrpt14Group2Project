import { By } from "selenium-webdriver";
import {BasePage} from './basePage';

export class robertsspaceindustries extends BasePage {
    gamesBtn: By = By.xpath('//span[text()="Games"]');
    appsBtn: By = By.xpath('//span[text()="Apps"]');
    pledgeStoreBtn: By = By.name("c-platform");
    accountBtn: By = By.xpath('//span[text()="Account"]');
    squadBtn: By = By.xpath('//span[text()="Start the adventure"]');
    communityHubBtn: By = By.xpath('//span[@class="c-platform-label c-platform-submenu__label"][1]');
    spectrumBtn: By = By.xpath('//span[@class="c-platform-label c-platform-submenu__label"][2]');




    

    constructor(){
        super({url: "https://robertsspaceindustries.com/star-citizen/"});
    };
};
