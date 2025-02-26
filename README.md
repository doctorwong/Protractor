# protractor-starter-template

This Protractor starter template includes industry best practices and coding standards that align with the QA Team's E2E Scripting Standards document. It enables the user to copy and use the source within this repo as a starting point of new Protractor e2e testing projects. This template uses the default Jasmine test framework for its testing interface.

## Suggested Development Environment Setup
- Install [Git](https://git-scm.com/download/) latest Source Release
- Install [Visual Studio Code](https://code.visualstudio.com/) latest Stable Build
- Setup JFrog Artifactory and JFrog Xray to align with NCCI's FOSS licensing and security compliance. This is independant of all projects.
   + Configure your local development environment for proxying package downloads through [JFrog Artifactory](https://gitlab.ncci.com/open-source/jfrog/getting-started#npm) 
   + Download and configure the plugin for your IDE that will enable scanning open source packages for license compliance and security vulnerabilities through [JFrog Xray](https://gitlab.ncci.com/open-source/jfrog/getting-started/-/blob/master/PLUGINS.md#visual-studio-code)

## Required Installations and Setup

1. Install [Node.js](https://nodejs.org/en/) LTS version
2. Run the following commands from a shell:
```
npm install -g protractor
webdriver-manager update
npm install -g typescript
```

## Getting Started

***do not clone this repo*
1. From this repo's Project overview, click Download 
2. Choose zip to download source code
3. Extract the downloaded directory to a local directory giving it a new name
4. Open a shell and change into the new directory
5. Run the following commands from the open shell to test:
```
npm install
protractor
```
<!-- 
GitLab New Project

git init
git remote add origin ssh://git@gitlab.ncci.com:2222/<user_id>/<project_name>.git
git add .
git commit -m "Initial commit"
git push -u origin master

Fork this repo if want to have and modify template as your own or to modify and push back to original origin
Merge requests will be accepted for only suggested modifications to template
 -->

## Features

1. Minimal set of dependencies
2. Sample file and directory structure
3. Helpers that include files for ExpectedConditions and timeouts
4. Sample test with ExpectedConditions
5. Test results in an HTML report with screenshots - [protractor-beautiful-reporter](https://www.npmjs.com/package/protractor-beautiful-reporter)

## Issues

- [QA Team's - Issues - script fails at start-up](https://ncci.sharepoint.com/:w:/s/O365-QA/EXW8QMevgilIqcuL2u2o8nIBw9cmeevUu6ROxpZwLCuD7w?e=CqJdYj)
- [QA Team's - Issues - knowledge sharing](https://ncci.sharepoint.com/:w:/s/O365-QA/Ec-xr7QBDWtPq5rGJIPlAB8B_tTSkM9_oQR6b5o-WfMcYg?e=AEgNzn)

## Suggested npm packages

** Install packages with --save-dev option:

    npm install <package_name> --save-dev

- [pdf2json](https://www.npmjs.com/package/pdf2json)
- [xlsx](https://www.npmjs.com/package/xlsx)
  - [QA Team's - XLSX utils sheet_to_json](https://ncci.sharepoint.com/:w:/s/O365-QA/ETZdpU2SwjJBl6_T2l5BlI0BLYCukYQF1TLIJB79vFMjyA?e=rggyNu)

## References
### protractor.conf.js

- https://github.com/angular/protractor/blob/master/lib/config.ts

### package.json

- https://docs.npmjs.com/files/package.json

### tsconfig.json

- http://www.typescriptlang.org/docs/handbook/tsconfig-json.html

### .gitignore

- http://help.github.com/ignore-files/

### JavaScript style guides

- https://www.w3schools.com/js/js_conventions.asp
- https://google.github.io/styleguide/jsguide.html

### misc

- [Protractor](https://www.protractortest.org/#/toc)
- [Jasmine](https://jasmine.github.io/)
- [ChromeDriver](https://sites.google.com/a/chromium.org/chromedriver/capabilities)
- [QA Team's -- E2E Testing Defined](https://ncci.sharepoint.com/:w:/r/sites/O365-QA/_layouts/15/Doc.aspx?sourcedoc=%7B3AC53068-A0C0-4C63-9BDF-E91D3299380A%7D&file=E2E%20Testing%20Defined.docx&action=default&mobileredirect=true)
- [QA Team's -- E2E Scripting Standards](https://ncci.sharepoint.com/:w:/r/sites/O365-QA/_layouts/15/Doc.aspx?sourcedoc=%7BAE38FC74-7C54-44CF-8586-D684D3DB1B2E%7D&file=E2E%20Scripting%20Standards.docx&action=default&mobileredirect=true)

## Further reading

- https://www.meziantou.net/which-version-of-ecmascript-should-i-use-in-the-typescript-configuration.htm
- https://medium.com/@tommedema/typescript-confusion-tsconfig-json-module-moduleresolution-target-lib-explained-65db2c44b491

### Implicit vs. Explicit waits
- http://elementalselenium.com/tips/47-waiting
- https://www.softwaretestinghelp.com/selenium-webdriver-waits-selenium-tutorial-15/
- https://discourse.webtestit.com/t/how-to-handle-page-and-element-load-times/1190
- https://stackoverflow.com/questions/42628226/how-does-implicit-wait-of-protractor-interact-with-explicit-wait/42630050
