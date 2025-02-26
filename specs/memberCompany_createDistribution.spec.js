const FlyOutPO = require('../page_objects/flyout.po');
const JobsPO = require('../page_objects/jobs.po');
const CallDataPO = require('../page_objects/call_data.po');
const MemberCompanyPO = require('../page_objects/member_company.po');

var XLSX = require('xlsx')
var path = require('path');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');
const EC = protractor.ExpectedConditions;


describe('The Member Company Create Distribution Page', () => {
  var flyOutPO
  var jobsPO
  var callDataPO
  var memberCompanyPO
  var helperPage


  beforeEach(async () => {
    flyOutPO = new FlyOutPO();
    jobsPO = new JobsPO();
    callDataPO = new CallDataPO();
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

    helperPage.waitForVisibilityOf(flyOutPO.selectCreateDistribution, 5000);
    browser.sleep(1000)

    helperPage.click(flyOutPO.selectCreateDistribution);
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/createDistribution');
  });

  it('should contain a field to enter a description', async () => {
    browser.get('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/createDistribution');
    helperPage.click(memberCompanyPO.descriptionField);
    //helperPage.click(memberCompanyPO.clearDistributionTypeField);
    memberCompanyPO.descriptionField.sendKeys("test description")
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)
    expect(memberCompanyPO.descriptionField.getAttribute('value')).toContain('test description');
  })

  it('should contain a field to enter distribution type', async () => {
    helperPage.click(memberCompanyPO.distributionTypeField);
    //helperPage.click(memberCompanyPO.clearDistributionTypeField);
    memberCompanyPO.distributionTypeField.sendKeys("Quarterly")
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)
    expect(memberCompanyPO.distributionTypeField.getAttribute('value')).toContain('Quarterly');
  })

  it('should contain a field to enter ratio set', async () => {
    helperPage.click(memberCompanyPO.ratioSetField);
    //helperPage.click(memberCompanyPO.clearRatioSetField);
    memberCompanyPO.ratioSetField.sendKeys("6170 - 16-JUN-19 - Final 2018 from Premium Call - CFDAM")
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)
    expect(memberCompanyPO.ratioSetField.getAttribute('value')).toContain('6170 - 16-JUN-19 - Final 2018 from Premium Call - CFDAM');
  })

  it('should contain a field to enter quarter end date', async () => {
    helperPage.click(memberCompanyPO.quarterEndDateField);
    //helperPage.click(memberCompanyPO.clearQuarterEndDateField);
    memberCompanyPO.quarterEndDateField.sendKeys("06/30/2019")
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)
    expect(memberCompanyPO.quarterEndDateField.getAttribute('value')).toContain('06/30/2019');
    helperPage.waitUntilClickabilityOf(memberCompanyPO.createDistribution);

   })
   
   xit('should have a button to create distribution', async () => {
    browser.sleep(1000)
    helperPage.waitUntilClickabilityOf(memberCompanyPO.createDistribution);
       })

   it('should create a distribution', async () => {
    helperPage.click(memberCompanyPO.createDistribution);
    browser.wait(
      EC.invisibilityOf(element(by.css('p-progress-spinner-svg'))),
      5000,
      `Timed out waiting for spinner to not be visible.`)
    browser.sleep(5000)
    expect(element(by.cssContainingText('*', 'Create distribution has been submitted.')).isPresent()).toBeTruthy();
    browser.sleep(1000)
    helperPage.click(memberCompanyPO.clear);
    browser.sleep(1000) 
  })

   it('should be display the job under batch job history', async () => {
    let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
    browser.get(url);
    helperPage.click(flyOutPO.flyoutButton);
    helperPage.waitUntilClickabilityOf(flyOutPO.selectTools);
    browser.sleep(2000)
    helperPage.click(flyOutPO.selectTools);
    browser.sleep(2000)
    helperPage.click(flyOutPO.selectBatchJobHistory);
    browser.sleep(2000)
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/tools/batchJobHistory');
    //helperPage.waitForSpinner()
    helperPage.waitForVisibilityOf(callDataPO.poolMembershipTable, 5000);

    expect(element(by.cssContainingText('*', "Distribution")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Active")).isPresent()).toBeTruthy();
  });
})

