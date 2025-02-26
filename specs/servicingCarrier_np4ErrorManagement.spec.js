var FlyOutPO = require('../page_objects/flyout.po');
const ErrorManagementPO = require('../page_objects/error_management.po');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');
var XLSX = require('xlsx')


describe('The NP4 Error Management Page', () => {
  var flyOutPO
  var errorManagementPO
  var helperPage

  beforeEach(async () => {
    flyOutPO = new FlyOutPO();
    errorManagementPO = new ErrorManagementPO();
    helperPage = new HelperPage();
  });

  //PDF

  it('should be accessible from the flyout menu', async () => {
    let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
    browser.get(url);
    browser.sleep(1000)
    helperPage.click(flyOutPO.flyoutButton);
    helperPage.waitUntilClickabilityOf(flyOutPO.selectServicingCarrier);
    browser.sleep(3000)
    browser.actions().mouseMove(flyOutPO.selectServicingCarrier).perform();
    browser.sleep(3000)
    helperPage.click(flyOutPO.selectErrorManagement);
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/servicing-carrier/pfdc/pfdc-error');
  })

  it('should have a quarter dropdown menu', async () => {
    browser.get('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/servicing-carrier/pfdc/pfdc-error');
    helperPage.click(errorManagementPO.quarterDropdown);
    errorManagementPO.quarterDropdown.sendKeys('09/30/2022')
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(errorManagementPO.quarterDropdown.getAttribute('value')).toContain('09/30/2022');

  })

  xit('should have a clickable inquire button', async () => {
    browser.sleep(1000)
    helperPage.click(errorManagementPO.btnInquire);
    browser.sleep(1000)

    errorManagementPO.quarterDropdown.sendKeys('12/31/2021')
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(errorManagementPO.quarterDropdown.getAttribute('value')).toContain('12/31/2021');

  })


  it('should generate a table after making an inquiry', async () => {
    browser.sleep(3000)
    expect(element(by.cssContainingText('*', 'Carrier Code')).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', 'Report Code')).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', 'Pool Code')).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', 'Policy Year')).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', 'State Code')).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', 'State Id')).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', 'Comments')).isPresent()).toBeTruthy();


  })

  xit('should have a clickable export to excel button', async () => {
    //browser.sleep(1000)
    //browser.actions().mouseMove(errorManagementPO.excelExport).perform()
    //browser.sleep(1000)
    helperPage.click(errorManagementPO.excelExport);
  })

  xit('should download the correct excel file', async () => {
    await browser.sleep(1000);
    browser.params.vOutputsFileName = ('NP4 Error Management 1Q2021.xlsx');
    //browser.params.vOutputsFileName = ('NP4ErrorManagement.xlsx');
    helperPage.waitforfiledownload(browser.params.DL_DIR + browser.params.vOutputsFileName);
    await browser.sleep(1000);
    browser.params.xlData = '';
    var workbook = XLSX.readFile(browser.params.DL_DIR + browser.params.vOutputsFileName)
    var sheet_name_list = workbook.SheetNames;
    browser.params.xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list], { header: "A" });

    var vSheetName = ('NP4 Excel Loader')
    expect(browser.params.xlData[0].H).toEqual('NP4 Error Management Report');
    expect(browser.params.xlData[1].H).toEqual('Quarter End Date: 03/31/2021');
    console.log('    Contents of ' + browser.params.vOutputsFileName + "  worksheet= " + vSheetName + '; ');
    console.log(browser.params.xlData);
  })

  xit('should have a clickable export to pdf button', async () => {
    helperPage.click(errorManagementPO.pdfExport);
    await browser.sleep(1000);
    browser.params.vOutputsFileName = ('NP4 Error Management.pdf');
    helperPage.waitforfiledownload(browser.params.DL_DIR + browser.params.vOutputsFileName);
  })

  xit('downloaded pdf file should have the correct data', async () => {
  })
});

