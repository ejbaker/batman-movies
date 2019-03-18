/**
 * Third-party modules
 */
import { browser, logging } from 'protractor';

/**
 * App pages
 */
import { MoviesPage } from './movies.po';
import { MoviePage } from './movie.po';

/**
 * Reusable afterEach function
 */
async function afterLogging() {
  // Assert that there are no errors emitted from the browser
  const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  expect(logs).not.toContain(jasmine.objectContaining({
    level: logging.Level.SEVERE,
  } as logging.Entry));
}

/**
 * Describe - Movies
 */
describe('workspace-project Movies', () => {

  /**
   * Properties
   */
  let page: MoviesPage;

  /**
   * Configure
   */
  beforeEach(() => {
    page = new MoviesPage();
  });

  /**
   * Assertions
   */
  it('should be on home page', () => {
    page.navigateTo();
    expect(page.getMovieTitleText()).toEqual('Batman');
  });

  /**
   * Clean up
   */
  afterEach(afterLogging);

});


/**
 * Describe - Movie
 */
describe('workspace-project Movie', () => {

  /**
   * Properties
   */
  let page: MoviePage;

  /**
   * Configure
   */
  beforeEach(() => {
    page = new MoviePage();
  });

  /**
   * Assertions
   */
  it('should be on movie page', () => {
    page.navigateTo();
    expect(page.getMovieTitleText()).toEqual('Batman (1989)');
  });

  /**
   * Clean up
   */
  afterEach(afterLogging);

});
