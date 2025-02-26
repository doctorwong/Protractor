var AggregationPO = function () { }

AggregationPO.prototype = Object.create({}, {

    //aggregation modification and inquiry page
    //load reserves
    loadReservesQuarter: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/input")) } },
    loadAggregateDataBtn: { get: function () { return element(by.xpath("//button[@data-testid='btnApprove']")) } },
    varianceQuarter: { get: function () { return $$('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').get(1) } },



    loadAggregateDataButton: { get: function () { return element(by.xpath("//button[@data-testid='btnApprove']")) } },
    reportType: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Report Type']")) } },
    reportInquire: { get: function () { return element(by.xpath("//span[contains(text(),'Inquire')]")) } },
    excelDownload: { get: function () { return element(by.xpath("//span[contains(text(),'file_download')]")) } },


    reportType: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Report Type']/div/div/input")) } },
    varianceInquire: { get: function () { return element(by.xpath("//button[@data-testid='button-Inquire']")) } },
    loadReservesExcel: { get: function () { return $('.material-icons.MuiIcon-root.icon-button_innericon__Cbxzl.icon-button_innericonHover__dNm39') } },

    //pool level adjustment
    poolLevelAdjustmentTab: { get: function () { return element(by.xpath("//button[contains(text(),'Pool Level Adjustment')]")) } },

    quarterDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-*Quarter']/div/div/input")) } },
    poolDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Pool']/div/div/input")) } },
    clearPoolDropdown: { get: function () { return $$('[data-testid="CloseIcon"]').get(1) } },

    stateDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-State']/div/div/input")) } },
    clearStateDropdown: { get: function () { return $$('[data-testid="CloseIcon"]').get(2) } },

    //$$('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').get(2)}},
    reportDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Report']/div/div/input")) } },
    clearReportDropdown: { get: function () { return $$('[data-testid="CloseIcon"]').get(3) } },

    policyYearDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Policy Year']/div/div/input")) } },
    clearPolicyYearDropdown: { get: function () { return $$('[data-testid="CloseIcon"]').get(4) } },

    transactionTypeDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Transaction Type']/div/div/input")) } },

 

    clearTransactionTypeDropdown: { get: function () { return $$('[data-testid="CloseIcon"]').get(5) } },

    inquireBtn: { get: function () { return element(by.xpath("//button[@data-testid='inquire']")) } },
    aggregationTab: { get: function () { return element(by.xpath("//span[contains(text(),'Aggregation')]")) } },
    clearBtn: { get: function () { return element(by.xpath("//button[@data-testid='clear']")) } },


    //admin and income
    adminTab: { get: function () { return element(by.xpath("//button[contains(text(),'Admin And Income')]")) } },
    adminQuarter: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-*Quarter']/div/div/input")) } },


    adminPool: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Pool']/div/div/input")) } },

    clearAdminPool: { get: function () { return $$('[data-testid="CloseIcon"]').get(1) } },
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


    //administer
    administerType: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Type']/div/div/input")) } },


    administerTypeDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Type']/div/div/div/button[1]")) } },


    addButton: { get: function () { return element(by.xpath("//span[@data-testid='iconButton-Add']/span")) } },
    
    codeOneInput: { get: function () { return element(by.xpath("//div[@data-testid='input-code1']/div/input")) } },
    codeTwoInput: { get: function () { return element(by.xpath("//div[@data-testid='input-code2']/div/input")) } },

    cancelButton: { get: function () { return element(by.xpath("//span[@data-testid='iconButton-Cancel']/span")) } },
    
    saveButton: { get: function () { return element(by.xpath("//span[@data-testid='iconButton-Save']/span")) } },
    editButton: { get: function () { return element(by.xpath("//span[@data-testid='iconButton-Edit']/span")) } },
    deleteButton: { get: function () { return element(by.xpath("//span[@data-testid='iconButton-Delete']/span")) } },
    
    rpfLookupsTab: { get: function () { return $$('.MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.css-rrou1').get(1) } },
    rpfLookupsCode: { get: function () { return $$('[id="standard-basic"]').get(0) } },
    rpfLookupsDescription: { get: function () { return $$('[id="standard-basic"]').get(1) } },

    dtviSubscriptionsTab: { get: function () { return $$('.MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.css-rrou1').get(2) } },
    dtviSubscriptionsCarrierCode: { get: function () {  return element(by.xpath("//div[@data-testid='data-grid']/div[1]/table/tbody/tr[1]/td[1]/div/div/div/input")) } },
    dtviSubscriptionsGroupCode: { get: function () { return element(by.xpath("//div[@data-testid='data-grid']/div[1]/table/tbody/tr[1]/td[2]/div/div/div/input")) } },

    //Analyst Assignments
    quarterDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/input")) } },
    analystDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Analyst']/div/div/input")) } },
    poolCodeDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Pool Code']/div/div/input")) } },
    carrierCodeDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Carrier']/div/div/input")) } },

    analystAssignmentClear: { get: function () { return element(by.xpath("//button[@data-testid='clear-button']")) } },
    analystAssignmentExcel: { get: function () { return element(by.xpath("//span[contains(text(), 'file_download')]"))}},



})


module.exports = AggregationPO



