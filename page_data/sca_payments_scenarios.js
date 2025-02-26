var ScaPaymentsScenarios = function() {}

ScaPaymentsScenarios.prototype = Object.create({}, {

  //dropdowns
    quarter: {get: function(){return '03/31/2021'}},
    group: {get: function(){return '10138 - BITCO GENERAL INSURANCE CORPORATION'}},    
    pool: {get: function(){return '12 - National WC Reinsurance Pooling Mechanism'}},    
    status: {get: function(){return 'Pending'}},    
      
    //data
    quarterEndData: {get: function(){return '1Q2021'}},
    groupCodeData: {get: function(){return '10138'}},
    groupNameData: {get: function(){return 'BITCO'}},
    poolCodeData: {get: function(){return '12'}},
    principalAmountData: {get: function(){return '$489,255.23'}},
    principalAmountExcel: {get: function(){return 489255.23}},
    interestDaysData: {get: function(){return '0'}},
    interestAmountData: {get: function(){return 0}},
    stateCode: {get: function(){return '12'}},
    remainingPrincipalExcel: {get: function(){return 0}},
    paymentAmountData: {get: function(){return '$489,255.23'}},
    statusData: {get: function(){return 'Approved'}},
    approvedByData: {get: function(){return 'ANDY KONDOLEON'}},
    submittedByData: {get: function(){return 'CFDAM'}},
    submittedDateData: {get: function(){return '05/26/2021'}},
    approvedDataData: {get: function(){return '05/26/2021'}},

    invalidPool: {get: function(){return '08 - New Mexico WC Assigned Risk Pool'}},

    //interest rate data
    Jan31st: {get: function(){return element(by.xpath("//table[@class='p-datepicker-calendar']/tbody/tr[5]/td[4]/span"))}},
    interestRate: {get: function(){return '1.01'}},
  })

module.exports = ScaPaymentsScenarios