var InquireModPO = function () { }

InquireModPO.prototype = Object.create({}, {
    quarterDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/input"))}},
       //$$('.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiInputBase-input.MuiInput-input').get(0) } },
    clearQuarterDropdown: { get: function () { return $$('[data-testid="CloseIcon"]').get(0) } },
  
        //element(by.id('Quarter')) } },
    poolCodeDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Pool Code']/div/div/input"))}},
    clearPoolDropdown: { get: function () { return $$('[data-testid="CloseIcon"]').get(1) } },

        //$$('.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiInputBase-input.MuiInput-input').get(1) } },
        //element(by.id('PoolCode')) } },
    stateDropdown: { get: function () { return  element(by.xpath("//div[@data-testid='autocomplete-State']/div/div/input"))}},
    clearStateDropdown: { get: function () { return $$('[data-testid="CloseIcon"]').get(2) } },

    reportCodeDropdown: {get: function () { {return element(by.xpath("//div[@data-testid='autocomplete-Report Code']/div/div/input"))}},
    //var reportCodeRoot = $('.MuiButtonBase-root.MuiListItem-root.MuiMenuItem-root.Mui-selected.MuiMenuItem-gutters.MuiListItem-gutters.MuiListItem-button.Mui-selected');
},
    clearReportCodeDropdown: { get: function () { return $$('[data-testid="CloseIcon"]').get(3) } },

        //$$('.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiInputBase-input.MuiInput-input').get(2) } },
    policyYearDropdown: {get: function () {return element(by.xpath("//div[@data-testid='autocomplete-Policy Year']/div/div/input"))}},
            //let policyYearRoot = $('.MuiInputBase-root.MuiInput-root.MuiInput-underline.MuiAutocomplete-inputRoot.MuiInputBase-fullWidth.MuiInput-fullWidth.MuiInputBase-formControl.MuiInput-formControl.MuiInputBase-adornedEnd');
    clearPolicyYearDropdown: { get: function () { return $$('[data-testid="CloseIcon"]').get(4) } },
       
    carrierDropdown: {get: function () {return element(by.xpath("//div[@data-testid='autocomplete-Carrier']/div/div/input"))}},
    //clearCarrier: { get: function () { return $$('.MuiButtonBase-root.MuiIconButton-root.MuiAutocomplete-clearIndicator.MuiAutocomplete-clearIndicatorDirty').get(1) } },
    //alternate selector: return element(by.xpath("//button[@class='MuiButtonBase-root MuiIconButton-root MuiAutocomplete-clearIndicator MuiAutocomplete-clearIndicatorDirty']"))}},
    clearCarrierDropdown: { get: function () { return $$('[data-testid="CloseIcon"]').get(5) } },


    transactionTypeDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Transaction Type']/div/div/input"))}},
    clearTransactionTypeDropdown: { get: function () { return $$('[data-testid="CloseIcon"]').get(6) } },

    inquireButton: { get: function () { return element(by.xpath("//button[contains(text(),'Inquire')]")) } },
    clearButton: {get: function(){return element(by.xpath("//button[@data-testid='clear']"))}},
        //element(by.xpath("//div[@class='np4-inquire_searchBox__5E8Ht']/div[2]/div[4]/button"))}}, 

    editButton: { get: function () { return $('.material-icons.MuiIcon-root.icon-button_innericon__3uF_M.icon-button_innericonHover__3sYEq') } },
    saveButton: { get: function () { return $('.material-icons MuiIcon-root.icon-button_innericon__3uF_M.icon-button_innericonHover__3sYEq') } },
    modifyCededPremium: { get: function () { return element(by.xpath("//div[@class='np4-inquire_dataBox__13kIK']/div[1]/div[2]/div/div/input") )}},
    modifyUnearnedReserve: { get: function () { return element(by.xpath("//div[@class='np4-inquire_dataBox__13kIK']/div[2]/div[2]/div/div/input") )}},

    displayResults: { get: function () { return $('.np4-inquire_dataBox__tmqm6') } },
        //$('.np4-inquire_actionBar__1Fhb9') } },
    errorMessage: { get: function () { return element(by.id('notistack-snackbar'))} }

})

module.exports = InquireModPO