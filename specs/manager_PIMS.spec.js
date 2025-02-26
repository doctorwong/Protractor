const FlyOutPO = require('../page_objects/flyout.po');
const ManagerPIMSPO = require('../page_objects/manager_pims.po.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');


describe('The Manager PIMS Page', () => {
    var flyOutPO
    var managerPIMSPO
    var helperPage

    
    beforeEach(async () => {
        flyOutPO = new FlyOutPO();
        managerPIMSPO = new ManagerPIMSPO();
        helperPage = new HelperPage();
    });

    it('should be accessible from the flyout menu', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
        browser.get(url);
        browser.sleep(1000)

        helperPage.click(flyOutPO.flyoutButton);
        browser.sleep(1000)

        helperPage.waitUntilClickabilityOf(flyOutPO.selectManager);
        browser.actions().mouseMove(flyOutPO.selectManager).perform();
        browser.sleep(1000)
        helperPage.click(flyOutPO.selectPIMS);
        //expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/indemnification/pims');
    });

    it('should allow a user to enter a range of quarter end dates', async () => {
        browser.sleep(3000)
        helperPage.waitUntilClickabilityOf(managerPIMSPO.quarterStartField)
        helperPage.click(managerPIMSPO.quarterStartField);
        managerPIMSPO.quarterStartField.sendKeys("12/31/2020");
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        browser.sleep(3000)
        helperPage.waitUntilClickabilityOf(managerPIMSPO.quarterEndField)
        helperPage.click(managerPIMSPO.quarterEndField);
        //managerPIMSPO.quarterEndField.sendKeys("12/31/2021");
        browser.actions().sendKeys(protractor.Key.ENTER).perform()


    })

    it('should allow a user to enter a load indemnification data from PIMS', async () => {
        //browser.get('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/indemnification/pims');
        browser.sleep(3000)

        helperPage.waitUntilClickabilityOf(managerPIMSPO.loadIndemnificationData)
        //helperPage.click(managerPIMSPO.loadIndemnificationData);
    })

})