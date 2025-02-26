const FlyOutPO = require('../page_objects/flyout.po');
const CallDataPO = require('../page_objects/call_data.po');
var XLSX = require('xlsx')
var path = require('path');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');


describe('The Market Share Reports', () => {
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
    helperPage.click(flyOutPO.selectMarketShareReports);
    browser.sleep(1000)
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/call-data-market-share');
  });


  it('should have a year dropdown', async () => {
    helperPage.click(callDataPO.marketShareYearDropdown);
    callDataPO.marketShareYearDropdown.sendKeys('2020')
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(callDataPO.marketShareYearDropdown.getAttribute('value')).toContain('2020');

  })

  it('should have a state dropdown', async () => {
    browser.sleep(3000)
    helperPage.waitUntilClickabilityOf(callDataPO.marketShareStateDropdown);
    helperPage.click(callDataPO.marketShareStateDropdown)
    callDataPO.marketShareStateDropdown.sendKeys('Alabama')
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(callDataPO.marketShareStateDropdown.getAttribute('value')).toContain('Alabama');
  })

  it('should have a button to run a query', async () => {
    callDataPO.marketShareRunQuery.click();
    browser.sleep(3000)
  })

  it('should display market share information', async () => {
    expect(element(by.cssContainingText('*', "Carrier Code")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Carrier Name")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Voluntary Premium")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Market Share")).isPresent()).toBeTruthy();
  })

  //modification features

  it('should have a clickable clear button', async () => {
    browser.sleep(5000)
    helperPage.click(callDataPO.marketShareClearButton);
  })

})