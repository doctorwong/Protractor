var AggregationScenarios = function () { }

var AggregationScenarios = function () { }

AggregationScenarios.prototype = Object.create({}, {


  //load reserves
  loadQuarter: { get: function () { return '03/31/2021' } },
  varianceQuarter: { get: function () { return '03/31/2021' } },
  reportType: { get: function () { return 'Summary by Field' } },

  //admin and income
  adminQuarter: { get: function () { return '12/31/2018' } },
  adminPool: { get: function () { return '12 - National WC Reinsurance Pooling Mechanism' } },
  adminState: { get: function () { return '011 - ALABAMA' } },
  adminPolicyYear: { get: function () { return '2018' } },

  //pool level adjustment
  quarter: { get: function () { return "2021-03-31T04:00:00.000Z"} },
  pool: { get: function () { return '12 - National WC Reinsurance Pooling Mechanism' } },
  state: { get: function () { return '011 - ALABAMA' } },
  report: { get: function () { return '0100' } },
  year: { get: function () { return '2019' } },
  transactionType: { get: function () { return '109 - Indemnification and Pool Litigation' } },
  inquireBtn: { get: function () { return element(by.xpath("//div[@data-testid='inquire']")) } },
  clearBtn: { get: function () { return element(by.xpath("//div[@data-testid='clear']")) } },

  //aggregation
  aggregationQuarter: { get: function () { return '12/31/2018' } },
  aggregationPool: { get: function () { return '12 - National WC Reinsurance Pooling Mechanism' } },
  aggregationState: { get: function () { return '011 - ALABAMA' } },
  aggregationPolicyYear: { get: function () { return '2018' } },



})

module.exports = AggregationScenarios
