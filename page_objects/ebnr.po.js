var EbnrPO = function() {}

EbnrPO.prototype = Object.create({}, {
    policyYearDropdown: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Policy Year']/div/div/input"))}},
    loadScsAdminRates: {get: function(){return element(by.xpath("//button[@data-testid='btnLoad']"))}},
    selectNo: {get: function(){return $('.p-button.p-component.p-confirm-dialog-reject.p-button-text')}},
 
    inqModTab: { get: function () { return element(by.xpath("//button[contains(text(),'EBNR Inq and Modification')]")) } },
    poolDropdown: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Pool']/div/div/input"))}},
    stateDropdown: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-State']/div/div/input"))}},

    poolDropdown: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Pool']/div/div/input"))}},
    stateDropdown: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-State']/div/div/input"))}},


   
    reportDropdown: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Report']/div/div/input"))}},
    policyYearDropdown: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Policy Year']/div/div/input"))}},

    inquireButton: {get: function(){return element(by.id('btnInquire'))}},
    clearButton: {get: function(){return element(by.xpath("//button[@data-testid='button-Clear']"))}},
    excelDownload: {get: function(){return element(by.xpath("//span[contains(text(),'file_download')]"))}},
    


    modifyInput: {get: function(){return element(by.xpath("//div[@data-testid='dtEbnr']/div/div[1]/table/tbody/tr/td[5]/div/div[1]/div/input"))}},

    saveRate: {get: function(){return $('.material-icons.MuiIcon-root.icon-button_innericon__3uF_M.icon-button_innericonHover__3sYEq')}},

    addButton: {get: function(){return  element(by.xpath("//div[@data-testid='dtEbnr']/div/div[1]/table/tbody/tr/td[7]/div/span/span"))}},
    dataTable: {get: function(){return $('.material-icons.MuiIcon-root icon-button_innericon__3uF_M.icon-button_innericon__3uF_M')}},
})

module.exports = EbnrPO