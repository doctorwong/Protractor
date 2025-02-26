const FlyOutPO = require('../page_objects/flyout.po');
const CallDataPO = require('../page_objects/call_data.po');
var XLSX = require('xlsx')
var path = require('path');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');


describe('The Call Data - Premium Call Excel Loader', () => {
  var flyOutPO
  var callDataPO
  var helperPage

  beforeEach(async () => {
    flyOutPO = new FlyOutPO();
    callDataPO = new CallDataPO();
    helperPage = new HelperPage();
  });

  it('should be accessible from the flyout menu', async () => {
    let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
  
    browser.get(url);
    browser.sleep(1000)
    helperPage.click(flyOutPO.flyoutButton);
    browser.sleep(3000)
    helperPage.waitUntilClickabilityOf(flyOutPO.selectCallData);
    browser.actions().mouseMove(flyOutPO.selectCallData).perform();
    browser.sleep(3000)
    helperPage.waitForVisibilityOf(flyOutPO.selectPremiumCallExcelLoader, 5000);

    helperPage.click(flyOutPO.selectPremiumCallExcelLoader);
    browser.sleep(1000)
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/call-data/premium-call-excel-loader');
  });

  it('should contain a link to download np4 excel loader', async () => {
    browser.get('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/call-data/premium-call-excel-loader');
    browser.sleep(1000)
    helperPage.click(callDataPO.downloadPremiumCallExcel);
    browser.params.vOutputsFileName = ('PremiumCallExcelLoader.xlsx');
    helperPage.waitforfiledownload(browser.params.DL_DIR + browser.params.vOutputsFileName);
  })

  xit('should download excel file', async () => {
    //xlData file is empty
    browser.params.xlData = '';
    var workbook = XLSX.readFile(browser.params.DL_DIR + browser.params.vOutputsFileName)
    var sheet_name_list = workbook.SheetNames;
    browser.params.xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list], { header: "A" });
    var vSheetName = ('NP4ExcelLoader')
    console.log('    Contents of ' + browser.params.vOutputsFileName + "  worksheet= " + vSheetName + '; ');
    console.log(browser.params.xlData);  
    //expect(browser.params.xlData[0].A).toEqual('RPFS NP4 Data Loader');
  })

  xit('should contain a link to upload np4 excel loader', async () => {
    helperPage.waitUntilClickabilityOf(callDataPO.uploadPremiumCallExcel);


  })
})