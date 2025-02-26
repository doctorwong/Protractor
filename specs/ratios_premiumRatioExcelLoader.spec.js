var FlyOutPO = require('../page_objects/flyout.po');
const RatiosPO = require('../page_objects/ratios.po');
const { HelperPage } = require('../helpers/helper.page');
const { browser } = require('protractor');

describe('Ratios - Premium Ratio Excel Loader Page', () => {
    var flyOutPO
    var ratiosPO
    var helperPage

    beforeEach(async () => {
        ratiosPO = new RatiosPO();
        flyOutPO = new FlyOutPO();
        helperPage = new HelperPage();
    });

    it('should be accessible from the flyout menu', async () => {
        let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
        browser.get(url);
        browser.sleep(1000)
        helperPage.click(flyOutPO.flyoutButton);
        helperPage.waitUntilClickabilityOf(flyOutPO.selectRatios);
        browser.sleep(1000)

        browser.actions().mouseMove(flyOutPO.selectRatios).perform();
        browser.sleep(1000)

        helperPage.click(flyOutPO.selectRatioPremiumExcel)
        expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/ratio-set/premium-ratio-excel-loader');
    });

    it('should contain a link to download premium ratio excel', async () => {

        browser.sleep(1000)
        helperPage.click(ratiosPO.downloadExcel);
        browser.params.vOutputsFileName = ('PremiumRatioExcelLoader.xlsx');
        helperPage.waitforfiledownload(browser.params.DL_DIR + browser.params.vOutputsFileName);
    })


    xit('should download excel file', async () => {
        //xlData file is empty
        browser.params.xlData = '';
        var workbook = XLSX.readFile(browser.params.DL_DIR + browser.params.vOutputsFileName)
        var sheet_name_list = workbook.SheetNames;
        browser.params.xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list], { header: "A" });
        var vSheetName = ('NP4ExcelLoader')
        console.log('    Contents of ' + browser.params.vOutputsFileName + "  worksheet= " + vSheetName + '; ');
        console.log(browser.params.xlData);
        //expect(browser.params.xlData[0].A).toEqual('RPFS NP4 Data Loader');
    })

    xit('should contain a link to upload premium ratio excel', async () => {
        var fileToUpload = browser.params.DL_DIR + browser.params.vOutputsFileName;
        var absolutePath = path.resolve(fileToUpload);
        browser.sleep(5000)
        helperPage.waitUntilClickabilityOf(ratiosPO.uploadExcel)
        var input = element(by.css('input[type="file"]'));
        input.sendKeys(absolutePath);
    })

})
