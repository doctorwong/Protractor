var FlyOutPO = require('../page_objects/flyout.po.js');
const ScPaymentApprovalScenarios = require('../page_data/sca_payment_approval_scenarios.js');
const ScPaymentApprovalPO = require('../page_objects/sc_payment_approval.po.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page.ts');
var XLSX = require('xlsx')

describe('The Manager - SC Payment Approval Page', () => {
    var flyOutPO
    var helperPage
    var scPaymentApprovalPO
    var scPaymentApprovalScenarios

    beforeEach(async () => {
        flyOutPO = new FlyOutPO();
        helperPage = new HelperPage();
        scPaymentApprovalPO = new ScPaymentApprovalPO();
        scPaymentApprovalScenarios = new ScPaymentApprovalScenarios();
    });

    it('should open when clicked', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
        browser.get(url);
        browser.sleep(5000)
        helperPage.click(flyOutPO.flyoutButton);
        browser.sleep(3000)
        helperPage.waitUntilClickabilityOf(flyOutPO.selectManager);
        browser.actions().mouseMove(flyOutPO.selectManager).perform();
        helperPage.waitForVisibilityOf(flyOutPO.selectSCPaymentApproval, 5000);
        helperPage.click(flyOutPO.selectSCPaymentApproval, 5000);
    });

    it('should have a quarter end date dropdown menu', async () => {
        browser.sleep(3000)
        helperPage.waitForVisibilityOf(scPaymentApprovalPO.quarterEndDropdown)
        helperPage.click(scPaymentApprovalPO.quarterEndDropdown);
        scPaymentApprovalPO.quarterEndDropdown.sendKeys(scPaymentApprovalScenarios.quarter)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(scPaymentApprovalPO.quarterEndDropdown.getAttribute('value')).toContain(scPaymentApprovalScenarios.quarter);

    })

    it('should have a Group dropdown menu', async () => {
        helperPage.waitForVisibilityOf(scPaymentApprovalPO.groupDropdown)
        helperPage.click(scPaymentApprovalPO.clearGroup);
        helperPage.click(scPaymentApprovalPO.groupDropdown)
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
        expect(scPaymentApprovalPO.groupDropdown.getAttribute('value')).toContain('10804 - TRAVELERS INSURANCE CO');

    })

    it('should have a Pool dropdown menu', async () => {
        helperPage.waitForVisibilityOf(scPaymentApprovalPO.poolDropdown)
        //helperPage.click(scPaymentApprovalPO.clearPool);
        helperPage.click(scPaymentApprovalPO.poolDropdown)
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(scPaymentApprovalPO.poolDropdown.getAttribute('value')).toContain(scPaymentApprovalScenarios.pool);

    })

    it('should have a status dropdown menu', async () => {
        helperPage.waitForVisibilityOf(scPaymentApprovalPO.statusDropdown)
        //helperPage.click(scPaymentApprovalPO.clearStatus);
        helperPage.click(scPaymentApprovalPO.statusDropdown)
        browser.sleep(1000)
        //scPaymentApprovalPO.statusDropdown.sendKeys(scPaymentApprovalScenarios.status)
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.sleep(1000)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(scPaymentApprovalPO.statusDropdown.getAttribute('value')).toContain('All');

    })

    it('should have an inquire button', async () => {
        helperPage.click(scPaymentApprovalPO.inquireButton);
    })

    /*
    it('should be able to select a checkbox to approve, reject, review, and add comment', async () => {
        browser.sleep(5000)
        helperPage.click(scPaymentApprovalPO.selectFirstCheckbox);
        helperPage.waitUntilClickabilityOf(scPaymentApprovalPO.rejectButton);
        helperPage.waitUntilClickabilityOf(scPaymentApprovalPO.approveButton);
        //helperPage.waitUntilClickabilityOf(ScPaymentApprovalPO.reviewBtn);
    })

    
    it('should be able to select all checkboxes to approve, reject, review, and add comment', async () => {
        browser.sleep(5000)
        helperPage.click(scPaymentApprovalPO.selectAllCheckbox);
        helperPage.waitUntilClickabilityOf(scPaymentApprovalPO.rejectButton);
        helperPage.waitUntilClickabilityOf(scPaymentApprovalPO.approveButton);
        //helperPage.waitUntilClickabilityOf(ScPaymentApprovalPO.reviewBtn);
    })
    */

    it('should have a button to download Excel', async () => {
        browser.sleep(1000)
        helperPage.waitUntilClickabilityOf(scPaymentApprovalPO.excelDownload)
        browser.sleep(5000)

        helperPage.click(scPaymentApprovalPO.excelDownload);
        browser.params.vOutputsFileName = ('PaymentApprovals.xlsx');

        helperPage.waitforfiledownload(browser.params.DL_DIR + browser.params.vOutputsFileName);
    })

    xit('open a page to review a submission', async () => { 
        browser.sleep(3000)
        helperPage.waitUntilClickabilityOf(scPaymentApprovalPO.selectRow)
        helperPage.click(scPaymentApprovalPO.selectRow);
        helperPage.waitUntilClickabilityOf(scPaymentApprovalPO.rejectButton);
        helperPage.waitUntilClickabilityOf(scPaymentApprovalPO.approveButton);
        //helperPage.waitUntilClickabilityOf(ScPaymentApprovalPO.reviewBtn);
    })

    xit('should a table with corresponding test data', async () => {
        helperPage.waitForVisibilityOf(paymentsPO.dataTable)
        expect(paymentsPO.dataTable.getText()).toContain(scaPaymentsScenarios.groupCodeData);
        expect(paymentsPO.dataTable.getText()).toContain(scaPaymentsScenarios.groupNameData);
        expect(paymentsPO.dataTable.getText()).toContain(scaPaymentsScenarios.poolCodeData);
        expect(paymentsPO.dataTable.getText()).toContain(scaPaymentsScenarios.principalAmountData);
        expect(paymentsPO.dataTable.getText()).toContain(scaPaymentsScenarios.interestAmountData);
        expect(paymentsPO.dataTable.getText()).toContain(scaPaymentsScenarios.stateCode);
        expect(paymentsPO.dataTable.getText()).toContain(scaPaymentsScenarios.submittedDateData);
        expect(paymentsPO.dataTable.getText()).toContain(scaPaymentsScenarios.submittedByData);
        expect(paymentsPO.dataTable.getText()).toContain(scaPaymentsScenarios.approvedDataData);
        expect(paymentsPO.dataTable.getText()).toContain(scaPaymentsScenarios.statusData);
    })



    xit('should have a comments field', async () => {
        browser.sleep(1000)
        helperPage.waitUntilClickabilityOf(scPaymentApprovalPO.commentsField)
        helperPage.click(scPaymentApprovalPO.commentsField);
        scPaymentApprovalPO.commentsField.sendKeys("Test Comment")
    })


    //consider adding
    //validate downloaded excel file

    xit('should have a back button', async () => {
        helperPage.click(scPaymentApprovalPO.backButton);
    })
    it('should have a clear button', async () => {
        helperPage.click(scPaymentApprovalPO.clearButton);
    })

})