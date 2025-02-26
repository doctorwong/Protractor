const FlyOutPO = require('../page_objects/flyout.po');
const EbnrPO = require('../page_objects/ebnr.po.js');
const EbnrScenarios = require('../page_data/ebnr_scenarios.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');


describe('The EBNR Page', () => {
    var flyOutPO
    var ebnrPO
    var helperPage
    var ebnrScenarios

    beforeEach(async () => {
        flyOutPO = new FlyOutPO();
        ebnrPO = new EbnrPO();
        helperPage = new HelperPage();
        ebnrScenarios = new EbnrScenarios();
    });

    it('should be accessible from the flyout menu', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
        browser.get(url);
        helperPage.click(flyOutPO.flyoutButton);
        
        helperPage.waitUntilClickabilityOf(flyOutPO.selectAggregation);
        browser.actions().mouseMove(flyOutPO.selectAggregation).perform();
        helperPage.click(flyOutPO.selectEBNR);
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/aggregation/ebnr');
    });

    it('should be able to select policy year', async () => {

        helperPage.waitUntilClickabilityOf(ebnrPO.policyYearDropdown);
        browser.sleep(1000)
        helperPage.click(ebnrPO.policyYearDropdown);
        ebnrPO.policyYearDropdown.sendKeys('2019');
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.sleep(1000);
        expect(ebnrPO.policyYearDropdown.getAttribute('value')).toContain('2019');

    })

    it('should be able to load SCS Admin Rates', async () => {
        browser.sleep(1000)
        helperPage.click(ebnrPO.loadScsAdminRates);
    })

    it('should display confirmation prompt', async () => {
        browser.sleep(1000)
        helperPage.click(ebnrPO.selectNo);
    })

    it('has a path to EBNR inquire and modification', async () => {
        helperPage.click(ebnrPO.inqModTab)
    })

    it('should have a selectable pool dropdown menu', async () => {
        helperPage.waitUntilClickabilityOf(ebnrPO.poolDropdown);
        browser.sleep(1000)
        helperPage.click(ebnrPO.poolDropdown);
        ebnrPO.poolDropdown.sendKeys(ebnrScenarios.pool);
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.sleep(1000);
        //browser.actions().sendKeys(protractor.Key.TAB).perform()
        expect(ebnrPO.poolDropdown.getAttribute('value')).toContain(ebnrScenarios.pool);


    })

    it('should have a selectable state dropdown menu', async () => {
        helperPage.click(ebnrPO.stateDropdown)
        ebnrPO.stateDropdown.sendKeys(ebnrScenarios.state);
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.sleep(1000);
        expect(ebnrPO.stateDropdown.getAttribute('value')).toContain(ebnrScenarios.state);

    })

    it('should have a selectable report dropdown menu', async () => {
        helperPage.click(ebnrPO.reportDropdown)
        ebnrPO.reportDropdown.sendKeys(ebnrScenarios.report);
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.sleep(1000);
        expect(ebnrPO.reportDropdown.getAttribute('value')).toContain(ebnrScenarios.report);

    })

    it('should have a selectable policy year dropdown menu', async () => {
        helperPage.click(ebnrPO.policyYearDropdown)
        ebnrPO.policyYearDropdown.sendKeys(ebnrScenarios.year);
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.sleep(1000);
        expect(ebnrPO.policyYearDropdown.getAttribute('value')).toContain(ebnrScenarios.year);

    })

    /*
    it('should have a clickable inquire button', async () => {
        helperPage.click(ebnrPO.inquireButton);
    })
    */

    xit('should display rate data', async () => {
        expect(element(by.cssContainingText('*', ebnrScenarios.poolDisplayed)).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', ebnrScenarios.reportDisplayed)).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', ebnrScenarios.yearDisplayed)).isPresent()).toBeTruthy();
        expect(element(by.cssContainingText('*', ebnrScenarios.stateDisplayed)).isPresent()).toBeTruthy();
        browser.sleep(3000)

    })

    xit('should be able to modify and save rate', async () => {
        if (browser.params.ENV != '') {
            //change rate
            helperPage.click(ebnrPO.modifyInput);

            ebnrPO.modifyInput.sendKeys(ebnrScenarios.testRate)
            helperPage.click(ebnrPO.saveRate);
        }
        else {
            console.log('Test skipped for production')
        }
    })

    it('should have a excel download button', async () => {
        helperPage.click(ebnrPO.excelDownload);
    })


    xit('should be able to delete rate', async () => {
        if (browser.params.ENV != '') {
            browser.sleep(3000)
            helperPage.click(ebnrPO.addButton);
        }
        else {
            console.log('Test skipped for production')
        }

    })

    xit('should be able to add rate', async () => {
        if (browser.params.ENV != '') {
            helperPage.click(ebnrPO.addButton);
        }
        else {
            console.log('Test skipped for production')
        }
    })

    it('should have a clickable clear button', async () => {
        helperPage.click(ebnrPO.clearButton);
        helperPage.waitUntilClickabilityOf(ebnrPO.poolDropdown);
        expect(ebnrPO.poolDropdown.getAttribute('value')).toContain('All');

    })
})
