var FlyOutPO = require('../page_objects/flyout.po');
var ManagerPO = require('../page_objects/manager.po.js');
const { HelperPage } = require('../helpers/helper.page');
const { browser } = require('protractor');

describe('The Manager - Billing Relations page', () => {
    var flyOutPO
    var managerPO
    var helperPage

    beforeEach(async () => {
        managerPO = new ManagerPO();
        flyOutPO = new FlyOutPO();
        helperPage = new HelperPage();
    });

    it('should contain a link to Refresh Database from the Manager tab', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
        browser.get(url);
        browser.sleep(1000)
        helperPage.click(flyOutPO.flyoutButton);
        browser.sleep(3000)
        helperPage.waitForVisibilityOf(flyOutPO.selectManager, 5000);
        browser.actions().mouseMove(flyOutPO.selectManager).perform();
        helperPage.click(flyOutPO.selectBillingRelations)
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/billing-relations');
    });

    it('should have a policy year dropdown', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/data-locks';
        browser.get(url);
        helperPage.click(managerPO.billingRelations_policyYearDropdown)
        helperPage.click(managerPO.clearBillingRelations_policyYearDropdown)
        managerPO.billingRelations_policyYearDropdown.sendKeys('2015')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
       
    })
    
    it('should have a group code dropdown', async () => {
        helperPage.click(managerPO.billingRelations_groupCodeDropdown)
        helperPage.click(managerPO.clearBillingRelations_groupCodeDropdown)
        managerPO.billingRelations_groupCodeDropdown.sendKeys('10804  -  TRAVELERS INSURANCE CO')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
    })

    it('should have a carrier dropdown', async () => {
        helperPage.click(managerPO.billingRelations_carrierDropdown)
        helperPage.click(managerPO.clearBillingRelations_carrierDropdown)
        managerPO.billingRelations_groupCodeDropdown.sendKeys('10804  -  TRAVELERS INSURANCE CO')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
    })

    it('should have a copy button', async () => {
        helperPage.click(managerPO.billingRelations_copyButton)
        helperPage.click(managerPO.billingRelations_copyYearInput)
        managerPO.billingRelations_copyYearInput.sendKeys('2016')
    })
       
    it('should have an excel download button', async () => {
        helperPage.click(managerPO.billingRelations_excelDownload)
    })

    it('should display a list of groups for the selected criteria', async () => {
        expect(managerPO.billingRelations_groupTable.getText()).toContain('Group');
    })

    it('have a button to add a group', async () => {
        helperPage.click(managerPO.billingRelations_addGroup)
    })

    it('have a button to delete a group', async () => {
        helperPage.click(managerPO.billingRelations_deleteGroup)
    })

    it('should have a dropdown to show carriers', async () => {
        helperPage.click(managerPO.billingRelations_expandGroup)
    })

    it('should have a button to add a carrier', async () => {
        helperPage.waitUntilClickabilityOf(managerPO.billingRelations_addCarrier)
    })

    it('should have a button to delete a carrier', async () => {
        helperPage.waitUntilClickabilityOf(managerPO.billingRelations_deleteCarrier)
    })
})
