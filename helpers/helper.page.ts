import { browser, element, by, protractor, ExpectedConditions, $, $$ } from 'protractor';
import { promise } from 'selenium-webdriver';

export class HelperPage {

  CloseOpenWindowTabs() {
    browser.getAllWindowHandles().then((handles) => {
      browser.driver.close();
      browser.driver.switchTo().window(handles[0]);
    });
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }


  getAppTitle() {
    return browser.getTitle();
  }

  getPageLoaded(index) {
    return $$('.MuiTypography-root.MuiTablePagination-caption').get(index);
  }

  scrollIntoView = function (element) {
    return browser.executeScript(function (element) {
      element.scrollIntoView();
    }, element.getWebElement());
  };

  wait(waitTime) {
    return browser.driver.sleep(waitTime);
  }

  waitforfiledownload(DownloadFileName) {
    let fs = require('fs');
    browser.driver.wait(function () {
      return fs.existsSync(DownloadFileName);
    }, 40000);
  }


  waitForPresenceOf(vElement) {
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.presenceOf(vElement), 10000, 'Element taking too long to be present ');
  }

  waitForVisibilityOf(vElement) {
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(vElement), 25000, 'Element taking too long to appear ');
  }

  waitUntilClickabilityOf(vElement) {
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(vElement), 25000, 'Element taking too long to appear to become clickable');
  }

  getDownloadedPDFFile(FileName): any {
    let path = require('path'),
      PDFParser = require('pdf2json');
    let filePath = path.join(browser.params.vDownloadsDir + FileName);
    console.log('      File to be converted; ', filePath);
    let FileParser = new PDFParser();
    FileParser.loadPDF(filePath);
    return FileParser;
  }

  getAppInfo() {
    const vAppInfoTBL = element.all(by.id('appinfo'));
    browser.params.vAppInfoItems = vAppInfoTBL.all(by.tagName('div'));
  }

  clearElement(vElement) {
    return vElement.then((attribute) => {
      for (var i = 0; i < attribute.length; i++) {
        vElement.sendKeys(protractor.Key.BACK_SPACE);
      }
    });
  }

  click(vElement) {
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(vElement), 25000, 'Element taking too long to appear to become clickable');
    vElement.click();
  }

  doubleClick(vElement) {
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(vElement), 25000, 'Element taking too long to appear to become clickable');
    vElement.click();
  }

  getApplicationDataDirectory() {
    if (browser.params.ENV === "qawww") {
      browser.params.vApplicationDataDir = "//boca2qi/appdata/JASe2e/IMS/";
    } else if (browser.params.ENV === "devwww") {
      browser.params.vApplicationDataDir = "//fps1di/appdata/JASe2e/IMS/";
    } else {
      browser.params.vApplicationDataDir = "//boca2/appdata/JASe2e/IMS/";
    }
  }

  cleanDownloadsDir(dirPath) {
    const fsExtra = require('fs-extra')
    fsExtra.emptyDirSync(dirPath)
  }

  getScenarioData(scenario) {
    const vabsolutePath = (browser.params.vApplicationDataDir + 'ScenarioData/' + scenario);
    browser.params.vInputData = require(vabsolutePath);
    console.log(' ');
    console.log('      * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *');
    console.log('      Input data file: ', vabsolutePath);
    console.log(' ');
    console.log('      Input data for scenario: ', scenario);
    console.log(' ');
    console.log('      ', browser.params.vInputData);
    console.log('      * * * * * * * * * * * * * * * END INPUT DATA * * * * * * * * * * * * * * * * * ');
    console.log(' ');
  }

  getTodaysDate() {
    var date = new Date(new Date());
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var formattedDate = ('0' + date.getDate()).slice(-2);
    var formattedMonth = ('0' + (date.getMonth() + 1)).slice(-2);
    var formattedYear = date.getFullYear();
    browser.params.vTodaysDateMonth = formattedMonth;
    browser.params.vTodaysDateDay = formattedDate;
    browser.params.vTodaysDateYear = formattedYear;
    browser.params.vTodaysDate = formattedMonth + '/' + formattedDate + '/' + formattedYear;
    browser.params.vTodayMDYYYY = month + '/' + day + '/' + formattedYear;
    browser.params.vTodayMDDYYYY = month + '/' + day + '/' + formattedYear;
    console.log('      Todays Date: ', browser.params.vTodaysDate);
    var nextYear = formattedYear + 1
    browser.params.vNextYearDate = formattedMonth + '/' + formattedDate + '/' + nextYear;
    var DD = day.toString();
    if (day === 1) {
      DD = "01"
    }
    if (day === 2) {
      DD = "02"
    }
    if (day === 3) {
      DD = "03"
    }
    if (day === 4) {
      DD = "04"
    }
    if (day === 5) {
      DD = "05"
    }
    if (day === 6) {
      DD = "06"
    }
    if (day === 7) {
      DD = "07"
    }
    if (day === 8) {
      DD = "08"
    }
    if (day === 9) {
      DD = "09"
    }
    browser.params.vTodayMDDYYYY = month + '/' + DD + '/' + formattedYear;
  }

  getYesterdayDate() {
    var date = new Date(new Date());
    date.setDate(date.getDate() - 1);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var formattedDate = ('0' + date.getDate()).slice(-2);
    var formattedMonth = ('0' + (date.getMonth() + 1)).slice(-2);
    var formattedYear = date.getFullYear();
    browser.params.vYesterday = formattedMonth + '/' + formattedDate + '/' + formattedYear;
    browser.params.vYesterdayMDYYYY = month + '/' + day + '/' + formattedYear;
    console.log('      Yesterday: ', browser.params.vYesterday);
  }

  waitForSpinner() {
    const EC = protractor.ExpectedConditions;
    browser.wait(EC.presenceOf(element(by.css('p-progress-spinner'))), 10000, 'Element taking too long to be present ');
    browser.wait(
      EC.invisibilityOf(element(by.css('p-progress-spinner'))),
      5000,
      `Timed out waiting for spinner to not be visible.`)

  }

  getCurrentTime() {
    var date = new Date(Date.now());
    var HH = date.getHours().toString();
    var MM = date.getMinutes().toString();
    var SS = date.getSeconds().toString();
    browser.params.vCurrentTime = (HH + '' + MM + '' + SS);
    if (HH === "1") {
      HH = "01"
    }
    if (HH === "2") {
      HH = "02"
    }
    if (HH === "3") {
      HH = "03"
    }
    if (HH === "4") {
      HH = "04"
    }
    if (HH === "5") {
      HH = "05"
    }
    if (HH === "6") {
      HH = "06"
    }
    if (HH === "7") {
      HH = "07"
    }
    if (HH === "8") {
      HH = "08"
    }
    if (HH === "9") {
      HH = "09"
    }
    if (MM === "1") {
      MM = "01"
    }
    if (MM === "2") {
      MM = "02"
    }
    if (MM === "3") {
      MM = "03"
    }
    if (MM === "4") {
      MM = "04"
    }
    if (MM === "5") {
      MM = "05"
    }
    if (MM === "6") {
      MM = "06"
    }
    if (MM === "7") {
      MM = "07"
    }
    if (MM === "8") {
      MM = "08"
    }
    if (MM === "9") {
      MM = "09"
    }
    browser.params.vCurrentTimeFormatted = (HH + ":" + MM);
  }

}
