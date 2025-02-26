var ReportPO = require('../page_objects/report.po');
const { browser, element } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');


describe('The Pave Navigation Section', () => {
    var reportPO
    var helperPage

    beforeEach(async () => {
        reportPO = new ReportPO();
        helperPage = new HelperPage();
    });

    it('should set up the page navigation section', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/reports/np4';
        browser.get(url);
        helperPage.waitForVisibilityOf(reportPO.quartersDropdown, 5000);
        reportPO.quartersDropdown.click();
        helperPage.waitForVisibilityOf(reportPO.selectQ4Report, 5000);
        helperPage.click(reportPO.selectQ4Report, 5000);
        helperPage.click(reportPO.selectQ3Report, 5000);
        helperPage.click(reportPO.selectQ2Report, 5000);
        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        helperPage.waitForVisibilityOf(reportPO.poolsDropdown, 5000);
        reportPO.poolsDropdown.click();
        helperPage.waitForVisibilityOf(reportPO.selectNM, 5000);
        reportPO.selectNational.click();
        browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
        reportPO.runQuery.click();
        helperPage.waitForVisibilityOf(reportPO.grossWrittenColumn, 25000);
    })


    it('should have clickable page navigation buttons with appropriate text at the bottom of the page', async () => {
        browser.actions().mouseMove(reportPO.nextPage).click().perform();
        helperPage.waitForVisibilityOf(reportPO.nextPage);
        helperPage.click(reportPO.nextPage)
        browser.sleep(10000)
        helperPage.click(reportPO.previousPage)
        browser.sleep(10000)
        helperPage.click(reportPO.lastPage)
        browser.sleep(10000)
        helperPage.click(reportPO.firstPage)
        browser.sleep(10000)
        helperPage.click(reportPO.dropdownPageSelect);
        var select10 = element(by.xpath("//li[contains(text(),'10')]"))
        helperPage.click(select10);
    })
})