var FlyOutPO = require('../page_objects/flyout.po');
const CallDataPO = require('../page_objects/call_data.po');
const ReportsScenarios = require('../page_data/reports_scenarios.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');
var XLSX = require('xlsx')

describe('Call Data Year Over Year Analysis Page', () => {
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
    browser.sleep(1000)
    browser.actions().mouseMove(flyOutPO.selectCallData).perform();
    browser.sleep(2000)
    helperPage.click(flyOutPO.selectYoYAnalysis);
    browser.sleep(2000)
  })

  it('should have a policy year dropdown menu', async () => {
    helperPage.click(callDataPO.yoyPolicyYear);
    callDataPO.yoyPolicyYear.sendKeys('2014')
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(callDataPO.yoyPolicyYear.getAttribute('value')).toContain('2014');
  })

  it('should have a # of years dropdown menu', async () => {
    helperPage.click(callDataPO.yoyYears);
    callDataPO.yoyYears.sendKeys('2')
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(callDataPO.yoyYears.getAttribute('value')).toContain('2');
  })

  it('should have a dropdown menu for state', async () => {
    helperPage.waitForVisibilityOf(callDataPO.yoyStates);
    callDataPO.yoyStates.sendKeys('Alabama')
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(callDataPO.yoyStates.getAttribute('value')).toContain('Alabama');
  })

  it('should have a clear button', async () => {
    helperPage.waitForVisibilityOf(callDataPO.yoyClearButton);
  })

  it('should have a button to download excel', async () => {
    helperPage.waitUntilClickabilityOf(callDataPO.excelDownload);
    helperPage.click(callDataPO.excelDownload);
  })

  it('should contain a table with a button to open graph', async () => {
    helperPage.waitForVisibilityOf(callDataPO.openGraph);
    expect(callDataPO.openGraph.isPresent()).toBe(true);
    helperPage.click(callDataPO.openGraph);

  })

  it('should have a button to close graph and return to report', async () => {
    helperPage.click(callDataPO.closeGraph);
  })

  it('should have an arrow buttons to navigate to the call data by carrier page', async () => {
    helperPage.click(callDataPO.forwardButton);
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/reports/call-data-by-carrier');
    //check for columns: carrier #, carrier, year, $ change, % change

  })

  it('should have an buttons to navigate to return to the report', async () => {
    helperPage.click(callDataPO.backButton);
    browser.sleep(5000)

  })

})