/**
 * Angular modules
 */
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

/**
 * Third-party modules
 */
import { Observable, of } from 'rxjs';

/**
 * App services
 */
import { DataService } from './data.service';

/**
 * Describe
*/
describe('DataService', () => {
  /**
   * Configure
   */
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
  }));

  /**
   * Reusable setup method
   */
  function setup() {
    // components
    const dataService: DataService = TestBed.get(DataService);
    // return values
    return { dataService };
  }

  it('should be created', () => {
    const { dataService } = setup();
    expect(dataService).toBeTruthy();
  });

  it('should return a collection of movies', () => {
    const { dataService } = setup();
    const moviesResponse = {
      Search: [
        {
          Title: 'Fake Batman Movie',
          Year: 2009,
        },
        {
          Title: 'Fake Batman Remake Movie',
          Year: 2019,
        }
      ],
      Decades: [
        1990,
        2000,
      ],
    };
    spyOn(dataService, 'getMovies').and.returnValue(of(moviesResponse));
    dataService.getMovies().subscribe((res: object) => {
      expect(res).toEqual(moviesResponse);
    });
  });

  it('should return a collection of filtered movies', () => {
    const { dataService } = setup();
    const movies = [
      {
        Title: 'Fake Batman Movie',
        Year: 2009,
      },
      {
        Title: 'Fake Batman Remake Movie',
        Year: 2019,
      }
    ];
    const movieResponse = [
      {
        Title: 'Fake Batman Movie',
        Year: 2009,
      },
    ];
    spyOn(dataService, 'getFilteredMovies').and.returnValue(movieResponse);
    const res = dataService.getFilteredMovies(movies, 2009);
    expect(res).toEqual(movieResponse);
  });

  it('should return a particular movie', () => {
    const { dataService } = setup();
    const movieResponse = {
      Title: 'Fake Batman Movie',
      Year: 2009,
    };
    spyOn(dataService, 'getMovie').and.returnValue(of(movieResponse));
    dataService.getMovie('someId').subscribe((res: object) => {
      expect(res).toEqual(movieResponse);
    });
  });
});
