var RatiosPO = function () { }

RatiosPO.prototype = Object.create({}, {

    //ratio staging
   
    callTableRadio : {get: function(){return $$('[data-testid="RadioButtonUncheckedIcon"]').get(0) } },
    premiumTableRadio: {get: function(){return $$('[data-testid="RadioButtonUncheckedIcon"]').get(1) } },
    allowMassVdacNegativeRatiosCheckbox: { get: function () { return $$('.MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd').get(0) } },
    baseRatioSetDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Base Ratio Set']/div/div/input")) } },

    
    clearRatioSet: { get: function (){return $$('[data-testid="CloseIcon"]').get(0) } },
    newRatioSetDropdown: { get: function () { return element(by.xpath("//input[@id='newRatioSet']")) } },
    callYear: { get: function () { return $$('.MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd').get(0) } },
    createStaging:  { get: function (){return $$('[data-testid="submitbutton"]').get(0) } },
    ratioStagingClear: { get: function (){return  element(by.xpath("//button[@data-testid='btnClear']/span")) } },

    //premium Adjustment
    viewAdjustments: { get: function () { return $$('.MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd').get(0) } },
    createRatio: { get: function () { return $$('.MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd').get(0) } },
    deleteStaging: { get: function () { return $$('.MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd').get(0) } },
    premiumAdjustmentCarrier: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Carrier']/div/div/input")) } },
    clearPremiumAdjustmentCarrier: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Carrier']/div/div/div/button[1]/svg")) } },

        //$$('.MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd').get(0) } },
    poolCode: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Pool Code']/div/div/input")) } },
    clearPoolCode: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Pool Code']/div/div/div/button[1]")) } },

    state: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-State']/div/div/input")) } },
    clearState: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-State']/div/div/div/button[1]")) } },

    policyYear: { get: function () { return $$('.MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd').get(0) } },
    clearPolicyYear: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Policy Year']/div/div/div/button[1]")) } },
    inquire: { get: function () { return $$('.MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd').get(0) } },
    insolvent: { get: function () { return $$('.MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd').get(0) } },
    premiumAdjustmentclear: { get: function () { return $$('.MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd').get(0) } },

    //premium ratio excel loader
    downloadExcel: { get: function () { return element(by.xpath("//button[@data-testid='download']/div[2]")) } },


    uploadExcel: { get: function () { return element(by.xpath("//button[@data-testid='upload']/div[2]")) } },

    //premium ratio report
    premiumRatioReportCarrierDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Carrier']/div/div/input")) } },
    ratioSetDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Ratio Set']/div/div/input")) } },
    ratioSetInquire: { get: function () { return element(by.xpath("//button[@data-testid='button-Inquire']/span")) } },
    ratioSetClear: { get: function () { return  element(by.xpath("//button[@data-testid='button-Clear']/span")) } },

})

module.exports = RatiosPO