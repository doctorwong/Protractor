const FlyOutPO = require('../page_objects/flyout.po');
const JobsPO = require('../page_objects/jobs.po');
const CallDataPO = require('../page_objects/call_data.po');

const MemberCompanyPO = require('../page_objects/member_company.po');

var XLSX = require('xlsx')
var path = require('path');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');
const { BrowserStack } = require('protractor/built/driverProviders');


describe('The Member Company Residual Market DTVI Files Page', () => {
  var flyOutPO
  var jobsPO
  var callDataPO
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

    helperPage.click(flyOutPO.selectResidualMarketDTVIFiles);
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/dtvi');
  });

  it('should have a field for file type', async () => {
    let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/dtvi';
    browser.get(url);
    browser.sleep(1000)
    helperPage.click(memberCompanyPO.fileTypeField)
    browser.sleep(1000)
    memberCompanyPO.fileTypeField.sendKeys('ASCII')
    browser.sleep(1000)
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(memberCompanyPO.fileTypeField.getAttribute('value')).toContain('ASCII');
})


  it('should have a field for pool tape type', async () => {
    let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/dtvi';
    browser.get(url);
    browser.sleep(1000)

    helperPage.click(memberCompanyPO.poolTapeTypeField)
    browser.sleep(1000)

    memberCompanyPO.poolTapeTypeField.sendKeys('Distribution')
    browser.sleep(1000)

    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(memberCompanyPO.poolTapeTypeField.getAttribute('value')).toContain('Distribution');
})

it('should have a field for quarter', async () => {
    browser.sleep(1000)
    helperPage.click(memberCompanyPO.dtviQuarterField)
    browser.sleep(1000)

    memberCompanyPO.dtviQuarterField.sendKeys('12/31/2020')
    browser.sleep(1000)

    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(memberCompanyPO.dtviQuarterField.getAttribute('value')).toContain('12/31/2020');
})

it('should have a field for DTVI Group Code', async () => {
    browser.sleep(1000)
    helperPage.click(memberCompanyPO.dtviGroupCodeField)
    browser.sleep(1000)
    memberCompanyPO.dtviGroupCodeField.sendKeys('10243')
    browser.sleep(1000)
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(memberCompanyPO.dtviGroupCodeField.getAttribute('value')).toContain('10243');
})

it('should have a field for Header ID and Description', async () => {
    browser.sleep(1000)
    helperPage.click(memberCompanyPO.headerIdAndDescriptionField)
    browser.sleep(1000)
    memberCompanyPO.headerIdAndDescriptionField.sendKeys('2516 - Fourth Quarter 2020 Operating Results')
    browser.sleep(1000)
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(memberCompanyPO.headerIdAndDescriptionField.getAttribute('value')).toContain('2516 - Fourth Quarter 2020 Operating Results');
})

it('should have a field for Pool Tape Key', async () => {
    browser.sleep(1000)
    helperPage.click(memberCompanyPO.poolTapeKeyField)
    browser.sleep(1000)
    memberCompanyPO.poolTapeKeyField.sendKeys('QTROPR - Quarterly Operating Results')
    browser.sleep(1000)
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(memberCompanyPO.poolTapeKeyField.getAttribute('value')).toContain('QTROPR - Quarterly Operating Results');
})

it('should have an add header and pool tape key button', async () => {
    helperPage.click(memberCompanyPO.addHeaderButton)
    })

it('should have a remove header and pool tape key button', async () => {
    browser.sleep(3000)
    helperPage.click(memberCompanyPO.removeHeaderButton)
    })

    xit('should be display the job under batch job history', async () => {
      let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
      browser.get(url);
      helperPage.click(flyOutPO.flyoutButton);
      helperPage.waitUntilClickabilityOf(flyOutPO.selectTools);
      helperPage.click(flyOutPO.selectTools);
      browser.sleep(2000)
      helperPage.click(flyOutPO.selectBatchJobHistory);
      browser.sleep(2000)
      expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/tools/batchJobHistory');
      helperPage.waitForVisibilityOf(callDataPO.poolMembershipTable, 5000);
      browser.sleep(3000)
      expect(element(by.cssContainingText('*', "Residual Market DTVI Files")).isPresent()).toBeTruthy();
      expect(element(by.cssContainingText('*', "Active")).isPresent()).toBeTruthy();
  });

})