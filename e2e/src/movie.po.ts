import { browser, by, element } from 'protractor';

export class MoviePage {
  navigateTo() {
    return browser.get(`${browser.baseUrl}/movie/tt0096895`) as Promise<any>;
  }
  
  getMovieTitleText() {
    return element(by.css('.content .title')).getText() as Promise<string>;
  }
}
