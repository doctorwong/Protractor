var AggregationPO = function () { }

AggregationPO.prototype = Object.create({}, {

    //aggregation modification and inquiry page
    //load reserves
    loadReservesQuarter: { get: function () { return $$('.MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.css-1q2h7u5').get(3) } },

    loadAggregateDataBtn: { get: function () { return element(by.xpath("//button[@data-testid='btnApprove']")) } },
    varianceQuarter: { get: function () { return $$('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').get(1) } },


    //return element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/input"))}},
    //element(by.id('mui-12'))}},
    //element(by.xpath("//span[contains(text(),'Pool level Adjustment')]"))}},
    loadAggregateDataButton: { get: function () { return element(by.xpath("//button[@data-testid='btnApprove']")) } },
    reportType: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Report Type']")) } },
    reportInquire: { get: function () { return element(by.xpath("//span[contains(text(),'Inquire')]")) } },
    excelDownload: { get: function () { return element(by.xpath("//span[contains(text(),'file_download')]")) } },


    reportType: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Report Type']/div/div/input")) } },
    varianceInquire: { get: function () { return element(by.xpath("//button[@data-testid='button-Inquire']")) } },
    loadReservesExcel: { get: function () { return $('.material-icons.MuiIcon-root.icon-button_innericon__Cbxzl.icon-button_innericonHover__dNm39') } },

    //pool level adjustment
    poolLevelAdjustmentTab: { get: function () { return $$('.MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.css-1q2h7u5').get(1) } },
        //$$('.MuiTab-wrapper').get(1) } },
        //'.MuiButtonBase-root.MuiTab-root.MuiTab-textColorInherit').get(1) } },
        //poolLevelAdjustmentTab: { get: function () { return element(by.xpath("//span[contains(text(),'Pool Level Adjustment')]")) } },
    quarterDropdown: { get: function () { return element(by.id('Quarter')) } },
    poolDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Pool']/div/div/input")) } },
    stateDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-State']/div/div/input")) } },
    //$$('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').get(2)}},
    reportDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Report']/div/div/input")) } },
    policyYearDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Policy Year']/div/div/input")) } },
    transactionTypeDropdown: { get: function () { return element(by.id('TransactionType')) } },
    poolLevelAdjustmentTab: { get: function () { return element(by.xpath("//button[contains(text(),'Pool Level Adjustment')]")) } },
    //return $$('.MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.css-1q2h7u5').get(1) } },
    //$$('.MuiTab-wrapper').get(1) } },
    //'.MuiButtonBase-root.MuiTab-root.MuiTab-textColorInherit').get(1) } },
    //poolLevelAdjustmentTab: { get: function () { return element(by.xpath("//span[contains(text(),'Pool Level Adjustment')]")) } },

    quarterDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-*Quarter']/div/div/input")) } },
    poolDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Pool']/div/div/input")) } },
    clearPoolDropdown: { get: function () { return $$('[data-testid="CloseIcon"]').get(1) } },
    //$$('.MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall.css-1k33q06').get(1) } },

    //element(by.xpath("//button[@title='Clear'][3]")) } },

    stateDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-State']/div/div/input")) } },
    clearStateDropdown: { get: function () { return $$('[data-testid="CloseIcon"]').get(2) } },

    //$$('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').get(2)}},
    reportDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Report']/div/div/input")) } },
    clearReportDropdown: { get: function () { return $$('[data-testid="CloseIcon"]').get(3) } },

    policyYearDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Policy Year']/div/div/input")) } },
    clearPolicyYearDropdown: { get: function () { return $$('[data-testid="CloseIcon"]').get(4) } },

    transactionTypeDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Transaction Type']/div/div/input")) } },

    /*
    /html/body/div/div/div[2]/div[2]/div[2]/div/div[1]/div[6]/div
    /html/body/div/div/div[2]/div[2]/div[2]/div/div[1]/div[6]/div/div/div/input


    /html/body/div/div/div[2]/div[2]/div[2]/div/div[1]/div[6]/div
    /html/body/div/div/div[2]/div[2]/div[2]/div/div[1]/div[6]/div/div/div/input
    */

    clearTransactionTypeDropdown: { get: function () { return $$('[data-testid="CloseIcon"]').get(5) } },

    inquireBtn: { get: function () { return element(by.xpath("//button[@data-testid='inquire']")) } },
    aggregationTab: { get: function () { return element(by.xpath("//span[contains(text(),'Aggregation')]")) } },
    clearBtn: { get: function () { return element(by.xpath("//button[@data-testid='clear']")) } },


    //admin and income
    adminTab: { get: function () { return $$('.MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.css-1q2h7u5').get(2) } },
        //$$('.MuiButtonBase-root.MuiTab-root.MuiTab-textColorInherit').get(2) } },
    adminQuarter: { get: function () { return element(by.id('Quarter')) } },
    adminPool: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Pool']/div/div/input")) } },
    //$$('.MuiInput-input MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31') } },
    adminState: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-State']/div/div/input")) } },
    adminPolicyYear: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Policy Year']/div/div/input")) } },
    adminTab: { get: function () { return element(by.xpath("//button[contains(text(),'Admin And Income')]")) } },
    //$$('.MuiButtonBase-root.MuiTab-root.MuiTab-textColorInherit').get(2) } },
    adminQuarter: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-*Quarter']/div/div/input")) } },


    adminPool: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Pool']/div/div/input")) } },
    //$$('.MuiInput-input MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31') } },

    clearAdminPool: { get: function () { return $$('[data-testid="CloseIcon"]').get(1) } },
    //$$('.MuiInput-input MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31') } },
    adminState: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-State']/div/div/input")) } },
    clearAdminState: { get: function () { return $$('[data-testid="CloseIcon"]').get(2) } },

    adminPolicyYear: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Policy Year']/div/div/input")) } },
    clearAdminPolicyYear: { get: function () { return $$('[data-testid="CloseIcon"]').get(3) } },

    adminEdit: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Quarter']")) } },
    adminExpensesField: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Quarter']")) } },
    adminInterestIncomeField: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Quarter']")) } },
    adminSave: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Quarter']")) } },
    adminCancel: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Quarter']")) } },
    adminInquire: { get: function () { return element(by.xpath("//button[@data-testid='inquire']")) } },
    adminClear: { get: function () { return element(by.xpath("//button[@data-testid='clear']")) } },


    //aggregation
    aggregationTab: { get: function () { return $$('.MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.css-1q2h7u5').get(3) } },
    aggregationQuarter: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Quarter']")) } },
    aggregationPool: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Quarter']")) } },
    aggregationState: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Quarter']")) } },
    aggregationPolicyYear: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Quarter']")) } },
    aggregationInquire: { get: function () { return element(by.xpath("//button[@data-testid='button-Inquire']")) } },
    aggregationClear: { get: function () { return element(by.xpath("//button[@data-testid='button-Clear']")) } },

    //$$('[data-testid="CloseIcon"]').get(0)
    aggregationTab: { get: function () { return element(by.xpath("//button[contains(text(),'Aggregation')]")) } },
    aggregationQuarter: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/input")) } },
    clearAggregationQuarter: { get: function () { return $$('[data-testid="CloseIcon"]').get(0) } },
    aggregationPool: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Pool']/div/div/input")) } },
    clearAggregationPool: { get: function () { return $$('[data-testid="CloseIcon"]').get(1) } },
    aggregationState: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-State']/div/div/input")) } },
    clearAggregationState: { get: function () { return $$('[data-testid="CloseIcon"]').get(2) } },
    aggregationPolicyYear: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Policy Year']/div/div/input")) } },
    clearAggregationPolicyYear: { get: function () { return $$('[data-testid="CloseIcon"]').get(3) } },
    aggregationInquire: { get: function () { return element(by.xpath("//button[@data-testid='button-Inquire']")) } },
    aggregationClear: { get: function () { return element(by.xpath("//button[@data-testid='button-Clear']")) } },

    //profit and loss statement page
    reportTypeDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Report Type']/div/div/input")) } },
    quarterEndDateDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Quarter End Date']/div/div/input")) } },
    policyYearDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Policy Year']/div/div/input")) } },
    poolDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Pool']/div/div/input")) } },
    stateDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-State']/div/div/input")) } },
    policyYearsPerPageDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Policy Years per Page']/div/div/input")) } },
    downloadCSV: { get: function () { return element(by.xpath("//button[@data-testid='button-Download CSV']")) } },
    downloadExcel: { get: function () { return element(by.xpath("//button[@data-testid='button-Download Excel']")) } },

    //profit loss stat
    profitLossPoolDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Pool Code']/div/div/input")) } },
    beginningQuarterEndDateDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Beginning Quarter End Date']/div/div/input")) } },
    firstQuarterDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-First Quarter End Date']/div/div/input")) } },
    firstPolicyYearDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-First Policy Year']/div/div/input")) } },
    secondQuarterDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Second Quarter End Date']/div/div/input")) } },
    secondPolicyYearDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Second Policy Year']/div/div/input")) } },
    profitLossComparisonExcel: { get: function () { return element(by.xpath("//button[@data-testid='button-Download Excel']")) } },
    profitLossComparisonClear: { get: function () { return element(by.xpath("//button[@data-testid='button-Clear']")) } },
})

module.exports = AggregationPO
