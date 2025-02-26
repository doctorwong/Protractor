const FlyOutPO = require('../page_objects/flyout.po');
const IndemnificationPO = require('../page_objects/indemnification.po.js');
const IndemnificationScenarios = require('../page_data/indemnification_scenarios.js');

var XLSX = require('xlsx')
var path = require('path');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');


describe('The Indemnification Pool Level Adjustments Page', () => {
    var flyOutPO
    var indemnificationPO
    var indemnificationScenarios

    var helperPage

    beforeEach(async () => {
        flyOutPO = new FlyOutPO();
        indemnificationPO = new IndemnificationPO();
        indemnificationScenarios = new IndemnificationScenarios();
        helperPage = new HelperPage();
    });

    it('should be accessible from the flyout menu', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
        browser.get(url);
        browser.sleep(1000)

        helperPage.click(flyOutPO.flyoutButton);
        browser.sleep(1000)

        helperPage.waitUntilClickabilityOf(flyOutPO.selectIndemnification);
        browser.actions().mouseMove(flyOutPO.selectIndemnification).perform();
        browser.sleep(1000)

        helperPage.click(flyOutPO.selectCreatePoolLevelAdjustments);
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/indemnification/indem-pool-adjustment');
    });

    it('should allow user to enter quarter', async () => {
        browser.get('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/indemnification/indem-pool-adjustment');
        helperPage.waitForVisibilityOf(indemnificationPO.poolQuarter)
        helperPage.click(indemnificationPO.poolQuarter);
        indemnificationPO.poolQuarter.sendKeys(indemnificationScenarios.adjustmentsSelectPoolQuarter)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        browser.sleep(10000)

        expect(indemnificationPO.poolQuarter.getAttribute('value')).toContain('09/30/2022');

    })

    xit('should create pool level adjustments', async () => {
        browser.sleep(1000)
        helperPage.click(indemnificationPO.createAllocationAdjustmentsButton);
        helperPage.click(indemnificationPO.confirmYes);
        browser.sleep(1000)
        //helperPage.waitForVisibilityOf(element(by.xpath("//span[contains(text(), 'Results')]"))),
        expect(element(by.cssContainingText('*', 'allocation adjustments have been created.')).isPresent()).toBeTruthy();

    })
})
