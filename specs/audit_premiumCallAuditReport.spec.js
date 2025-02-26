const FlyOutPO = require('../page_objects/flyout.po');
const AuditPO = require('../page_objects/audit.po.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');

describe('The Premium Call Audit REport', () => {
    var flyOutPO
    var auditPO
    var helperPage

    beforeEach(async () => {
        flyOutPO = new FlyOutPO();
        auditPO = new AuditPO();
        helperPage = new HelperPage();
    });

    it('should be accessible from the flyout menu', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
        browser.get(url);
        helperPage.click(flyOutPO.flyoutButton);
        helperPage.waitUntilClickabilityOf(flyOutPO.selectAudit);
        browser.sleep(3000)
        browser.actions().mouseMove(flyOutPO.selectAudit).perform();
        helperPage.click(flyOutPO.selectPremiumCallAudit);
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/premium-call-audit');
    });

    it('should have a field to select call year', async () => {
        helperPage.waitUntilClickabilityOf(auditPO.callYearDropdown);
    })

    it('should have a field to select state code', async () => {
        helperPage.waitUntilClickabilityOf(auditPO.stateCodeDropdown);
    })

    it('should have a field to select carrier', async () => {
        helperPage.waitUntilClickabilityOf(auditPO.carrierDropdown);
    })

    it('should have a field to select updated by', async () => {
        helperPage.waitUntilClickabilityOf(auditPO.updatedByDropdown);
    })

    it('should have a button run query', async () => {
        helperPage.waitForVisibilityOf(auditPO.runQueryButton);
    })

    it('should have a button to clear', async () => {
        helperPage.waitUntilClickabilityOf(auditPO.clearButton);
    })
})
