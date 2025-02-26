var FlyOutPO = require('../page_objects/flyout.po');
var ManagerPO = require('../page_objects/manager.po.js');
const { HelperPage } = require('../helpers/helper.page');
const { browser } = require('protractor');

describe('The Manager Data Locks page', () => {
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
        helperPage.click(flyOutPO.selectDataLocks)
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/data-locks');
    });

    it('should have a quarter field', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/data-locks';
        browser.get(url);
        helperPage.click(managerPO.dataLocks_quarterField)
        managerPO.dataLocks_quarterField.sendKeys('06/30/2021')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
       
    })
    
    it('should have a lock year field', async () => {
        helperPage.click(managerPO.dataLocks_yearField)
        managerPO.dataLocks_yearField.sendKeys('2020')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
    })

    it('should have a clickable NP4 lock', async () => {
        helperPage.waitUntilClickabilityOf(managerPO.dataLocks_np4Lock)
    })

    it('should have a clickable aggregate lock', async () => {
        helperPage.waitUntilClickabilityOf(managerPO.aggregateLock)
    })
       
    it('should have a clickable call year lock', async () => {
        helperPage.waitUntilClickabilityOf(managerPO.callYearLock)
    })

    it('should have a clickable billing relations lock', async () => {
        helperPage.waitUntilClickabilityOf(managerPO.billingRelationsLock)
    })

    it('should have a clickable ebnr rates lock', async () => {
        helperPage.waitUntilClickabilityOf(managerPO.ebnrRatesLock)
    })
})
