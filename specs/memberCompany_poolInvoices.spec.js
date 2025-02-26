const FlyOutPO = require('../page_objects/flyout.po');
const JobsPO = require('../page_objects/jobs.po');
const MemberCompanyPO = require('../page_objects/member_company.po');
const CallDataPO = require('../page_objects/call_data.po');


var XLSX = require('xlsx')
var path = require('path');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');
const EC = protractor.ExpectedConditions;


describe('The Member Company Pool Invoices Page', () => {
  var flyOutPO
  var jobsPO
  var memberCompanyPO
  var callDataPO
  var helperPage

  beforeEach(async () => {
    flyOutPO = new FlyOutPO();
    jobsPO = new JobsPO();
    helperPage = new HelperPage();
    memberCompanyPO = new MemberCompanyPO();
    callDataPO = new CallDataPO();
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

    helperPage.click(flyOutPO.selectPoolInvoices);
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/member-company/pool-invoices');
  });


  it('should contain a quarter field', async () => {
    browser.get('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/member-company/pool-invoices');
    browser.sleep(1000)
    helperPage.click(memberCompanyPO.poolInvoicesQuarter)
    memberCompanyPO.poolInvoicesQuarter.sendKeys('03/31/2020');
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)

    expect(memberCompanyPO.poolInvoicesQuarter.getAttribute('value')).toContain('03/31/2020');
  })


  it('should contain a receivables batch field', async () => {
    helperPage.click(memberCompanyPO.poolInvoicesReceivablesBatch)
    memberCompanyPO.poolInvoicesReceivablesBatch.sendKeys('554780');
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)

    expect(memberCompanyPO.poolInvoicesReceivablesBatch.getAttribute('value')).toContain('554780');
  })

  it('should contain an invoice date field', async () => {

    helperPage.click(memberCompanyPO.poolInvoicesDateField)
    memberCompanyPO.poolInvoicesDateField.sendKeys('06/30/2020');
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    helperPage.click(memberCompanyPO.poolInvoicesDateSelect)
    helperPage.click(memberCompanyPO.selectHighlightedDate)
    browser.sleep(1000)
    expect(memberCompanyPO.poolInvoicesDateField.getAttribute('value')).toContain('06/30/2020');
  })



  it('should contain an invoice due date field', async () => {
    helperPage.click(memberCompanyPO.poolInvoicesDueDateField)
    memberCompanyPO.poolInvoicesDueDateField.sendKeys('09/30/2020');
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    helperPage.click(memberCompanyPO.poolInvoicesDueDateSelect)
    helperPage.click(memberCompanyPO.selectHighlightedDate)
    browser.sleep(1000)
    expect(memberCompanyPO.poolInvoicesDueDateField.getAttribute('value')).toContain('09/30/2020');

  })

  it('should have a submit button', async () => {
    helperPage.waitUntilClickabilityOf(memberCompanyPO.submitButton)
  })

  it('should have a clear button', async () => {
    helperPage.waitUntilClickabilityOf(memberCompanyPO.clearButton)
  })

  it('should have a tab to download pool invoices', async () => {
    helperPage.click(memberCompanyPO.downloadPoolInvoicesTab)
  })

  it('should have field to enter pool invoices quarter', async () => {
    helperPage.click(memberCompanyPO.poolInvoicesQuarter)
  })

  xit('should have field a button to download PDF', async () => {
    helperPage.click(memberCompanyPO.downloadPoolInvoicesPdf)
  })

  it('should display a table of invoices', async () => {
    expect(memberCompanyPO.poolInvoicesDataTable.getText()).toContain("Group Code");
    expect(memberCompanyPO.poolInvoicesDataTable.getText()).toContain("Group Name");
    expect(memberCompanyPO.poolInvoicesDataTable.getText()).toContain("Invoices");
  })

  it('should have a tab to delete pool invoices', async () => {
    helperPage.waitUntilClickabilityOf(memberCompanyPO.deletePoolInvoicesTab);
    helperPage.click(memberCompanyPO.deletePoolInvoicesTab)
  })

  it('should have field to enter quarter to delete', async () => {
    //helperPage.waitUntilClickabilityOf(memberCompanyPO.deletePoolInvoicesQuarter);
    browser.wait(
      EC.invisibilityOf(element(by.css('p-progress-spinner-svg'))),
      5000,
      `Timed out waiting for spinner to not be visible.`)
    helperPage.waitUntilClickabilityOf(memberCompanyPO.deletePoolInvoicesQuarter);
    browser.sleep(6000)

    helperPage.click(memberCompanyPO.deletePoolInvoicesQuarter)
  })

  it('should have button to delete a pool invoice', async () => {
    helperPage.waitForVisibilityOf(memberCompanyPO.deletePoolInvoicesQuarter)
  })


  it('should have a tab to view RPRI Invoice Emails', async () => {
    helperPage.click(memberCompanyPO.rpriInvoiceTab)
  })

  it('should select a quarter', async () => {
    helperPage.click(memberCompanyPO.rpriInvoiceQuarter)
    memberCompanyPO.rpriInvoiceQuarter.sendKeys('06/30/2020')
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(memberCompanyPO.rpriInvoiceQuarter.getAttribute('value')).toContain('06/30/2020');
  })

  it('should select an action to send emails', async () => {
    helperPage.click(memberCompanyPO.rpriInvoiceAction)
    browser.sleep(1000)
    helperPage.click(memberCompanyPO.clearRpriInvoiceAction)
    browser.sleep(1000)

    helperPage.click(memberCompanyPO.clearRpriInvoiceAction)

    memberCompanyPO.rpriInvoiceAction.sendKeys('Send Emails')
    browser.sleep(1000)
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(memberCompanyPO.rpriInvoiceAction.getAttribute('value')).toContain('Send Emails');
  })

  it('should enter customer number', async () => {
    helperPage.click(memberCompanyPO.rpriInvoiceCustomerNumber)
    memberCompanyPO.rpriInvoiceCustomerNumber.sendKeys('123')
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(memberCompanyPO.rpriInvoiceCustomerNumber.getAttribute('value')).toContain('123');
  })

  xit('should enter customer name', async () => {
    helperPage.click(memberCompanyPO.rpriInvoiceCustomerNameInput)
    browser.sleep(1000)

    helperPage.click(memberCompanyPO.rpriInvoiceCustomerNameInput)
    browser.sleep(1000)
    memberCompanyPO.rpriInvoiceCustomerNameInput.sendKeys('Wilson Test')
    
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(10000)

    expect(memberCompanyPO.rpriInvoiceCustomerNameInput.getAttribute('value')).toContain('Wilson Test');
  })

  xit('should submit the form to send emails', async () => {
    helperPage.click(memberCompanyPO.rpriInvoiceSubmit)
  })

  it('clear the form', async () => {
    helperPage.click(memberCompanyPO.rpriInvoiceClear)
  })


  it('should have a tab to view Pool Invoices Summary', async () => {
    helperPage.click(memberCompanyPO.poolInvoicesSummaryTab)
  })

  it('should enter quarter from', async () => {
    browser.sleep(1000)
    helperPage.click(memberCompanyPO.poolInvoicesQuarterFrom)
    browser.sleep(1000)
    memberCompanyPO.poolInvoicesQuarterFrom.sendKeys('03/31/2022')
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(memberCompanyPO.poolInvoicesQuarterFrom.getAttribute('value')).toContain('03/31/2022');
  })

  it('should enter quarter to', async () => {
    browser.sleep(1000)
    helperPage.click(memberCompanyPO.poolInvoicesQuarterTo)
    browser.sleep(1000)
    memberCompanyPO.poolInvoicesQuarterTo.sendKeys('06/30/2022')
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(memberCompanyPO.poolInvoicesQuarterTo.getAttribute('value')).toContain('06/30/2022');
  })

  it('should press inquire button', async () => {
    helperPage.click(memberCompanyPO.poolInvoicesInquireButton)
  })

  it('should download Excel', async () => {
    helperPage.waitUntilClickabilityOf(memberCompanyPO.poolInvoicesDownloadExcel)
    browser.sleep(6000)
    helperPage.click(memberCompanyPO.poolInvoicesDownloadExcel)
  })

  it('should display a table of pool invoices', async () => {
    expect(memberCompanyPO.poolInvoicesDataTable.getText()).toContain("Pool");
    expect(memberCompanyPO.poolInvoicesDataTable.getText()).toContain("Payables Amount");
    expect(memberCompanyPO.poolInvoicesDataTable.getText()).toContain("Receivables Amount");
    expect(memberCompanyPO.poolInvoicesDataTable.getText()).toContain("Total");

  })

  it('should be accessible by URL', async () => {
    browser.get('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/member-company/pool-invoices');

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
    expect(element(by.cssContainingText('*', "Send Emails")).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('*', "Active")).isPresent()).toBeTruthy();
});



})
