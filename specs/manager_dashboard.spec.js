const FlyOutPO = require('../page_objects/flyout.po');
const ManagerPO = require('../page_objects/manager.po');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');


describe('The Manager Pfdc Page', () => {
    var flyOutPO
    var managerPO
    var helperPage

    beforeEach(async () => {
        flyOutPO = new FlyOutPO();
        managerPO = new ManagerPO();
        helperPage = new HelperPage();
    });

    it('should display title of the application', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
        browser.get(url);
        browser.sleep(500)
        helperPage.waitForVisibilityOf(managerPO.carrierInformation)

        expect(element(by.cssContainingText('*', "Reinsurance Pools Financial System")).isPresent()).toBeTruthy();
    });

    it('should display a description of the application', async () => {
        expect(element(by.cssContainingText('*', "Utilized by Corporate Finance-RM the Reinsurance Pools Financial System is used to manage the Residual Market Pools. The application handles Pool financial reporting procedures, premium calls, quarterly distribution of operating results and all other financial administrative obligations.")).isPresent()).toBeTruthy();

    })

    it('should be able to access carrier information from the manager dashboard', async () => {
        helperPage.click(managerPO.carrierInformation);
        expect(browser.getCurrentUrl()).toContain('intraapps.ncci.com/rpf/#/servicing-carrier/carrier-information');
        helperPage.click(managerPO.home);
        expect(browser.getCurrentUrl()).toContain('intraapps.ncci.com/rpf/');
    })

    it('should be able to access NP4 Inquiry and Modification from the manager dashboard', async () => {
        helperPage.click(managerPO.np4InquiryMod);
        expect(browser.getCurrentUrl()).toContain('intraapps.ncci.com/rpf/#/servicing-carrier/np4-inquire');
        browser.sleep(1000)
        helperPage.click(managerPO.home);
        expect(browser.getCurrentUrl()).toContain('intraapps.ncci.com/rpf/');
    })

    xit('should be able to access Aggregation Inquiry and Modification from the manager dashboard', async () => {
        helperPage.click(managerPO.aggregationInquiryMod);
        expect(browser.getCurrentUrl()).toContain('intraapps.ncci.com/rpf/#/aggregation/aggregation-inquire');
        helperPage.click(managerPO.home);
        expect(browser.getCurrentUrl()).toContain('intraapps.ncci.com/rpf/');
    })

    xit('should be able to access Pool Invoices from the manager dashboard', async () => {
        helperPage.click(managerPO.poolInvoices);
        expect(browser.getCurrentUrl()).toContain('intraapps.ncci.com/rpf/#/member-company/pool-invoices');
        helperPage.click(managerPO.home);
        expect(browser.getCurrentUrl()).toContain('intraapps.ncci.com/rpf/');
    })

    it('should be able to access Batch Job History from the manager dashboard', async () => {
        helperPage.click(managerPO.batchJobHistory);
        expect(browser.getCurrentUrl()).toContain('intraapps.ncci.com/rpf/#/tools/batchJobHistory');
        browser.sleep(1000)
        helperPage.click(managerPO.rpfsHome);
        expect(browser.getCurrentUrl()).toContain('intraapps.ncci.com/rpf/');
    })

    xit('should be able to access SC Payment from the manager dashboard', async () => {
        helperPage.click(managerPO.scPayment);
        expect(browser.getCurrentUrl()).toContain('intraapps.ncci.com/rpf/#/tools/batchJobHistory');
        helperPage.click(managerPO.home);
        expect(browser.getCurrentUrl()).toContain('intraapps.ncci.com/rpf/');
    })

    xit('should be able to access Carrier Adjustment from the manager dashboard', async () => {
        helperPage.click(managerPO.carrierAdjustment);
        expect(browser.getCurrentUrl()).toContain('intraapps.ncci.com/rpf/#/tools/batchJobHistory');
        helperPage.click(managerPO.home);
        expect(browser.getCurrentUrl()).toContain('intraapps.ncci.com/rpf/');
    })

    xit('should be able to access Pool Level Adjustment from the manager dashboard', async () => {
        helperPage.click(managerPO.poolLevelAdjustment);
        expect(browser.getCurrentUrl()).toContain('intraapps.ncci.com/rpf/#/tools/batchJobHistory');
        helperPage.click(managerPO.home);
        expect(browser.getCurrentUrl()).toContain('intraapps.ncci.com/rpf/');
    })

    it('should be able to access Analyst Assignments', async () => {
        helperPage.click(managerPO.analystAssignments);
        expect(browser.getCurrentUrl()).toContain('intraapps.ncci.com/rpf/#/tools/analystAssignments');
        helperPage.click(managerPO.rpfsHome);
        expect(browser.getCurrentUrl()).toContain('intraapps.ncci.com/rpf/');
    })


    xit('should display trial balance', async () => {
        expect(element(by.cssContainingText('*', "Trial Balance")).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', "$")).isPresent()).toBeTruthy();

    })

    xit('should display current date', async () => {
        console.log(helperPage.getTodaysDate())
        expect(element(by.cssContainingText('*', helperPage.getTodaysDate())).isPresent()).toBeTruthy();
    })

    xit('should display boxes with zero items pending approval in grey', async () => {
        console.log(helperPage.getTodaysDate())
        expect(element(by.cssContainingText('*', helperPage.getTodaysDate())).isPresent()).toBeTruthy();
    })
})