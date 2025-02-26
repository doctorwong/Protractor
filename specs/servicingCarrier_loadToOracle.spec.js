const FlyOutPO = require('../page_objects/flyout.po');
const ServicingCarrierPO = require('../page_objects/servicing_carrier.po');
var XLSX = require('xlsx')
var path = require('path');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');

describe('The SC Load to Oracle Page', () => {
  var flyOutPO
  var servicingCarrierPO
  var helperPage

  beforeEach(async () => {
    flyOutPO = new FlyOutPO();
    servicingCarrierPO = new ServicingCarrierPO();
    helperPage = new HelperPage();
  });

  it('should be accessible from the flyout menu', async () => {
    let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
    browser.get(url);
    browser.sleep(1000)
    helperPage.click(flyOutPO.flyoutButton);
    helperPage.waitUntilClickabilityOf(flyOutPO.selectServicingCarrier);
    browser.sleep(3000)
    browser.actions().mouseMove(flyOutPO.selectServicingCarrier).perform();
    browser.sleep(1000)
    helperPage.click(flyOutPO.selectScLoadToOracle);
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/servicing-carrier/sc-load');
  });

  it('should click the tab to SC Load', async () => {
    helperPage.click(servicingCarrierPO.scLoadTab);
  })

 
  it('should contain a selectable quarter dropdown', async () => {
    helperPage.click(servicingCarrierPO.loadtoOracleQuarter);
    servicingCarrierPO.loadtoOracleQuarter.sendKeys("09/30/2020");
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(servicingCarrierPO.loadtoOracleQuarter.getAttribute('value')).toContain('09/30/2020');

  })

  xit('should load to oracle', async () => {
    helperPage.click(servicingCarrierPO.loadToOracleButton);
    helperPage.waitUntilClickabilityOf(servicingCarrierPO.confirmYes)
    helperPage.click(servicingCarrierPO.confirmNo);
    browser.sleep(1000)
    expect(element(by.cssContainingText('*', 'Results.')).isPresent()).toBeFalsy();
    expect(element(by.cssContainingText('*', 'Successful.')).isPresent()).toBeFalsy();
  })

  xit('should submit an Inquiry', async () => {
    helperPage.click(servicingCarrierPO.loadToOracleButton);
    helperPage.click(servicingCarrierPO.confirmYes);
    browser.sleep(10000)
    expect(element(by.cssContainingText('*', 'Results.')).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', 'Successful.')).isPresent()).toBeTruthy();
   })
})
