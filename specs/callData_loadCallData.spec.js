var FlyOutPO = require('../page_objects/flyout.po');
const CallDataPO = require('../page_objects/call_data.po');
const ReportsScenarios = require('../page_data/reports_scenarios.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');
var XLSX = require('xlsx')

describe('The Load Call Data Page', () => {
  var flyOutPO
  var callDataPO
  var reportsScenarios
  var helperPage

  beforeEach(async () => {
    flyOutPO = new FlyOutPO();
    callDataPO = new CallDataPO();
    reportsScenarios = new ReportsScenarios();
    helperPage = new HelperPage();
  });

  it('Load Call Data Should be Accessible from Main Menu', async () => {
    let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
    browser.get(url);
    browser.sleep(1000)
    helperPage.click(flyOutPO.flyoutButton);
    helperPage.waitUntilClickabilityOf(flyOutPO.selectCallData);
    browser.sleep(2000)
    browser.actions().mouseMove(flyOutPO.selectCallData).perform();
    browser.sleep(2000)
    helperPage.click(flyOutPO.selectLoadCallData);
    browser.sleep(2000)

    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/call-data');
  });

  it('should have a year field', async () => {
    browser.sleep(1000)
    helperPage.click(callDataPO.loadCallData_yearField);
    callDataPO.loadCallData_yearField.sendKeys('1991')
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(callDataPO.loadCallData_yearField.getAttribute('value')).toContain('1991');
  })

  it('should have a button to load call data', async () => {
    //xlData file is empty
    browser.sleep(3000)
    helperPage.click(callDataPO.loadCallDataButton);
    helperPage.waitForVisibilityOf(callDataPO.loadCallDataNotification, 5000);
    browser.sleep(3000)
    expect(element(by.cssContainingText('*', 'Loading call data completed successfully.')).isPresent()).toBeTruthy();
    //expect(browser.params.xlData[0].A).toEqual('RPFS NP4 Data Loader');
  })

  it('should have an other premium tab', async () => {
    helperPage.click(callDataPO.otherPremiumTab);
  })

  it('should contain a link to download np4 excel loader', async () => {
    helperPage.click(callDataPO.otherPremiumExcelDownload);
    browser.params.vOutputsFileName = ('otherPremiumExcelLoader.xlsx');
    helperPage.waitforfiledownload(browser.params.DL_DIR + browser.params.vOutputsFileName);
  })

  xit('should download excel file', async () => {
    //xlData file is empty
    browser.params.xlData = '';
    var workbook = XLSX.readFile(browser.params.DL_DIR + browser.params.vOutputsFileName)
    var sheet_name_list = workbook.SheetNames;
    browser.params.xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list], { header: "A" });
    var vSheetName = ('RpfsOtherPremium')
    console.log('    Contents of ' + browser.params.vOutputsFileName + "  worksheet= " + vSheetName + '; ');
    console.log(browser.params.xlData);  
    //expect(browser.params.xlData[0].A).toEqual('RPFS NP4 Data Loader');
  })

  xit('should contain a link to upload np4 excel loader', async () => {
    helperPage.waitUntilClickabilityOf(callDataPO.otherPremiumExcelUpload);
  })
})