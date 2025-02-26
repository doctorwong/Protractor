import { element, by, browser } from 'protractor';
import { HelperPage } from '../helpers/helper.page';

describe('RPFS Adpplication - Scenario Start ', function() {

    let helperPage: HelperPage;

    beforeEach(async () => {
        helperPage = new HelperPage();
    });
      
    it('Should set size of the browser window to the maximum', async () => { 
    //  await browser.driver.manage().window().setSize(1900, 14000);
        await browser.driver.manage().window().maximize();
    });

    it('Should get the name of the suite running', async () => { 
        await browser.getProcessedConfig().then(function(config){ 
            browser.params.vSuitename = config.suite;
            console.log('      Suite: ', browser.params.vSuitename);
            });
    });

    it('Should clean Downloads directory from previous run output files ', async () => { 
        console.log('      Downloads directory to be cleaned: ', browser.params.DL_DIR);
        await helperPage.cleanDownloadsDir(browser.params.DL_DIR);
    });

    it('Should get the appropriate server/directory for the input & output data ', async () => { 
        console.log('      Getting the external application input data for scenario');
        await helperPage.getApplicationDataDirectory();
    });

    it('Should set the appropriate External Environment ', async () => { 
        if (browser.params.ENV === "prod") {
            browser.params.vExternalENV = "www";
        } else {
            if (browser.params.ENV === "qa") {
                browser.params.vExternalENV = "www";
            } else {
                browser.params.vExternalENV = "devwww";
            }    
        }    
        console.log('      External web environment: ', browser.params.vExternalENV);
    });

});
