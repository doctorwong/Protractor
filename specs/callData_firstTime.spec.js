var FlyOutPO = require('../page_objects/flyout.po');
const CallDataPO = require('../page_objects/call_data.po');
const ReportsScenarios = require('../page_data/reports_scenarios.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');
var XLSX = require('xlsx')

describe('The First Time Call Data Reporting Carriers Page', () => {
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
    browser.sleep(2000)
    helperPage.click(flyOutPO.flyoutButton);
    helperPage.waitUntilClickabilityOf(flyOutPO.selectCallData);
    browser.sleep(2000)
    browser.actions().mouseMove(flyOutPO.selectCallData).perform();
    browser.sleep(2000)
    helperPage.click(flyOutPO.selectFirstTime);
    browser.sleep(2000)
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/call-data-first-time-reporting');
  });

  it('should have a year policy year field', async () => {
    browser.sleep(1000)
    helperPage.click(callDataPO.policyYearInput);
    callDataPO.policyYearInput.sendKeys('2020')
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(callDataPO.policyYearInput.getAttribute('value')).toContain('2020');
  })

  it('should contain a button download excel', async () => {
    helperPage.click(callDataPO.excelDownload);
  })

  it('should display a table with first time call data reporting carriers', async () => {
    helperPage.waitForVisibilityOf(callDataPO.firstTimeReportingCarriersTable, 5000);
    browser.sleep(5000)
    expect(element(by.cssContainingText('*', "State Code")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "State Name")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Carrier Code")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Carrier Name")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Voluntary Premium")).isPresent()).toBeTruthy();
    
    //expect(element(by.cssContainingText('*', "WESTFIELD")).isPresent()).toBeTruthy();
    //expect(element(by.cssContainingText('*', "Ohio")).isPresent()).toBeTruthy();
    //expect(element(by.cssContainingText('*', "38.00")).isPresent()).toBeTruthy();
    /*
    var EC = protractor.ExpectedConditions;

    var anyTextToBePresentInElement = function(elementFinder) {
      var hasText = function() {
        return elementFinder.getText().then(function(actualText) {
          return actualText;
        });
      };
      return EC.and(EC.presenceOf(elementFinder), hasText);
    };
    browser.sleep(5000)
    browser.wait(anyTextToBePresentInElement(callDataPO.firstTimeDataRow), 10000);
*/


  })
})