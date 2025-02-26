var FlyOutPO = require('../page_objects/flyout.po');
const CallDataPO = require('../page_objects/call_data.po');
const ReportsScenarios = require('../page_data/reports_scenarios.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');
var XLSX = require('xlsx')

describe('The Pool Membership Validation Page', () => {
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

  it('should be Accessible from Main Menu', async () => {
    let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
    browser.get(url);
    browser.sleep(1000)
    helperPage.click(flyOutPO.flyoutButton);
    helperPage.waitUntilClickabilityOf(flyOutPO.selectCallData);
    browser.sleep(1000)
    browser.actions().mouseMove(flyOutPO.selectCallData).perform();
    browser.sleep(2000)
    helperPage.click(flyOutPO.selectPoolMembershipValidation);
    browser.sleep(2000)

    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/reports/call-data/pool-membership-validation');
  });

  it('should have a policy year field', async () => {
    browser.sleep(1000)
    helperPage.click(callDataPO.validationPolicyYear);
    callDataPO.validationPolicyYear.sendKeys('2014')
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(callDataPO.validationPolicyYear.getAttribute('value')).toContain('2014');
  })

  it('should have a ratio set field', async () => {
    browser.sleep(1000)
    helperPage.click(callDataPO.ratioSetField);
    callDataPO.ratioSetField.sendKeys('6608 - 27-JAN-21 - 1q21 Plan Fees - CFDAM')
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(callDataPO.ratioSetField.getAttribute('value')).toContain('6608 - 27-JAN-21 - 1q21 Plan Fees - CFDAM');
  })

  it('should have a state field', async () => {
    browser.sleep(1000)
    helperPage.click(callDataPO.stateField);
    helperPage.click(callDataPO.clearStateField);
    browser.sleep(1000)
    callDataPO.stateField.sendKeys('Alabama')
    browser.sleep(1000)
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(callDataPO.stateField.getAttribute('value')).toContain('Alabama');
    browser.sleep(3000)
  })

  it('should have a carrier field', async () => {
    browser.sleep(1000)
    helperPage.click(callDataPO.carrierField)
    browser.sleep(1000)
    helperPage.click(callDataPO.clearCarrierField)
    callDataPO.carrierField.sendKeys('10804 - TRAVELERS INSURANCE CO')
    browser.sleep(1000)

    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(callDataPO.carrierField.getAttribute('value')).toContain('10804 - TRAVELERS INSURANCE CO');

})


  it('should have a run query button', async () => {
    browser.sleep(1000)
    helperPage.waitUntilClickabilityOf(callDataPO.poolMembershipRunQuery);
    helperPage.click(callDataPO.poolMembershipRunQuery);


  })


  it('should display a table with pool members', async () => {
    //helperPage.waitForVisibilityOf(callDataPO.poolMembershipTable, 5000);
    browser.sleep(5000)
    expect(element(by.cssContainingText('*', "State Code")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "State Name")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Carrier Code")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Carrier Name")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Voluntary Premium")).isPresent()).toBeTruthy();
    //expect(element(by.cssContainingText('*', "6608")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Carrier Type")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Effective End Date")).isPresent()).toBeTruthy();
  })

  it('should have a clear button', async () => {
    helperPage.waitUntilClickabilityOf(callDataPO.poolMembershipClear);
    helperPage.click(callDataPO.poolMembershipClear);
  })

})