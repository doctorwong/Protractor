var FlyOutPO = require('../page_objects/flyout.po');
var RatiosPO = require('../page_objects/ratios.po.js');
const { HelperPage } = require('../helpers/helper.page');
const { browser } = require('protractor');

describe('Ratios - Premium Adjustment Page', () => {
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

        helperPage.click(flyOutPO.selectPremiumAdjustment)
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/premium-adjustment');

    });

    it('should have a carrier field', async () => {
        helperPage.click(ratiosPO.premiumAdjustmentCarrier)
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(ratiosPO.premiumAdjustmentCarrier.getAttribute('value')).toContain('10138 - BITCO GENERAL INSURANCE CORPORATION');
    })

    it('should have a pool code field', async () => {
        helperPage.click(ratiosPO.clearPoolCode)
        helperPage.click(ratiosPO.poolCode)

        ratiosPO.poolCode.sendKeys('12 - National WC Reinsurance Pooling Mechanism')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(ratiosPO.poolCode.getAttribute('value')).toContain('12 - National WC Reinsurance Pooling Mechanism');
    })

    
    it('should have a state field', async () => {
        browser.sleep(1000)
        helperPage.click(ratiosPO.clearState)

        helperPage.click(ratiosPO.state)
        browser.sleep(1000)

        ratiosPO.state.sendKeys('011 - ALABAMA')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(ratiosPO.state.getAttribute('value')).toContain('011 - ALABAMA');
    })

    it('should have a policy year field', async () => {
        browser.sleep(1000)
        helperPage.click(ratiosPO.clearPolicyYear)
        helperPage.click(ratiosPO.policyYear)
        browser.sleep(1000)

        ratiosPO.policyYear.sendKeys('2021')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(ratiosPO.policyYear.getAttribute('value')).toContain('2021');
    })

})
