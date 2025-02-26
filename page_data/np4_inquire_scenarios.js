var Np4InquireScenarios = function() {}

Np4InquireScenarios.prototype = Object.create({}, {

  //postive test inputs
    quarter: {get: function(){return element(by.name("2021-06-30T04:00:00.000Z"))}},
    pool: {get: function(){return "New Mexico"}},
    state:  {get: function(){return 'NEW MEXICO'}},
    policyYear: {get: function(){ return "2023"}},
    reportCode: {get: function(){return '0100'}}, 
    carrier: {get: function(){return "10804 - TRAVELERS INSURANCE CO"}},
    transactionType: {get: function(){return 'Premium Tax True-Up'}},

    //negative test inputs
    zeroCarrier: {get: function()
      {return "10065 - AMERICAN MOTORISTS INS CO"}},
    invalidYear: {get: function(){ return "2019"}},


    //ouputs
  })

module.exports = Np4InquireScenarios
