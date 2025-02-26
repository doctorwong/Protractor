const FlyOutPO = require('../page_objects/flyout.po');
const InquireModPO = require('../page_objects/np4_inquire_mod.po');
const Np4InquireScenarios = require('../page_data/np4_inquire_scenarios.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');


describe('The NP4 Inquiry and Mod Page', () => {
  var flyOutPO
  var inquireModPO
  var helperPage
  var np4InquireScenarios

  beforeEach(async () => {
    flyOutPO = new FlyOutPO();
    inquireModPO = new InquireModPO();
    helperPage = new HelperPage();
    np4InquireScenarios = new Np4InquireScenarios();
  });

  it('should be accessible from the flyout menu', async () => {
    let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
    
    browser.get(url);
    helperPage.waitUntilClickabilityOf(flyOutPO.flyoutButton);
    browser.sleep(1000)
    helperPage.click(flyOutPO.flyoutButton);
    browser.sleep(1000)
    helperPage.waitUntilClickabilityOf(flyOutPO.selectServicingCarrier);
    browser.actions().mouseMove(flyOutPO.selectServicingCarrier).perform();
    browser.sleep(1000)
    helperPage.click(flyOutPO.selectInquiryMod);
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/servicing-carrier/np4-inquire');
  });

  it('should have a selectable quarter dropdown menu', async () => {
    browser.sleep(3000)
    helperPage.click(inquireModPO.quarterDropdown);
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
    browser.sleep(1000)

    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)
    //expect(inquireModPO.quarterDropdown.getAttribute('value')).toContain('03/31/2023');

  })

  it('should have a selectable pool code dropdown menu', async () => {
    browser.sleep(3000)
    helperPage.click(inquireModPO.poolCodeDropdown)
    helperPage.click(inquireModPO.clearPoolDropdown);
    browser.sleep(1000)

    inquireModPO.poolCodeDropdown.sendKeys(np4InquireScenarios.pool)
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)
    expect(inquireModPO.poolCodeDropdown.getAttribute('value')).toContain(np4InquireScenarios.pool);


     })

  it('should have a selectable state dropdown menu', async () => {
    browser.sleep(3000)
    helperPage.click(inquireModPO.stateDropdown)
    helperPage.click(inquireModPO.clearStateDropdown);
    browser.sleep(1000)

    inquireModPO.stateDropdown.sendKeys(np4InquireScenarios.state)
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)
    expect(inquireModPO.stateDropdown.getAttribute('value')).toContain(np4InquireScenarios.state);


  })

  it('should have a selectable report code dropdown menu', async () => {
    //let reportCodeDropdown = element(by.id("ReportCode"))
    helperPage.waitForVisibilityOf(inquireModPO.reportCodeDropdown)

    browser.sleep(3000)
    helperPage.click(inquireModPO.reportCodeDropdown)
    browser.sleep(1000)

    helperPage.click(inquireModPO.clearReportCodeDropdown)
    browser.sleep(1000)

    inquireModPO.reportCodeDropdown.sendKeys(np4InquireScenarios.reportCode)
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)
    expect(inquireModPO.reportCodeDropdown.getAttribute('value')).toContain(np4InquireScenarios.reportCode);

  })

  it('should have a selectable policy year dropdown menu', async () => {
    browser.sleep(3000)
    helperPage.waitForVisibilityOf(inquireModPO.policyYearDropdown)
    helperPage.click(inquireModPO.policyYearDropdown)
    helperPage.click(inquireModPO.clearPolicyYearDropdown)
    browser.sleep(1000)

    helperPage.click(inquireModPO.clearPolicyYearDropdown)
    inquireModPO.policyYearDropdown.sendKeys(np4InquireScenarios.policyYear)
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)

    expect(inquireModPO.policyYearDropdown.getAttribute('value')).toContain(np4InquireScenarios.policyYear);


  })



  it('should have a selectable carrier dropdown menu', async () => {
    browser.sleep(3000)
    helperPage.click(inquireModPO.carrierDropdown)
    helperPage.click(inquireModPO.clearCarrierDropdown)
    browser.sleep(1000)

    inquireModPO.carrierDropdown.sendKeys(np4InquireScenarios.carrier)
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    browser.sleep(1000)

    expect(inquireModPO.carrierDropdown.getAttribute('value')).toContain(np4InquireScenarios.carrier);



  })

  it('should have a selectbale transaction type dropdown menu', async () => {
    browser.sleep(3000)
    helperPage.click(inquireModPO.transactionTypeDropdown)
    helperPage.click(inquireModPO.clearTransactionTypeDropdown)
    browser.sleep(1000)

    inquireModPO.transactionTypeDropdown.sendKeys(np4InquireScenarios.transactionType)
    browser.actions().sendKeys(protractor.Key.ENTER).perform()
    browser.actions().sendKeys(protractor.Key.TAB).perform()
    expect(inquireModPO.transactionTypeDropdown.getAttribute('value')).toContain(np4InquireScenarios.transactionType);

  })

  it('should have a clickable inquire button', async () => {
    helperPage.click(inquireModPO.inquireButton);
  })


  xit('should display the correct information', async () => {

    helperPage.waitForPresenceOf(inquireModPO.displayResults)
    expect(inquireModPO.displayResults.getText()).toContain('Net Balance Due (Carrier)/Pool:'); 
    expect(inquireModPO.displayResults.getText()).not.toEqual('Net Balance Due (Carrier)/Pool: $0.00'); 

    //TO DO check totals for accident year
    expect(element(by.cssContainingText('.np4-inquire_dataBox__13kIK', 'Premium')).isPresent()).toBeTruthy(); 
    expect(element(by.cssContainingText('.np4-inquire_dataBox__13kIK', 'Ceded Premium')).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('.np4-inquire_dataBox__13kIK', 'Unearned Reserve')).isPresent()).toBeTruthy(); 
    expect(element(by.cssContainingText('.np4-inquire_dataBox__13kIK', 'Uncollected')).isPresent()).toBeTruthy(); 
    expect(element(by.cssContainingText('.np4-inquire_dataBox__13kIK', 'Escrow')).isPresent()).toBeTruthy();

    expect(element(by.cssContainingText('.col-lg-6', 'Paid Losses - Accident Year')).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('.np4-inquire_dataBox__13kIK', 'Current')).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('.np4-inquire_dataBox__13kIK', 'Subsequent')).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('.np4-inquire_dataBox__13kIK', 'Total')).isPresent()).toBeTruthy();

    expect(element(by.cssContainingText('.np4-inquire_dataBox__13kIK', 'Expenses')).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('.np4-inquire_dataBox__13kIK', 'Servicing Carrier Allow')).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('.np4-inquire_dataBox__13kIK', 'Misc Expenses')).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('.np4-inquire_dataBox__13kIK', 'Producer Fees')).isPresent()).toBeTruthy();
    
    
    expect(element(by.cssContainingText('.col-lg-6', 'Outstanding Losses - Accident Year')).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('.np4-inquire_dataBox__13kIK', 'Current')).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('.np4-inquire_dataBox__13kIK', 'Subsequent')).isPresent()).toBeTruthy();
    expect(element(by.cssContainingText('.np4-inquire_dataBox__13kIK', 'Total')).isPresent()).toBeTruthy();
  })

  //disable for production
  xit('should allow user to modify data', async () => {

    if (browser.params.ENV === 'dev') {
      helperPage.click(inquireModPO.editButton);
      browser.sleep(1000) 
      inquireModPO.modifyCededPremium.sendKeys('1.00')   
      inquireModPO.modifyUnearnedReserve.sendKeys('1.00')   
      browser.sleep(1000) 
      helperPage.click(inquireModPO.editButton);
  }
  else {
      console.log("Test skipped for production")
  }

  })

  it('should allow user clear inquiry', async () => {
    if  (browser.params.ENV == 'dev') {
      browser.sleep(1000) 
      helperPage.click(inquireModPO.clearButton);
    }
    else {
      console.log("Test skipped for production")
  }
  })
})




