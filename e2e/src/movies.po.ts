import { browser, by, element } from 'protractor';

export class MoviesPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }
  
  getMovieTitleText() {
    return element.all(by.css('.content .title')).first().getText() as Promise<string>;
  }
}
