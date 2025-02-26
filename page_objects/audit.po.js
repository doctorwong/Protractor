var AuditPO = function () { }

AuditPO.prototype = Object.create({}, {

    //pool level adjustment audit report
    quarterDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/input")) } },
    typeDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Type']/div/div/input")) } },
    updatedByDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Updated By']/div/div/input")) } },

    //admin and income audit report
    quarterDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/input")) } },
    updatedByDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Updated By']/div/div/input")) } },
    runQueryButton: { get: function () { return element(by.xpath("//button[@data-testid='button-Run Query']")) } },
    clearButton: { get: function () { return element(by.xpath("//button[@data-testid='button-Clear']")) } },

    //np4 audit report
    quarterDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/input")) } },
    carrierDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Carrier']/div/div/input")) } },
    updatedByDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Updated By']/div/div/input")) } },
    transactionTypeDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Transaction Type']/div/div/input")) } },
    runQueryButton: { get: function () { return element(by.xpath("//button[@data-testid='button-Run Query']")) } },
    clearButton: { get: function () { return element(by.xpath("//button[@data-testid='button-Clear']")) } },

    //reserve audit report
    quarterDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/input")) } },
    updatedByDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Updated By']/div/div/input")) } },
    runQueryButton: { get: function () { return element(by.xpath("//button[@data-testid='button-Run Query']")) } },
    clearButton: { get: function () { return element(by.xpath("//button[@data-testid='button-Clear'")) } },

    //reserves EBNR report
    policyYearDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Policy Year']/div/div/input")) } },
    poolDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Pool']/div/div/input")) } },
    updatedByDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Updated By']/div/div/input")) } },
    runQueryButton: { get: function () { return element(by.xpath("//button[@data-testid='button-Run Query']")) } },
    clearButton: { get: function () { return element(by.xpath("//button[@data-testid='button-Clear']")) } },

    //premium call audit report
    callYearDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Call Year']/div/div/input")) } },
    stateCodeDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-State Code']/div/div/input")) } },
    carrierDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Carrier']/div/div/input")) } },
    updatedByDropdown: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Updated By']/div/div/input")) } },
    runQueryButton: { get: function () { return element(by.xpath("//button[@data-testid='button-Run Query']")) } },
    clearButton: { get: function () { return element(by.xpath("//button[@data-testid='button-Clear']")) } },

})

module.exports = AuditPO
