var HomePO = function() {}

HomePO.prototype = Object.create({}, {

    mcLoadToOracleTab :  {get: function(){ return $$('.MuiTab-wrapper').get(-1) } }, 
    quarter :  {get: function(){ return $('.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiInputBase-input.MuiInput-input') } }, 
    quarterSelection: {get: function(){return element(by.xpath("//li[@name='2020-06-30T04:00:00.000Z']"))}},

    runRelease :  {get: function(){ return $('.p-button-label.p-c') } }, 

    confirmYes: { get: function () { return element(by.xpath("//span[contains(text(), 'Yes')]")) } },

    confirmNo: { get: function () { return element(by.xpath("//span[contains(text(), 'No')]")) } },

    runRelease :  {get: function(){ return $('.p-button-label.p-c') } }, 
    
    checkAll: {get: function(){return element(by.xpath("//div[@class='col-md-5']/div/div[1]/table/thead/tr/th[1]/div/span/div/span/span")) } },
    
    checkOne: {get: function(){return element(by.xpath("//div[@class='col-md-5']/div/div[1]/table/tbody/tr[1]/td[1]/span[2]/span")) } },

    copyrightText: {get: function(){return element(by.xpath("//span[@class='Copyright_copyRight__2oZfG']"))}}
})

module.exports = HomePO
