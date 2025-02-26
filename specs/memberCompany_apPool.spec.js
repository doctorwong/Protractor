const FlyOutPO = require('../page_objects/flyout.po');
const JobsPO = require('../page_objects/jobs.po');
const MemberCompanyPO = require('../page_objects/member_company.po');

var XLSX = require('xlsx')
var path = require('path');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');

describe('The Member Company AP Pool Distribution Notices', () => {
  var flyOutPO
  var jobsPO
  var memberCompanyPO
  var helperPage


  beforeEach(async () => {
    flyOutPO = new FlyOutPO();
    jobsPO = new JobsPO();
    memberCompanyPO = new MemberCompanyPO();
    helperPage = new HelperPage();
  });

  it('should be accessible from the flyout menu', async () => {
    let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';

    browser.get(url);
    browser.sleep(1000)

    helperPage.click(flyOutPO.flyoutButton);
    browser.sleep(1000)
    helperPage.waitUntilClickabilityOf(flyOutPO.selectMemberCompany);
    browser.actions().mouseMove(flyOutPO.selectMemberCompany).perform();

    helperPage.waitForVisibilityOf(flyOutPO.selectAPPool, 5000);
    browser.sleep(1000)

    helperPage.click(flyOutPO.selectAPPool);
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/member-company/ap-pool-distribution-notices');
  });

  it('should contain a field to enter a quarter', async () => {
    helperPage.click(memberCompanyPO.apPoolQuarter);
    //helperPage.click(memberCompanyPO.clearQuarterEndDateField);
    memberCompanyPO.apPoolQuarter.sendKeys("03/31/2020")
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)
    expect(memberCompanyPO.apPoolQuarter.getAttribute('value')).toContain('03/31/2020');
  })
  
  it('should display a table of AP Pool Distribution Notices', async () => {
    expect(element(by.cssContainingText('*', 'Group Code')).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', 'Group Name')).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', 'Invoices')).isPresent()).toBeTruthy();
  })

  it('should have a button to download PDF', async () => {
    helperPage.click(memberCompanyPO.apPoolDownloadPdf)
  })



})