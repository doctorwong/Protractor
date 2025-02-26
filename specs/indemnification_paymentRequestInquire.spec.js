const FlyOutPO = require('../page_objects/flyout.po');
const IndemnificationCheckRequestPO = require('../page_objects/indemnification_check_request.po');
const IndemnificationCheckRequestScenarios = require('../page_data/indemnification_check_request_scenarios.js');

var XLSX = require('xlsx')
var path = require('path');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');
const { BrowserStack } = require('protractor/built/driverProviders');


describe('The Payment Request Inquire Page', () => {
    var flyOutPO
    var indemnificationCheckRequestPO
    var indemnificationCheckRequestScenarios

    var helperPage

    beforeEach(async () => {
        flyOutPO = new FlyOutPO();
        indemnificationCheckRequestPO = new IndemnificationCheckRequestPO();
        indemnificationCheckRequestScenarios = new IndemnificationCheckRequestScenarios();
        helperPage = new HelperPage();
    });

    it('should be accessible from the flyout menu', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
        browser.get(url);
        browser.sleep(1000)

        helperPage.click(flyOutPO.flyoutButton);
        helperPage.waitUntilClickabilityOf(flyOutPO.selectIndemnification);
        helperPage.click(flyOutPO.selectIndemnification);

        if (browser.params.ENV === "") {
            helperPage.click(flyOutPO.selectCheckRequestInquireProduction);
          } 
          else {
            helperPage.click(flyOutPO.selectCheckRequestInquire);
          }
          
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/indemnification/check-request');
    });

    it('should allow a user to enter a case number', async () => {
        //browser.get('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/indemnification/check-request');
        helperPage.waitForVisibilityOf(indemnificationCheckRequestPO.caseNumberField)
        helperPage.click(indemnificationCheckRequestPO.caseNumberField);
        indemnificationCheckRequestPO.caseNumberField.sendKeys(indemnificationCheckRequestScenarios.caseNumber)
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(indemnificationCheckRequestPO.caseNumberField.getAttribute('value')).toContain(indemnificationCheckRequestScenarios.caseNumber);

    })

    it('should allow a user to enter a case name', async () => {
        helperPage.click(indemnificationCheckRequestPO.caseNameField);
        indemnificationCheckRequestPO.caseNameField.sendKeys(indemnificationCheckRequestScenarios.caseName)
        browser.actions().sendKeys(protractor.Key.TAB).perform()
    })

    it('should allow a user to enter an oracle supplier', async () => {
        helperPage.click(indemnificationCheckRequestPO.oracleSupplierField);
        helperPage.waitUntilClickabilityOf(indemnificationCheckRequestPO.clearOracleSupplier)
        helperPage.click(indemnificationCheckRequestPO.clearOracleSupplier);
        indemnificationCheckRequestPO.oracleSupplierField.sendKeys(indemnificationCheckRequestScenarios.oracleSupplier)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
    })

    it('should allow a user to enter pool code', async () => {
        helperPage.click(indemnificationCheckRequestPO.poolField)
        helperPage.click(indemnificationCheckRequestPO.clearPool);
        indemnificationCheckRequestPO.poolField.sendKeys(indemnificationCheckRequestScenarios.poolCode)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
    })

    it('should allow a user to enter state code', async () => {
        helperPage.click(indemnificationCheckRequestPO.clearState);
        helperPage.click(indemnificationCheckRequestPO.stateField)
        helperPage.click(indemnificationCheckRequestPO.clearState);
        indemnificationCheckRequestPO.stateField.sendKeys(indemnificationCheckRequestScenarios.stateCode)
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
    })

    it('should allow a user to enter policy year', async () => {
        browser.sleep(1000)
        helperPage.click(indemnificationCheckRequestPO.policyYearField)
        browser.sleep(1000)

        helperPage.click(indemnificationCheckRequestPO.clearPolicyYear)
        helperPage.click(indemnificationCheckRequestPO.clearPolicyYear)
        browser.sleep(1000)

        indemnificationCheckRequestPO.policyYearField.sendKeys(indemnificationCheckRequestScenarios.policyYear)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(indemnificationCheckRequestPO.policyYearField.getAttribute('value')).toContain(indemnificationCheckRequestScenarios.policyYear);

    })

    it('should allow date entry', async () => {
        helperPage.click(indemnificationCheckRequestPO.receivedAfterDate)
        indemnificationCheckRequestPO.receivedAfterDate.sendKeys(indemnificationCheckRequestScenarios.receivedAfterDate)
        browser.actions().sendKeys(protractor.Key.TAB).perform()

        helperPage.click(indemnificationCheckRequestPO.receivedBeforeDate)
        indemnificationCheckRequestPO.receivedBeforeDate.sendKeys(indemnificationCheckRequestScenarios.receivedBeforeDate)
        browser.actions().sendKeys(protractor.Key.TAB).perform()

        helperPage.click(indemnificationCheckRequestPO.lastUpdatedAfterDate)
        indemnificationCheckRequestPO.lastUpdatedAfterDate.sendKeys(indemnificationCheckRequestScenarios.lastUpdatedAfterDate)
        browser.actions().sendKeys(protractor.Key.TAB).perform()

        helperPage.click(indemnificationCheckRequestPO.lastUpdatedBeforeDate)
        indemnificationCheckRequestPO.lastUpdatedBeforeDate.sendKeys(indemnificationCheckRequestScenarios.lastUpdatedBeforeDate)
        browser.actions().sendKeys(protractor.Key.TAB).perform()
    })

    it('should display table with results when an inquiry with valid data is submitted', async () => {
        helperPage.click(indemnificationCheckRequestPO.inquireButton);

        helperPage.waitForVisibilityOf(indemnificationCheckRequestPO.checkRequestGrid)
        browser.sleep(1000)

        //columns
        expect(indemnificationCheckRequestPO.checkRequestGrid.getText()).toContain("Case Number");
        expect(indemnificationCheckRequestPO.checkRequestGrid.getText()).toContain("Case Name");
        expect(indemnificationCheckRequestPO.checkRequestGrid.getText()).toContain("Pool Code");
        expect(indemnificationCheckRequestPO.checkRequestGrid.getText()).toContain("Date Received");
        expect(indemnificationCheckRequestPO.checkRequestGrid.getText()).toContain("Oracle Supplier");
        expect(indemnificationCheckRequestPO.checkRequestGrid.getText()).toContain("Supplier Contact");
        expect(indemnificationCheckRequestPO.checkRequestGrid.getText()).toContain("Amount");
        //expect(indemnificationCheckRequestPO.checkRequestGrid.getText()).toContain("Quarter End Date");

        /*
        //data (skipped)
        expect(indemnificationCheckRequestPO.checkRequestGrid.getText()).toContain(indemnificationCheckRequestScenarios.caseNumber);
        expect(indemnificationCheckRequestPO.checkRequestGrid.getText()).toContain(indemnificationCheckRequestScenarios.caseName);
        expect(indemnificationCheckRequestPO.checkRequestGrid.getText()).toContain(indemnificationCheckRequestScenarios.poolCode);
        expect(indemnificationCheckRequestPO.checkRequestGrid.getText()).toContain(indemnificationCheckRequestScenarios.oracleSupplier);
        expect(indemnificationCheckRequestPO.checkRequestGrid.getText()).toContain(indemnificationCheckRequestScenarios.supplierContact);
        expect(indemnificationCheckRequestPO.checkRequestGrid.getText()).toContain(indemnificationCheckRequestScenarios.amount);
        expect(indemnificationCheckRequestPO.checkRequestGrid.getText()).toContain(indemnificationCheckRequestScenarios.quarterEndDate);
        */
    })

    it('should download excel ', async () => {
        browser.sleep(3000)
        helperPage.click(indemnificationCheckRequestPO.downloadExcel);
        //valiate downloaded file?
        //expect table to disappear
    })

    it('should clear an inquiry', async () => {
        helperPage.click(indemnificationCheckRequestPO.clearButton);
        expect(indemnificationCheckRequestPO.caseNumberField.getText()).not.toEqual(indemnificationCheckRequestScenarios.caseNumber);
        //expect table to disappear
    })

    it('should make an inquiry with case number only', async () => {
        browser.get('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/indemnification/check-request');
        helperPage.click(indemnificationCheckRequestPO.caseNumberField);
        indemnificationCheckRequestPO.caseNumberField.sendKeys(indemnificationCheckRequestScenarios.caseNumber)
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        helperPage.click(indemnificationCheckRequestPO.inquireButton);

        helperPage.waitForVisibilityOf(indemnificationCheckRequestPO.checkRequestGrid)
        browser.sleep(1000)
        expect(indemnificationCheckRequestPO.checkRequestGrid.getText()).toContain(indemnificationCheckRequestScenarios.caseNumber);
    })
})
