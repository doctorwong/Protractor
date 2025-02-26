import { browser, ExpectedConditions } from 'protractor';

export default {
  // An expectation for checking that an element, known to be present on the DOM of a page, is visible. 
  // Visibility means that the element is not only displayed but also has a height and width that is greater than 0.
  visibilty(value) {
    browser.wait(ExpectedConditions.visibilityOf(value), 20000);
  },
  // An expectation for checking the element to be invisible
  invisible(value) {
    browser.wait(ExpectedConditions.invisibilityOf(value), 20000);
  },
  // An expectation for checking an element is visible and enabled such that you can click it.
  clickable(value) {
    browser.wait(ExpectedConditions.elementToBeClickable(value), 20000);
  },
  // An expectation for the URL of the current page to contain specific text.
  urlText(value) {
    browser.wait(ExpectedConditions.urlContains(value), 20000);
  }
};
