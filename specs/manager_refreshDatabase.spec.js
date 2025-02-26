var FlyOutPO = require('../page_objects/flyout.po');
const { HelperPage } = require('../helpers/helper.page');
const { browser } = require('protractor');

describe('The Manager Refresh Database page', () => {
    var flyOutPO
    var helperPage

    beforeEach(async () => {
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
        helperPage.waitUntilClickabilityOf(flyOutPO.selectManager);
        browser.actions().mouseMove(flyOutPO.selectManager).perform();
        helperPage.click(flyOutPO.selectRefreshDatabase)
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/migrate-data');
    });

    it('should have a refresh database button', async () => {
        browser.sleep(5000)
        //helperPage.waitForVisibilityOf(element(by.xpath("//button[contains(text(),'Refresh Database')]")), 5000);
        expect(element(by.xpath("//button[contains(text(),'Refresh Database')]")).isPresent()).toBe(true);
    })
    
    it('should have a description for the refresh database page', async () => {
        expect(element(by.cssContainingText('*', 'Refreshing the database will delete all data in the MariaDb database and then copy data from the Oracle/Qlik database to the MariaDb database.')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'not reversible.')).isPresent()).toBeTruthy();
    });
})
