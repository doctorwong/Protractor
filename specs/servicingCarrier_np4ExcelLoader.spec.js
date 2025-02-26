const FlyOutPO = require('../page_objects/flyout.po');
const ExcelLoaderPO = require('../page_objects/np4_excel_loader.po');
var XLSX = require('xlsx')
var path = require('path');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');


describe('NP4 Excel Loader Page', () => {
  var flyOutPO
  var excelLoaderPO
  var helperPage

  beforeEach(async () => {
    flyOutPO = new FlyOutPO();
    excelLoaderPO = new ExcelLoaderPO();
    helperPage = new HelperPage();
  });

  it('should be accessible from the flyout menu', async () => {
    let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
  
    browser.get(url);
    browser.sleep(1000)
    helperPage.click(flyOutPO.flyoutButton);
    helperPage.waitUntilClickabilityOf(flyOutPO.selectServicingCarrier);
    browser.sleep(1000)
    browser.actions().mouseMove(flyOutPO.selectServicingCarrier).perform();
    browser.sleep(1000)
    helperPage.click(flyOutPO.selectNP4ExcelLoader);
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/np4-excel-loader');
  });

  it('should contain a link to download np4 excel loader', async () => {
    browser.get('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/np4-excel-loader');
    browser.sleep(1000)
    helperPage.click(excelLoaderPO.downloadExcel);
    browser.params.vOutputsFileName = ('NP4ExcelLoader.xlsx');
    helperPage.waitforfiledownload(browser.params.DL_DIR + browser.params.vOutputsFileName);
  })

  it('should download excel file', async () => {
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

  it('should contain a link to upload np4 excel loader', async () => {
    var fileToUpload = browser.params.DL_DIR + browser.params.vOutputsFileName;
    var absolutePath = path.resolve(fileToUpload);
    helperPage.waitUntilClickabilityOf(excelLoaderPO.uploadNP4)
    var input = element(by.css('input[type="file"]'));
    input.sendKeys(absolutePath);
  })
})