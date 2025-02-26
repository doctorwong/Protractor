var ScaRatesValidationPO = function () { }

ScaRatesValidationPO.prototype = Object.create({}, {

    //quarter, group, pool, status dropdowns need unique identifiers

    //autocomplete-Quarter
    quarterDropdown: { get: function () { return $$('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').get(0) } },
        //element(by.xpath("//button[@data-testid='autocomplete-Quarter']/div/div/input")) } },
    clearQuarter: { get: function () { return element(by.xpath("//button[@data-testid='autocomplete-Quarter']/div/div/div/div/button[1]/svg/path")) } },
        //$$('MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.MuiAutocomplete-clearIndicator.css-edpqz1').get(0) } },
        //$$('MuiTouchRipple-root.css-w0pj6f').get(0) } },

    
        //$$('MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall.css-1k33q06').get(0) } },
        //element(by.xpath("//button[@data-testid='autocomplete-Quarter']/div/div/div/div/button[1]/svg/path")) } },



    //element.all(by.xpath('//*[@id="testInstanceScan"]')).get(1)
    carrierDropdown: { get: function () { return $$('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').get(1) } },
    clearCarrier: { get: function () { return $$('MuiTouchRipple-root.css-w0pj6f').get(1) } },
        //$$('MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.MuiAutocomplete-clearIndicator.css-edpqz1').get(1) } },
        //element(by.xpath("//button[@data-testid='autocomplete-Quarter']/div/div/div/div/button[1]/svg/path")) } },
    poolDropdown: { get: function () { return $$('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').get(2) } },
    
    clearPool: { get: function () { return element(by.xpath("//button[@data-testid='autocomplete-Pool']/div/div/div/div/button[1]/svg/path")) } },

    inquireButton: { get: function () { return element(by.xpath("//button[@data-testid='inquire']")) } },

    
    clearButton: { get: function () { return element(by.xpath("//button[@data-testid='clear']")) } },
    //need data-testid for data table
    dataTable: { get: function () { return element(by.xpath("//div[@data-testid='validation-grid']")) } },

    /*
        poolCodeColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(3)' ))}},
        stateColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(4)' ))}},
        policyYearColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(4)' ))}},
        grossWrittenPremiumColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(4)' ))}},
        uncollectedPremiumColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(4)' ))}},
        netPremiumColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(4)' ))}},
        reportedScaAmountColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(4)' ))}},
        carrierScaRateColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(4)' ))}},
        tableScaRateColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(4)' ))}},
        scaFlatFeeColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(4)' ))}},
        calculatedScaAmountColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(4)' ))}},
        calculatedVarianceColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(4)' ))}},
    */
})

module.exports = ScaRatesValidationPO