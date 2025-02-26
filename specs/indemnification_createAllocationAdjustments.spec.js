
var FlyOutPO = require('../page_objects/flyout.po');
var IndemnificationPO = require('../page_objects/indemnification.po.js');
const IndemnificationScenarios = require('../page_data/indemnification_scenarios.js');

var XLSX = require('xlsx')
var path = require('path');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');


describe('The Indemnification Create Allocation Adjustments Page', () => {
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
        helperPage.waitUntilClickabilityOf(flyOutPO.selectIndemnification);
        browser.sleep(1000)

        browser.actions().mouseMove(flyOutPO.selectIndemnification).perform();
        browser.sleep(3000)
        helperPage.click(flyOutPO.selectCreateAllocationAdjustments);
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/indemnification/allocation-adjustment');
    });

    it('should allow user to enter quarter', async () => {
        browser.get('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/indemnification/allocation-adjustment');
        browser.sleep(3000)
        helperPage.waitForVisibilityOf(indemnificationPO.adjustmentsQuarter)
        helperPage.click(indemnificationPO.adjustmentsQuarter);
        indemnificationPO.adjustmentsQuarter.sendKeys(indemnificationScenarios.adjustmentsQuarter)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        browser.sleep(10000)

        expect(indemnificationPO.adjustmentsQuarter.getAttribute('value')).toContain('09/30/2022');

    })

    xit('should create allocation adjustments', async () => {
        browser.sleep(1000)
        helperPage.click(indemnificationPO.createAllocationAdjustmentsButton);
        browser.sleep(1000)
        helperPage.click(indemnificationPO.confirmYes);
        browser.sleep(1000)
        //helperPage.waitForVisibilityOf(element(by.xpath("//td[@role='cell']")))
        
        /*
        expect(element(by.cssContainingText('*', 'Results')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'allocation adjustments have been created')).isPresent()).toBeTruthy();
        */

    })
})
