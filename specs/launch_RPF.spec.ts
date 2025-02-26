import { browser, element, by, ExpectedConditions } from 'protractor';
import { HelperPage } from '../helpers/helper.page';

describe('Launch RPF', async () => {

    const EC = ExpectedConditions;
    let helperPage: HelperPage;


    beforeAll(() => {
        helperPage = new HelperPage();
    })

    //start and launch in every spec
    it('should launch the RPF Application ', async () => {
        if (browser.params.ENV === "prod") {
            await browser.get('http://' + browser.params.AD_ID + ":" + browser.params.AD_PWD + '@intraapps.ncci.com/rpf/#/');
            await expect(await browser.getCurrentUrl()).toBe('http://intraapps.ncci.com/rpf/#/');
        } else {
            await browser.get(`http://${browser.params.AD_ID}:${browser.params.AD_PWD}@${browser.params.ENV}hal.ncci.com:8080/api/auth/v2/token/internal?appId=rpf`);
            await browser.get('http://' + browser.params.AD_ID + ":" + browser.params.AD_PWD + '@' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/');
            //await expect(await browser.getCurrentUrl()).toBe('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/');
        }
        console.log(' DONE Logging IN');
    });
});