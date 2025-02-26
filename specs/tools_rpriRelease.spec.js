const FlyOutPO = require('../page_objects/flyout.po');
const JobsPO = require('../page_objects/jobs.po');
const MemberCompanyPO = require('../page_objects/member_company.po');

var XLSX = require('xlsx')
var path = require('path');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');


describe('The RPRI Release Page', () => {
  var flyOutPO
  var jobsPO
  var memberCompanyPO
  var helperPage

  beforeEach(async () => {
    flyOutPO = new FlyOutPO();
    jobsPO = new JobsPO();
    helperPage = new HelperPage();
    memberCompanyPO = new MemberCompanyPO();
  });

  it('should be accessible from the flyout menu', async () => {
    let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';

    browser.get(url);
    browser.sleep(2000)

    helperPage.click(flyOutPO.flyoutButton);
    helperPage.waitUntilClickabilityOf(flyOutPO.selectTools);
    browser.sleep(2000)

    browser.actions().mouseMove(flyOutPO.selectTools).perform();
    browser.sleep(2000)

    helperPage.click(flyOutPO.selectRpriRelease);
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/tools/rpri-release');
  });

  it('should have a quarter dropdown', async () => {
    //browser.get('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/member-company/mc-load');
    browser.sleep(1000)
    helperPage.click(memberCompanyPO.rpriReleaseQuarter);
    memberCompanyPO.rpriReleaseQuarter.sendKeys('12/31/2020')
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(memberCompanyPO.rpriReleaseQuarter.getAttribute('value')).toContain('12/31/2020');
  })

  it('should display a table of RPRI Releases', async () => {
    helperPage.waitForVisibilityOf(memberCompanyPO.rpriReleaseTable, 5000);
    browser.sleep(3000)
    expect(element(by.cssContainingText('*', "Released")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Type")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Description")).isPresent()).toBeTruthy();

  })

  xit('should be able to update RPRI Release', async () => {
    //helperPage.click(memberCompanyPO.mcLoadQuarterDropdown);
    browser.sleep(1000)
    helperPage.click(memberCompanyPO.rpriReleaseCheckbox);
  })

})