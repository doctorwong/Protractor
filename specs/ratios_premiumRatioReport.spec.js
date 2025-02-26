var FlyOutPO = require('../page_objects/flyout.po');
const RatiosPO = require('../page_objects/ratios.po');
const { HelperPage } = require('../helpers/helper.page');
const { browser } = require('protractor');

describe('Ratios - Premium Ratio Report Page', () => {
    var flyOutPO
    var ratiosPO
    var helperPage

    beforeEach(async () => {
        ratiosPO = new RatiosPO();
        flyOutPO = new FlyOutPO();
        helperPage = new HelperPage();
    });

    it('should be accessible from the flyout menu', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
        browser.get(url);
        browser.sleep(1000)
        helperPage.click(flyOutPO.flyoutButton);
        helperPage.waitUntilClickabilityOf(flyOutPO.selectRatios);
        browser.sleep(1000)

        browser.actions().mouseMove(flyOutPO.selectRatios).perform();
        browser.sleep(1000)

        helperPage.click(flyOutPO.selectPremiumRatioReport)
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/premium-ratio');
    });

    it('should have a carrier field', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/premium-ratio';
        browser.get(url);
        browser.sleep(3000)

        helperPage.click(ratiosPO.premiumRatioReportCarrierDropdown)
        ratiosPO.premiumRatioReportCarrierDropdown.sendKeys('10804 - TRAVELERS INSURANCE CO')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        browser.sleep(1000)
        expect(ratiosPO.premiumRatioReportCarrierDropdown.getAttribute('value')).toContain('10804 - TRAVELERS INSURANCE CO');
    })
    
    it('should have a ratio set field', async () => {
        helperPage.click(ratiosPO.ratioSetDropdown)
        ratiosPO.ratioSetDropdown.sendKeys('6144 - 04-DEC-18 - Cumulative 1Q16-2Q18 Reapportionment - CFDAM')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(ratiosPO.ratioSetDropdown.getAttribute('value')).toContain('6144 - 04-DEC-18 - Cumulative 1Q16-2Q18 Reapportionment - CFDAM');
    })

    it('should have an inquire button', async () => {
        helperPage.click(ratiosPO.ratioSetInquire)
    })

    it('should have a clear button', async () => {
        browser.sleep(3000)
        helperPage.click(ratiosPO.ratioSetClear)
    })
})
