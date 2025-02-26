var ServicingCarrierPO = function() {}

ServicingCarrierPO.prototype = Object.create({}, {

    scLoadTab: {get: function(){ return element(by.xpath("//button[contains(text(), 'SC Load to Oracle')]")) } },
        //$$('.MuiTab-wrapper').get(-1) } }, 

    
    loadtoOracleQuarter : {get: function(){ return element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/input")) } },
    clearQuarter: { get: function () { return $$('[data-testid="CloseIcon"]').get(0) } },

    selectQ32020: {get: function(){return element(by.xpath("//li[@name='2020-03-31T04:00:00.000Z']"))}},

    loadToOracleButton : {get: function(){ return $('.p-button.p-component') } }, 
        
        //$('.p-button-label.p-c') } }, 

    confirmYes: { get: function () { return element(by.xpath("//span[contains(text(), 'Yes')]")) } },
    confirmNo: { get: function () { return element(by.xpath("//span[contains(text(), 'No')]")) } },

    //carrierInformation
    carrierInformationCarrier: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Carrier']/div/div/input")) } },
    carrierInformationCarrierClear: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Carrier']/div/div/div/button[1]/svg")) } },


    carrierInformationType: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Carrier Type']/div/div/input")) } },

    information: { get: function () { return $('.data-box') } }, 


})

module.exports = ServicingCarrierPO

