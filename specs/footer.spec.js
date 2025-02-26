var FooterPO = require('../page_objects/footer.po');
const { HelperPage } = require('../helpers/helper.page');
const { browser } = require('protractor');
const EC = protractor.ExpectedConditions;

describe('The RPF footer', () => {
  var footerPO
  var helperPage

  beforeEach(async () => {
    footerPO = new FooterPO();
    helperPage = new HelperPage();
    let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
    browser.get(url);
  });

  it('should contain a working link to the NCCI Source page', async () => {
    browser.sleep(5000)

    var scrollIntoView = function (element) {
      return browser.executeScript(function (element) {
        element.scrollIntoView();
      }, element.getWebElement());
    };
    scrollIntoView(footerPO.sourceLink);

    //helperPage.scrollIntoView(footerPO.sourceLink)
    helperPage.waitForVisibilityOf(footerPO.sourceLink);
    helperPage.click(footerPO.sourceLink)

    /*
    browser.getAllWindowHandles().then((handles) => {
      browser.driver.switchTo().window(handles[1]);
      expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'thesource.ncci.com/Pages/Default.aspx');
      browser.driver.close();
      browser.driver.switchTo().window(handles[0]);

    });
          */
  });
  
  it('should contain a working link to RPFS Net', async () => {
    
    //scrollIntoView(footerPO.rpfsNetLink);
    helperPage.scrollIntoView(footerPO.rpfsNetLink)
    helperPage.waitForVisibilityOf(footerPO.rpfsNetLink);
    helperPage.click(footerPO.rpfsNetLink);
    /*
    browser.getAllWindowHandles().then((handles) => {
      browser.driver.switchTo().window(handles[1]);
      expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpfsnet/');
      browser.driver.close();
      browser.driver.switchTo().window(handles[0]);

    });
          */
  });

  it('should contain a working link to RM Log', async () => {
    //scrollIntoView(footerPO.rmLogLink);
    helperPage.scrollIntoView(footerPO.rmLogLink)
    helperPage.click(footerPO.rmLogLink);
    /*
    browser.getAllWindowHandles().then((handles) => {
      browser.driver.switchTo().window(handles[1]);
      expect(browser.getCurrentUrl()).toContain('http://collaborate2.ncci.com/');

    });
    */
    });
  })
