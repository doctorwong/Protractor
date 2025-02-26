var HomePO = function() {}

HomePO.prototype = Object.create({}, {

    ENV : {get: function(){return "devintraapps"}},
    
    ncciLogo: {get: function(){return element(by.id('ncci-appbar-logo'))}},

    titleBar: {get: function(){return element(by.id('ncci-appbar-title'))}},

    copyrightLogo: {get: function(){return element(by.xpath("//span[@class='Copyright_copyRight__2oZfG']"))}},

    copyrightText: {get: function(){return element(by.xpath("//span[@class='Copyright_copyRight__2oZfG']"))}}
})

module.exports = HomePO