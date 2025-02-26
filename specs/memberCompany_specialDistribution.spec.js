const FlyOutPO = require('../page_objects/flyout.po');
const JobsPO = require('../page_objects/jobs.po');
const MemberCompanyPO = require('../page_objects/member_company.po');

var XLSX = require('xlsx')
var path = require('path');
const { browser } = require('protractor');
const { HelperPage } = require('../helpers/helper.page');


describe('The Member Company Special Distribution/Reapportionment Loader Page', () => {
  var flyOutPO
  var jobsPO
  var memberCompanyPO
  var helperPage

  beforeEach(async () => {
    flyOutPO = new FlyOutPO();
    jobsPO = new JobsPO();
    helperPage = new HelperPage();
    memberCompanyPO = new MemberCompanyPO();
  });

  it('should be accessible from the flyout menu', async () => {
    let url = 'http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/';
  
    browser.get(url);
    helperPage.click(flyOutPO.flyoutButton);
    helperPage.waitUntilClickabilityOf(flyOutPO.selectMemberCompany);
    browser.sleep(1000)

    browser.actions().mouseMove(flyOutPO.selectMemberCompany).perform();
    helperPage.waitForVisibilityOf(flyOutPO.selectSpecialDistributionLoader, 5000);
    browser.sleep(1000)

    helperPage.click(flyOutPO.selectSpecialDistributionLoader);
    expect(browser.getCurrentUrl()).toEqual('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/member-company/special-distribution-reapp-excel-loader');
  });


  it('should contain a link to download special distribution reapportionment excel loader', async () => {
    browser.get('http://' + browser.params.ENV + 'intraapps.ncci.com/rpf/#/member-company/special-distribution-reapp-excel-loader');
    browser.sleep(1000)
    helperPage.click(memberCompanyPO.specialDistributionDownload);
    browser.params.vOutputsFileName = ('SpecialDistributionReapportionmentExcelLoader.xlsx');
    helperPage.waitforfiledownload(browser.params.DL_DIR + browser.params.vOutputsFileName);
  })
  

  it('should contain a link to download special distribution reapportionment excel loader', async () => {
    //xlData file is empty
    browser.params.xlData = '';
    var workbook = XLSX.readFile(browser.params.DL_DIR + browser.params.vOutputsFileName)
    var sheet_name_list = workbook.SheetNames;
    browser.params.xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list], { header: "A" });
    var vSheetName = ('SpecialDistributionReapportionmentExcelLoader')
    console.log('    Contents of ' + browser.params.vOutputsFileName + "  worksheet= " + vSheetName + '; ');
    console.log(browser.params.xlData);  
    //expect(browser.params.xlData[0].A).toEqual('RPFS NP4 Data Loader');
  })

  xit('should contain a link to upload special distribution reapportionment excel loader', async () => {
    browser.sleep(1000)
    helperPage.waitUntilClickabilityOf(memberCompanyPO.specialDistributionUpload);
    browser.sleep(5000)

  })
})