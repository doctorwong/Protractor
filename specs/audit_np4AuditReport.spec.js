const FlyOutPO = require('../page_objects/flyout.po');
const EbnrPO = require('../page_objects/ebnr.po.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');



describe('The NP4 Audit Report', () => {
    var flyOutPO
    var ebnrPO
    var helperPage

    beforeEach(async () => {
        flyOutPO = new FlyOutPO();
        ebnrPO = new EbnrPO();
        helperPage = new HelperPage();
    });

    it('should be accessible from the flyout menu', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
        browser.get(url);
        helperPage.click(flyOutPO.flyoutButton);
        helperPage.waitUntilClickabilityOf(flyOutPO.selectAudit);
        browser.sleep(3000)
        browser.actions().mouseMove(flyOutPO.selectAudit).perform();
        helperPage.click(flyOutPO.selectBillingRelationsAudit);
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/billing-relations-audit');
    });

    it('should show column titles', async () => {
        expect(element(by.cssContainingText('*', 'Update Type')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'New Value')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Old Value')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Updated by Name')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Last Updated Date')).isPresent()).toBeTruthy();
    })

    xit('should show recent updates', async () => {
        expect(element(by.cssContainingText('*', 'DELETE')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'DELETED')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'INSERT')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Group')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Carrier')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Year')).isPresent()).toBeTruthy();
    })

    it('should have a excel download button', async () => {
        helperPage.click(ebnrPO.excelDownload);
    })

})