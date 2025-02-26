const FlyOutPO = require('../page_objects/flyout.po');
const IndemnificationPO = require('../page_objects/indemnification.po');
const IndemnificationScenarios = require('../page_data/indemnification_scenarios.js');

var XLSX = require('xlsx')
var path = require('path');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');


describe('The Indemnification Allocation Inquiry & Mod Page', () => {
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
        browser.sleep(1000)
        helperPage.click(flyOutPO.selectAllocationInquiryMod);
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/indemnification/allocation-inquire');
    });

    it('should allow a user to enter a case number', async () => {
        browser.get('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/indemnification/allocation-inquire');
        helperPage.waitForVisibilityOf(indemnificationPO.caseNumberField)
        helperPage.click(indemnificationPO.caseNumberField);
        indemnificationPO.caseNumberField.sendKeys(indemnificationScenarios.caseNumber)
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(indemnificationPO.caseNumberField.getAttribute('value')).toContain(indemnificationScenarios.caseNumber);

    })

    it('should allow a user to enter a case name', async () => {
        helperPage.click(indemnificationPO.caseNameField);
        indemnificationPO.caseNameField.sendKeys(indemnificationScenarios.caseName)
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(indemnificationPO.caseNameField.getAttribute('value')).toContain(indemnificationScenarios.caseName);

    })

    it('should allow a user to enter pool', async () => {
        helperPage.click(indemnificationPO.poolField)
        //helperPage.click(indemnificationPO.clearPool)
        //indemnificationPO.poolField.sendKeys(indemnificationScenarios.inquiryPoolCode)
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        //expect(indemnificationPO.poolField.getAttribute('value')).toContain(indemnificationScenarios.caseName);

    })

    it('should display a table after a valid inquiry is submitted', async () => {
        helperPage.click(indemnificationPO.InquireModInquireButton);
        browser.sleep(1000)
        expect(element(by.cssContainingText('*', indemnificationScenarios.caseNumber)).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', indemnificationScenarios.caseName)).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', indemnificationScenarios.poolCode)).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', indemnificationScenarios.checkCreationDate)).isPresent()).toBeTruthy();
    })

    it('should clear an inquiry', async () => {
        helperPage.click(indemnificationPO.clearButton);
        expect(indemnificationPO.caseNumberField.getText()).not.toEqual(indemnificationScenarios.caseNumber);
    })

    it('should make an inquiry with case number only', async () => {
        browser.get('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/indemnification/allocation-inquire');
        helperPage.waitForVisibilityOf(indemnificationPO.caseNumberField)
        helperPage.click(indemnificationPO.caseNumberField);
        indemnificationPO.caseNumberField.sendKeys(indemnificationScenarios.caseNumber)
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        helperPage.click(indemnificationPO.inquireButton);
        //helperPage.waitForVisibilityOf(indemnificationPO.inquiryGrid)
        browser.sleep(1000)
        expect(element(by.cssContainingText('*', indemnificationScenarios.caseNumber)).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', indemnificationScenarios.caseName)).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', indemnificationScenarios.poolCode)).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', indemnificationScenarios.checkCreationDate)).isPresent()).toBeTruthy();

        /*
        expect(indemnificationPO.inquiryGrid.getText()).toContain(indemnificationScenarios.caseNumber);
        expect(indemnificationPO.inquiryGrid.getText()).toContain(indemnificationScenarios.caseName);
        expect(indemnificationPO.inquiryGrid.getText()).toContain(indemnificationScenarios.poolCode);
        expect(indemnificationPO.inquiryGrid.getText()).toContain(indemnificationScenarios.checkCreationDate);
        */
    })

    it('should open a page with information for the case number when it is clicked', async () => {
        helperPage.click(indemnificationPO.firstCaseNumber);
        helperPage.waitForVisibilityOf(indemnificationPO.allocationGrid)

        //headers
        expect(element(by.cssContainingText('*', indemnificationScenarios.caseNumber)).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', indemnificationScenarios.caseName)).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', indemnificationScenarios.poolCode)).isPresent()).toBeTruthy();

        //table columns
        expect(indemnificationPO.allocationGrid.getText()).toContain("Policy Year");
        expect(indemnificationPO.allocationGrid.getText()).toContain("State");
        expect(indemnificationPO.allocationGrid.getText()).toContain("Allocation");

        //save and distribute buttons
        browser.sleep(1000)
        expect(indemnificationPO.saveButton.isPresent()).toBe(true);
        expect(indemnificationPO.btnDistribute.isPresent()).toBe(true);
    })

    it('should have a button to add allocation', async () => {
        expect(indemnificationPO.addAllocation.isPresent()).toBe(true);
    })

    it('should have a button to return to inquiry page', async () => {
        helperPage.click(indemnificationPO.backToInquiry);
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/indemnification/allocation-inquire');
        browser.sleep(5000)
    })

    /*
    it('should display 10 decimal digits in allocation field', async () => {
        helperPage.click(indemnificationPO.firstCaseNumber);
    })
    */
})