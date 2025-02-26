var ScPaymentApprovalScenarios = function() {}

ScPaymentApprovalScenarios.prototype = Object.create({}, {

  //dropdowns
    quarter: {get: function(){return '03/31/2021'}},
    group: {get: function(){return '10804 - TRAVELERS INSURANCE CO'}},    
    pool: {get: function(){return '12 - National WC Reinsurance Pooling Mechanism'}},    
    status: {get: function(){return 'Approved'}}, 
    //selectRow2: {get: function(){return 'Submitted'}},    
})


module.exports = ScPaymentApprovalScenarios