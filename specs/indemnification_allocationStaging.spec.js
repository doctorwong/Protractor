const FlyOutPO = require('../page_objects/flyout.po');
const IndemnificationPO = require('../page_objects/indemnification.po.js');
const IndemnificationScenarios = require('../page_data/indemnification_scenarios.js');
var XLSX = require('xlsx')
var path = require('path');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');
const { BrowserStack } = require('protractor/built/driverProviders');


describe('The Indemnification Allocation Staging Page', () => {
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
        browser.sleep(3000)
        helperPage.click(flyOutPO.selectAllocationStaging);
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/indemnification/adjustment-inquire');
    });

    it('should make a quarter field selection', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/indemnification/adjustment-inquire';
        browser.get(url);
        helperPage.click(indemnificationPO.allocationQuarter)
        helperPage.click(indemnificationPO.allocationQuarterClear)


        indemnificationPO.allocationQuarter.sendKeys(indemnificationScenarios.quarter)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(indemnificationPO.allocationQuarter.getAttribute('value')).toContain(indemnificationScenarios.quarter);

    });

    it('should make a pool code field selection', async () => {
        browser.sleep(1000)
        helperPage.click(indemnificationPO.allocationPoolCode)
        //indemnificationPO.allocationPoolCode.sendKeys(indemnificationScenarios.poolNational)
        //browser.sleep(3000)
        browser.sleep(1000)

        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.sleep(1000)

        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()

    });

    it('should download excel ', async () => {
        browser.sleep(3000)
        helperPage.waitUntilClickabilityOf(indemnificationPO.allocationExcelDownload);

        helperPage.click(indemnificationPO.allocationExcelDownload);

        //valiate downloaded file?
        //expect table to disappear
    })

    
    xit('should validate the downloaded excel file', async () => {
        browser.params.vOutputsFileName = ('AggregateAllocation.xlsx');
        helperPage.waitforfiledownload(browser.params.DL_DIR + browser.params.vOutputsFileName);
        browser.params.xlData = '';
        var workbook = XLSX.readFile(browser.params.DL_DIR + browser.params.vOutputsFileName)
        var sheet_name_list = workbook.SheetNames;
        browser.params.xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list], { header: "A" });
        var vSheetName = ('AggregateAllocation')
        console.log('    Contents of ' + browser.params.vOutputsFileName + "  worksheet= " + vSheetName + '; ');
        console.log(browser.params.xlData);

        //Rows
        expect(browser.params.xlData[0].A).toEqual('SCA Carrier Rate Report');
        expect(browser.params.xlData[1].A).toEqual('Carrier Code:');
        expect(browser.params.xlData[2].A).toEqual('Pool Code:');
        expect(browser.params.xlData[3].A).toEqual('Report Code:');
        expect(browser.params.xlData[4].A).toEqual('State:');
        expect(browser.params.xlData[5].A).toEqual('Effective Year:');

        //Columns
        expect(browser.params.xlData[6].A).toContain('Carrier\nCode');
        expect(browser.params.xlData[6].B).toContain('Carrier \nName');
        expect(browser.params.xlData[6].C).toContain('Pool \nCode');
        expect(browser.params.xlData[6].D).toContain('State');
        expect(browser.params.xlData[6].E).toContain('Report \nCode');
        expect(browser.params.xlData[6].F).toContain('Effective \nYear');
        expect(browser.params.xlData[6].G).toContain('Rate');
        expect(browser.params.xlData[6].H).toContain('Flat');
        expect(browser.params.xlData[6].I).toContain('Uncollected');
        expect(browser.params.xlData[6].J).toContain('Comments');
    })


    xit('should click a row to open details', async () => {
        helperPage.waitUntilClickabilityOf(indemnificationPO.selectFirstRow);
        browser.sleep(2000)
        helperPage.click(indemnificationPO.selectFirstRow)
    });



    /*
    it('should add an allocation', async () => {
        helperPage.click(indemnificationPO.evenlyDistributeAllocation)
    });

    it('should input a policy year, state, and allocation', async () => {
        helperPage.click(indemnificationPO.newPolicyYear)
        indemnificationPO.newPolicyYear.sendKeys(indemnificationScenarios.newPolicyYear)
        browser.actions().sendKeys(protractor.Key.TAB).perform()

        helperPage.click(indemnificationPO.newPolicyYear)
        indemnificationPO.newPolicyYear.sendKeys(indemnificationScenarios.newPolicyYear)
        browser.actions().sendKeys(protractor.Key.TAB).perform()

        helperPage.click(indemnificationPO.newState)
        indemnificationPO.newState.sendKeys(indemnificationScenarios.newState)
        browser.actions().sendKeys(protractor.Key.TAB).perform()

        helperPage.click(indemnificationPO.newAllocation)
        indemnificationPO.newAllocation.sendKeys(indemnificationScenarios.newAllocation)
        browser.actions().sendKeys(protractor.Key.TAB).perform()
    });



    it('should save', async () => {
        helperPage.click(indemnificationPO.saveButton)
    });
    */

    xit('should return to previous page', async () => {
        helperPage.click(indemnificationPO.backButton)
    });

    it('should clear an inquiry', async () => {
        browser.sleep(3000)
        helperPage.click(indemnificationPO.allocationClear);
        //expect(indemnificationPO.caseNumberField.getText()).not.toEqual(indemnificationCheckRequestScenarios.caseNumber);
        //expect table to disappear
    })

})
