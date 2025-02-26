var FlyOutPO = require('../page_objects/flyout.po.js');
const ServicingCarrierPO = require('../page_objects/servicing_carrier.po');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page.ts');
//var XLSX = require('xlsx');
//const { BrowserStack } = require('protractor/built/driverProviders');

//needs direct link in QA
describe('The Carrier Information Page', () => {
    var flyOutPO
    var helperPage
    var servicingCarrierPO

    beforeEach(async () => {
        flyOutPO = new FlyOutPO();
        helperPage = new HelperPage();
        servicingCarrierPO = new ServicingCarrierPO();
    });

    it('should expand when clicked', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
        browser.get(url);
        browser.sleep(1000)
        helperPage.click(flyOutPO.flyoutButton);
        helperPage.waitUntilClickabilityOf(flyOutPO.selectServicingCarrier);
        browser.sleep(1000)
        browser.actions().mouseMove(flyOutPO.selectServicingCarrier).perform();
        browser.sleep(1000)
        helperPage.click(flyOutPO.selectCarrierInformation, 5000);
    })

    it('should have a carrier field', async () => {
        browser.sleep(5000)
        helperPage.waitForVisibilityOf(servicingCarrierPO.carrierInformationCarrier)
        helperPage.click(servicingCarrierPO.carrierInformationCarrier);
        browser.sleep(5000)
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()

        browser.sleep(1000)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        //expect(servicingCarrierPO.carrierInformationCarrier.getAttribute('value')).toContain('10014  -  HIGHLANDS UNDERWRITERS INS CO');


    })
    it('should have a carrier type field', async () => {
        helperPage.waitForVisibilityOf(servicingCarrierPO.carrierInformationType)
        helperPage.click(servicingCarrierPO.carrierInformationType);
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        //expect(servicingCarrierPO.carrierInformationType.getAttribute('value')).toContain('MC');
    })

    it('should display carrier information', async () => {
        helperPage.waitForVisibilityOf(servicingCarrierPO.information)

        browser.sleep(5000)
        //expect(element(by.cssContainingText('*', 'AMERICAN MOTORISTS INS CO')).isPresent()).toBeTruthy();
        //expect(element(by.cssContainingText('*', 'ONE KEMPER DRIVE')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'City')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'State')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Zip')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Contact Name')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Email')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Phone')).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', 'Status')).isPresent()).toBeTruthy();
    })
})
