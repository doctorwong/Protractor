var Manager = function () { }

Manager.prototype = Object.create({}, {
    //data locks
    dataLocks_quarterField: { get: function () { return $('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31') } },


    dataLocks_yearField: { get: function () { return $$('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').get(1) } },


    dataLocks_np4Lock: { get: function () { return element(by.xpath("//div[@class='container-fluid']/div[2]/div/span/div/span/span"))}},
        //element(by.xpath("//span[contains(text(), 'lock_open')]"))}},
        //element(by.xpath("//span[@data-tooltip-bottom='click to unlock quarter']/span")) } }
    //$('icon-button_icon__mVEpU')}},
    //$('material-icons.MuiIcon-root.icon-button_innericon__Cbxzl.icon-button_innericonHover__dNm39')}},

    //class="material-icons MuiIcon-root icon-button_innericon__Cbxzl icon-button_innericonHover__dNm39
    aggregateLock: { get: function () { return element(by.xpath("//div[@class='container-fluid']/div[3]/div/span/div/span/span"))}},
    //element(by.xpath("//span[contains(text(), 'lock_open')][1]"))}},
    //{get: function(){return $$('icon-button_icon__mVEpU').get(1)}},
    //
    callYearLock: { get: function () { return element(by.xpath("//div[@class='container-fluid'][1]/div[2]/div/span/div/span/span"))}},
    //element(by.xpath("//span[contains(text(), 'lock_outline')]"))}},
    //$$('icon-button_icon__mVEpU').get(2)}},
    //
    billingRelationsLock: { get: function () { return element(by.xpath("//div[@class='container-fluid'][1]/div[3]/div/span/div/span/span"))}},
    //element(by.xpath("//span[contains(text(), 'lock_outline')][1]"))}},
    //$$('icon-button_icon__mVEpU').get(3)}},
    //
    ebnrRatesLock: { get: function () { return element(by.xpath("//div[@class='container-fluid'][1]/div[4]/div/span/div/span/span"))}},
    //element(by.xpath("//span[contains(text(), 'lock_outline')][2]"))}},
    //$$('icon-button_icon__mVEpU').get(4)}},
    //

    //Delete Sets
    deleteRatioSetField: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Ratio Set']/div/div/input"))}},
    clearDeleteRatioSetField: { get: function () { return element(by.xpath("//svg[@data-testid='ArrowDropDownIcon'][0]"))}},

    deleteRatioSetButton: { get: function () { return $('[data-testid="btnDeleteRatioSet"]')} },
    
    deleteDistributionField: { get: function () { return element(by.xpath("//button[@data-testid='btnDeleteDistribution']"))}},
    clearDeleteDistributionField: { get: function () { return element(by.xpath("//button[@data-testid='btnDeleteDistribution']"))}},
    confirmDeleteDistribution: { get: function () { return $$('[data-testid="submitbutton"]').get(1)} },
    
    deleteReapportionmentField: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Reapportionment']/div/div/input"))}},
    clearDeleteReapportionmentField: { get: function () { return element(by.xpath("//svg[@data-testid='ArrowDropDownIcon'][2]"))}},
    deleteReapportionmentButton: { get: function () { return $('[data-testid="btnDeleteReapportionment"]')} },
    
    //premium adjustment
    premiumAdjustmentCarrier: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Carrier']/div/div/input")) } },
    premiumAdjustmentPoolCode: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Carrier']/div/div/input")) } },
    premiumAdjustmentState: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Carrier']/div/div/input")) } },
    premiumAdjustmentPolicyYear: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Carrier']/div/div/input")) } },
    premiumAdjustmentInquire: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Carrier']/div/div/input")) } },
    premiumAdjustmentSave: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Carrier']/div/div/input")) } },
    premiumAdjustmentCancel: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Carrier']/div/div/input")) } },
    premiumAdjustmentInsolvent: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Carrier']/div/div/input")) } },

    carrierInformation: {get: function(){return element(by.css('[href="#/servicing-carrier/carrier-information"]'))}},
    
    np4InquiryMod: {get: function(){return element(by.css('[href="#/servicing-carrier/np4-inquire"]'))}},
    aggregationInquiryMod: {get: function(){return element(by.xpath("//a[contains(text(),'Aggregation Inquiry & Modification')]"))}},
    poolInvoices: {get: function(){return element(by.xpath("//a[contains(text(),'Pool Invoices')]"))}},
    batchJobHistory: {get: function(){return element(by.css('[href="#/tools/batchJobHistory"]'))}},
    home: { get: function () { return element(by.xpath("//span[@data-testid='breadcrumb']")) } },
    rpfsHome: { get: function () { return  element(by.xpath("//a[contains(text(),'Reinsurance Pools Financial System')]")) } },
    scPayment: { get: function () { return element(by.xpath("//a[contains(text(),'SC Payment')]"))}},
    carrierAdjustment: { get: function () { return element(by.xpath("//a[contains(text(),'Carrier Adjustment')]"))}},
    poolLevelAdjustment: { get: function () { return element(by.xpath("//a[contains(text(),'Pool Level Adjustment')]"))}},
    analystAssignments: { get: function () { return element(by.css('[href="#/tools/analystAssignments"]'))}},

})

module.exports = Manager