const FlyOutPO = require('../page_objects/flyout.po');
const JobsPO = require('../page_objects/jobs.po');
const CallDataPO = require('../page_objects/call_data.po');
const MemberCompanyPO = require('../page_objects/member_company.po');

var XLSX = require('xlsx')
var path = require('path');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');
const EC = protractor.ExpectedConditions;


describe('The Member Company Create Reapportionment Page', () => {
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
    

    helperPage.waitUntilClickabilityOf(flyOutPO.selectMemberCompany);
    browser.sleep(1000)
    browser.actions().mouseMove(flyOutPO.selectMemberCompany).perform();
    browser.sleep(1000)

    helperPage.waitForVisibilityOf(flyOutPO.selectCreateReapportionment, 5000);
    helperPage.waitUntilClickabilityOf(flyOutPO.selectCreateReapportionment);
    browser.sleep(1000)

    helperPage.click(flyOutPO.selectCreateReapportionment);
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/createReapportionment');
  });

  it('should contain a field to enter original ratio set', async () => {
    browser.get('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/createReapportionment');
    helperPage.click(memberCompanyPO.originalRatioSet);
    memberCompanyPO.originalRatioSet.sendKeys("6608 - 27-JAN-21 - 1q21 Plan Fees - CFDAM")
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)
    expect(memberCompanyPO.originalRatioSet.getAttribute('value')).toContain('6608 - 27-JAN-21 - 1q21 Plan Fees - CFDAM');
  })

  it('should contain a field to enter revised ratio set', async () => {
    helperPage.click(memberCompanyPO.revisedRatioSet);
    memberCompanyPO.revisedRatioSet.sendKeys("6648 - 16-JUN-21 - TRM to National Pool - CFDAM")
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)

    expect(memberCompanyPO.revisedRatioSet.getAttribute('value')).toContain('6648 - 16-JUN-21 - TRM to National Pool - CFDAM');
  })

  it('should contain a field to enter previous reserve ratio set', async () => {
    helperPage.click(memberCompanyPO.previousReserveRatioSet);
    memberCompanyPO.previousReserveRatioSet.sendKeys("6609 - 27-JAN-21 - 1q21 Plan Fee Ratio Set - CFDAM")
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)
    expect(memberCompanyPO.previousReserveRatioSet.getAttribute('value')).toContain('6609 - 27-JAN-21 - 1q21 Plan Fee Ratio Set - CFDAM');
  })

  
  it('should contain a field to enter a description', async () => {
    helperPage.click(memberCompanyPO.descriptionField);
    memberCompanyPO.descriptionField.sendKeys("test reapportionment")
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)
    expect(memberCompanyPO.descriptionField.getAttribute('value')).toContain('test reapportionment');
  })

  it('should contain a field to enter quarter end date', async () => {
    helperPage.click(memberCompanyPO.reapportionmentQuarterEndDate);
    memberCompanyPO.reapportionmentQuarterEndDate.sendKeys("03/31/2021")
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)
    expect(memberCompanyPO.reapportionmentQuarterEndDate.getAttribute('value')).toContain('03/31/2021');

  })

  it('should contain a field to enter quarter end date from ', async () => {
    helperPage.click(memberCompanyPO.reapportionmentQuarterEndDateFrom);
    memberCompanyPO.reapportionmentQuarterEndDateFrom.sendKeys("03/31/2020")
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)
    expect(memberCompanyPO.reapportionmentQuarterEndDateFrom.getAttribute('value')).toContain('03/31/2020');

  })

  it('should contain a field to enter quarter end date to', async () => {
    helperPage.click(memberCompanyPO.reapportionmentQuarterEndDateTo);
    memberCompanyPO.reapportionmentQuarterEndDateTo.sendKeys("12/31/2020")
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)
    expect(memberCompanyPO.reapportionmentQuarterEndDateTo.getAttribute('value')).toContain('12/31/2020');
  })

  it('should contain a field to enter reapportionment type', async () => {
    helperPage.click(memberCompanyPO.reqpportionmentType);
    memberCompanyPO.reqpportionmentType.sendKeys("Regular")
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)
    expect(memberCompanyPO.reqpportionmentType.getAttribute('value')).toContain('Regular');
  })

  it('should contain a checkbox to include reserves', async () => {
    helperPage.click(memberCompanyPO.includeReserves);
  })

  xit('should contain a button to create reapportionment', async () => {
  it('should contain a button to create reapportionment', async () => {
    helperPage.waitUntilClickabilityOf(memberCompanyPO.createReapportionment);
  })

  it('should contain create a reapportionment', async () => {
    helperPage.click(memberCompanyPO.createReapportionment);
    browser.sleep(1000)

  })

  it('should contain a clear button', async () => {
    browser.sleep(3000)
    helperPage.click(memberCompanyPO.clearReapportionment);
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
    browser.wait(
      EC.invisibilityOf(element(by.css('p-progress-spinner'))),
      5000,
      `Timed out waiting for spinner to not be visible.`)    
      helperPage.waitForVisibilityOf(callDataPO.poolMembershipTable, 5000);

    browser.sleep(6000)



    
    expect(element(by.cssContainingText('*', "Reapportionment")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Active")).isPresent()).toBeTruthy();
    browser.sleep(5000)
  });

})