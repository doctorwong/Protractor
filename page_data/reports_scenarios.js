var ReportsScenarios = function() {}

ReportsScenarios.prototype = Object.create({}, {

    //np4 quarter to quarter report

        //quarter reports
        //selectQ3Report: {get: function(){return element(by.xpath("//li[@data-value='6/30/2022']/span[1]/svg"))}},

        selectQ3Report: {get: function(){return element(by.xpath("//li[@data-value='6/30/2022']"))}},
           //{get: function(){return element(by.xpath("//li[@class='MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button'][2]"))}},
          //$$('.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.css-bkvvfn').get(0)}},

        //html/body/div[2]/div[3]/ul/li[2]

          //$$('.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.css-3lunmu').get(0)}},
        //PrivateSwitchBase-input.css-1m9pwf3').get(0)}},
        //MuiSvgIcon-rootMuiSvgIcon-fontSizeMedium.css-vubbuv').get(0)}},
   
        //
        //MuiCheckbox-root MuiCheckbox-colorPrimary MuiButtonBase-root MuiCheckbox-root MuiCheckbox-colorPrimary PrivateSwitchBase-root css-3lunmu
        
          //element(by.xpath("//li[@data-value='9/30/2021']"))}},
        selectQ2Report: {get: function(){return element(by.xpath("//li[@data-value='3/31/2022']"))}},
        //{get: function(){return $$('.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiButtonBase-root.MuiCheckbox-root.MuiCheckbox-colorPrimary.PrivateSwitchBase-root.css-bkvvfn').get(1)}},
          //element(by.xpath("//li[@data-value='06/30/2021']"))}},
          //element(by.xpath("//span[contains(text(), '06/30/2021')]"))}},

        selectQ1Report: {get: function(){return element(by.xpath("//li[@data-value='12/31/2021']"))}},
          //element(by.xpath("//li[@data-value='03/31/2021']"))}},
          //element(by.xpath("//span[contains(text(), '03/31/2021')]"))}},

        //pool selections
        selectNM: {get: function(){return element(by.xpath("//li[@name='New Mexico WC Assigned Risk Pool']"))}},
        selectNational: {get: function(){return element(by.xpath("//li[@class='MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button'][1]"))}},
        selectMI: {get: function(){return element(by.xpath("//li[@class='MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button'][2]"))}},
        selectMA: {get: function(){return element(by.xpath("//li[@class='MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button'][3]"))}},
        selectTN: {get: function(){return element(by.xpath("//li[@class='MuiButtonBase-root MuiListItem-root MuiMenuItem-root MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button'][4]"))}},
    
    //call data report
    policyYearSelect: {get: function(){return element(by.name("2016"))}},
    yearsSelect: {get: function(){return element(by.name("5"))}},

    
  })

module.exports = ReportsScenarios