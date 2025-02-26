var ScaRatesPO = function() {}

ScaRatesPO.prototype = Object.create({}, {

    //dropdowns
    carrierDropdown: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Carrier']/div/div/input"))}},
    poolCodeDropdown: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Pool Code']/div/div/input"))}},
        //element(by.xpath("//div[@data-testid='poolcode-dropdown']/div/div/div"))}},
    stateDropdown: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-State']/div/div/input"))}},
    reportCodeDropdown: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Report Code']/div/div/input"))}},
    effectiveYearDropdown: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Effective Year']/div/div/input"))}},

    //clearButtons



    clearCarrier: { get: function () { return element(by.xpath("//button[@title='Clear']"))}}, 
        
    //element(by.xpath("//button[@title='Clear']/span"))}}, 
    //element(by.xpath("//svg[@data-testid='CloseIcon']/path"))}}, 
    //$$('[data-testid="CloseIcon"]').get(0) } },
        //$$('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.MuiAutocomplete-clearIndicator.css-edpqz1').get(0)}},

        //$$('[data-testid="CloseIcon"]').get(0) } },

        //$$('.MuiButtonBase-root.MuiIconButton-root.MuiAutocomplete-clearIndicator.MuiAutocomplete-clearIndicatorDirty').get(0)}},
        //$('.MuiInputBase-root.MuiInput-root.MuiInput-underline.MuiAutocomplete-inputRoot.MuiInputBase-fullWidth.MuiInput-fullWidth.MuiInputBase-formControl.MuiInput-formControl.MuiInputBase-adornedEnd') } },
    clearPoolCodeDropdown: { get: function () { return $$('[data-testid="CloseIcon"]').get(1) } },

    clearState: { get: function () { return $$('.MuiButtonBase-root.MuiIconButton-root.MuiAutocomplete-clearIndicator.MuiAutocomplete-clearIndicatorDirty').get(1)}}, 
    clearReportCode: { get: function () { return $$('[data-testid="CloseIcon"]').get(3) } },

    clearYear: { get: function () { return $$('.MuiButtonBase-root.MuiIconButton-root.MuiAutocomplete-clearIndicator.MuiAutocomplete-clearIndicatorDirty').get(2)}}, 

    //buttons
    clearButton: {get: function(){return element(by.xpath("//button[contains(text(), 'Clear')]"))}},
            //element(by.xpath("//button[contains(text(), 'Clear')]"))}},
            //button[@data-testid='clear-button']"))}},

    
    //ask for data-test id
    excelDownload: {get: function(){return element(by.xpath("//span[contains(text(), 'file_download')]"))}},

        //element(by.xpath("//span[@data-tooltip-bottom='Excel']"))}},
        //div[@class='container-fluid']/div[2]/div[2]/div[2]/span[1]/span"))}},
        //icon-button_icon__afoYT')}},
        //element(by.xpath("//span[contains(text(), 'file_download')]"))}},
    addButton: {get: function(){return element(by.xpath("//span[contains(text(), 'add')]"))}},
    deleteButton: {get: function(){return element(by.xpath("//span[contains(text(),'delete')]"))}},
    toggleButton: {get: function(){return element(by.xpath("//span[@data-testid='carrier-state-toggle']")) } },

   



        //$('.MuiSwitch-track.css-1ju1kxc') } },

 
        //$('.MuiTouchRipple-root.css-w0pj6f') } },
        //$('.MuiSwitch-input.PrivateSwitchBase-input.css-1m9pwf3') } },
        //$('.MuiSwitch-thumb.css-19gndve')}},
        //{get: function(){return element(by.xpath("//span[@data-testid='carrier-state-toggle']/input"))}},

    
    toggleBack: {get: function(){return $('.MuiSwitch-switchBase.MuiSwitch-colorPrimary.MuiButtonBase-root.MuiSwitch-switchBase.MuiSwitch-colorPrimary.PrivateSwitchBase-root.Mui-checked.css-1nr2wod') } },
    //element(by.xpath("//span[@data-testid='carrier-state-toggle']/span[1]/input"))}},
    //*[@id="root"]/div/div[2]/div[2]/div[1]/div/fieldset/div/span[2]/span[1]/span[1]/input
    //popup
    enterRate: {get: function(){return element(by.xpath("//input[@name='rate']"))}},
    enterFee: {get: function(){return element(by.xpath("//input[@name='flatFeeAmt']"))}},
    uncollectedPremiumCheckbox: {get: function(){return element(by.xpath("//input[@id='uncollected']/span[1]/span[1]/input"))}},
    enterComment: {get: function(){return element(by.id('standard-basic'))}},
    cancelButton: {get: function(){return element(by.xpath("//button[@data-testid='cancel']"))}},
    saveButton: {get: function(){return element(by.xpath("//button[@data-testid='save']"))}},
    
    //data columns
    ratesGrid: {get: function(){return element(by.xpath("//div[@data-testid='rates-grid']"))}},
    carrierColumn: {get: function(){return element(by.xpath("//div[@data-testid='rates-grid']/div/div[1]/table/tbody/tr/td[2]/div"))}},
    poolColumn: {get: function(){return element(by.xpath("//span[contains(text(),'Pool Code')]")) } },
    stateColumn: {get: function(){return element(by.xpath("//span[contains(text(),'State')]")) } },
    reportCodeColumn: {get: function(){return element(by.xpath("//span[contains(text(),'Report Code')]")) } },
    effectiveYearColumn: {get: function(){return element(by.xpath("//div[@data-testid='rates-grid']/div/div[1]/table/tbody/tr/td[6]/div"))}},
    rateColumn: {get: function(){return element(by.xpath("//div[@data-testid='rates-grid']/div/div[1]/table/tbody/tr/td[7]/div"))}},
    flatFeeColumn: {get: function(){return element(by.xpath("//div[@data-testid='rates-grid']/div/div[1]/table/tbody/tr/td[8]/div"))}},
    uncollectedPremiumColumn: {get: function(){return element(by.xpath("//div[@data-testid='rates-grid']/div/div[1]/table/tbody/tr/td[9]/div"))}},
    commentsColumn: {get: function(){return element(by.xpath("//div[@data-testid='rates-grid']/div/div[1]/table/tbody/tr/td[10]/div"))}}
})

module.exports = ScaRatesPO

