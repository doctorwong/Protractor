const FlyOutPO = require('../page_objects/flyout.po');
const AggregationPO = require('../page_objects/aggregation.po');
const AggregationScenarios = require('../page_data/aggregation_scenarios.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');


describe('The Profit Loss Comparison Page', () => {
    var flyOutPO
    var aggregationPO
    var helperPage
    var aggregationScenarios

    beforeEach(async () => {
        flyOutPO = new FlyOutPO();
        helperPage = new HelperPage();
        aggregationPO = new AggregationPO();
        aggregationScenarios = new AggregationScenarios();

    });

    it('should be accessible from the flyout menu', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
        browser.get(url);
        helperPage.click(flyOutPO.flyoutButton);
        helperPage.waitUntilClickabilityOf(flyOutPO.selectAggregation);
        browser.sleep(1000)

        browser.actions().mouseMove(flyOutPO.selectAggregation).perform();
        browser.sleep(3000)
        helperPage.click(flyOutPO.selectProfitLossStatementComparison);
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/aggregation/profit-and-loss-statement-comparison');
    });

    it('should have a pool code dropdown', async () => {
        helperPage.click(aggregationPO.profitLossPoolDropdown);
        aggregationPO.profitLossPoolDropdown.sendKeys('08 - New Mexico WC Assigned Risk Pool')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        expect(aggregationPO.profitLossPoolDropdown.getAttribute('value')).toContain('08 - New Mexico WC Assigned Risk Pool');
    });
    it('should have a dropdown for first quarter end date', async () => {
        helperPage.click(aggregationPO.firstQuarterDropdown);
        aggregationPO.firstQuarterDropdown.sendKeys('12/31/2020')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        expect(aggregationPO.firstQuarterDropdown.getAttribute('value')).toContain('12/31/2020');
    });

    it('should have a dropdown for first policy year', async () => {
        helperPage.click(aggregationPO.firstPolicyYearDropdown);
        aggregationPO.firstPolicyYearDropdown.sendKeys('2020')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        expect(aggregationPO.firstPolicyYearDropdown.getAttribute('value')).toContain('2020');
    });

    it('should have a dropdown for second quarter end date', async () => {
        helperPage.click(aggregationPO.secondQuarterDropdown);
        aggregationPO.secondQuarterDropdown.sendKeys('03/31/2021')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        expect(aggregationPO.secondQuarterDropdown.getAttribute('value')).toContain('03/31/2021');
    });

    it('should have a dropdown for second policy year', async () => {
        helperPage.click(aggregationPO.secondPolicyYearDropdown);
        aggregationPO.secondPolicyYearDropdown.sendKeys('2021')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        expect(aggregationPO.secondPolicyYearDropdown.getAttribute('value')).toContain('2021');
    });

    it('should download excel', async () => {
        helperPage.click(aggregationPO.secondPolicyYearDropdown);
        browser.sleep(5000)
    });

    it('should clear fields', async () => {
        helperPage.click(aggregationPO.secondPolicyYearDropdown);
       
    });
})