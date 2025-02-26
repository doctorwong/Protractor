const ToolsPO = require('../page_objects/tools.po');
const CallDataPO = require('../page_objects/call_data.po');
const FlyOutPO = require('../page_objects/flyout.po');

const ReportsScenarios = require('../page_data/reports_scenarios.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');
var XLSX = require('xlsx')

describe('Administer Page', () => {
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
    helperPage.click(flyOutPO.selectAdminister);
    browser.sleep(2000)
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/tools/rpri-config');
  });

  it('should display rpri configurations', async () => {
    browser.sleep(2000)
    expect(element(by.cssContainingText('*', "Code 1")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Enabled Flag")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Start Date")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "End Date")).isPresent()).toBeTruthy();
  })

  it('should select RPRI configuration type', async () => {
    helperPage.click(toolsPO.administerType);
    toolsPO.administerType.sendKeys('AES ANNUAL REPORT YEAR')
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(toolsPO.administerType.getAttribute('value')).toContain('AES ANNUAL REPORT YEAR');

  })

  it('should be able to add an RPRI configuration', async () => {
    helperPage.click(toolsPO.addButton);

    helperPage.click(toolsPO.codeOneInput);
    toolsPO.codeOneInput.sendKeys('12/31/2020')
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(toolsPO.codeOneInput.getAttribute('value')).toContain('12/31/2020');

    helperPage.click(toolsPO.codeTwoInput);
    toolsPO.codeTwoInput.sendKeys('Annual Actuarial Report (2020)')
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(toolsPO.codeTwoInput.getAttribute('value')).toContain('Annual Actuarial Report (2020)');

    helperPage.waitUntilClickabilityOf(toolsPO.saveButton);
    helperPage.click(toolsPO.cancelButton);
  })

  it('should have a button to delete RPRI configuration', async () => {
    helperPage.waitUntilClickabilityOf(toolsPO.deleteButton);
  })

  it('should navigate to RPF lookups tab', async () => {
    helperPage.click(toolsPO.rpfLookupsTab);
    browser.sleep(3000)
  })

  it('should select RPRI Lookups Type', async () => {
    helperPage.click(toolsPO.administerType);
    toolsPO.administerType.sendKeys('POOL CODE')
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(toolsPO.administerType.getAttribute('value')).toContain('POOL CODE');
  })

  xit('should be able to add a RPF Lookup Type', async () => {
    helperPage.click(toolsPO.addButton);
    helperPage.click(toolsPO.rpfLookupsCode);
    toolsPO.rpfLookupsCode.sendKeys('QUARTERLY')
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(toolsPO.rpfLookupsCode.getAttribute('value')).toContain('QUARTERLY');

    helperPage.click(toolsPO.rpfLookupsDescription);
    toolsPO.rpfLookupsDescription.sendKeys('Plan')
    browser.actions().sendKeys(protractor.Key.TAB).perform()

    expect(toolsPO.rpfLookupsDescription.getAttribute('value')).toContain('Plan');
    helperPage.waitUntilClickabilityOf(toolsPO.saveButton);
    helperPage.click(toolsPO.cancelButton);
  })



  it('should navigate to DTVI subscriptions', async () => {
    helperPage.click(toolsPO.dtviSubscriptionsTab);
    browser.sleep(3000)

  })

  it('should select DTVI Subscription Type', async () => {
    helperPage.click(toolsPO.administerType);
    toolsPO.administerType.sendKeys('TXT')
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(toolsPO.administerType.getAttribute('value')).toContain('TXT');
  })

  it('should be able to add a DTVI Subscription', async () => {
    helperPage.click(toolsPO.addButton);
    helperPage.click(toolsPO.dtviSubscriptionsCarrierCode);
    toolsPO.dtviSubscriptionsCarrierCode.sendKeys('10227')
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(toolsPO.dtviSubscriptionsCarrierCode.getAttribute('value')).toContain('10227');

    helperPage.click(toolsPO.dtviSubscriptionsGroupCode);
    toolsPO.dtviSubscriptionsGroupCode.sendKeys('10804')
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(toolsPO.dtviSubscriptionsGroupCode.getAttribute('value')).toContain('10804');
    helperPage.waitUntilClickabilityOf(toolsPO.saveButton);
    helperPage.click(toolsPO.cancelButton);
  })
})
