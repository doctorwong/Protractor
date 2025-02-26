var ScPaymentApprovalPO = function () { }

ScPaymentApprovalPO.prototype = Object.create({}, {

    //dropdowns
    quarterEndDropdown: { get: function () { return $$('.MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd').get(0) } },
    // element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/input"))}}, 

    //MuiInput-input MuiInputBase-input MuiInputBase-inputAdornedEnd MuiAutocomplete-input MuiAutocomplete-inputFocused css-mnn31
    clearQuarterEnd: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Quarter']/div/div/div/button[1]")) } },
    groupDropdown: { get: function () { return $$('.MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd').get(1) } },
    //{get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Group']/div/div/input"))}}, 
    clearGroup: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Group']/div/div/div/button[1]")) } },


    poolDropdown: { get: function () { return $$('.MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd').get(2) } },
    //function(){return element(by.xpath("//div[@data-testid='autocomplete-Pool']/div/div/input"))}}, 

    /*
    /div/div[2]/div[2]/div[1]/div/div[1]/div[3]/div
    /div/div[2]/div[2]/div[1]/div/div[1]/div[3]/div/div/div/input
    */

    clearPool: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Pool']/div/div/div/button[1]")) } },
    statusDropdown: { get: function () { return $$('.MuiInputBase-input.MuiInput-input.MuiAutocomplete-input.MuiAutocomplete-inputFocused.MuiInputBase-inputAdornedEnd').get(3) } },
    //{get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Status']/div/div/input"))}}, 
    clearStatus: { get: function () { return element(by.xpath("//div[@data-testid='autocomplete-Status']/div/div/div/button[1]")) } },
    inquireButton: { get: function () { return element(by.xpath("//button[@data-testid='btnInquire']")) } },

    selectFirstCheckbox: { get: function () { return element(by.xpath("//span[@class='MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button'][2]/span[1]/input")) } },
    /*
        /html/body/div/div/div[2]/div[2]/div[2]/div/div[3]/div/div[1]/table/tbody/tr[1]/td[1]/span[2]
        /html/body/div/div/div[2]/div[2]/div[2]/div/div[3]/div/div[1]/table/tbody/tr[1]/td[1]/span[2]/span[1]/input
    */

    selectAllCheckbox: { get: function () { return element(by.xpath("//span[@class='MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button'][1]/span[1]/input")) } },

    excelDownload: { get: function () { return element(by.xpath("//span[@data-tooltip-bottom='Download to Excel']/span")) } },
    selectRow: { get: function () { return element(by.xpath("//a[@href='#/servicing-carrier/Payment-approval/detail?quarterEndDate=2021-03-31T04:00:00.000Z&groupCode=16977&poolCode=12&paymentId=909519']")) } },

    rejectButton: { get: function () { return element(by.xpath("//button[@data-testid='btnReject']")) } },
    approveButton: { get: function () { return element(by.xpath("//button[@data-testid='btnApprove']")) } },
    reviewBtn: { get: function () { return element(by.xpath("//div[@class='app-content']/div[2]/div[3]/button[3]")) } },

    commentsField: { get: function () { return $('.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputMarginDense.MuiOutlinedInput-inputMarginDense') } },

    backButton: { get: function () { return $('.material-icons.MuiIcon-root.icon-button_innericon__Cbxzl.icon-button_innericonHover__dNm39') } },
    clearButton: { get: function () { return element(by.xpath("//button[@data-testid='btnClear']")) } },
    dataTable: { get: function () { return $('.p-datatable-wrapper') } }
})

module.exports = ScPaymentApprovalPO