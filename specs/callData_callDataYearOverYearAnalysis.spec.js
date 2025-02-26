var FlyOutPO = require('../page_objects/flyout.po');
const CallDataPO = require('../page_objects/call_data.po');
const ReportsScenarios = require('../page_data/reports_scenarios.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');
var XLSX = require('xlsx')

describe('The Call Data Year Over Year Analysis Report', () => {
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

  it('Call Data Year Over Year Analysis Should be Accessible from Main Menu', async () => {
    let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
    browser.get(url);
    browser.sleep(1000)
    helperPage.click(flyOutPO.flyoutButton);
    helperPage.waitUntilClickabilityOf(flyOutPO.selectCallData);
    browser.sleep(1000)
    browser.actions().mouseMove(flyOutPO.selectCallData).perform();
    browser.sleep(1000)
    helperPage.click(flyOutPO.selectCallDataYearOverYear);
    //expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/reports/call-data');
  });

  it('should have a policy year dropdown menu', async () => {
    helperPage.click(callDataPO.yearOverYear_policyYearDropdown);
    helperPage.click(callDataPO.clearPolicyYear);
    callDataPO.yearOverYear_policyYearDropdown.sendKeys('2021')
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(callDataPO.yearOverYear_policyYearDropdown.getAttribute('value')).toContain('2021');

  })

  it('should have a # of years dropdown menu', async () => {
    browser.sleep(3000)

    helperPage.click(callDataPO.yearOverYear_yearsDropdown);
    helperPage.click(callDataPO.openStateDropdown);
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()

    
    //callDataPO.yearOverYear_yearsDropdown.sendKeys('2')
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(callDataPO.yearOverYear_yearsDropdown.getAttribute('value')).toContain('2');

  })


  it('should have a dropdown menu for state', async () => {
    browser.sleep(3000)
    helperPage.click(callDataPO.yearOverYear_stateDropdown);
    helperPage.click(callDataPO.openStateDropdown);
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
    //callDataPO.yearOverYear_stateDropdown.sendKeys('Tennessee')
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(callDataPO.yearOverYear_stateDropdown.getAttribute('value')).toContain('Alaska');

  })

  it('should have a button to download excel', async () => {
    helperPage.waitUntilClickabilityOf(callDataPO.excelDownload);
    helperPage.click(callDataPO.excelDownload);
    browser.params.vOutputsFileName = ('Call Data Year Over Year Analysis Report.xlsx');
    helperPage.waitforfiledownload(browser.params.DL_DIR + browser.params.vOutputsFileName);
  })

  it('should have a button to clear dropdown selections', async () => {
    browser.sleep(3000)
    helperPage.click(callDataPO.yearOverYear_clear);
  })

  xit('should have an only pool states checkbox', async () => {
    helperPage.click(callDataPO.onlyPoolStatesCheckbox)
})

})
