var MemberCompanyPO = function() {}

MemberCompanyPO.prototype = Object.create({}, {

    //create distribution page

    descriptionField :  {get: function(){ return element(by.xpath("//div[@data-testid='Description']/div/input"))}},
    
    distributionTypeField :  {get: function(){ return element(by.xpath("//div[@data-testid='autocomplete-Distribution Type']/div/div/input"))}},

    clearDistributionTypeField:  {get: function(){ return element(by.xpath("//div[@data-testid='autocomplete-Distribution Type']/div/div/div/button[1]/svg/path"))}},


    ratioSetField: {get: function(){ return element(by.xpath("//div[@data-testid='autocomplete-Ratio Set']/div/div/input"))}},
    clearRatioSetField:   {get: function(){ return element(by.xpath("//div[@data-testid='autocomplete-Ratio Set']/div/div/div/button[1]/svg"))}},

    quarterEndDateField:  {get: function(){ return element(by.xpath("//div[@data-testid='autocomplete-Quarter End Date']/div/div/input"))}},
    clearQuarterEndDateField:   {get: function(){ return element(by.xpath("//div[@data-testid='autocomplete-Quarter End Date']/div/div/div/button[1]/svg"))}},

    createDistribution:  {get: function(){ return element(by.xpath("//button[@data-testid='button-Create Distribution']"))}},
    clear:  {get: function(){ return element(by.xpath("//button[@data-testid='button-Clear']"))}},

    //create reapportionment page
    originalRatioSet: {get: function(){ return element(by.xpath("//div[@data-testid='autocomplete-Original Ratio Set']/div/div/input"))}},
    revisedRatioSet: {get: function(){ return element(by.xpath("//div[@data-testid='autocomplete-Revised Ratio Set']/div/div/input"))}},

    previousReserveRatioSet: {get: function(){ return element(by.xpath("//div[@data-testid='autocomplete-Previous Reserve Ratio Set']/div/div/input"))}},
    apportionmentDescription: {get: function(){ return element(by.xpath("//div[@data-testid='Description']/div/input"))}},

    reapportionmentQuarterEndDate: {get: function(){ return element(by.xpath("//div[@data-testid='autocomplete-Quarter End Date']/div/div/input"))}},
    reapportionmentQuarterEndDateFrom: {get: function(){ return element(by.xpath("//div[@data-testid='autocomplete-Quarter End Date From']/div/div/input"))}},
    reapportionmentQuarterEndDateTo: {get: function(){ return element(by.xpath("//div[@data-testid='autocomplete-Quarter End Date To']/div/div/input"))}},
    reqpportionmentType: {get: function(){ return element(by.xpath("//div[@data-testid='autocomplete-Reapportionment Type']/div/div/input"))}},
    includeReserves: {get: function(){return $('.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-vubbuv')}},

    
    //{get: function(){ return element(by.xpath("//span[@data-testid='cashOnlyFlag']/svg/path"))}},
    createReapportionment: {get: function(){ return element(by.xpath("//button[@data-testid='button-Create Reapportionment']"))}},
    clearReapportionment: {get: function(){ return element(by.xpath("//button[@data-testid='button-Clear']"))}},

    //MC Load
    mcLoadToOracleTab :  {get: function(){ return element(by.xpath("//button[contains(text(), 'MC Load to Oracle')]")) } },
    mcLoadQuarterDropdown: {get: function(){ return element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/input"))}},
    mcLoadClearQuarter: {get: function(){ return element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/input"))}},

    selectOne: {get: function(){return element.all(by.xpath("//svg[@data-testid='CheckBoxOutlineBlankIcon']/path")).get(1)}},
        //$$('.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-vubbuv').get(0)}},
        //{get: function(){return element(by.xpath("//svg[@data-testid='CheckBoxOutlineBlankIcon']/path"))}},
    runRelease: {get: function(){return $('.p-button.p-component')}},
    mcPreloadValidationTab:  {get: function(){ return $$('.MuiTab-wrapper').get(-2) } },
    mcPreloadQuarter: {get: function(){ return element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/input"))}},
    preloadSelect: {get: function(){return element(by.xpath("//svg[@data-testid='CheckBoxOutlineBlankIcon']/path"))}},
    preloadValidate: {get: function(){return $('.p-button-label.p-c')}},
    excelDownload: {get: function(){return $('.material-icons.MuiIcon-root.icon-button_innericon__Cbxzl.icon-button_innericonHover__dNm39')}},
 
    //special distribution loader
    specialDistributionDownload: {get: function(){return element(by.xpath("//button[@data-testid='download']"))}},
    specialDistributionUpload: {get: function(){return element(by.xpath("//button[@data-testid='upload']"))}},

    //DTVI
    fileTypeField: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-File Type']/div/div/input"))}},
    poolTapeTypeField: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Pool Tape Type']/div/div/input"))}},

    dtviQuarterField: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/input"))}},
    dtviGroupCodeField: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-DTVI Group Code']/div/div/input"))}},
    headerIdAndDescriptionField: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Header ID and Description']/div/div/input"))}},
    poolTapeKeyField: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Pool Tape Key']/div/div/input"))}},
    addHeaderButton: {get: function(){return $$('[data-testid="submitbutton"]').get(0)} },
    removeHeaderButton: {get: function(){return $$('[data-testid="submitbutton"]').get(1)} },

    //pool invoices
    poolInvoicesQuarter: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/input"))}},
    poolInvoicesReceivablesBatch: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Receivables Batch']/div/div/input"))}},
    //poolInvoicesDateField: {get: function(){return element(by.xpath("//html/body/div/div/div[1]/div[2]/div[2]/div/div/div/div/div/div[2]/div[4]/div[1]/span/input"))}},
    poolInvoicesDateField: {get: function(){return element(by.xpath("//span[@data-testid='invoiceDate']/input"))}},

    poolInvoicesDateSelect: {get: function(){return  $$('.p-button.p-component.p-datepicker-trigger.p-button-icon-only').get(0)}},
    selectHighlightedDate: {get: function(){return  $('.p-highlight')}},
    //poolInvoicesDueDateField: {get: function(){return element(by.xpath("//html/body/div/div/div[1]/div[2]/div[2]/div/div/div/div/div/div[2]/div[4]/div[2]/span/input"))}},
    poolInvoicesDueDateField: {get: function(){return element(by.xpath("//span[@data-testid='invoiceDueDate']/input"))}},
    
    poolInvoicesDueDateSelect: {get: function(){return $$('.p-button.p-component.p-datepicker-trigger.p-button-icon-only').get(1)}},
    //submitButton: {get: function(){return $('[data-testid="submitbutton"]')} },
    //clearButton: {get: function(){return $('[data-testid="btnClear"]')} },
    submitButton: {get: function(){return element(by.xpath("//button[@data-testid='submitbutton']"))}},
    clearButton: {get: function(){return element(by.xpath("//button[@data-testid='btnClear']"))}},

    //deletePoolInvoicesTab: {get: function(){return element(by.xpath("//span[contains(text(), 'Delete Pool Invoices')]"))}},

    downloadPoolInvoicesTab: {get: function(){return element(by.xpath("//button[contains(text(), 'Download Pool Invoices')]"))}},
    poolInvoicesQuarter: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/input"))}},
    downloadPoolInvoicesPdf: {get: function(){return element(by.xpath("//button[@data-testid='button-Download PDF']/span"))}},

    poolInvoicesDataTable: {get: function(){return $('.p-datatable-table.d-inline.datatable')}},

    deletePoolInvoicesTab: {get: function(){return element(by.xpath("//button[contains(text(), 'Delete Pool Invoices')]"))}},


    deletePoolInvoicesQuarter: {get: function(){return $('[data-testid="autocomplete-Quarter"]')} },
    
    //div[@data-testid='autocomplete-Quarter']/div/div/input"))}},
    deletePoolInvoiceButton: {get: function(){return $('[data-testid="submitbutton"]')} },
    //createPoolInvoicesTab: {get: function(){return element(by.xpath("//span[contains(text(), 'Create Pool Invoices')]"))}},
    createPoolInvoicesTab: {get: function(){return element(by.xpath("//button[contains(text(), 'Create Pool Invoices')]"))}},


    //rpri invoice emails tab
    rpriInvoiceTab: {get: function(){return element(by.xpath("//button[contains(text(), 'RPRI Invoice Emails')]"))}},
    rpriInvoiceQuarter: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/input"))}},
    rpriInvoiceAction: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Action']/div/div/input"))}},

    rpriInvoiceCustomerNumber: {get: function(){return element(by.xpath("//div[@data-testid='customerNumber']/div/input"))}},
    

    clearRpriInvoiceAction: {get: function(){return $$('.MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall.css-1k33q06').get(-1)}},
 
    rpriInvoiceCustomerNameDropdown: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Customer Name']/div/div/div/button"))}},
    rpriInvoiceCustomerNameInput: {get: function(){return $$('.MuiInputBase-input.MuiInput-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').get(-1)}},
        //element(by.xpath("//div[@data-testid='autocomplete-Customer Name']/div/div/input"))}},

    

    rpriInvoiceSubmit: {get: function(){return element(by.xpath("//button[@data-testid='submitbutton']"))}},
    rpriInvoiceClear: {get: function(){return element(by.xpath("//button[@data-testid='btnClear']/span"))}},


    //pool invoice sumamary tab
    poolInvoicesSummaryTab: {get: function(){return element(by.xpath("//button[contains(text(), 'Pool Invoices Summary')]"))}},
    poolInvoicesQuarterFrom: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-From Quarter']/div/div/input"))}},
    poolInvoicesQuarterTo: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-To Quarter']/div/div/input"))}},
    poolInvoicesInquireButton: {get: function(){return element(by.xpath("//button[@data-testid='submitbutton']"))}},
    poolInvoicesDownloadExcel: {get: function(){return $('.icon-button_icon__mVEpU')}},
        //element(by.xpath("//span[@data-testid='iconButton-Excel']"))}},

    //rpri release
    rpriReleaseQuarter: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/input"))}},
    rpriReleaseCheckbox: {get: function(){return element(by.xpath("//svg[@data-testid='CheckBoxOutlineBlankIcon']/path"))}},
        //$$('PrivateSwitchBase-input.css-1m9pwf3').get(0)}},

    rpriReleaseTable:{ get: function () { return $('.p-datatable-wrapper')}},


    //ap pool
    apPoolDownloadPdf: {get: function(){return element(by.xpath("//button[@data-testid='button-Download PDF']"))}},
    apPoolQuarter: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/input")) } },

})


module.exports = MemberCompanyPO