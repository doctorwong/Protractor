var FlyOutPO = require('../page_objects/flyout.po.js');
const ScaRatesPO = require('../page_objects/sca_rates.po.js');
const ScaRatesScenarios = require('../page_data/sca_rates_scenarios.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page.ts');
var XLSX = require('xlsx');
const { BrowserStack } = require('protractor/built/driverProviders');

//needs direct link in QA
describe('Sca Rates Page', () => {
    var flyOutPO
    var helperPage
    var scaRatesPO
    var scaRatesScenarios

    beforeEach(async () => {
        flyOutPO = new FlyOutPO();
        helperPage = new HelperPage();
        scaRatesPO = new ScaRatesPO();
        scaRatesScenarios = new ScaRatesScenarios();
    });

    it('should expand when clicked', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
        browser.get(url);
        browser.sleep(1000)
        helperPage.click(flyOutPO.flyoutButton);
        helperPage.waitUntilClickabilityOf(flyOutPO.selectServicingCarrier);
        browser.sleep(1000)
        helperPage.click(flyOutPO.selectServicingCarrier, 5000);
        browser.sleep(1000)
        helperPage.click(flyOutPO.selectScaRates, 5000);
    })

    it('should have a selectable carrier dropdown menu', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/servicing-carrier/sca-rates';
        browser.get(url);
        browser.sleep(3000)
        helperPage.waitForVisibilityOf(scaRatesPO.carrierDropdown)
        browser.sleep(3000)

        helperPage.click(scaRatesPO.carrierDropdown);
        
        /*
        browser.sleep(3000)

        helperPage.click(scaRatesPO.clearCarrier);
        browser.sleep(3000)

        scaRatesPO.carrierDropdown.sendKeys('10804')
        */
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(scaRatesPO.carrierDropdown.getAttribute('value')).toContain('10138 - BITCO GENERAL INSURANCE CORPORATION');

        
    })

    it('should have a selectable pool code dropdown menu', async () => {
        helperPage.waitUntilClickabilityOf(scaRatesPO.poolCodeDropdown)
        browser.sleep(5000)
        helperPage.click(scaRatesPO.poolCodeDropdown);
        /*
        helperPage.click(scaRatesPO.clearPoolCodeDropdown);
        helperPage.click(scaRatesPO.poolCodeDropdown);
        scaRatesPO.poolCodeDropdown.sendKeys(scaRatesScenarios.pool);
        */
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(scaRatesPO.poolCodeDropdown.getAttribute('value')).toContain(scaRatesScenarios.pool);


    })

    it('should have a selectable state dropdown menu', async () => {
        helperPage.waitUntilClickabilityOf(scaRatesPO.stateDropdown)
        browser.sleep(5000)
        helperPage.click(scaRatesPO.stateDropdown);
        /*
        scaRatesPO.stateDropdown.sendKeys(scaRatesScenarios.state)
        browser.sleep(3000)
        helperPage.click(scaRatesPO.clearState);
        helperPage.click(scaRatesPO.stateDropdown);
        scaRatesPO.stateDropdown.sendKeys(scaRatesScenarios.state)
        */

        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()

        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(scaRatesPO.stateDropdown.getAttribute('value')).toContain(scaRatesScenarios.state);

    })

    it('should have a selectable report code dropdown menu', async () => {
        helperPage.waitUntilClickabilityOf(scaRatesPO.reportCodeDropdown)
        browser.sleep(5000)
        helperPage.click(scaRatesPO.reportCodeDropdown);
        /*
        helperPage.click(scaRatesPO.clearReportCode);

        scaRatesPO.carrierDropdown.sendKeys(scaRatesScenarios.reportCode);
        */
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.sleep(1000)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(scaRatesPO.reportCodeDropdown.getAttribute('value')).toContain(scaRatesScenarios.reportCode);



    })

    it('should have a selectable effective year dropdown menu', async () => {
        helperPage.waitUntilClickabilityOf(scaRatesPO.effectiveYearDropdown)
        browser.sleep(5000)
        //helperPage.click(scaRatesPO.clearYear);
        helperPage.click(scaRatesPO.effectiveYearDropdown);
        //scaRatesPO.effectiveYearDropdown.sendKeys(scaRatesScenarios.year)
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        helperPage.waitForVisibilityOf(scaRatesPO.ratesGrid)
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(scaRatesPO.effectiveYearDropdown.getAttribute('value')).toContain(scaRatesScenarios.year);

    })

    it('should have columns for rate data', async () => {
        /*
        expect(element(by.xpath('*', 'Carrier')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Pool Code')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'State')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Report Code')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Effective Year')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Rate')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Flat Fee')).isPresent()).toBeTruthy();

        expect(element(by.cssContainingText('*', 'Uncollected Premium')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Comments')).isPresent()).toBeTruthy();
        */
    })

    it('should list the correct rate for the query', async () => {

/*
        helperPage.waitForVisibilityOf(scaRatesPO.carrierColumn)
        expect(scaRatesPO.carrierColumn.getText()).toContain(scaRatesScenarios.carrierCode);
        expect(scaRatesPO.carrierColumn.getText()).toContain(scaRatesScenarios.carrierName);
        expect(scaRatesPO.poolColumn.getText()).toContain(scaRatesScenarios.poolData);
        expect(scaRatesPO.stateColumn.getText()).toContain(scaRatesScenarios.stateCode);
        expect(scaRatesPO.stateColumn.getText()).toContain(scaRatesScenarios.stateName);
        expect(scaRatesPO.reportCodeColumn.getText()).toContain(scaRatesScenarios.reportCodeData);
        expect(scaRatesPO.effectiveYearColumn.getText()).toContain(scaRatesScenarios.effectiveYearData);
        expect(scaRatesPO.rateColumn.getText()).toContain(scaRatesScenarios.rateData);
        expect(scaRatesPO.flatFeeColumn.getText()).toContain(scaRatesScenarios.flatFeeData);
        expect(scaRatesPO.uncollectedPremiumColumn.getText()).toContain(scaRatesScenarios.uncollectedPremiumData);
        expect(scaRatesPO.commentsColumn.getText()).toContain(scaRatesScenarios.commentsField);
        */
    })


    it('should have a button to download Excel', async () => {
        helperPage.waitForVisibilityOf(scaRatesPO.excelDownload);
        browser.sleep(3000)
        helperPage.click(scaRatesPO.excelDownload);
        browser.params.vOutputsFileName = ('sca-rates.xlsx');
        helperPage.waitforfiledownload(browser.params.DL_DIR + browser.params.vOutputsFileName);
    })


    xit('should validate the fields for the downloaded excel file', async () => {

        browser.params.xlData = '';
        var workbook = XLSX.readFile(browser.params.DL_DIR + browser.params.vOutputsFileName)
        var sheet_name_list = workbook.SheetNames;
        browser.params.xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list], { header: "A" });
        var vSheetName = ('sca-rates')
        console.log('    Contents of ' + browser.params.vOutputsFileName + "  worksheet= " + vSheetName + '; ');
        //console.log(browser.params.xlData);

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

    xit('should validate the inputs for the downloaded excel file', async () => {
        //inputs
        expect(browser.params.xlData[1].B).toContain(scaRatesScenarios.carrierCode);
        expect(browser.params.xlData[2].B).toContain(scaRatesScenarios.poolCode);
        expect(browser.params.xlData[3].B).toContain(scaRatesScenarios.reportCodeData);
        expect(browser.params.xlData[4].B).toContain(scaRatesScenarios.stateCode);
        expect(browser.params.xlData[5].B).toEqual(scaRatesScenarios.effectiveYearData);
    })

    xit('should validate the outputs for the downloaded excel file', async () => {
        expect(browser.params.xlData[8].A).toContain(scaRatesScenarios.carrierCode);
        expect(browser.params.xlData[8].B).toContain(scaRatesScenarios.carrierName);
        expect(browser.params.xlData[8].C).toContain(scaRatesScenarios.poolCode);
        expect(browser.params.xlData[8].D).toContain(scaRatesScenarios.stateName);
        expect(browser.params.xlData[8].E).toContain(scaRatesScenarios.reportCodeData);
        expect(browser.params.xlData[8].F).toEqual(scaRatesScenarios.effectiveYearData);
        expect(browser.params.xlData[8].G).toEqual(scaRatesScenarios.rateExcel);
        expect(browser.params.xlData[8].H).toEqual(scaRatesScenarios.flatFeeData);
        expect(browser.params.xlData[8].I).toContain(scaRatesScenarios.uncollectedPremiumData);
        expect(browser.params.xlData[8].J).toContain(scaRatesScenarios.commentsField);
    })


    it('should have a toggle button', async () => {
        browser.sleep(5000)
        helperPage.click(scaRatesPO.toggleButton);
        helperPage.waitForVisibilityOf(scaRatesPO.poolColumn)
        helperPage.waitForVisibilityOf(scaRatesPO.stateColumn)
        helperPage.waitForVisibilityOf(scaRatesPO.reportCodeColumn)
        //helperPage.waitForVisibilityOf(scaRatesPO.effectiveYearColumn)
        browser.sleep(5000)

        helperPage.click(scaRatesPO.toggleButton);
    })

    it('should have a clear button', async () => {
        browser.sleep(3000)
        helperPage.click(scaRatesPO.clearButton);
        browser.sleep(5000)

    })
})
