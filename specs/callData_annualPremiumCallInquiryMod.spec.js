var FlyOutPO = require('../page_objects/flyout.po');
var CallDataPO = require('../page_objects/call_data.po.js');
const { HelperPage } = require('../helpers/helper.page');
const { browser } = require('protractor');

describe('Call Data Annual Premium Call Inquiry and Mod Page', () => {
    var flyOutPO
    var callDataPO
    var helperPage

    beforeEach(async () => {
        callDataPO = new CallDataPO();
        flyOutPO = new FlyOutPO();
        helperPage = new HelperPage();
    });

    it('should contain a a link from the Manager tab', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
        browser.get(url);
        browser.sleep(1000)
        helperPage.click(flyOutPO.flyoutButton);
        browser.sleep(2000)
        helperPage.waitUntilClickabilityOf(flyOutPO.selectCallData);
        browser.actions().mouseMove(flyOutPO.selectCallData).perform();
        browser.sleep(2000)
        helperPage.waitUntilClickabilityOf(flyOutPO.selectAnnualPremium);
        helperPage.click(flyOutPO.selectAnnualPremium)
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/premium-call');
    });

    it('should have a year dropdown', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/premium-call';
        browser.get(url);
        browser.sleep(1000)
        helperPage.click(callDataPO.annualPremiumYearDropdown)
        helperPage.click(callDataPO.clearPremiumYearDropdown);

        callDataPO.annualPremiumYearDropdown.sendKeys('2021')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(callDataPO.annualPremiumYearDropdown.getAttribute('value')).toContain('2021');
    })

    it('should have a state dropdown', async () => {
        helperPage.click(callDataPO.annualPremiumState)
        helperPage.click(callDataPO.clearPremiumState);

        callDataPO.annualPremiumState.sendKeys('01 - Alabama')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(callDataPO.annualPremiumState.getAttribute('value')).toContain('01 - Alabama');
    })

    xit('should have an only pool states checkbox', async () => {
        helperPage.click(callDataPO.onlyPoolStatesCheckbox)
    })


    it('should have a carrier dropdown', async () => {
        helperPage.click(callDataPO.annualPremiumCarrier)
        helperPage.click(callDataPO.clearPremiumCarrier);
        callDataPO.annualPremiumCarrier.sendKeys('10804 - TRAVELERS INSURANCE CO')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(callDataPO.annualPremiumCarrier.getAttribute('value')).toContain('10804 - TRAVELERS INSURANCE CO');

    })

    it('should have a clickable inquire button', async () => {
        helperPage.click(callDataPO.annualPremiumInquireButton);
    })

    //modification features
    
    xit('should have a clickable clear button', async () => {
        browser.sleep(5000)
        helperPage.click(callDataPO.annualPremiumClear);
    })
})
