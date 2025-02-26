var IndemnificationScenarios = function() {}

IndemnificationScenarios.prototype = Object.create({}, {

  //check request inquire
    caseNumber: {get: function(){return 'AIM 10'}}, 
    caseName: {get: function(){return 'Alan Reddington v Ocean City Trucking LLC'}}, 
    poolCode: {get: function(){return '18'}}, 
    checkCreationDate: {get: function(){return '04/20/2013'}}, 

  //allocation scenarios
    allocationCaseNumber: {get: function(){return '10029'}}, 
    allocationCaseName: {get: function(){return '	Arnaldo Jimenez Pirela v Womack Iron LLC'}}, 
    allocationPoolCode: {get: function(){return '12'}},
    
  //Create allocation adjustments
  adjustmentsQuarter: {get: function(){return '09/30/2022'}},
    //element(by.xpath("//li[@name='2022-03-31T04:00:00.000Z']"))}}, 

  //adjustment inquire
  quarter: {get: function(){return '03/31/2022'}}, 
  poolNational : {get: function(){return '12 - National WC Reinsurance Pooling Mechanism'}}, 
  excelDownload : {get: function(){return '12 - National WC Reinsurance Pooling Mechanism'}},  
  clearButton : {get: function(){return element(by.xpath("//button[@data-testid='clear-button']"))}},

  //pool level adjustments
  adjustmentsSelectPoolQuarter : {get: function(){return '09/30/2022'}},
  

  //allocation inquiry mod
  selectPoolQuarter : {get: function(){return element(by.xpath("//li[@name='2021-09-30T04:00:00.000Z']"))}},
  inquiryPoolCode: {get: function(){ return '12'}},



})


module.exports = IndemnificationScenarios
