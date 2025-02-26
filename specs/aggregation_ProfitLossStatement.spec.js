const FlyOutPO = require('../page_objects/flyout.po');
const AggregationPO = require('../page_objects/aggregation.po');
const AggregationScenarios = require('../page_data/aggregation_scenarios.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');


describe('The Profit and Loss Statement Page', () => {
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
        helperPage.click(flyOutPO.selectProfitLossStatement);
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/aggregation/profit-and-loss-statement');
    });

    it('should have a report type dropdown', async () => {
        helperPage.click(aggregationPO.reportTypeDropdown);
        aggregationPO.reportTypeDropdown.sendKeys('Quarterly')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        expect(aggregationPO.reportTypeDropdown.getAttribute('value')).toContain('Quarterly');
    });

    it('should have a quarter end date dropdown', async () => {
        helperPage.click(aggregationPO.quarterEndDateDropdown);
        aggregationPO.quarterEndDateDropdown.sendKeys('03/31/2021')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        expect(aggregationPO.quarterEndDateDropdown.getAttribute('value')).toContain('03/31/2021');
    });

    it('should have a policy year dropdown', async () => {
        helperPage.click(aggregationPO.policyYearDropdown);
        aggregationPO.policyYearDropdown.sendKeys('2021')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        expect(aggregationPO.policyYearDropdown.getAttribute('value')).toContain('2021');
    });

    //pool level adjustment tab
    it('should have a pool dropdown', async () => {
        helperPage.click(aggregationPO.poolDropdown);
        aggregationPO.poolDropdown.sendKeys('12 - National WC Reinsurance Pooling Mechanism')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        expect(aggregationPO.poolDropdown.getAttribute('value')).toContain('12 - National WC Reinsurance Pooling Mechanism');
    });

    it('should have a state dropdown', async () => {
        helperPage.click(aggregationPO.stateDropdown);
        aggregationPO.stateDropdown.sendKeys('011 - ALABAMA')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        expect(aggregationPO.stateDropdown.getAttribute('value')).toContain('011 - ALABAMA');
    });

    it('should have a policy years per page dropdown', async () => {
        helperPage.click(aggregationPO.policyYearsPerPageDropdown);
        aggregationPO.policyYearsPerPageDropdown.sendKeys('10')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        expect(aggregationPO.policyYearsPerPageDropdown.getAttribute('value')).toContain('10');
    });

    it('should have a CSV download button', async () => {
        helperPage.click(aggregationPO.downloadCSV);
    });

    it('should have an excel download button', async () => {
        helperPage.waitUntilClickabilityOf(aggregationPO.downloadExcel)
        browser.sleep(5000)
        helperPage.click(aggregationPO.downloadExcel);
        browser.sleep(5000)

    });
});
