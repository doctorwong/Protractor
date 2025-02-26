var FlyOutPO = require('../page_objects/flyout.po');
const CallDataPO = require('../page_objects/call_data.po');
const ReportsScenarios = require('../page_data/reports_scenarios.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');
var XLSX = require('xlsx')

describe('The Detective Call Data Reports', () => {
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
    browser.sleep(2000)
    helperPage.click(flyOutPO.flyoutButton);
    helperPage.waitUntilClickabilityOf(flyOutPO.selectCallData);
    browser.sleep(2000)

    browser.actions().mouseMove(flyOutPO.selectCallData).perform();
    (flyOutPO.selectCallData);
    browser.sleep(2000)
    helperPage.click(flyOutPO.selectDetective);
    browser.sleep(2000)

    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/detective-call-data');
  });

  it('should have a call year dropdown', async () => {
    browser.sleep(1000)
    helperPage.click(callDataPO.callYearInput);
    callDataPO.callYearInput.sendKeys('2014')
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(callDataPO.callYearInput.getAttribute('value')).toContain('2014');
  })

  it('should have a state dropdown', async () => {
    browser.sleep(1000)
    helperPage.click(callDataPO.stateInput);
    //callDataPO.stateInput.sendKeys('Alabama')
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
    browser.actions().sendKeys(protractor.Key.ENTER).perform()

    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(callDataPO.stateInput.getAttribute('value')).toContain('Alabama');
  })

  it('should have a button to run query', async () => {
    //xlData file is empty
    browser.sleep(3000)
    helperPage.click(callDataPO.detectiveRunQuery);
    helperPage.waitForVisibilityOf(callDataPO.detectiveRunQuery, 5000);
  })

  it('should display a table with current detective reports', async () => {
    helperPage.waitForVisibilityOf(callDataPO.reportsTable, 5000);
    browser.sleep(3000)
    expect(element(by.cssContainingText('*', "State Code")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "State Name")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Carrier Code")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Carrier Name")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Prior Year")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Current Year")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Carrier Type")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Effective End Date")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Alabama")).isPresent()).toBeTruthy();
  })

  it('should download excel file', async () => {
    helperPage.click(callDataPO.excelDownload);
  });

  it('should click tab for prior detective reports', async () => {
    helperPage.click(callDataPO.priorDetectiveReportsTab);
  })

  it('should have a call year dropdown for prior detective reports', async () => {
    //browser.get('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/reports/call-data');
    browser.sleep(1000)
    helperPage.click(callDataPO.callYearInput);
    callDataPO.callYearInput.sendKeys('2014')
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(callDataPO.callYearInput.getAttribute('value')).toContain('2014');
  })

  it('should have a state dropdown for prior detective reports', async () => {
    //browser.get('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/reports/call-data');
    browser.sleep(5000)
    helperPage.click(callDataPO.stateInput);
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()

    browser.actions().sendKeys(protractor.Key.ENTER).perform()

    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)

    expect(callDataPO.stateInput.getAttribute('value')).toContain('Alabama');
  })

  it('should have a button to run query', async () => {
    //xlData file is empty
    browser.sleep(3000)
    helperPage.click(callDataPO.detectiveRunQuery);
    helperPage.waitForVisibilityOf(callDataPO.detectiveRunQuery, 5000);
  })
  
  it('should download excel file', async () => {
    helperPage.click(callDataPO.excelDownload);
  });

  it('should display a table with prior detective reports', async () => {
    helperPage.waitForVisibilityOf(callDataPO.reportsTable, 5000);
    browser.sleep(3000)
    expect(element(by.cssContainingText('*', "State Code")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "State Name")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Carrier Code")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Carrier Name")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Prior Year")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Current Year")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Carrier Type")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Effective End Date")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Alabama")).isPresent()).toBeTruthy();
  })

  it('return to current detective report tab', async () => {
    helperPage.click(callDataPO.currentDetectiveReportsTab);
    browser.sleep(5000)

  })
})