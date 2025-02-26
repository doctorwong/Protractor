var FooterPO = function() {}

FooterPO.prototype = Object.create({}, {

    sourceLink : {get: function(){return element(by.xpath("/html/body/div/div/div[2]/div/div/div[1]"))}},
    
    //this source link works
    //html/body/div/div/div[2]/div/div/div[1]

    rpfsNetLink: {get: function(){return element(by.xpath("/html/body/div/div/div[2]/div/div/div[1]/div[2]"))}},

    rmLogLink: {get: function(){return element(by.xpath("/html/body/div/div/div[2]/div/div/div[1]/div[2]/ul/li[2]/a"))}},

    disclaimerLink: {get: function(){return element(by.linkText('Disclaimer'))}},

    closeDisclaimer: {get: function(){return element(by.xpath("//span[@class='MuiButton-label']"))}}
})

module.exports = FooterPO