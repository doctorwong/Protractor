const { SpecReporter } = require('jasmine-spec-reporter');
const HtmlReporter = require('protractor-beautiful-reporter');
const FS = require('fs');
const Path = require('path');
const DateTime = new Date(Date.now());
const DownloadsPath = Path.resolve(__dirname, './temp/downloads') + Path.sep;

if (FS.existsSync('./temp/downloads')) {
  FS.rmdirSync('./temp/downloads', { recursive: true });
}
FS.mkdirSync('./temp/downloads', { recursive: true });

if (FS.existsSync('./temp/test-results')) {
  FS.rmdirSync('./temp/test-results', { recursive: true });
}
FS.mkdirSync('./temp/test-results', { recursive: true });

exports.config = {
  resultJsonOutputFile: './temp/test-results/' + Path.basename(process.cwd()) + '-Results.json',
  allScriptsTimeout: 11000,    // 11000 is the default timeout in ms. Change as needed.
  getPageTimeout: 10000,    // 10000 is the default timeout in ms. Change as needed.
  params: {
    ENV: '',
    NCCI_ID: '',
    NCCI_PWD: '',
    AD_ID: '',
    AD_PWD: '',
    DL_DIR: DownloadsPath
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: [
    'specs/aggregation_ebnrExpenseRates.spec.js',
    'specs/aggregation_InquiryMod.spec.js',
    'specs/footer.spec.js',
    'specs/header.spec.js',
    'specs/indemnification_allocation.spec.js',
    'specs/indemnification_checkRequest.spec.js',
    'specs/indemnification_createAllocationAdjustments.spec',
    'specs/indemnification_createPoolLevelAdjustments.spec',
    'specs/indemnification.spec_allocationInquiryMod.spec',
    'specs/jobs_mcLoadToOracle.spec.js',
    'specs/launch_RPF.spec.ts',
    'specs/manager_dataLocks.spec.js',
    'specs/manager_PFDC.spec.js',
    'specs/manager_PIMS.spec.js',
    'specs/manager_refreshDatabase.spec.js',
    'specs/manager_servicingCarrierPaymentApproval.spec.js',
    'specs/page_navigation.spec.js',
    'specs/reports_callData.spec.js',
    'specs/servicingCarrier_np4ErrorManagement.spec.js',
    'specs/servicingCarrier_np4ExcelLoader.spec.js',
    'specs/servicingCarrier_np4InquiryMod.spec.js',
    'specs/servicingCarrier_payments.spec.js',
    'specs/servicingCarrier_scaRates.spec.js',
    'specs/servicingCarrier_scaRatesValidation.spec.js',
    'specs/servicingCarrier_loadToOracle.spec.js'
  ],

  suites: {


    homepage: [
      'specs/scenario_start.spec.ts',
      'specs/launch_RPF.spec.ts',
      'specs/header.spec.js',
      //'specs/footer.spec.js',
      'specs/manager_dashboard.spec.js'

    ],

    jobs: [
      'specs/scenario_start.spec.ts',
      'specs/launch_RPF.spec.ts',
      'specs/jobs_mcLoadToOracle.spec.js',
    ],

    manager: [
      'specs/scenario_start.spec.ts',
      'specs/launch_RPF.spec.ts',
      'specs/manager_dashboard.spec.js',
/*
      'specs/manager_PIMS.spec.js',
      'specs/manager_dataLocks.spec.js',
      'specs/manager_servicingCarrierPaymentApproval.spec.js',
      'specs/manager_deleteSets.spec.js'
*/
    ],

    servicing_carrier: [
      'specs/scenario_start.spec.ts',
      'specs/launch_RPF.spec.ts',

      'specs/servicingCarrier_np4ErrorManagement.spec.js',
      'specs/servicingCarrier_np4InquiryMod.spec.js',
   
      'specs/servicingCarrier_carrierInformation.spec.js',
      'specs/servicingCarrier_pfdcAttachments.spec.js',
            /*
      'specs/servicingCarrier_np4InquiryMod.spec.js',
      'specs/servicingCarrier_np4ExcelLoader.spec.js',
   'specs/servicingCarrier_np4Quarter.spec.ts',
      'specs/servicingCarrier_loadToOracle.spec.js',

      'specs/servicingCarrier_scaRates.spec.js',
      'specs/servicingCarrier_scaRatesValidation.spec.js',
      'specs/servicingCarrier_payments.spec.js',
     
                  */
    ],

    aggregation: [
      'specs/scenario_start.spec.ts',
      'specs/launch_RPF.spec.ts',

      'specs/aggregation_InquiryMod.spec.js',
      'specs/aggregation_ebnrExpenseRates.spec.js',

      'specs/aggregation_ProfitLossStatement.spec.js',
      'specs/aggregation_ProfitLossStatementComparison.spec.js',
    
    ],

    ratios: [
      'specs/scenario_start.spec.ts',
      'specs/launch_RPF.spec.ts',
      //'specs/ratios_ratioStaging.spec.js',
      //'specs/ratios_premiumAdjustment.spec.js',
      'specs/ratios_premiumRatioExcelLoader.spec.js',
      'specs/ratios_premiumRatioReport.spec.js',
    ],

    member_company: [
      'specs/scenario_start.spec.ts',
      'specs/launch_RPF.spec.ts',
      'specs/memberCompany_apPool.spec.js',
      /*
      'specs/memberCompany_specialDistribution.spec.js',
      'specs/memberCompany_mcLoadToOracle.spec.js',

      'specs/memberCompany_createDistribution.spec.js',
      'specs/memberCompany_createReapportionment.spec.js',
      'specs/memberCompany_residualMarketDTVIFiles.spec.js',

      'specs/memberCompany_poolInvoices.spec.js',
  
      'specs/memberCompany_apPool.spec.js'
      */
    ],

    call_data: [
      'specs/scenario_start.spec.ts',
      'specs/launch_RPF.spec.ts',


      'specs/callData_summarizedCallDataReport.spec.js',

      'specs/callData_detective.spec.js',
      'specs/callData_marketShareReports.spec.js',


      'specs/callData_sc_premium_for_contracts.spec.js',

      'specs/callData_firstTime.spec.js',
      'specs/callData_YoYAnalysis.spec.js',
      'specs/callData_PoolMembershipValidation.spec.js',
      /*
      'specs/callData_loadCallData.spec.js',

      'specs/callData_annualPremiumCallInquiryMod.spec.js',
      'specs/callData_premiumCallExcelLoader.spec.js',
      'specs/callData_callDataYearOverYearAnalysisReport.spec.js',
      'specs/callData_YoYAnalysis.spec.js',
*/


    ],

    indemnification: [
      'specs/scenario_start.spec.ts',
      'specs/launch_RPF.spec.ts',
      
      'specs/indemnification_paymentRequestInquire.spec.js',
      'specs/indemnification_allocationInquiryMod.spec',
      'specs/indemnification_createAllocationAdjustments.spec.js',
      
      'specs/indemnification_allocationStaging.spec.js',
      'specs/indemnification_createPoolLevelAdjustments.spec.js',
    ],

    audit: [
      'specs/scenario_start.spec.ts',
      'specs/launch_RPF.spec.ts',
      'specs/audit_billingRelationsAuditReport.spec.js',
      'specs/audit_poolLevelAdjustmentAuditReport.spec',
      'specs/audit_adminIncomeAuditReport.spec.js',
      'specs/audit_np4AuditReport.spec.js',
      'specs/audit_reserveAuditReport.spec.js',
      'specs/audit_reservesEbnrRateAuditReport.spec.js',
      'specs/audit_premiumCallAuditReport.spec.js',
      'specs/audit_pppApplicabilityAuditReport.spec.js',
      'specs/audit_pppApplicabilityAuditReport.spec.js',
      'specs/audit_pppAuditReport.spec.js',



    ],

    tools: [
      'specs/scenario_start.spec.ts',
      'specs/launch_RPF.spec.ts',
      /*
      'specs/tools_batchJobHistory.spec.js',
      'specs/tools_rpriRelease.spec.js',
      'specs/tools_administer.spec.js',
      */
      'specs/tools_analyst_assignments.spec.js',

    ],

    batch_job_test: [
      'specs/scenario_start.spec.ts',
      'specs/launch_RPF.spec.ts',
      'specs/memberCompany_createDistribution.spec.js',
      'specs/memberCompany_createReapportionment.spec.js',
      'specs/memberCompany_residualMarketDTVIFiles.spec.js',
      'specs/memberCompany_poolInvoices.spec.js',
    ],

  },

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--start-maximized', '--disable-web-security'],
      // args: [ '--headless', '--disable-gpu', '--window-size=1920,1080' ],
      prefs: {
        download: {
          prompt_for_download: false,
          default_directory: DownloadsPath
        }
      }
    }
  },
  directConnect: true,
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000,    // 30000 is the default timeout in ms. Change as needed.
    print: function () { }
  },
  onPrepare() {
    console.log('\n    * * * * *    ' + Path.basename(process.cwd()) + ' ' + browser.params.ENV + ' e2e run on ' + DateTime + '    * * * * *\n');
    require('ts-node').register({
      project: './tsconfig.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: 'raw' } }));
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: './temp/test-results/html-report',
      screenshotsSubfolder: 'images',
      jsonsSubfolder: 'jsons',
      docTitle: Path.basename(process.cwd()) + ' ' + browser.params.ENV + ' e2e run on ' + DateTime + ' Test Results',
      docName: Path.basename(process.cwd()) + '-Results.html',
      takeScreenShotsOnlyForFailedSpecs: true,
      preserveDirectory: false,
      clientDefaults: {
        showTotalDurationIn: 'belowHeader',
        totalDurationFormat: 'ms',
        columnSettings: {
          warningTime: 5000,
          dangerTime: 10000
        }
      }
    }).getJasmine2Reporter());
    // All the following are global setting:
    browser.waitForAngularEnabled(false);    // Set to true for testing an Angular app and turn off or on in code as needed
    SELENIUM_PROMISE_MANAGER: true    // Set to false to turn off control_flow when testing using async/await
    // browser.manage().timeouts().implicitlyWait(5000);    // For testing non-Angular apps without explicit waiting, e.g. wait for ExpectedConditions
  },
  onComplete() {
    browser.quit();
  }
}
