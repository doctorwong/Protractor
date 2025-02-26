var FlyOutPO = require('../page_objects/flyout.po.js');
const ScaRatesValidationPO = require('../page_objects/sca_rates_validation.po.js');
const ScaRatesValidationScenarios = require('../page_data/sca_rates_validation_scenarios.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page.ts');

describe('The PFDC Attachments Page', () => {
    var flyOutPO
    var helperPage
    var scaRatesValidationPO
    var scaRatesValidationScenarios

    beforeEach(async () => {
        flyOutPO = new FlyOutPO();
        helperPage = new HelperPage();
        scaRatesValidationPO = new ScaRatesValidationPO();
        scaRatesValidationScenarios = new ScaRatesValidationScenarios();
    });

    it('should open when clicked', async () => {
            let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
            browser.get(url);
            browser.sleep(1000)
            helperPage.click(flyOutPO.flyoutButton);
            helperPage.waitUntilClickabilityOf(flyOutPO.selectServicingCarrier);
            browser.sleep(1000)
            helperPage.click(flyOutPO.selectServicingCarrier, 5000);
            browser.sleep(500)
            helperPage.click(flyOutPO.selectScaRatesValidation, 5000);
        })

    it('should have a quarter end date dropdown menu', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/servicing-carrier/sca-rates-validation';
        browser.get(url);
        helperPage.click(scaRatesValidationPO.quarterDropdown);
        //helperPage.click(scaRatesValidationPO.clearQuarter);
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
        
    })

    it('should have a selectable carrier dropdown menu', async () => {
        //helperPage.click(scaRatesValidationPO.clearCarrier);
        helperPage.click(scaRatesValidationPO.carrierDropdown);
        //scaRatesValidationPO.carrierDropdown.sendKeys(scaRatesValidationScenarios.carrier)
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()

        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
    })

    it('should have a selectable pool code dropdown menu', async () => {
        browser.sleep(1000)
        helperPage.click(scaRatesValidationPO.poolDropdown);
        //helperPage.click(scaRatesValidationPO.clearPool);
        //scaRatesValidationPO.poolDropdown.sendKeys(scaRatesValidationScenarios.pool)
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.actions().sendKeys(protractor.Key.TAB).perform()
    })

    it('should generate a table with columns for rate data', async () => {
        helperPage.waitForVisibilityOf(scaRatesValidationPO.dataTable)
        expect(scaRatesValidationPO.dataTable.getText()).toContain('Pool Code');
        expect(scaRatesValidationPO.dataTable.getText()).toContain('State');
        expect(scaRatesValidationPO.dataTable.getText()).toContain('Policy Year');
        expect(scaRatesValidationPO.dataTable.getText()).toContain('Gross Written Premium');
        expect(scaRatesValidationPO.dataTable.getText()).toContain('Uncollected Premium');
        expect(scaRatesValidationPO.dataTable.getText()).toContain('Net Premium');
        expect(scaRatesValidationPO.dataTable.getText()).toContain('Reported SCA Amount');
        expect(scaRatesValidationPO.dataTable.getText()).toContain('Carrier SCA Rate');
        expect(scaRatesValidationPO.dataTable.getText()).toContain('Table SCA Rate');
        expect(scaRatesValidationPO.dataTable.getText()).toContain('SCA Flat Fee');
        expect(scaRatesValidationPO.dataTable.getText()).toContain('Calculated SCA Amount');
        expect(scaRatesValidationPO.dataTable.getText()).toContain('Calculated Variance');
        expect(scaRatesValidationPO.dataTable.getText()).toContain('Pool Code');
    })

    xit('should have expandable table columns', async () => {
        expect(scaRatesValidationPO.dataTable.getText()).toContain(scaRatesValidationScenarios.poolCodeData);
    })

    xit('should generate table data', async () => {
        expect(scaRatesValidationPO.dataTable.getText()).toContain(scaRatesValidationScenarios.poolCodeData);
    })

    it('should have a clickable clear button', async () => {
        helperPage.click(scaRatesValidationPO.clearButton);
        expect(scaRatesValidationPO.dataTable.isDisplayed()).toBe(false)
    })
})