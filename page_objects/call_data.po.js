var CallDataPO = function() {}

CallDataPO.prototype = Object.create({}, {

    policyYearDropdown: {get: function(){return element(by.id('PolicyYear'))}},
    policyYearSelect: {get: function(){return element(by.name("2016"))}},
    yearsDropdown: {get: function(){return $$('.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiInputBase-input.MuiInput-input').get(1)}},
        //element(by.xpath("//input[@name='years']"))}},
    yearsSelect: {get: function(){return element(by.name("5"))}},
    poolStatesCheckbox: {get: function(){return element(by.name('poolStates'))}},
    poolStatesDropdown: {get: function(){return element(by.id('State'))}},
    runQueryButton: {get: function(){return element(by.xpath("/html/body/div/div/div[1]/div[2]/div/div/div[4]/button[1]/span"))}},
        //element(by.xpath("//button[@data-testid='button-Run Query']"))}},
    
    poolMembershipRunQuery: {get: function(){return element(by.xpath("//button[@data-testid='button-Run Query']"))}},
        //element(by.xpath("//div[@class='app-content']/div[2]/div/div[2]/div[3]/button[1]/span")) } },
    poolMembershipClear: {get: function(){return element(by.xpath("//span[contains(text(),'Clear')]"))}},

        //(by.xpath("//button[@data-testid='button-Clear']"))}},
    //poolMembershipClear: {get: function(){return element(by.xpath("//button[@data-testid='button-Clear']/span"))}},

        excelDownload: {get: function(){return element(by.xpath("//span[contains(text(),'file_download')]"))}},


    openGraph: {get: function(){return element(by.xpath("//span[contains(text(),'bar_chart')]"))}},
    //selector for open graph has changed
    callDataGraph: {get: function(){return element(by.xpath("//div[@data-testid='graph']"))}},
    closeGraph: {get: function(){return element(by.xpath("//span[contains(text(),'close')]"))}},

    forwardButton: {get: function(){return element(by.xpath("//span[contains(text(),'forward')]"))}},
    backButton: {get: function(){return element(by.xpath("//span[contains(text(),'chevron_left')]"))}},

    fieldNameColumn: {get: function(){return element(by.xpath("//span[contains(text(),'Field Name')]"))}},
    yearColumn: {get: function(){return element(by.xpath("//span[contains(text(),'Year')]"))}},
    dollarChange: {get: function(){return element(by.xpath("//span[contains(text(),'$ Change')]"))}},
    percentChange: {get: function(){return element(by.xpath("//span[contains(text(),'% Change')]"))}},
    

    //Load Call Data
    loadCallData_yearField: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Year']/div/div/input")) } },
    clearLoadDataYearField: {get: function() {return $$('[data-testid="CloseIcon"]').get(0)} },
    loadCallDataButton: {get: function() {return $('[data-testid="btnLoad"]')} },
    loadCallDataNotification: { get: function () { return element(by.xpath("//div[@id='notistack-snackbar']")) } },
    otherPremiumTab: { get: function () { return element(by.xpath("//button[contains(text(),'Other Premium')]"))}},
    otherPremiumExcelDownload: {get: function(){return $('[data-testid="download"]')} },
    otherPremiumExcelUpload: {get: function(){return $('[data-testid="upload"]')} },


    //Annual Premium Call Inquiry & Mod
    annualPremiumYearDropdown:  { get: function () { return $$('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').get(0) } },
    
    clearPremiumYearDropdown : {get: function() {return $$('[data-testid="CloseIcon"]').get(0)} },

    annualPremiumState: {get: function(){return $$('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').get(1) } },
    clearPremiumState : {get: function() {return $$('[data-testid="CloseIcon"]').get(1)} },

    annualPremiumCarrier: {get: function(){return $$('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').get(2) } },
    clearPremiumCarrier : {get: function() {return $$('[data-testid="CloseIcon"]').get(2)} },

    annualPremiumInquireButton: { get: function () { return element(by.xpath("//button[@data-testid='button-Inquire']")) } },
    annualPremiumClear:  { get: function () { return element(by.xpath("//button[@data-testid='button-Clear']/span"))}},
    //{ get: function () { return element(by.xpath("//button[@data-testid='button-Clear']")) } },
    //span
    onlyPoolStatesCheckbox: {get: function(){return element(by.xpath(("//input[@name='poolStates']")))}},
    /*
    /html/body/div/div/div[2]/div[2]/div[1]/div[3]/label
    /html/body/div/div/div[2]/div[2]/div[1]/div[3]/label/span[1]/input
    /html/body/div/div/div[2]/div[2]/div[1]/div[3]/label/span[1]/svg
    /html/body/div/div/div[2]/div[2]/div[1]/div[3]/label/span[1]/svg/path
    */
    //
    yearOverYear_policyYearDropdown:  { get: function () { return $$('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').get(0) } },
    clearPolicyYear : {get: function(){return  $$('[title="Clear"]').get(0)} },

    yearOverYear_yearsDropdown:  { get: function () { return $$('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').get(1) } },
    clearYearsDropdown : {get: function(){return  $$('[title="Clear"]').get(1)} },
    openYearsDropdown : {get: function(){return  $$('[data-testid="ArrowDropDownIcon"]').get(1)} },

    yearOverYear_stateDropdown: {get: function(){return $$('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').get(-1) } },
        //return element(by.xpath("//button[@data-testid='autocomplete-State']//div/div/input"))}},
    clearStateDropdown : {get: function(){return  $$('[title="Clear"]').get(-1)} },
    openStateDropdown : {get: function(){return  $$('[data-testid="ArrowDropDownIcon"]').get(-1)} },
    
    yearOverYear_clear: { get: function () { return element(by.xpath("//button[@data-testid='clear-button']")) } },
    yearOverYear_onlyPoolStates: {get: function(){return $$('.MuiTouchRipple-rootcss-w0pj6f').get(-1) } },

    //premium call excel loader
    downloadPremiumCallExcel: {get: function(){return element(by.xpath("//button[@data-testid='download']"))}},
    uploadPremiumCallExcel: {get: function(){return element(by.xpath("//button[@data-testid='upload']"))}},

    downloadOtherPremiumExcelLoader: {get: function(){return element(by.xpath("//button[@data-testid='download']"))}},
    uploadOtherPremiumExcelLoader: {get: function(){return element(by.xpath("//button[@data-testid='upload']"))}},


    /*page navigation - tested in a separate spec
    showingPageText: {get: function(){return element(by.xpath("//span[@class='p-paginator-current']"))}},
    dropdownPageSelect: {get: function(){return element(by.xpath("//div[@class='p-dropdown-trigger-icon.p-clickable.pi.pi-chevron-down']"))}},
    */

    //summarized call data report
    summarizedCallDataReportType: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Report Type']/div/div/input")) } },

    summarizedCallDataPolicyYear: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Policy Year']/div/div/input")) } },
    //clearCallDataPolicyYear: {get: function(){return element(by.xpath("//button[@title='Clear'][1]")) } },

    summarizedCallDataStateCode: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-State Code']/div/div/input")) } },
    clearAnnualPremiumState: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-State Code']/div/div/div/button[1]")) } },    summarizedCallDataCarrierCode: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-State Code']/div/div/input")) } },

    carrierStateSlider: { get: function () { return element(by.xpath("//button[@data-testid='Inquire']")) } },

    
    //summarizedCallDataInquire: { get: function () { return $('[data-testid="Inquire"]')} },
    summarizedCallDataClear: { get: function () { return $('[data-testid="button-Clear"]')} },
    summarizedCallDataExcelDownload: { get: function () { return element(by.xpath("//span[@data-tooltip-bottom='Excel']/span")) } },

    //call data pool membership validation report

    validationPolicyYear: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Policy Year']/div/div/input")) } },
    ratioSetField: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Ratio Set']/div/div/input")) } },

    stateField: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-State']/div/div/input")) } },
    clearStateField:{ get: function () { return element(by.xpath("//div[@data-testid='autocomplete-State']/div/div/div/button[1]")) } },
    carrierField: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Carrier']/div/div/input")) } },

    clearCarrierField:{ get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Carrier']/div/div/div/button[1]")) } },

    runQueryButton: { get: function () { return element(by.xpath("//button[data-testid='button-Run Query']"))} },
    clearButton: { get: function () { return element(by.xpath("//button[data-testid='button-Clear']"))} },
    firstTimeReportingCarriersTable: { get: function () { return $('.p-datatable-wrapper')}},
    poolMembershipTable:{ get: function () { return $('.p-datatable-wrapper')}},

    //detective reports
    callYearDropdown: { get: function () { return element(by.xpath("//div[data-testid='autocomplete-Call Year']/div/div/div/button[2]/svg"))} },

    //callYearInput: { get: function () { return $$('.MuiInputBase-input.MuiInput-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').get(0) } },
    callYearInput: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Call Year']/div/div/input")) } },
        //element(by.xpath("//div[class='container-fluid']/div/div[1]/div/div/div/input"))} },
        //element(by.xpath("//div[data-testid='autocomplete-Call Year']/div/div/input"))} },
    stateDropdown: { get: function () { return element(by.xpath("//div[data-testid='autocomplete-State']/div/div/div/button[2]/svg"))} },

    stateInput: { get: function () { return $$('.MuiInputBase-input.MuiInput-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').get(1) } },
        //element(by.xpath("//div[data-testid='autocomplete-State']/div/div/input"))} },
        detectiveClearState: {get: function() {return element(by.xpath("//div[@data-testid='autocomplete-State']/div/div/div/button[1]/svg")) } },
        carrierStateSlider: { get: function () { return element(by.xpath("//span[data-testid='switch']/input"))} },
    detectiveRunQuery: { get: function () { return $$('.btn.btn-primary').get(0) } },
        //element(by.xpath("//button[data-testid='button-Run Query']/span"))} },
    priorDetectiveReportsTab: { get: function () { return $$('.MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.css-rrou1').get(1) } },
    excelDownload: { get: function () { return element(by.xpath("//span[contains(text(),'file_download')]")) } },
    reportsTable: { get: function () { return $('.p-datatable-wrapper')}},
    currentDetectiveReportsTab: { get: function () { return $$('.MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.css-rrou1').get(0) } },

    //first time call data reporting carriers
    policyYearInput: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Policy Year']/div/div/input")) } },
    firstTimeReportingCarriersTable: { get: function () { return $('.p-datatable-wrapper')}},
    firstTimeDataRow: { get: function () { return $$('.p-selection-column').get(1) } },

    //call data year over year analysis report
    yoyPolicyYear: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Policy Year']/div/div/input")) } },
    yoyYears: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-# of Years']/div/div/input")) } },
    yoyStates: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-State']/div/div/input")) } },
    yoyOnlyPoolStatesCheckbox: { get: function () { return element(by.xpath("//label[@id='pool-States']/span[1]/svg")) } },

    yoyClearButton: { get: function () { return element(by.xpath("//button[@data-testid='clear-button']")) } },


    //market share reports
    marketShareYearDropdown: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Call Year']/div/div/input")) } },
    marketShareStateDropdown: { get:  function () { return element(by.xpath("//div[@data-testid='autocomplete-State']/div/div/input")) } },
    marketShareRunQuery: { get: function () { return element(by.xpath("//button[@data-testid='button-Run Query']"))} },

    marketShareClearButton: { get: function () { return element(by.xpath("//button[@data-testid='button-Clear']"))} },

    //sc premium for contracts
    SCCallYearDropdown: { get: function () { return element(by.xpath("//div[data-testid='autocomplete-Call Year']/div/div/div/button[2]/svg"))} },

    SCRunQuery: {get: function(){return element(by.xpath("/html/body/div/div/div[1]/div[2]/div/div/div[4]/button[1]/span"))}},

    SCClear: { get: function () { return element(by.xpath("//button[data-testid='button-Clear']"))} },
    
})


module.exports = CallDataPO