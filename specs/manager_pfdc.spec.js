const FlyOutPO = require('../page_objects/flyout.po');
const PfdcPO = require('../page_objects/manager_pfdc.po');
const PfdcScenarios = require('../page_data/pfdc_scenarios.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');
const XLSX = require('xlsx')


describe('The Manager Pfdc Page', () => {
  var flyOutPO
  var pfdcPO
  var helperPage
  var pfdcScenarios

  beforeEach(async () => {
    flyOutPO = new FlyOutPO();
    pfdcPO = new PfdcPO();
    helperPage = new HelperPage();
    pfdcScenarios = new PfdcScenarios();
  });

  it('should be accessible from the flyout menu', async () => {
    let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
    browser.get(url);
    browser.sleep(2000)
    helperPage.click(flyOutPO.flyoutButton);
    browser.sleep(3000)
    helperPage.waitUntilClickabilityOf(flyOutPO.selectManager);
    browser.sleep(2000)
    browser.actions().mouseMove(flyOutPO.selectManager).perform();
    browser.sleep(2000)
    helperPage.click(flyOutPO.selectPfdc);
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/servicing-carrier/pfdc');
  });

  it('should contain a link to NP4 error management', async () => {
    helperPage.waitUntilClickabilityOf(pfdcPO.np4ErrorManagementCount);
    browser.sleep(3000)
    helperPage.click(pfdcPO.np4ErrorManagementCount);
    expect(browser.getCurrentUrl()).toEqual('http://' +  browser.params.ENV + 'intraapps.ncci.com/rpf/#/servicing-carrier/pfdc/pfdc-error');
  })

  it('should contain a link to load NP4 data from PFDC', async () => {
    let pfdcURL = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/servicing-carrier/pfdc';
    browser.get(pfdcURL);
    browser.sleep(5000)
    helperPage.click(pfdcPO.loadNP4dataPfdc);
    helperPage.waitForVisibilityOf(pfdcPO.loadNotification)
    expect(pfdcPO.loadNotification.isPresent()).toBe(true);
  })

  xit('should be able to return NP4 data to PFDC', async () => {
    //currently no records to process

    helperPage.click(pfdcPO.returnCarrierDropdown)
    helperPage.click(pfdcPO.clearReturnCarrier)
    //fix selector
    helperPage.click(pfdcPO.returnCarrierDropdown)
    pfdcPO.returnCarrierDropdown.sendKeys(pfdcScenarios.pfdcCarrier)
    browser.actions().sendKeys(protractor.Key.ENTER).perform()

    helperPage.click(pfdcPO.returnPoolDropdown)
    helperPage.click(pfdcPO.clearReturnPool)
    pfdcPO.returnPoolDropdown.sendKeys(pfdcScenarios.pfdcSReturnPool)
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
  })

  xit('should be able to download an excel with variance information', async () => {
    helperPage.click(pfdcPO.variancePoolDropdown)
    helperPage.click(pfdcPO.clearVariancePool)
    helperPage.click(pfdcPO.variancePoolDropdown)

    pfdcPO.variancePoolDropdown.sendKeys(pfdcScenarios.pfdcVariancePool)
    browser.actions().sendKeys(protractor.Key.ENTER).perform()

    helperPage.click(pfdcPO.varianceReportType)
    helperPage.click(pfdcPO.clearReportType)
    pfdcPO.varianceReportType.sendKeys(pfdcScenarios.pfdcVarianceReportType)
    browser.actions().sendKeys(protractor.Key.ENTER).perform()

    helperPage.click(pfdcPO.downloadExcel);
    browser.params.vOutputsFileName = ('PFDC Variance.xlsx');
    helperPage.waitforfiledownload(browser.params.DL_DIR + browser.params.vOutputsFileName);
  })

  xit('should download the correct excel file', async () => {
    //xlData for this excel currently has no data
    browser.params.xlData = '';
    var workbook = XLSX.readFile(browser.params.DL_DIR + browser.params.vOutputsFileName)
    var sheet_name_list = workbook.SheetNames;
    browser.params.xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list], { header: "A" });
    var vSheetName = ('PFDC Variance')
    console.log('    Contents of ' + browser.params.vOutputsFileName + "  worksheet= " + vSheetName + '; ');
    console.log(browser.params.xlData)
    expect(browser.params.xlData[0].A).toEqual('RPFS NP4 Data Loader');
  })
})