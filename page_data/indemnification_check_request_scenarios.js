var IndemnificationCheckRequestScenarios = function() {}

IndemnificationCheckRequestScenarios.prototype = Object.create({}, {

  //scenarios
    caseNumber: {get: function(){return 'AIM 10'}}, 
    caseName: {get: function(){return 'Alan Reddington v Ocean City Trucking LLC'}}, 
    poolCode: {get: function(){return '18'}}, 
    stateCode: {get: function(){return '20 - Massachusetts'}}, 
    policyYear: {get: function(){return '2012'}}, 
    oracleSupplier: {get: function(){return 'AIM MUTUAL INSURANCE'}}, 
    supplierContact: {get: function(){return 'MARGIE LIBITZ P.O. BOX 4070 BURLINGTON MA 01803-0970'}}, 
    amount: {get: function(){return '722.25'}}, 
    quarterEndDate: {get: function(){return '06/30/2013'}}, 
    checkCreationDate: {get: function(){return '04/20/2013'}}, 
    receivedAfterDate: {get: function(){return '01/01/2011'}}, 
    receivedBeforeDate: {get: function(){return '01/01/2021'}}, 
    lastUpdatedAfterDate: {get: function(){return '01/01/2011'}}, 
    lastUpdatedBeforeDate: {get: function(){return '01/01/2021'}}, 
    checkRequestGrid: {get: function(){return element(by.xpath("//div[@data-testid='checkRequest-grid']"))}},
 })

module.exports = IndemnificationCheckRequestScenarios