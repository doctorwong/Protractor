var FlyOutPO = require('../page_objects/flyout.po.js');
const ScaPaymentsScenarios = require('../page_data/sca_payments_scenarios.js');
const PaymentsPO = require('../page_objects/payments.po.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');
var XLSX = require('xlsx')

//needs direct link in QA
describe('The SCA Payments Page', () => {
    var flyOutPO
    var helperPage
    var paymentsPO
    var scaPaymentsScenarios

    beforeEach(async () => {
        flyOutPO = new FlyOutPO();
        helperPage = new HelperPage();
        paymentsPO = new PaymentsPO();
        scaPaymentsScenarios = new ScaPaymentsScenarios();
    });

    it('should open when clicked', async () => {
        if (browser.params.ENV === 'dev') {
            let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
            browser.get(url);
            browser.sleep(1000)
            helperPage.click(flyOutPO.flyoutButton);
            helperPage.waitUntilClickabilityOf(flyOutPO.selectServicingCarrier);
            browser.sleep(1000)
            helperPage.click(flyOutPO.selectServicingCarrier, 5000);
            browser.sleep(1000)
            helperPage.click(flyOutPO.selectPayments, 5000);
        }
        else {
            let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/servicing-carrier/payment';
            browser.get(url);
        }
    });

    it('should have a quarter end date dropdown menu', async () => {
        browser.sleep(5000)
        helperPage.click(paymentsPO.quarterEndDropdown);
        paymentsPO.quarterEndDropdown.sendKeys(scaPaymentsScenarios.quarter)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.sleep(5000)
    })

    it('should have an inquire button', async () => {
        helperPage.waitUntilClickabilityOf(paymentsPO.inquireButton);
        helperPage.click(paymentsPO.inquireButton);
        helperPage.waitForVisibilityOf(paymentsPO.dataTable)
    })


    /*
    it('should display a table for the selected quarter table with corresponding test data', async () => {
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
    */

    it('should have clickable records in the data table', async () => {
        browser.sleep(3000)
        helperPage.click(element(by.xpath("//div[@data-testid='payment-grid']/div/div[1]/table/tbody/tr")))
        helperPage.waitForVisibilityOf($('.app-content'))

        /*
        expect($('.app-content').getText()).toContain(scaPaymentsScenarios.quarter);
        expect($('.app-content').getText()).toContain(scaPaymentsScenarios.groupCodeData);
        expect($('.app-content').getText()).toContain(scaPaymentsScenarios.poolCodeData);
        expect($('.app-content').getText()).toContain(scaPaymentsScenarios.status);
        expect($('.app-content').getText()).toContain(scaPaymentsScenarios.principalAmountData);
        expect($('.app-content').getText()).toContain(scaPaymentsScenarios.interestAmountData);
        expect($('.app-content').getText()).toContain(scaPaymentsScenarios.approvedDataData);
        expect($('.app-content').getText()).toContain(scaPaymentsScenarios.submittedByData);
        expect($('.app-content').getText()).toContain(scaPaymentsScenarios.submittedDateData);
        */

        helperPage.waitForVisibilityOf(paymentsPO.returnButton)
        helperPage.click(paymentsPO.returnButton)

        
    })

    it('should have an interest rates tab', async () => {
        browser.sleep(3000)
        helperPage.click(paymentsPO.interestRatesTab);
        helperPage.waitForVisibilityOf(paymentsPO.interestRateTableBody)
        expect(paymentsPO.interestRateTableHead.getText()).toContain('Quarter');
        expect(paymentsPO.interestRateTableHead.getText()).toContain('Begin Date');
        expect(paymentsPO.interestRateTableHead.getText()).toContain('Interest Rate');

    })

    xit('should be able to modify begin date and interest rate ', async () => {
        helperPage.waitForVisibilityOf(paymentsPO.beginDateInput)
        helperPage.click(element(by.xpath("//button[@class='p-button p-component p-datepicker-trigger p-button-icon-only']")))
        helperPage.waitForVisibilityOf(scaPaymentsScenarios.Jan31st)
        helperPage.click(scaPaymentsScenarios.Jan31st);
        helperPage.click(paymentsPO.interestRateInput);
        paymentsPO.interestRateInput.clear().sendKeys(scaPaymentsScenarios.interestRate)
        browser.actions().sendKeys(protractor.Key.TAB).perform();
        browser.sleep(3000)
        helperPage.click(paymentsPO.saveButton);
    })

    it('should have a link to payments tab', async () => {
        browser.sleep(3000)
        helperPage.click(paymentsPO.paymentsTab);
        browser.sleep(3000)
        helperPage.waitForVisibilityOf(paymentsPO.dataTable)
    });

    it('should have a button to download Excel', async () => {
        browser.sleep(1000)
        helperPage.waitUntilClickabilityOf(paymentsPO.excelDownload)
        helperPage.click(paymentsPO.excelDownload);
        browser.params.vOutputsFileName = ('Payments.xlsx');

        helperPage.waitforfiledownload(browser.params.DL_DIR + browser.params.vOutputsFileName);
    })

    it('should validate the downloaded excel download file', async () => {
        browser.params.xlData = '';
        var workbook = XLSX.readFile(browser.params.DL_DIR + browser.params.vOutputsFileName)
        var sheet_name_list = workbook.SheetNames;
        browser.params.xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list], { header: "A" });
        var vSheetName = ('sca-rates')
        //console.log('    Contents of ' + browser.params.vOutputsFileName + "  worksheet= " + vSheetName + '; ');
        //console.log(browser.params.xlData);
        expect(browser.params.xlData[0].A).toEqual('Servicing Carrier Payments');

        //inputs
        expect(browser.params.xlData[1].A).toContain('Quarter');
        //expect(browser.params.xlData[1].C).toContain(scaPaymentsScenarios.quarterEndData);
        expect(browser.params.xlData[1].D).toContain('Group');

        //outputs
        /*
        expect(browser.params.xlData[4].A).toContain(scaPaymentsScenarios.groupCodeData);
        expect(browser.params.xlData[4].B).toContain(scaPaymentsScenarios.groupNameData);
        expect(browser.params.xlData[4].F).toContain(scaPaymentsScenarios.poolCodeData);
        expect(browser.params.xlData[4].G).toEqual(scaPaymentsScenarios.principalAmountExcel);
        expect(browser.params.xlData[4].H).toEqual(scaPaymentsScenarios.interestAmountData);
        expect(browser.params.xlData[4].I).toEqual(scaPaymentsScenarios.remainingPrincipalExcel);
        expect(browser.params.xlData[4].K).toContain(scaPaymentsScenarios.submittedByData);
        */
    })

    it('should have a clear button', async () => {
        helperPage.waitUntilClickabilityOf(paymentsPO.clearButton);
        helperPage.click(paymentsPO.clearButton);
    })


    it('should have a Group dropdown menu', async () => {
        helperPage.click(paymentsPO.groupDropdown);
        paymentsPO.groupDropdown.sendKeys(scaPaymentsScenarios.group)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    })

    it('should have a Pool dropdown menu', async () => {
        helperPage.click(paymentsPO.poolDropdown);
        paymentsPO.poolDropdown.sendKeys(scaPaymentsScenarios.pool)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
    })

    it('should have a status dropdown menu', async () => {
        helperPage.click(paymentsPO.statusDropdown);
        paymentsPO.statusDropdown.sendKeys(scaPaymentsScenarios.status)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.sleep(3000)
        helperPage.click(paymentsPO.inquireButton);
    })

    xit('should go to payment details when a payment is clicked ', async () => {
        helperPage.click(paymentsPO.inquireButton);
        browser.sleep(1000)
        helperPage.click(paymentsPO.clearButton);
        browser.sleep(1000)
        //helperPage.click(paymentsPO.groupDropdown);
        //paymentsPO.groupDropdown.sendKeys("39071 - TECHNOLOGY INSURANCE CO")

        
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        helperPage.click(paymentsPO.inquireButton);

        //technology row
        browser.sleep(5000)
        
        helperPage.click(element(by.xpath("//td[contains(text(), 'Pending')]"))),
            //(by.xpath("//div[@data-testid='payment-grid']/div/div[1]/table/tbody/tr[1]/td[11]"))),


        browser.sleep(1000)
        expect(element(by.cssContainingText('*', 'NP4 Detail')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Payments')).isPresent()).toBeTruthy();
    })

    xit('should return to payment screen when clicked ', async () => {

        var scrollIntoView = function (element) {
            return browser.executeScript(function (element) {
                element.scrollIntoView();
            }, element.getWebElement());
        };
        browser.sleep(1000)
        scrollIntoView(paymentsPO.returnButton)



        browser.sleep(1000)
        helperPage.click(paymentsPO.returnButton)

        expect(browser.getCurrentUrl()).toContain("rpf/#/servicing-carrier/payment");
    })
})