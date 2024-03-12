import {By, WebDriver, WebElement, Key, ChromiumWebDriver,} from "selenium-webdriver"
import { BasePage } from "./basePage"

export class Manu extends BasePage {
    homePage: By = By.className("c-platform__link");
    popCloseBtn: By = By.id("overlay_close");
    viewAllBtn: By = By.xpath('(//div[@class="link"])[3]');
    devPost: By = By.xpath('(//div[@class="devpost-wrapper"])[1]')
    gamesBtn: By = By.xpath('(//span[@class="c-platform-tab c-platform-tab--rsi c-platform-tab--brands"])');
    starCitizen: By = By.xpath('(//a[@href="/star-citizen"])[1]');
    squadron42: By = By.xpath('(//span[@class="c-game__catchline"])[2]');
    rsi: By = By.xpath('(//span[@class="c-game__catchline"])[3]');
    apps: By = By.xpath('//li[@class="c-platform-list__item c-platform-tabs__item "][2]')
    apps2: By = By.xpath('//span[text()="Apps"]');
    comHub: By = By.xpath('//span[text()="Community Hub"]');
    roadMap: By = By.xpath('//span[text()="Roadmap"]');
    starMap: By = By.xpath('//span[text()="Starmap"]');
    spectrum: By = By.xpath('//span[text()="Spectrum"]');
    telemetry: By = By.xpath('//span[text()="Telemetry"]');
    galactapedia: By = By.xpath('//span[text()="Galactapedia"]');
    launcher: By = By.xpath('//span[text()="Launcher"]');
    issueCouncil: By = By.xpath('//span[text()="Issue Council"]')



    
    constructor() {
        super({url: "https://robertsspaceindustries.com/"});
    };
}