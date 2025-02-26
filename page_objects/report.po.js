const { get } = require("http")
const { $$ } = require("protractor")

var ReportPO = function() {}

ReportPO.prototype = Object.create({}, {
    
    quartersDropdown: {get: function(){return element(by.id("Quarter"))}},
    reportCodeDropdown: {get: function(){return element(by.id("Quarters"))}},

    //Reports Selections
    listbox:  {get: function(){return element(by.xpath("//ul[@role='listbox']"))}},
    selectQ3Report: {get: function(){return element(by.xpath("//ul[@role='listbox']/li[2]/span[1]/span[1]/input"))}},
        //element(by.xpath("//ul[@role='listbox']/li[2]/span[1]/span[1]/input"))}},
        //element(by.xpath("//span[contains(text(), '09/30/2021')]"))}},


    
    selectQ2Report: {get: function(){return element(by.xpath("//ul[@role='listbox']/li[3]/span[1]/span[1]/input"))}},
    selectQ1Report: {get: function(){return element(by.xpath("//ul[@role='listbox']/li[4]/span[1]/span[1]/input"))}},
    poolsDropdown: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Pool Code']/div/div/input"))}},



       

    //html/body/div/div/div[2]/div[2]/div[1]/div[2]/div/div/input
    //element(by.xpath("//input[@name='rpfsdropdown']"))}},
        //element(by.xpath("//div[@id='PoolCode']/div"))}},


    //Pools Selections
    selectNM: {get: function(){return element(by.xpath("//li[@name='New Mexico WC Assigned Risk Pool']"))}},
    selectNational: {get: function(){return element(by.xpath("//li[@class='MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button'][1]"))}},
    selectMI: {get: function(){return element(by.xpath("//li[@class='MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button'][2]"))}},
    selectMA: {get: function(){return element(by.xpath("//li[@class='MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button'][3]"))}},
    selectTN: {get: function(){return element(by.xpath("//li[@class='MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button'][4]"))}},
    runQuery: {get: function(){return element(by.xpath("//button[@data-testid ='runQuery']"))}},
    toggle: {get: function(){return element(by.xpath("//span[@data-testid='carrier-state-toggle']"))}},

    //Variance Columns
    grossWrittenColumn: {get: function(){return element(by.xpath("//span[contains(text(),'Gross Written')]"))}},
    uncollectedPremium: {get: function(){return element(by.xpath("//span[contains(text(),'Uncollected Premium')]"))}},
    lowerPercent: {get: function(){return element(by.xpath("//span[contains(text(),'Lower Percent')]"))}},
    lowerAmount: {get: function(){return element(by.xpath("//span[contains(text(),'Lower Amount')]"))}},
    policyYear: {get: function(){return element(by.xpath("//span[contains(text(),'Policy Year')]"))}},
    upperPercent: {get: function(){return element(by.xpath("//span[contains(text(),'Upper Percent')]"))}},
    upperAmount: {get: function(){return element(by.xpath("//span[contains(text(),'Upper Amount')]"))}},
    
    olderPolicyPercentInput: {get: function(){return $$('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedStart.css-mnn31').get(0)}},
        //element(by.xpath("//div[@id='np4-variance_variance-container__aXqbK']/div/div[2]/div[2]/div/div/div/input"))}},


        //$$('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedStart.css-mnn31').get(0)}},
        
    //{get: function(){return p-inputtext p-component p-filled p-inputnumber-input
        //element(by.xpath("//span[@class='p-inputnumber p-component p-inputwrapper np4-variance_variancePecentInputWidth__ztDB3p-inputwrapper-filled']/input"))}},
    
  
        
    olderPolicyDollarInput: {get: function(){return $$('.p-inputtext.p-component.p-filled.p-inputnumber-input').get(1)}},
        //element(by.xpath("//div[@id='np4-variance_variance-container__aXqbK']"))}},
    //div/div[2]/div[3]/div/div/div/input"))}},
    


    yearInput: {get: function(){return $$('.MuiInput-input.MuiInputBase-input.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').get(1)}},
    //div/div[2]/div[4]/div/div/div/input"))}},
        //element(by.xpath("//div[@data-testid='autocomplete-Year']/div/div/input"))}},



    toggleVariance: {get: function(){return $('.btn.btn-link.np4-variance_toggle-variance__hsw1Z')}},
        //element(by.xpath("//span[contains(text(),'Variance')]"))}},
        //

        
        //element(by.xpath("//button[@class='btn btn-link toggle-variance']"))}},
    varianceContainer: {get: function(){return element(by.id('np4-variance_variance-container__aXqbK'))}},

    
        
        //return element(by.id('variance-container'))}},

    
    lowerThreshold: {get: function(){return element(by.xpath("//span[contains(text(),'Lower Threshold')]"))}},
    upperThreshold: {get: function(){return element(by.xpath("//span[contains(text(),'Upper Threshold')]"))}},

    //Query Columns
    queryGrossWritten: {get: function(){return element(by.id('simple-tab-0'))}},
    queryUncollectedPremium: {get: function(){return element(by.id('simple-tab-1'))}},
    paidLosses: {get: function(){return element(by.id('simple-tab-2'))}},
    outstandingLosses: {get: function(){return element(by.id('simple-tab-3'))}},
    incurredLosses: {get: function(){return element(by.id('simple-tab-4'))}},
    otherExpenses: {get: function(){return element(by.xpath("//*[@id='simple-tab-5']"))}},
    unearnedPremium: {get: function(){return element(by.xpath("//*[@id='simple-tab-6']"))}},
    scrollToLastColumn: {get: function(){return element(by.xpath("//button[@data-testid='KeyboardArrowRightIcon']"))}},
    sca: {get: function(){return element(by.xpath("//*[@id='simple-tab-7']"))}},
    producerFees: {get: function(){return element(by.xpath("//*[@id='simple-tab-8']"))}},
    scrollToFirstColumn: {get: function(){return element(by.xpath("//button[@data-testid='KeyboardArrowLeftIcon']"))}},
    grossWritten: {get: function(){return element(by.id('simple-tab-0'))}},

    //columnDropdowns
    carrierDropdown: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Carrier']/div/div/input"))}},
    clearCarrierDropdown: {get: function(){return element(by.xpath("//svg[@data-testid='CloseIcon'][10]"))}},

    reportCodeDropdown: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Report Code']/div/div/input"))}},
    clearReportCodeDropdown: {get: function(){return element(by.xpath("//svg[@data-testid='CloseIcon'][11]"))}},

    policyYearDropdown: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-Policy Year']/div/div/input"))}},
    clearPolicyYearDropdown: {get: function(){return element(by.xpath("//svg[@data-testid='CloseIcon'][12]"))}},

    stateDropdown: {get: function(){return element(by.xpath("//div[@data-testid='autocomplete-State']/div/div/input"))}},
    clearStateDropdown: {get: function(){return element(by.xpath("//svg[@data-testid='CloseIcon'][13]"))}},


    //dropdownOptions
    carrierTravelers: {get: function(){return element(by.xpath("//li[@name='TRAVELERS INSURANCE CO']"))}}, 
    reportCode100: {get: function(){return element(by.xpath("//li[@name='TRAVELERS INSURANCE CO']"))}}, 
    policyYear2020: {get: function(){return element(by.xpath("//li[@name='TRAVELERS INSURANCE CO']"))}}, 
    stateAlabama: {get: function(){return element(by.xpath("//li[@name='TRAVELERS INSURANCE CO']"))}}, 



    
    //tableDropdowns
    labelCarrier: {get: function(){return element(by.id('label-Carrier'))}},
    labelReportCode: {get: function(){return element(by.id('label-ReportCode'))}},
    labelPolicyYear: {get: function(){return element(by.id('label-PolicyYear'))}},
    labelState: {get: function(){return element(by.id('label-State'))}},
    carrier: {get: function(){return element(by.id('Carrier'))}},
    reportCode: {get: function(){return element(by.id('ReportCode'))}},
    reportPolicyYear: {get: function(){return element(by.id('PolicyYear'))}},
    state: {get: function(){return element(by.id('State'))}},
    clearButton: {get: function(){return element(by.xpath("//button[@data-testid='clearFilter']"))}},
        //by.xpath("//button[contains(text(),'clear')]"))}},

    //Page Navigation


    firstPage: {get: function(){return $('.p-paginator-first.p-paginator-element.p-link')}},
    previousPage: {get: function(){return $('.p-paginator-prev.p-paginator-element.p-link')}},
    nextPage: {get: function(){return element(by.xpath("//button[@class='p-paginator-next.p-paginator-element.p-link']"))}},
    lastPage: {get: function(){return $('p-paginator-last.p-paginator-element.p-link')}},
    dropdownPageSelect: {get: function(){return element(by.xpath("//div[@class='p-dropdown p-component p-inputwrapper p-inputwrapper-filled']"))}},

    clearAll : {get: function(){return element(by.xpath("//button[@data-testid='clear-button']"))}},

    /* alternate selectors
    nextPage: {get: function(){return $$('p-paginator-next.p-paginator-element.p-link')}},
    firstPage: {get: function(){return $$('p-paginator-first.p-paginator-element.p-link')}},
    previousPage: {get: function(){return $$('p-paginator-prev.p-paginator-element.p-link')}},
    nextPage: {get: function(){return $$('p-paginator-next.p-paginator-element.p-link')}},
    lastPage: {get: function(){return $$('p-paginator-last p-paginator-element p-link')}},
    dropdownPageSelect: {get: function(){return $('p-dropdown-trigger')}},
    */

    /*second alternate selectors
//*[@id="simple-tabpanel-0"]/div/div/div/div[2]/div/div/div/div/div/div/div/div[2]/button[3]
*/
})


module.exports = ReportPO