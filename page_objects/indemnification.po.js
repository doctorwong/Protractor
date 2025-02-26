var IndemnificationPO = function () { }

IndemnificationPO.prototype = Object.create({}, {


    //allocation 
    allocationQuarter: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/input")) } },
    allocationQuarterClear: { get: function () { return $$('[data-testid="CloseIcon"]').get(0)} },
    allocationPoolCode: { get: function () { return $$('.MuiInputBase-input.MuiInput-input').get(1) } },
    allocationClear: { get: function () { return element(by.xpath("//button[@data-testid='clear-button']")) } },
    allocationExcelDownload: { get: function () { return $('.material-icons.MuiIcon-root.icon-button_innericon__Cbxzl.icon-button_innericonHover__dNm39') } },
                                //material-icons MuiIcon-root icon-button_innericon__Cbxzl icon-button_innericonHover__dNm39
    //file_download
        //element(by.xpath("//button[@data-testid='download']"))}},


    //Create Allocation Adjustments
    adjustmentsQuarter: { get: function () { return $('.MuiInputBase-input.MuiInput-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31') } },
        //$('.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiInputBase-input.MuiInput-input') } },
    
        //$('.MuiInputBase-root.MuiInput-root.MuiInput-underline.MuiInputBase-formControl.MuiInput-formControl') } },
        // element(by.xpath("//input[@name='quarter']"))}},
        // element(by.xpath("//button[@data-testid='label-Quarter']"))}},
    createAllocationAdjustmentsButton: { get: function () { return element(by.xpath("//button[@class='p-button p-component']")) } },
    confirmYes: { get: function () { return element(by.xpath("//span[contains(text(), 'Yes')]")) } },
    confirmNo: { get: function () { return element(by.xpath("//span[contains(text(), 'No')]")) } },


    //Create Pool Level Adjustments
    poolQuarter: { get: function () { return $('.MuiInputBase-input.MuiInput-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31') } },
        
        //element(by.id('Quarter')) } },


    //Allocation Inquire & Mod
    poolField: { get: function () { return $('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31') } },
    InquireClearPool: { get: function () { return element(by.xpath("//svg[@data-testid='CloseIcon']")) } },
    InquireModInquireButton: { get: function () { return element(by.xpath("//button[@data-testid='btnInquire']")) } },
    firstCaseNumber: { get: function () { return element(by.xpath("//div[@data-testid='inquiry-grid']/div/div[1]/table/tbody/tr[1]/td[1]/span[2]/a")) } },
    selectFirstRow: { get: function () { return $$('.material-icons.MuiIcon-root.icon-button_innericon__Cbxzl.icon-button_innericonHover__dNm39').get(1) } },
        
    //{ get: function () { return element(by.xpath("//span[@data-tooltip-bottom='View Details for quarter 06/30/2021, pool code 12']/span")) } },
    addAllocation: { get: function () { return element(by.xpath("//button[@data-tooltip-bottom='Add Allocation']/span")) } },
    newPolicyYear: { get: function () { return element(by.xpath("//div[@data-testid='allocation-grid']/div/div[1]/table/tbody/tr[2]/td[1]/div/div/div/div/input")) } },
    newState: { get: function () { return element(by.xpath("//div[@data-testid='allocation-grid']/div/div[1]/table/tbody/tr[2]/td[2]/div/div/div/input")) } },
    newAllocation: { get: function () { return element(by.xpath("//div[@data-testid='allocation-grid']]/div/div[1]/table/tbody/tr[2]/td[3]/div/div[1]/div/input")) } },
    evenlyDistributeAllocation: { get: function () { return element(by.xpath("//button[@testid='btnDistribute']")) } },
    saveButton: { get: function () { return element(by.xpath("//button[@testid='button-Save']")) } },
    backButton: { get: function () { return element(by.xpath("//span[contains(text(),'chevron_left')]")) } },
        //material-icons MuiIcon-root icon-button_innericon__3uF_M icon-button_innericonHover__3sYEq
    caseNumberField: { get: function () { return element(by.xpath("//div[@data-testid='txtCaseId']/div/input")) } },
    caseNameField: { get: function () { return element(by.xpath("//div[@data-testid='txtCaseName']/div/input")) } },
    poolField: { get: function () { return element(by.xpath("//div[@data-testid='drpPool']/div/div/input")) } },
    clearPool: { get: function () { return element(by.xpath("//div[@data-testid='drpPool']/div/div/div/button[1]")) } },
    inquireButton: { get: function () { return element(by.xpath("//button[@data-testid='btnInquire']")) } },
    clearButton: { get: function () { return element(by.xpath("//button[@data-testid='btnClear']")) } },
    inquiryGrid: { get: function () { return element(by.xpath("//div[@data-testid='inquiry-grid']")) } },
    firstCaseNumber: { get: function () { return element(by.xpath("//div[@data-testid='inquiry-grid']/div/div[1]/table/tbody/tr/td[1]/span")) } },
    allocationGrid: { get: function () { return element(by.xpath("//div[@data-testid='allocation-grid']")) } },
    saveButton: { get: function () { return element(by.xpath("//button[@data-testid='button-Save']")) } },
    btnDistribute: { get: function () { return element(by.xpath("//button[@data-testid='button-Evenly Distribute Allocation']")) } },
    addAllocation: { get: function () { return element(by.xpath("//span[@data-tooltip-bottom='Add Allocation']/span")) } },
    downloadExcel: { get: function () { return element(by.xpath("//span[@data-tooltip-bottom='Download to Excel']/span[0]")) } },
    backToInquiry: { get: function () { return element(by.xpath("//span[contains(text(), 'chevron_left')]")) } },
})

module.exports = IndemnificationPO
