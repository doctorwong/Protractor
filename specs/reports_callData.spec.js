var FlyOutPO = require('../page_objects/flyout.po');
const CallDataPO = require('../page_objects/call_data.po');
const ReportsScenarios = require('../page_data/reports_scenarios.js');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');
var XLSX = require('xlsx')

describe('The Call Data Report', () => {
  var flyOutPO
  var callDataPO
  var reportsScenarios
  var helperPage
  


  beforeEach(async () => {
    flyOutPO = new FlyOutPO();
    callDataPO = new CallDataPO();
    reportsScenarios = new ReportsScenarios();
    helperPage = new HelperPage();
  });

  it('should contain a link to a Call Data from the Reports tab', async () => {
    let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
    browser.get(url);
    helperPage.click(flyOutPO.flyoutButton);
    helperPage.waitUntilClickabilityOf(flyOutPO.selectReports);
    browser.actions().mouseMove(flyOutPO.selectReports).perform();
    helperPage.click(flyOutPO.selectCallDataReport);
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/reports/call-data');
  });

  it('should have a policy year dropdown menu', async () => {
    helperPage.click(callDataPO.policyYearDropdown);
    helperPage.click(reportsScenarios.policyYearSelect);
  })

  it('should have a # of years dropdown menu', async () => {
    helperPage.click(callDataPO.yearsDropdown);
    helperPage.click(reportsScenarios.yearsSelect);
  })

  /*obsolete
  it('should have a draggable year slider', async () => {
    helperPage.waitForVisibilityOf(callDataPO.yearSlider);
    var slider = $('.MuiSlider-root.MuiSlider-colorPrimary.MuiSlider-marked');
    var max_years = slider.element(by.xpath("//span[@data-index='3']"))
    max_years.click();
  })
  */

  it('should have a dropdown menu for state', async () => {
    helperPage.waitForVisibilityOf(callDataPO.poolStatesDropdown);

    var scrollIntoView = function (element) {
      return browser.executeScript(function (element) {
        element.scrollIntoView();
      }, element.getWebElement());
    };
    helperPage.click(callDataPO.poolStatesDropdown);
    browser.sleep(1000)
    scrollIntoView(element(by.name('TN')));
    helperPage.waitForVisibilityOf(element(by.name('TN')))
    helperPage.click(element(by.name('TN')));
  })

  it('should have a button to run a query', async () => {
    helperPage.waitForVisibilityOf(callDataPO.runQueryButton);
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
    helperPage.click(callDataPO.runQueryButton);
  })

  it('should have a button to downoad excel', async () => {
    helperPage.waitUntilClickabilityOf(callDataPO.excelDownload);
    helperPage.click(callDataPO.excelDownload);
    browser.params.vOutputsFileName = ('Call Data Year Over Year Analysis Report.xlsx');
    helperPage.waitforfiledownload(browser.params.DL_DIR + browser.params.vOutputsFileName);
  })

  it('should validate downloaded excel file', async () => {
    browser.params.xlData = '';
    var workbook = XLSX.readFile(browser.params.DL_DIR + browser.params.vOutputsFileName)
    var sheet_name_list = workbook.SheetNames;
    browser.params.xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list], { header: "A" });

    //focus on one good report
    var vSheetName = ('Call data YoY Report')

    //columns
    expect(browser.params.xlData[0].A).toEqual('id');
    expect(browser.params.xlData[1].B).toEqual("Alternate Equivalent");
    expect(browser.params.xlData[2].B).toEqual('Direct Assignment');
    expect(browser.params.xlData[3].B).toEqual('Excess');
    expect(browser.params.xlData[4].B).toEqual('Exemptions');
    expect(browser.params.xlData[5].B).toEqual('Kansas Municipalities');
    expect(browser.params.xlData[6].B).toEqual('Large Deductible');
    expect(browser.params.xlData[7].B).toEqual('Mass VDAC Adjustment');
    expect(browser.params.xlData[8].B).toEqual('Misc Adjustment One');
    expect(browser.params.xlData[9].B).toEqual('Misc Adjustment Two');
    expect(browser.params.xlData[10].B).toEqual('National Defense');
    expect(browser.params.xlData[11].B).toEqual('Net Change in Deferred');
    expect(browser.params.xlData[12].B).toEqual('New Jersey Home');
    expect(browser.params.xlData[13].B).toEqual('New Mexico Small Policies');
    expect(browser.params.xlData[14].B).toEqual('Other State Incentive Program');
    expect(browser.params.xlData[15].B).toEqual('Pool Servicing Carrier');
    expect(browser.params.xlData[16].B).toEqual('Take Out Credit Program');
    expect(browser.params.xlData[17].B).toEqual('USLH');
    expect(browser.params.xlData[18].B).toEqual('Workers Comp Direct');

    /*
    //data validation - implement later
    expect(browser.params.xlData[0].C).toEqual('year2012');
    expect(browser.params.xlData[1].C).toEqual(0);
    expect(browser.params.xlData[2].C).toEqual(0);
    expect(browser.params.xlData[3].C).toEqual(70296);
    expect(browser.params.xlData[4].C).toEqual(0);
    expect(browser.params.xlData[5].C).toEqual(0);
    expect(browser.params.xlData[6].C).toEqual(0);
    expect(browser.params.xlData[7].C).toEqual(0);
    expect(browser.params.xlData[8].C).toEqual(0);
    expect(browser.params.xlData[9].C).toEqual(0);
    expect(browser.params.xlData[10].C).toEqual(-3872982);
    expect(browser.params.xlData[11].C).toEqual(0);
    expect(browser.params.xlData[12].C).toEqual(0);
    expect(browser.params.xlData[13].C).toEqual(0);
    expect(browser.params.xlData[14].C).toEqual(0);
    expect(browser.params.xlData[15].C).toEqual(0);
    expect(browser.params.xlData[16].C).toEqual(0);
    expect(browser.params.xlData[17].C).toEqual(447212);
    expect(browser.params.xlData[18].C).toEqual(839933497);
    */

    /*
    expect(browser.params.xlData[3].I).not.toEqual(0);
    */
    console.log('    Contents of ' + browser.params.vOutputsFileName + "  worksheet= " + vSheetName + '; ');
    console.log(browser.params.xlData);
  });

  it('should contain a table with a button to open graph', async () => {

    //helperPage.click(callDataPO.openGraph);
    helperPage.waitForVisibilityOf(callDataPO.openGraph);
    expect(callDataPO.openGraph.isPresent()).toBe(true);
    helperPage.click(callDataPO.openGraph);

  })

  it('should have a button to close graph and return to report', async () => {
    helperPage.click(callDataPO.closeGraph);
  })

  it('should have an arrow buttons to navigate to the call data by carrier page', async () => {
    helperPage.click(callDataPO.forwardButton);
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/reports/call-data-by-carrier');
    //check for columns: carrier #, carrier, year, $ change, % change

  })

  it('should have an buttons to navigate to return to the report', async () => {
    helperPage.click(callDataPO.backButton);
  })

  it('should generate a table after Run Query button is pressed', async () => {
    expect(callDataPO.fieldNameColumn.isPresent()).toBe(true);
    expect(callDataPO.yearColumn.isPresent()).toBe(true);
    expect(callDataPO.dollarChange.isPresent()).toBe(true);
    expect(callDataPO.percentChange.isPresent()).toBe(true);
  })

})
