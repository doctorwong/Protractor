var EbnrScenarios = function() {}

EbnrScenarios.prototype = Object.create({}, {

  //scenario
    pool: {get: function(){return '12 - National WC Reinsurance Pooling Mechanism'}},
    poolDisplayed: {get: function(){return '12'}}, 

    report: {get: function(){return '0100'}}, 
    reportDisplayed: {get: function(){return '0100'}}, 

    year: {get: function(){return '2021' }},
    yearDisplayed: {get: function(){return '2021'}},  
 
    state: {get: function(){return 'ALABAMA'}},
    stateDisplayed: {get: function(){return '011 - ALABAMA'}},  

    testRate: {get: function(){return '31.99'}},  

})


module.exports = EbnrScenarios