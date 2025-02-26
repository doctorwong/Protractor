var PfdcPO = function() {}

PfdcPO.prototype = Object.create({}, {

    np4ErrorManagementCount: {get: function(){return element(by.xpath("//a[contains(text(),'NP4 Error Management Count')]"))}},
        //element(by.xpath("//a[@href='#/servicing-carrier/pfdc/pfdc-error']"))}},
    loadNP4dataPfdc: {get: function(){return element(by.xpath("//button[@data-testid='bntLoadNP4']"))}},
    loadNotification: {get: function(){return element(by.id("notistack-snackbar"))}},
    
    //return
    returnCarrierDropdown: {get: function(){return element(by.id("label-Carrier"))}},
    returnPoolDropdown: {get: function(){return element(by.id("label-Pool"))}},
    returnNP4DataPfdc: {get: function(){return element(by.xpath("(//button[@data-testid='submitbutton'])[1]"))}},

    //variance
    variancePoolDropdown: {get: function(){return element(by.xpath("(//input[@id='label-Pool'])[1]"))}},
    varianceReportType: {get: function(){return element(by.id("label-ReportType"))}},
    downloadExcel: {get: function(){return element(by.xpath("//button[@data-testid='downloadPFDCVarianceDetailReportToExcel']"))}},

    //clear
    clearReturnCarrier: {get: function(){return $('.MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall') } },
    clearReturnPool: {get: function(){return $$('.MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall').get(1) } },
    clearAttachments: {get: function(){return $$('.MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall').get(2) } },

    clearVariancePool: {get: function(){return $$('.MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall').get(3) } },
    clearReportType: {get: function(){return $$('.MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall').get(4) } },

})

module.exports = PfdcPO