var ErrorManagementPO = function() {}

ErrorManagementPO.prototype = Object.create({}, {

    quarterDropdown: {get: function(){return $$('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').get(0)}},
    
    btnInquire: {get: function(){return element(by.xpath("//button[@data-testid='btnInquire']"))}},
        //$$('.btn.btn-primary.undefined.mt-2.ms-2') } },
        //element(by.xpath("//button[contains(text(),'Inquire')]"))}},
        //element(by.xpath("//div[@class='container-fluid']/div[1]/div[2]/span/button"))}},        
        //element(by.xpath("//button[@data-testid='btnInquire']"))}},
    excelExport: {get: function(){return element(by.xpath("//span[@data-tooltip-bottom='Download Excel']/span"))}},
        //$$('.material-icons.MuiIcon-root.icon-button_innericon__3uF_M.icon-button_innericonHover__3sYEq').get(1) } },

    //*[@id="root"]/div/div[2]/div[2]/div[1]/div[3]/div[2]/span[1]
    //*[@id="root"]/div/div[2]/div[2]/div[1]/div[3]/div[2]/span[1]/span
    pdfExport: {get: function(){return element(by.xpath("//span[@data-tooltip-bottom='Download PDF']/span"))}},
        //element(by.xpath("//button[@data-testid='btnExportPDF']"))}},
})


module.exports = ErrorManagementPO