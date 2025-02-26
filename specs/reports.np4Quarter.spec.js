var FlyOutPO = require('../page_objects/flyout.po');
var ReportPO = require('../page_objects/report.po');
const ReportsScenarios = require('../page_data/reports_scenarios.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');
const { BrowserStack } = require('protractor/built/driverProviders');

//check dropdowns
//enter values in fields

describe('The NP4 Quarter to Quarter Comparison Report', () => {
    var flyOutPO
    var reportPO
    var reportsScenarios
    var helperPage


    beforeEach(async () => {
        flyOutPO = new FlyOutPO();
        reportPO = new ReportPO();
        reportsScenarios = new ReportsScenarios();
        helperPage = new HelperPage();
    });

    //test if it is acessble from flyout menu

    it('should navigate to the NP4 Quarter to Quarter Report Page', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
        browser.get(url);
        helperPage.click(flyOutPO.flyoutButton);
        helperPage.click(flyOutPO.selectReports);
        helperPage.click(flyOutPO.selectQuarterToQuarterReport);
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/reports/np4');
    })

    it('should select the last three quarters of the previous calendar year', async () => {
        helperPage.waitForVisibilityOf(reportPO.quartersDropdown, 5000);
        browser.sleep(3000)
        reportPO.quartersDropdown.click();
        helperPage.waitForVisibilityOf(reportPO.listbox, 5000);
        browser.sleep(1000)
        helperPage.click(reportsScenarios.selectQ3Report, 5000);
        helperPage.click(reportsScenarios.selectQ2Report, 5000);
        browser.sleep(1000)
        helperPage.click(reportsScenarios.selectQ1Report, 5000);
        browser.sleep(1000)

        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
    })

    it('should have a selectable pool dropdown menu', async () => {

        helperPage.click(reportPO.poolsDropdown);
        browser.sleep(1000)
        helperPage.click(reportPO.poolsDropdown);
        //potential clear field
        reportPO.poolsDropdown.sendKeys("08 - New Mexico WC Assigned Risk Pool")
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        /*
        expect(reportsScenarios.selectNM.getText()).toEqual("08 - New Mexico WC Assigned Risk Pool");
        expect(reportsScenarios.selectNational.getText()).toEqual("12 - National WC Reinsurance Pooling Mechanism");
        expect(reportsScenarios.selectMI.getText()).toEqual("15 - Michigan WC Placement Facility");
        expect(reportsScenarios.selectMA.getText()).toEqual("18 - Massachusetts WC Assigned Risk Pool");
        expect(reportsScenarios.selectTN.getText()).toEqual("19 - TN Reinsurance Mechanism");
        */
    })

    it('should run a query', async () => {
        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        reportPO.runQuery.click();
        helperPage.waitForVisibilityOf(reportPO.grossWrittenColumn, 5000);
    })

    it('should have an expandable variance section', async () => {
        helperPage.waitUntilClickabilityOf(reportPO.toggleVariance)
        browser.sleep(3000)
        helperPage.click(reportPO.toggleVariance);
        helperPage.waitForVisibilityOf(reportPO.varianceContainer)
    })

    it('should be to enter percentages and dollar amounts in older policy and recent policy year fields', async () => {
        browser.sleep(1000)
        helperPage.waitUntilClickabilityOf(reportPO.olderPolicyPercentInput)
        browser.actions().doubleClick(reportPO.olderPolicyPercentInput);
        browser.sleep(1000)
        browser.actions().sendKeys(protractor.Key.BACK_SPACE)
        //helperPage.clearElement(reportPO.getOlderPolicyDollarInputValue());
        reportPO.olderPolicyPercentInput.getAttribute('value').sendKeys("1111")
        //browser.clearElement(reportPO.olderPolicyDollarInput);
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        browser.sleep(1000)
        expect(reportPO.olderPolicyPercentInput.getAttribute('value')).toContain('.11');
        
        
        //reportPO.olderPolicyDollarInput.sendKeys(protractor.Key.CONTROL,"a");
        //browser.actions().sendKeys(protractor.Key.BACK_SPACE).perform()
        browser.sleep(1000)
        helperPage.waitUntilClickabilityOf(reportPO.olderPolicyDollarInput)
        browser.actions().doubleClick(reportPO.olderPolicyDollarInput);
        browser.sleep(1000)
        browser.actions().sendKeys(protractor.Key.BACK_SPACE)
        //helperPage.clearElement(reportPO.getOlderPolicyDollarInputValue());
        reportPO.olderPolicyDollarInput.getAttribute('value').sendKeys("1111")
        //browser.clearElement(reportPO.olderPolicyDollarInput);
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        browser.sleep(1000)
        expect(reportPO.olderPolicyDollarInput.getAttribute('value')).toContain('$1,111');

    })

    it('should be to enter year in the corresponding field', async () => {
        browser.sleep(1000)
        helperPage.waitUntilClickabilityOf(reportPO.yearInput)
        browser.actions().doubleClick(reportPO.yearInput);
        browser.sleep(1000)
        browser.actions().sendKeys(protractor.Key.BACK_SPACE)
        //helperPage.clearElement(reportPO.getOlderPolicyDollarInputValue());
        reportPO.yearInput.getAttribute('value').sendKeys("2020")
        //browser.clearElement(reportPO.olderPolicyDollarInput);
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        browser.sleep(1000)
        expect(reportPO.yearInput.getAttribute('value')).toContain('2020');

    })

    it('should be able to close the expandable variance section', async () => {
        browser.actions().mouseMove(reportPO.toggleVariance).perform();
        browser.sleep(5000)
        helperPage.click(reportPO.toggleVariance);
        browser.sleep(5000)
    })


    it('should have clickable table columns after running a valid query', async () => {

        helperPage.waitForVisibilityOf(reportPO.queryGrossWritten, 5000);
        expect(reportPO.queryGrossWritten.getText()).toContain('GROSS WRITTEN');

        const dropdownList = [reportPO.queryUncollectedPremium, reportPO.paidLosses, reportPO.outstandingLosses, reportPO.incurredLosses, reportPO.otherExpenses, reportPO.unearnedPremium, reportPO.sca, reportPO.producerFees, reportPO.grossWritten];
        browser.actions().mouseMove(reportPO.queryUncollectedPremium).perform();
        dropdownList.forEach(element => helperPage.click(element));
        console.log('Clicked' + element)

        /*
        reportPO.queryUncollectedPremium.click();
        reportPO.paidLosses.click();
        reportPO.outstandingLosses.click();
        reportPO.incurredLosses.click();
        //reportPO.scrollToLastColumn.click();
        reportPO.otherExpenses.click();
        reportPO.unearnedPremium.click();
        reportPO.sca.click();
        reportPO.producerFees.click();
        //reportPO.scrollToFirstColumn.click();
        reportPO.grossWritten.click();
        */

    })


    xit('dropdowns should populate for each field', async () => {
        const dropdownList = [reportPO.queryUncollectedPremium, reportPO.paidLosses, reportPO.outstandingLosses, reportPO.incurredLosses, reportPO.otherExpenses, reportPO.unearnedPremium, reportPO.sca, reportPO.producerFees, reportPO.grossWritten];
        dropdownList.forEach((element) => {
            helperPage.click(element)
            helperPage.click(reportPO.carrierDropdown);
            helperPage.click(reportPO.clearCarrierDropdown);
            reportPO.carrierDropdown.sendKeys("TRAVELERS INSURANCE CO")
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.actions().sendKeys(protractor.Key.TAB).perform()
            expect(reportPO.carrierDropdown.getAttribute('value')).toContain('TRAVELERS INSURANCE CO');
            
            helperPage.click(reportPO.reportCodeDropdown);
            helperPage.click(reportPO.clearReportCodeDropdown);
            reportPO.reportCodeDropdown.sendKeys("0100")
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.actions().sendKeys(protractor.Key.TAB).perform()
            expect(reportPO.reportCodeDropdown.getAttribute('value')).toContain('0100');
            
            helperPage.click(reportPO.policyYearDropdown);
            helperPage.click(reportPO.clearPolicyYearDropdown);
            reportPO.policyYearDropdown.sendKeys("2020")
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.actions().sendKeys(protractor.Key.TAB).perform()
            expect(reportPO.policyYearDropdown.getAttribute('value')).toContain('2020');
            
            helperPage.click(reportPO.stateDropdown);
            helperPage.click(reportPO.clearStateDropdown);
            reportPO.stateDropdown.sendKeys("101 - ALABAMA")
            browser.actions().sendKeys(protractor.Key.ENTER).perform()
            browser.actions().sendKeys(protractor.Key.TAB).perform()
            expect(reportPO.stateDropdown.getAttribute('value')).toContain('101 - ALABAMA');
            console.log(element + 'dropdowns appeared successfully')
        })
    })

    it('should display a table after running a valid query', async () => {

        //dropdown titles

        expect(element(by.cssContainingText('*', 'Carrier')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Report Code')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Policy Year')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'State')).isPresent()).toBeTruthy();

        //dropdowns
        //test capitalization and functionality of clear button?
        
    })

    it('should have a button to clear fields', async () => {

        //dropdown titles
        helperPage.click(reportPO.clearAll)


        //dropdowns
        //test capitalization and functionality of clear button?
        
    })
})
