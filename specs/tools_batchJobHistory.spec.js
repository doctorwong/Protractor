var FlyOutPO = require('../page_objects/flyout.po');
const CallDataPO = require('../page_objects/call_data.po');
const ReportsScenarios = require('../page_data/reports_scenarios.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');
var XLSX = require('xlsx')

describe('The Batch Job History Page', () => {
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

  it('Should be Accessible from the Main Menu', async () => {
    let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
    browser.get(url);
    helperPage.click(flyOutPO.flyoutButton);
    helperPage.waitUntilClickabilityOf(flyOutPO.selectTools);
    browser.sleep(2000)
    browser.actions().mouseMove(flyOutPO.selectTools).perform();
    browser.sleep(2000)
    helperPage.click(flyOutPO.selectBatchJobHistory);
    browser.sleep(2000)
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/tools/batchJobHistory');
  });

  it('should display batch job history', async () => {
    helperPage.waitForVisibilityOf(callDataPO.poolMembershipTable, 5000);
    browser.sleep(3000)
    expect(element(by.cssContainingText('*', "Name")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Status")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Submitted By")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Execution Time")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Log")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Output")).isPresent()).toBeTruthy();


  })
})