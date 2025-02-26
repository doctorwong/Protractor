const FlyOutPO = require('../page_objects/flyout.po');
const CallDataPO = require('../page_objects/call_data.po');
var XLSX = require('xlsx')
var path = require('path');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');


describe('The SC Premium for Contracts', () => {
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
    helperPage.waitUntilClickabilityOf(flyOutPO.selectCallData);
    browser.sleep(3000)
    browser.actions().mouseMove(flyOutPO.selectCallData).perform();
    browser.sleep(3000)
    helperPage.click(flyOutPO.selectSummarizedCallDataReport);
    browser.sleep(1000)
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/summarized-call-data');
  });

  it('should have a call year dropdown', async () => {
    browser.sleep(3000)
    helperPage.waitForVisibilityOf(callDataPO.summarizedCallDataReportType, 5000);
    helperPage.click(callDataPO.summarizedCallDataReportType);
    callDataPO.summarizedCallDataReportType.sendKeys('Call 1A Report')
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(callDataPO.summarizedCallDataReportType.getAttribute('value')).toContain('Call 1A Report');
})

it('should have a button to run query', async () => {
  browser.sleep(5000)
  helperPage.click(callDataPO.summarizedCallDataClear);
})

it('should have a clickable clear button', async () => {
  browser.sleep(5000)
  helperPage.click(callDataPO.summarizedCallDataClear);
})


})