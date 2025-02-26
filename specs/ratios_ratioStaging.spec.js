const FlyOutPO = require('../page_objects/flyout.po');
const RatiosPO = require('../page_objects/ratios.po');
const { HelperPage } = require('../helpers/helper.page');
const { browser } = require('protractor');

describe('The Ratio Staging Page', () => {
    var flyOutPO
    var ratiosPO
    var helperPage

    beforeEach(async () => {
        flyOutPO = new FlyOutPO();
        ratiosPO = new RatiosPO();
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

        helperPage.click(flyOutPO.selectRatioStaging)
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/ratio-set/ratio-set-staging');
    });

    xit('should have clickable call table and premium buttons', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/ratio-set/ratio-set-staging';
        browser.get(url);
        helperPage.click(ratiosPO.callTableRadio)
        helperPage.click(ratiosPO.premiumTableRadio)
    })

    xit('should have a checkbox for mass VDAC negative ratios', async () => {
        helperPage.click(ratiosPO.allowMassVdacNegativeRatiosCheckbox)
    })

    it('should have a dropdown for base ratio set', async () => {
        browser.sleep(1000)
        helperPage.click(ratiosPO.baseRatioSetDropdown)
        browser.sleep(1000)
        helperPage.click(ratiosPO.clearRatioSet);
        ratiosPO.baseRatioSetDropdown.sendKeys('5742 - 11-APR-2016 - 2q16 Plan Fees')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(ratiosPO.baseRatioSetDropdown.getAttribute('value')).toContain('5742 - 11-APR-2016 - 2q16 Plan Fees');
    })

    it('should have a dropdown for new ratio set', async () => {
        //helperPage.click(ratiosPO.newRatioSetDropdown)
        ratiosPO.newRatioSetDropdown.sendKeys('123')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(ratiosPO.newRatioSetDropdown.getAttribute('value')).toContain('123');
    })

    xit('should have a dropdown for call year', async () => {
        helperPage.click(ratiosPO.callYear)
        helperPage.click(ratiosPO.clearCallYear);
        ratiosPO.callYear.sendKeys()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(ratiosPO.callYear.getAttribute('value')).toContain(ebnrScenarios.report);
    })

    xit('should have a creating staging button', async () => {
        helperPage.click(ratiosPO.createStaging)
    })

    it('should have a clear button', async () => {
        helperPage.click(ratiosPO.ratioStagingClear)
    })
})
