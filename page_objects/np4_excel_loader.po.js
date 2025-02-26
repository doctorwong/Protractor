var ExcelLoaderPO = function() {}

ExcelLoaderPO.prototype = Object.create({}, {
    downloadExcel: {get: function(){return element(by.xpath("//button[@data-testid='download']"))}},

    downloadNP4: {get: function(){return element(by.xpath("//button[@data-testid='download']"))}},

    //np4-excel-loader_largerText__28Wil
    uploadNP4: {get: function(){return element(by.xpath("//button[@data-testid='upload']"))}},


})

module.exports = ExcelLoaderPO