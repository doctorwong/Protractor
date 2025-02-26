const { browser } = require('protractor');
var HeaderPO = require('../page_objects/header.po');
const EC = protractor.ExpectedConditions;

describe('The RPF homepage', () => {
  var headerPO

  beforeEach( async () => {
    headerPO = new HeaderPO();
  });

  it('Should go to the correct URL depending on environment', async () => {
    let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
    browser.get(url);
    expect(browser.getCurrentUrl()).toContain(url);
  });


  it('should have the correct title text', async () => {
    browser.sleep(3000)
    expect(element(by.cssContainingText('*', 'Reinsurance Pools Financial System')).isPresent()).toBeTruthy();

  });
});
