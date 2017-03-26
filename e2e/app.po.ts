import { browser, element, by } from 'protractor';

export class NggalleryPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-root h1')).getText();
  }
}
