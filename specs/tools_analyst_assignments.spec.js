const ToolsPO = require('../page_objects/tools.po');
const CallDataPO = require('../page_objects/call_data.po');
const FlyOutPO = require('../page_objects/flyout.po');

const ReportsScenarios = require('../page_data/reports_scenarios.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');
var XLSX = require('xlsx')

describe('Analyst Assignments Page', () => {
  var flyOutPO
  var toolsPO
  var reportsScenarios
  var helperPage

  beforeEach(async () => {
    flyOutPO = new FlyOutPO();
    callDataPO = new CallDataPO();
    toolsPO = new ToolsPO();
    reportsScenarios = new ReportsScenarios();
    helperPage = new HelperPage();
  });

  it('Should be Accessible from the Main Menu', async () => {
    let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
    browser.get(url);
    helperPage.click(flyOutPO.flyoutButton);
    
    helperPage.waitUntilClickabilityOf(flyOutPO.selectTools);
    browser.sleep(2000)

    helperPage.click(flyOutPO.selectTools);
    browser.sleep(2000)
    helperPage.click(flyOutPO.selectAnalystAssignments);
    browser.sleep(2000)
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/tools/analystAssignments');
  });

  it('should display analyst, pool, and carrier code', async () => {
    browser.sleep(2000)
    expect(element(by.cssContainingText('*', "DONTE MICKENS")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "10804")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "12")).isPresent()).toBeTruthy();
  })

  it('should be able to make a quarter selection', async () => {
    browser.sleep(3000)
    helperPage.click(toolsPO.quarterDropdown);
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
    browser.sleep(1000)
/*
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)
    expect(inquireModPO.quarterDropdown.getAttribute('value')).toContain('06/30/2023');
    */
  });

  it('should be able to make an analyst selection', async () => {
    browser.sleep(3000)
    helperPage.click(toolsPO.analystDropdown);
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
    browser.sleep(1000)

    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)
    //expect(toolsPO.analystDropdown.getAttribute('value')).toContain('Donte\' Mickens');
  });

  it('should be able to make a pool code selection', async () => {
    browser.sleep(3000)
    helperPage.click(toolsPO.poolCodeDropdown);
  
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
    browser.sleep(1000)
    //expect(toolsPO.poolCodeDropdown.getAttribute('value')).toContain('12 - National WC Reinsurance Pooling Mechanism');

  });

  it('should be able to make a carrier selection', async () => {
    browser.sleep(3000)
    helperPage.click(toolsPO.carrierCodeDropdown);
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
    browser.sleep(1000)

    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)
    //expect(toolsPO.carrierCodeDropdown.getAttribute('value')).toContain('10804 - TRAVELERS INSURANCE CO');
  });

  it('should have button to download excel', async () => {
    helperPage.waitUntilClickabilityOf(toolsPO.analystAssignmentExcel);
    browser.sleep(3000)
    helperPage.click(toolsPO.analystAssignmentExcel);
  })

  it('should have a clear button', async () => {
    helperPage.waitUntilClickabilityOf(toolsPO.analystAssignmentClear);
    helperPage.click(toolsPO.analystAssignmentClear);
  })
 })

