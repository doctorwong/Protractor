var FlyOutPO = require('../page_objects/flyout.po');
var ManagerPO = require('../page_objects/manager.po.js');
const { HelperPage } = require('../helpers/helper.page');
const { browser } = require('protractor');

describe('The Manager - Delete Sets page', () => {
    var flyOutPO
    var managerPO
    var helperPage

    beforeEach(async () => {
        managerPO = new ManagerPO();
        flyOutPO = new FlyOutPO();
        helperPage = new HelperPage();
    });

    it('should contain a link to Delete Sets from Manager tab', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
        browser.get(url);
        browser.sleep(1000)
        helperPage.click(flyOutPO.flyoutButton);
        browser.sleep(3000)
        helperPage.waitForVisibilityOf(flyOutPO.selectManager, 5000);
        browser.actions().mouseMove(flyOutPO.selectManager).perform();
        helperPage.click(flyOutPO.selectDeleteSets)
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/ratio-set/delete-sets');
    });

    xit('should be able to delete ratio set', async () => {
        helperPage.click(managerPO.deleteRatioSetField)
        //helperPage.click(managerPO.clearDeleteRatioSetField)
        managerPO.deleteRatioSetField.sendKeys('6141')
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        //expect(managerPO.deleteRatioSetField.getAttribute('value')).toContain('6141');
        browser.sleep(3000)
        expect(element(by.xpath("//button[@data-testid='submitbutton'][1]")).isPresent()).toBe(true);

        //helperPage.waitUntilClickabilityOf()

    })
    
    it('should be able to delete distribution', async () => {
        helperPage.click(managerPO.deleteDistributionField);
        //helperPage.click(managerPO.clearDeleteDistributionField);
        managerPO.deleteDistributionField.sendKeys("abc")
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        browser.sleep(3000)
        //expect(managerPO.deleteDistributionField.getAttribute('value')).toContain('abc');
        
        //helperPage.waitUntilClickabilityOf(managerPO.confirmDeleteDistribution)

      })

      xit('should be able to delete reapportionment', async () => {
        helperPage.click(managerPO.deleteReapportionmentField);
        //helperPage.click(managerPO.clearDeleteReapportionmentField);
        managerPO.deleteReapportionmentField.sendKeys("abc")
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        browser.sleep(3000)
        //expect(managerPO.deleteReapportionmentField.getAttribute('value')).toContain('abc');
        expect(element(by.xpath("//button[@data-testid='submitbutton'][1]")).isPresent()).toBe(true);
      })
})
