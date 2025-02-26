const { $ } = require("protractor")

var PaymentsPO = function() {}

PaymentsPO.prototype = Object.create({}, {
    
    //quarter, group, pool, status dropdowns need unique identifiers
    
    quarterEndDropdown: {get: function(){return $$('.MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd').get(0)}},
    clearQuarter: {get: function(){return element(by.xpath("(//svg[@class='MuiSvgIcon-root MuiSvgIcon-fontSizeSmall'])[0]"))}},
    groupDropdown: {get: function(){return $$('.MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd').get(1)}},
    clearGroup: {get: function(){return element(by.xpath("(//button[@title='Clear'])[1]"))}},
    poolDropdown: {get: function(){return $$('.MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd').get(2)}},
    clearPool: {get: function(){return element(by.xpath("(//button[@title='Clear'])[2]"))}},
    statusDropdown: {get: function(){return $$('.MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd').get(3)}},
    clearStatus: {get: function(){return element(by.xpath("(//button[@title='Clear'])[3]"))}},
    inquireButton: {get: function(){return element(by.xpath("//button[@data-testid='button-Inquire']"))}},
    clearButton: {get: function(){return element(by.xpath("//button[@data-testid='button-Clear']"))}},
    excelDownload: {get: function(){return $('.icon-button_icon__mVEpU')}},
        //element(by.xpath("//span[contains(text(), 'file_download')]"))}},
    alternateDownload: {get: function(){return element(by.xpath("//span[contains(text(), 'download_for_offline')]"))}},
    
    returnButton: {get: function(){return $('.material-icons.MuiIcon-root.icon-button_innericon__Cbxzl.icon-button_innericonHover__dNm39')}},

        //element(by.xpath("//div[@class='app-content']/div[2]/div/div[4]/div/div/div[2]/button/span"))}},

        //element(by.xpath("//button[@data-testid='button-Return']"))}},


       
    interestRatesTab: {get: function(){return element(by.xpath("//button[contains(text(), 'Interest Rates')]"))}},
        //$$('.MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.css-1l3mojb').get(1)}},
        //$$('.MuiTab-wrapper').get(1)}},
        //element(by.xpath("//span[contains(text(), 'Interest Rates')]"))}},
    calendarOpen: {get: function(){return element(by.xpath("//button[@class='p-button p-component p-datepicker-trigger p-button-icon-only']"))}},
        ///html/body/div[2]/div/div/div[2]/table/
    calendar: {get: function(){return element(by.xpath("//table[@class='p-datepicker-calendar']"))}},
    beginDateInput: {get: function(){return element(by.xpath("//tbody[@class='p-datatable-tbody']/tr[1]/td[2]/span/input"))}},
        //element(by.xpath("//table[@class='d-inline']/tbody/tr[1]/td[2]/span/input"))}},
    interestRateInput: {get: function(){return element(by.xpath("//tbody[@class='p-datatable-tbody']/tr[1]/td[3]/div/div/input"))}},
        //element(by.xpath("//table[@class='d-inline']/tbody/tr[1]/td[3]/div/div/input"))}},
    paymentsTab: {get: function(){return element(by.xpath("//button[contains(text(), 'Payments')]"))}},
        //..$('.MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.css-1l3mojb')}},
        //'MuiTab-wrapper')}}, 
        //element(by.xpath("//span[contains(text(), 'Payments')]"))}},
    saveButton: {get: function(){return element(by.xpath("//button[@data-testid='button-Save']"))}},  
    errorMessage: { get: function () { return element(by.id('notistack-snackbar'))} },

    
    //table columns
    dataTable: {get: function(){return element(by.xpath("//div[@data-testid='payment-grid']"))}},
    interestRateTable: {get: function(){return element(by.xpath("//table[@class='d-inline']"))}},
    interestRateTableHead: {get: function(){return $('.p-datatable-thead')}},
    interestRateTableBody: {get: function(){return $('.p-datatable-tbody')}},

    recordTable: {get: function(){return $('.app-content')}}


    /*
    groupNameColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(2)' ))}},
    poolCodeColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(3)' ))}},
    principalAmountColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(4)' ))}},
    interestAmountColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(5)' ))}},
    partialPaymentColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(6)' ))}},
    submittedDateColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(7)' ))}},
    submittedByColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(8)' ))}},
    approvedDateColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(9)' ))}},
    rejectedDateColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(10)' ))}},
    statusColumn: {get: function(){return element(by.css('.p-datatable.p-component.p-datatable-hoverable-rows .p-datatable-wrapper .d-inline .p-datatable-tbody tr:nth-child(1) td:nth-child(11)' ))}},
    */
})


module.exports = PaymentsPO