var ScaRatesScenarios = function() {}

ScaRatesScenarios.prototype = Object.create({}, {



  //scenario
    carrier: {get: function(){return "TRAVELERS INSURANCE CO"}},
    pool: {get: function(){return "12 - National WC Reinsurance Pooling Mechanism"}},
    state: {get: function(){return "ALABAMA"}},
    reportCode: {get: function(){return '0100'}}, 
    year: {get: function(){return '2023'}}, 

    //emptyTable
    emptyCarrier: {get: function(){return "AMERICAN MOTORISTS INS CO"}},
    emptyPool: {get: function(){return element(by.name("12 - National WC Reinsurance Pooling Mechanism"))}},
    emptyState: {get: function(){return "ALABAMA"}},
    emptyReportCode: {get: function(){return element(by.name('0100'))}}, 
    emptyYear: {get: function(){return '2021'}}, 

    //placeholder rates
    placeholderRate: {get: function(){return "1.00"}},
    placeholderFee: {get: function(){return "1.00"}},
    placeholderComment: {get: function(){return "One Dollar"}},


    //data
    carrierCode: {get: function(){return '10804'}},
    carrierName: {get: function(){return 'TRAVELERS'}},
    poolCode: {get: function(){return '12' }},
    poolData: {get: function(){return '12' }},
    stateCode: {get: function(){return '011' }},
    stateName: {get: function(){return 'ALABAMA' }},
    reportCodeData: {get: function(){return '0100' }},
    effectiveYearData: {get: function(){return 2021 }} ,
    rateData: {get: function(){return "14.64%"}},
    rateExcel: {get: function(){return 0.1464 }},
    flatFeeData: {get: function(){return 300.00 }},
    uncollectedPremiumData: {get: function(){return 'Y'}},
    commentsField: {get: function(){return '$300 Flat Rate Fee'}}

})


module.exports = ScaRatesScenarios
