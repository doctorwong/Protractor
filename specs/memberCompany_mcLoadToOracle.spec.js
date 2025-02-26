const FlyOutPO = require('../page_objects/flyout.po');
const JobsPO = require('../page_objects/jobs.po');
const MemberCompanyPO = require('../page_objects/member_company.po');

var XLSX = require('xlsx')
var path = require('path');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');


describe('Member Company MC Load To Oracle Page', () => {
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
    browser.sleep(1000)
    helperPage.click(flyOutPO.flyoutButton);
    helperPage.waitUntilClickabilityOf(flyOutPO.selectMemberCompany);
    browser.sleep(1000)
    browser.actions().mouseMove(flyOutPO.selectMemberCompany).perform();
    browser.sleep(1000)
    helperPage.click(flyOutPO.selectMcLoadToOracle);
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/member-company/mc-load');
  });

  it('should have a tab to access the MC Load to Oracle', async () => {
    //browser.get('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/member-company/mc-load');
    helperPage.waitUntilClickabilityOf(memberCompanyPO.mcLoadToOracleTab, 30000)
    browser.sleep(1000)
    helperPage.click(memberCompanyPO.mcLoadToOracleTab);
  })


  it('should contain a selectable quarter dropdown', async () => {
    helperPage.click(jobsPO.quarter);
    helperPage.click(jobsPO.quarterSelection);
  it('MC Load to Oracle should have a selectable quarter dropdown', async () => {
    //helperPage.click(memberCompanyPO.mcLoadQuarterDropdown);
    browser.sleep(1000)

    helperPage.click(memberCompanyPO.mcLoadQuarterInput)
    browser.sleep(1000)

    memberCompanyPO.mcLoadQuarterInput.sendKeys("12/31/2018")
    browser.sleep(1000)

    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(memberCompanyPO.mcLoadQuarterInput.getAttribute('value')).toContain("12/31/2018");

  })


  xit('should be able to select a checkbox in MC Load to Oracle', async () => {
    helperPage.click(memberCompanyPO.selectOne);

  })

  xit('should show clickable checkboxes in MC Load to Oracle ', async () => {
    helperPage.waitUntilClickabilityOf(memberCompanyPO.selectAll)
    helperPage.waitUntilClickabilityOf(memberCompanyPO.selectOne)
  })

  xit('should have a button to Run Release in MC Load to Oracle ', async () => {
    helperPage.waitForVisibilityOf(memberCompanyPO.runRelease)
  })

  it('should have a tab to return to MC Preload Validation', async () => {
    helperPage.waitUntilClickabilityOf(memberCompanyPO.mcPreloadValidationTab, 30000)

    helperPage.click(memberCompanyPO.mcPreloadValidationTab);
  })

  it('should contain a selectable quarter dropdown', async () => {
    helperPage.click(jobsPO.quarter);
    helperPage.click(jobsPO.quarterSelection);
  })


  xit('should show a selectable checkbox MC Preload Validation Tab ', async () => {
    helperPage.waitUntilClickabilityOf(memberCompanyPO.preloadSelect)
  })

  xit('should have a button to Preload Validate in MC Preload Validation ', async () => {
    helperPage.click(memberCompanyPO.selectOne);
    helperPage.waitForVisibilityOf(memberCompanyPO.preloadValidate)
  })

  xit('should have a button to download Excel in MC Preload Validation ', async () => {
    helperPage.click(memberCompanyPO.excelDownload);
  })
})