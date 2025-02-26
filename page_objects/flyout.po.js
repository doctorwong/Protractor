var FlyOutPO = function () { }

FlyOutPO.prototype = Object.create({}, {

    flyoutButton: { get: function () { return $$('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeStart.MuiIconButton-sizeLarge.css-t0lpjh').get(0) } },
    
        
        //$('[data-testid="MenuIcon"]') } },
    selectManager: { get: function () { return $('[data-testid="Manager"]') } },
    selectPfdc: { get: function () { return $('[data-testid="PFDC"]') } },
    selectPIMS: { get: function () { return $('[data-testid="PIMS"]') } },
    selectDataLocks: { get: function () { return $('[data-testid="Manage Data Locks"]') } },
    selectSCPaymentApproval: { get: function () { return $('[data-testid="Servicing Carrier Payment Approval"]') } },
    selectDeleteSets: { get: function () { return $('[data-testid="Delete Sets"]') } },

    selectServicingCarrier: { get: function () { return $('[data-testid="Servicing Carrier"]') } },
    selectInquiryMod: { get: function () { return $('[data-testid="NP4 Inquiry and Mod"]') } },
    selectErrorManagement: { get: function () { return $('[data-testid="NP4 Error Management"]') } },
    selectNP4ExcelLoader: { get: function () { return $('[data-testid="NP4 Excel Loader"]') } },
    selectQuarterToQuarterReport: { get: function () { return $('[data-testid="NP4 Quarter to Quarter Comparison Report"]') } },
    selectScLoadToOracle: { get: function () { return $('[data-testid="SC Load To Oracle"]') } },
    selectScaRates: { get: function () { return $('[data-testid="SCA Rates"]') } },
    selectScaRatesValidation: { get: function () { return $('[data-testid="SCA Rates Validation"]') } },
    selectPayments: { get: function () { return $('[data-testid="Payments"]') } },
    selectPfdcAttachments: { get: function () { return $('[data-testid="PFDC Attach nments"]') } },
    selectCarrierInformation: { get: function () { return $('[data-testid="Carrier Information"]') } },


    selectAggregation: { get: function () { return $('[data-testid="Aggregation"]') } },
    selectAggregationInquiryMod: { get: function () { return $('[data-testid="Aggregation Inquiry & Mod"]') } },
    selectEBNR: { get: function () { return $('[data-testid="EBNR Expense Rates"]') } },
    selectProfitLossStatement: { get: function () { return $('[data-testid="Profit and Loss Statement"]') } },
    selectProfitLossStatementComparison: { get: function () { return $('[data-testid="Profit and Loss Statement Comparison"]') } },
        //element(by.xpath('//div[contains(text(), "Profit and Loss Statement Comparison")]'))}},

        //

    selectIndemnification: { get: function () { return $('[data-testid="Indemnification"]') } },
    selectCheckRequestInquire: { get: function () { return $('[data-testid="Payment Request Inquire"]') } },
    selectAllocationInquiryMod: { get: function () { return $('[data-testid="Allocation Inquiry & Mod"]') } },
    selectCreateAllocationAdjustments: { get: function () { return $('[data-testid="Create Allocation Adjustments"]') } },
    selectAllocationStaging: { get: function () { return $('[data-testid="Allocation Staging Inquire/Modification"]') } },
    selectCreatePoolLevelAdjustments: { get: function () { return $('[data-testid="Create Pool Level Adjustments"]') } },

    selectRatios: { get: function () { return $('[data-testid="Ratios"]') } },
    selectRatioStaging: { get: function () { return $('[data-testid="Ratio Staging"]') } },
    selectPremiumAdjustment: { get: function () { return $('[data-testid="Premium Adjustment"]') } },
    selectRatioPremiumExcel: { get: function () { return $('[data-testid="Premium Ratio Excel Loader"]') } },
    selectPremiumRatioReport: { get: function () { return $('[data-testid="Premium Ratio Report"]') } },

    selectMemberCompany: { get: function () { return $('[data-testid="Member Company"]') } },
    selectSpecialDistributionLoader: { get: function () { return $('[data-testid="Special Distribution/Reapportionment Loader"]') } },
    selectMcLoadToOracle: { get: function () { return $('[data-testid="MC Load To Oracle"]') } },
    selectCreateDistribution: { get: function () { return $('[data-testid="Create Distribution"]') } },
    selectCreateReapportionment: { get: function () { return $('[data-testid="Create Reapportionment"]') } },
    selectResidualMarketDTVIFiles: { get: function () { return $('[data-testid="Residual Market DTVI Files"]') } },
    selectPoolInvoices: { get: function () { return $('[data-testid="Pool Invoices"]') } },
    selectAPPool: { get: function () { return $('[data-testid="AP Pool Distribution Notices"]') } },


    selectCallData: { get: function () { return $('[data-testid="Call Data"]') } },
    selectLoadCallData: { get: function () { return $('[data-testid="Load Call Data"]') } },
    selectAnnualPremium: { get: function () { return $('[data-testid="Annual Premium Call Inquiry & Mod"]') } },
    selectPremiumCallExcelLoader: { get: function () { return $('[data-testid="Premium Call Excel Loader"]') } },
    //selectOtherPremiumExcelLoader: { get: function () { return $('[data-testid="Servicing Carrier"]') } },
    selectSummarizedCallDataReport: { get: function () { return $('[data-testid="Summarized Call Data Report"]') } },
    selectCallDataYearOverYear: { get: function () { return $('[data-testid="Call Data Year Over Year Analysis Report"]') } },
    selectDetective: { get: function () { return $('[data-testid="Detective Call Data Reports"]') } },
    selectFirstTime: { get: function () { return $('[data-testid="First Time Call Data Reporting Carriers"]') } },
    selectPoolMembershipValidation: { get: function () { return $('[data-testid="Call Data Pool Membership Validation Report"]') } },
    selectYoYAnalysis: { get: function () { return $('[data-testid="Call Data Year Over Year Analysis Report"]') } },
    selectMarketShareReports: { get: function () { return $('[data-testid="Market Share Reports"]') } },


    selectAudit: { get: function () { return $('[data-testid="Audit"]') } },
    selectBillingRelationsAudit: { get: function () { return $('[data-testid="Billing Relations Audit Report"]') } },
    selectPoolLevelAdjustmentAudit: { get: function () { return $('[data-testid="Pool Level Adjustment Audit Report"]') } },
    selectAdminAndIncomeAudit: { get: function () { return $('[data-testid="Admin And Income Audit Report"]') } },
    selectNp4Audit: { get: function () { return $('[data-testid="NP4 Audit Report"]') } },
    selectReserveAudit: { get: function () { return $('[data-testid="Reserve Audit Report"]') } },
    selectEbnrRateAudit: { get: function () { return $('[data-testid="Reserves EBNR Rate Audit Report"]') } },
    selectPremiumCallAudit: { get: function () { return $('[data-testid="Premium Call Audit Report"]') } },


    selectTools: { get: function () { return $('[data-testid="Tools"]') } },
    selectBatchJobHistory: { get: function () { return $('[data-testid="Batch Job History"]') } },
    selectRpriRelease: { get: function () { return $('[data-testid="RPRI Release"]') } },
    selectAdminister: { get: function () { return $('[data-testid="Administer"]') } },
    selectAnalystAssignments: { get: function () { return $('[data-testid="Analyst Assignments"]') } },

})

module.exports = FlyOutPO