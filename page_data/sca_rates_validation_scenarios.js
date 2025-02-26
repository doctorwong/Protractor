var ScaRatesScenarios = function() {}

ScaRatesScenarios.prototype = Object.create({}, {

  //scenario
    quarter: {get: function(){return '03/31/2021'}},
      //element(by.name("03/31/2021"))}},
    carrier: {get: function(){ return '10804 - TRAVELERS INSURANCE CO'}},
    pool: {get: function(){return 'National WC Reinsurance Pooling Mechanism'}},
    poolCodeData: {get: function(){ return '12'}},
})


module.exports = ScaRatesScenarios