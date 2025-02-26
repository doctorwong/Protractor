
var ManagerPIMSPO = function() {}

ManagerPIMSPO.prototype = Object.create({}, {
    
    loadIndemnificationData: {get: function(){return element(by.xpath("//button[@data-testid='btnIndemLoad']"))}},


    quarterStartField: {get: function(){ return $('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31') }},
        //element(by.xpath("//div[@data-testid='autocomplete-From Quarter']/div/div/input"))}},
        //$$('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31') }},
        //function(){return element(by.xpath("//div[@data-testid='autocomplete-From Quarter']/div/div/input"))}},
        
    clearQuarterStartDate: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-From Quarter End Date']/div/div/div/button[1]/span[1]/svg"))}},
    quarterEndField: {get: function(){return $$('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').get(1)}},
        //element(by.xpath("//div[@data-testid='autocomplete-To Quarter']/div/div/input"))}},
    clearQuarterEndDate: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-To Quarter End Date']/div/div/div/button[1]/span[1]/svg"))}},
    inquireButton: {get: function(){return element(by.xpath("//button[@data-testid='button-Inquire']"))}},
    excelDownload: {get: function(){return $('.material-icons.MuiIcon-root.icon-button_innericon__3uF_M.icon-button_innericonHover__3sYEq')}},

})


module.exports = ManagerPIMSPO