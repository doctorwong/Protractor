var IndemnificationCheckRequestPO = function() {}

IndemnificationCheckRequestPO.prototype = Object.create({}, {
    caseNumberField : {get: function(){return element(by.xpath("//input[@id='caseNumber']"))}},
    caseNameField : {get: function(){return element(by.xpath("//input[@id='caseName']"))}},
    oracleSupplierField : {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Oracle Supplier']/div/div/input"))}},

    clearOracleSupplier : {get: function(){return $$('.MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall').get(0) } },

        //element(by.xpath("//div[@data-test-id='payeeName']/div/div/div/button[1]/span[1]/svg"))}},
        //element(by.xpath("//div[@data-testid='autocomplete-Oracle Supplier']/div/div/div/button[1]/span[1]/svg/path"))}},
    poolField : {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Pool Code']/div/div/input"))}},

    clearPool : {get: function(){return $$('.MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall').get(1) } },
        //element(by.xpath("//div[@data-testid='poolCode']/div/div/div/button[1]/span[1]/svg"))}},
    stateField : {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-State Code']/div/div/input"))}},
    clearState : {get: function(){return $$('.MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall').get(2) } },
        //element(by.xpath("//div[@data-testid='autocomplete-State Code']/div/div/div/button[1]"))}},
        //element(by.xpath("//div[@data-testid='CloseIcon']"))}},
    
    //element(by.xpath("//div[@data-testid='stateCode']/div/div/div/button[1]/span[1]/svg)"))}},
    policyYearField : {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Policy Year']/div/div/input"))}},
    clearPolicyYear : {get: function(){return $$('.MuiSvgIcon-root.MuiSvgIcon-fontSizeSmall').get(3) } },
        //element(by.xpath("//div[@data-testid='policyYear']/div/div/div/button[1]/span[1]/svg"))}},
    receivedAfterDate : {get: function(){return $$('.p-inputtext.p-component').get(0) } },
    receivedBeforeDate : {get: function(){return $$('.p-inputtext.p-component').get(1) } },
    lastUpdatedAfterDate : {get: function(){return $$('.p-inputtext.p-component').get(2) } },
    lastUpdatedBeforeDate : {get: function(){return $$('.p-inputtext.p-component').get(3) } },
    inquireButton: {get: function(){return element(by.xpath("//button[@data-testid='Inquire']"))}},
    downloadExcel: {get: function(){return element(by.xpath("//span[contains(text(),'file_download')]"))}},
    clearButton: {get: function(){return element(by.xpath("//button[@data-testid='clear']"))}},
    checkRequestGrid : {get: function(){return element(by.xpath("//div[@data-testid='checkRequest-grid']"))}},
    firstCaseNumber: {get: function(){return element(by.xpath("//div[@data-testid='checkRequest-grid']/div/div[1]/table/tbody/tr[1]/td[1]"))}},
 })

 module.exports = IndemnificationCheckRequestPO