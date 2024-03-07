import {By} from "selenium-webdriver"
import { BasePage } from "./basePage"

export class Manu extends BasePage {
    homePage: By = By.className("c-platform__link");
    popCloseBtn: By = By.id("overlay_close");
    viewAllBtn: By = By.xpath('(//div[@class="link"])[3]');
    devPost: By = By.xpath('(//div[@class="devpost-wrapper"])[1]')
    
    constructor() {
        super({url: "https://robertsspaceindustries.com/"});
    };
}