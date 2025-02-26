var PfdcScenarios = function() {}

PfdcScenarios.prototype = Object.create({}, {

    pfdcCarrier: {get: function(){
      //selects traveler's insurance co
      return "10804 - TRAVELERS INSURANCE CO"}},

    pfdcSReturnPool: {get: function(){
      //selects new mexico
      return "08 - New Mexico WC Assigned Risk Pool"}},
    pfdcVariancePool: {get: function(){
      //selects new mexico
      return "08 - New Mexico WC Assigned Risk Pool"}},

    pfdcVarianceReportType: {get: function(){
      //selects summary by field
      return "Summary by Field"}},
    
  })

module.exports = PfdcScenarios