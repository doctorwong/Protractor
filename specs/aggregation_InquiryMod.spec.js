const FlyOutPO = require('../page_objects/flyout.po');
const AggregationPO = require('../page_objects/aggregation.po');
const AggregationScenarios = require('../page_data/aggregation_scenarios.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');


describe('The Aggregation Inquiry and Modification Page', () => {
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
        browser.sleep(1000)
        helperPage.waitUntilClickabilityOf(flyOutPO.selectAggregation);
        browser.actions().mouseMove(flyOutPO.selectAggregation).perform();
        browser.sleep(1000)
        helperPage.click(flyOutPO.selectAggregationInquiryMod);
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/aggregation/aggregation-inquire');
    });

    it('should have a load reserves tab', async () => {

        //load reserves tab
        helperPage.click(aggregationPO.loadReservesQuarter);
        aggregationPO.loadReservesQuarter.sendKeys(aggregationScenarios.loadQuarter)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        expect(aggregationPO.loadReservesQuarter.getAttribute('value')).toContain(aggregationScenarios.loadQuarter);



        /* unclickable for now
        helperPage.click(aggregationPO.varianceQuarter);
        */

    });

    //test
    xit('should submit an inquiry', async () => {
        helperPage.click(aggregationPO.loadAggregateDataBtn);
        browser.sleep(1000)
        helperPage.waitUntilClickabilityOf(aggregationPO.varianceQuarter);
        browser.sleep(5000)
        helperPage.click(aggregationPO.varianceQuarter);
        aggregationPO.varianceQuarter.sendKeys(aggregationScenarios.varianceQuarter)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        expect(aggregationPO.loadAggregateDataBtn.getAttribute('value')).toContain(aggregationPO.varianceQuarter);


        helperPage.click(aggregationPO.reportType);
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        //aggregationPO.reportType.sendKeys(aggregationScenarios.reportType)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()

        helperPage.waitUntilClickabilityOf(aggregationPO.varianceInquire);
        browser.sleep(1000)
        helperPage.click(aggregationPO.varianceInquire);
        browser.sleep(1000)
    });

    //test
    xit('should display data from ARC after submitting an inquiry', async () => {
        expect(element(by.cssContainingText('*', 'Discounted IBNR Amount')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Pool Code')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'ARC')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'RPFS')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Variance')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Undiscounted IBNR Amount')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'EBNR Reserve Amount')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'LSRP Reserve Amount')).isPresent()).toBeTruthy();
        helperPage.click(aggregationPO.loadReservesExcel);
        browser.sleep(5000)

    });

    //pool level adjustment tab
    it('should have a pool level adjustments tab', async () => {

        helperPage.waitUntilClickabilityOf(aggregationPO.poolLevelAdjustmentTab);
        helperPage.click(aggregationPO.poolLevelAdjustmentTab);
    });


    it('pool adjustments should have selectable dropdowns', async () => {
        helperPage.click(aggregationPO.quarterDropdown);
        aggregationPO.quarterDropdown.sendKeys(aggregationScenarios.quarter);
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(aggregationPO.quarterDropdown.getAttribute('value')).toContain('06/30/2023');



        helperPage.click(aggregationPO.poolDropdown);
        helperPage.click(aggregationPO.clearPoolDropdown);
        aggregationPO.poolDropdown.sendKeys(aggregationScenarios.pool)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(aggregationPO.poolDropdown.getAttribute('value')).toContain(aggregationScenarios.pool);



        helperPage.click(aggregationPO.stateDropdown);
        helperPage.click(aggregationPO.clearStateDropdown);
        aggregationPO.stateDropdown.sendKeys(aggregationScenarios.state)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(aggregationPO.stateDropdown.getAttribute('value')).toContain(aggregationScenarios.state);



        helperPage.click(aggregationPO.reportDropdown);
        helperPage.click(aggregationPO.clearReportDropdown);

        aggregationPO.reportDropdown.sendKeys(aggregationScenarios.report)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(aggregationPO.reportDropdown.getAttribute('value')).toContain(aggregationScenarios.report);



        helperPage.click(aggregationPO.policyYearDropdown);
        helperPage.click(aggregationPO.clearPolicyYearDropdown);
        aggregationPO.policyYearDropdown.sendKeys(aggregationScenarios.year)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(aggregationPO.policyYearDropdown.getAttribute('value')).toContain(aggregationScenarios.year);



        helperPage.click(aggregationPO.transactionTypeDropdown);
        helperPage.click(aggregationPO.clearTransactionTypeDropdown);
        browser.sleep(1000)
        helperPage.click(aggregationPO.clearTransactionTypeDropdown);
        browser.sleep(1000)


        aggregationPO.transactionTypeDropdown.sendKeys(aggregationScenarios.transactionType);
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(aggregationPO.transactionTypeDropdown.getAttribute('value')).toContain(aggregationScenarios.transactionType);
    });

    it('should make an inquiry', async () => {
        helperPage.click(aggregationPO.inquireBtn);
        browser.sleep(3000)

        expect(element(by.cssContainingText('*', 'Net Balance Due Pool')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Premium')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Ceded Premium')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Expenses')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Misc Expenses')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Paid Losses - Accident Year')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Current')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Subsequent')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Total')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Outstanding Losses - Accident Year')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Current')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Subsequent')).isPresent()).toBeTruthy();
        helperPage.click(aggregationPO.clearBtn);

        helperPage.click(aggregationPO.inquireBtn);
        browser.sleep(3000)
        expect(element(by.cssContainingText('*', 'Net Balance Due Pool')).isPresent()).toBeTruthy();

        //aggregation (coming soon)
        /*
        helperPage.click(aggregationPO.aggregationTab);
        aggregationPO.poolDropdown.sendKeys(aggregationScenarios.aggregationQuarter)
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        helperPage.click(aggregationPO.loadAggregateDataButton);

        helperPage.click(aggregationPO.reportType);
        aggregationPO.poolDropdown.sendKeys(aggregationScenarios.reportType)
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        helperPage.click(aggregationPO.reportInquire);

        helperPage.click(aggregationPO.excelDownload);
        */
    });

    it('should have an admin and income tab', async () => {
        helperPage.click(aggregationPO.adminTab);

    });

    it('should complete fields under the admin and income tab', async () => {
        browser.sleep(3000)
        helperPage.click(aggregationPO.adminQuarter);
        aggregationPO.adminQuarter.sendKeys(aggregationScenarios.adminQuarter);
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(aggregationPO.adminQuarter.getAttribute('value')).toContain('12/31/2018');



        helperPage.click(aggregationPO.adminPool);
        browser.sleep(3000)
        helperPage.click(aggregationPO.clearAdminPool);
        browser.sleep(3000)

        aggregationPO.adminPool.sendKeys(aggregationScenarios.adminPool)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()

        browser.actions().sendKeys(protractor.Key.TAB).perform()
        browser.sleep(1000)

        expect(aggregationPO.adminPool.getAttribute('value')).toContain(aggregationScenarios.adminPool);



        helperPage.click(aggregationPO.adminState);
        helperPage.click(aggregationPO.clearAdminState);

        aggregationPO.adminState.sendKeys(aggregationScenarios.adminState)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        browser.sleep(1000)

        expect(aggregationPO.adminState.getAttribute('value')).toContain(aggregationScenarios.adminState);



        helperPage.click(aggregationPO.adminPolicyYear);
        helperPage.click(aggregationPO.clearAdminPolicyYear);

        aggregationPO.adminPolicyYear.sendKeys(aggregationScenarios.adminPolicyYear)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(aggregationPO.adminPolicyYear.getAttribute('value')).toContain(aggregationScenarios.adminPolicyYear);


    });

    it('should display admin expenses and interest income when an inquiry is made', async () => {
        helperPage.click(aggregationPO.adminInquire);
        browser.sleep(3000)
        expect(element(by.cssContainingText('*', 'Admin Expenses')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Interest Income')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', '$')).isPresent()).toBeTruthy();
    });

    it('should have a button to clear inquiry', async () => {
        browser.sleep(1000)
        helperPage.click(aggregationPO.adminClear);
        browser.sleep(1000)
        expect(element(by.cssContainingText('*', 'Admin Expenses')).isPresent()).toBeFalsy();
        expect(element(by.cssContainingText('*', 'Interest Income')).isPresent()).toBeFalsy();
        expect(element(by.cssContainingText('*', '$')).isPresent()).toBeFalsy();
    });


    it('should have an aggregation tab', async () => {
        helperPage.click(aggregationPO.aggregationTab)
    });

    it('should complete fields under the aggregation tab', async () => {
        browser.sleep(1000)

        helperPage.click(aggregationPO.aggregationQuarter);
        helperPage.click(aggregationPO.clearAggregationQuarter);

        aggregationPO.aggregationQuarter.sendKeys(aggregationScenarios.aggregationQuarter);
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(aggregationPO.aggregationQuarter.getAttribute('value')).toContain(aggregationScenarios.aggregationQuarter);
        browser.sleep(1000)

        helperPage.click(aggregationPO.aggregationPool);
        helperPage.click(aggregationPO.clearAggregationPool);

        aggregationPO.aggregationPool.sendKeys(aggregationScenarios.aggregationPool)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(aggregationPO.aggregationPool.getAttribute('value')).toContain(aggregationScenarios.aggregationPool);



        helperPage.click(aggregationPO.aggregationState);
        helperPage.click(aggregationPO.clearAggregationState);

        aggregationPO.aggregationState.sendKeys(aggregationScenarios.aggregationState)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(aggregationPO.aggregationState.getAttribute('value')).toContain(aggregationScenarios.aggregationState);

        helperPage.click(aggregationPO.aggregationPolicyYear);
        helperPage.click(aggregationPO.clearAggregationPolicyYear);

        aggregationPO.aggregationPolicyYear.sendKeys(aggregationScenarios.aggregationPolicyYear)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(aggregationPO.aggregationPolicyYear.getAttribute('value')).toContain(aggregationScenarios.aggregationPolicyYear);
    });

    it('should submit an inquiry under the aggregation tab', async () => {
        helperPage.click(aggregationPO.aggregationInquire);
    });

    it('should clear an inquiry under the aggregation tab', async () => {
        browser.sleep(5000)
        helperPage.click(aggregationPO.aggregationClear);
    });
});

