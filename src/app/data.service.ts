/**
 * Angular modules
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';

/**
 * Third party modules
 */
import { of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import 'core-js/es6/set';

/**
 * Data service.
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {

  /**
   * Constructor
   * 
   * @param http  Instance of HttpClient.
   */
  constructor(private http: HttpClient) { }

  /**
   * Properties
   */
  serviceUrl: string = 'https://www.omdbapi.com/?apikey=f59b2e4b&';
  posterUrl: string = 'https://m.media-amazon.com/images/M/';
  replacePosterUrl: string = 'https://ejbaker.github.io/batman-movies/assets/images/';
  decades: Array<any> = [];
  storedMovies: object;

  /**
   * Filters movies by decade.
   * 
   * @param movies {array}  Array of movies to filter by decade.
   * @param decade {number}  The current decade.
   */
  getFilteredMovies(movies: Array<any>, decade?: number) {
    // if no decade is set, just return movies
    if (!decade) {
      return movies;
    }
    // get upper boundary
    const decadeLimit = decade + 10;
    // otherwise, filter
    return movies.filter((movie) => movie.Year >= decade && movie.Year < decadeLimit);
  }

  /**
   * Gets movies.
   */
  getMovies() {
    // return saved movies if they exist
    if (this.storedMovies && Object.entries(this.storedMovies).length != 0) {
      return of(this.storedMovies);
    }
    // otherwise, get fresh
    return this.http.get(`${this.serviceUrl}s=Batman&type=movie`)
      .pipe(
        map((results: Object) => {
          // update results
          results['Search'].map((movie: {
            imdbID: string,
            Poster: string,
            Year: number,
          }) => {
            // add decade to decades
            this.decades.push(Math.ceil((movie.Year) / 10) * 10 - 10);
            // update the poster
            movie.Poster = movie.Poster.replace(this.posterUrl, this.replacePosterUrl);
            // get more movie data
            this.getMovie(movie.imdbID).subscribe((movieData: { Rated: string, Runtime: string, Released: string, Plot: string }) => {
              // add values
              movie['Rated'] = movieData.Rated;
              movie['Runtime'] = movieData.Runtime;
              movie['Released'] = movieData.Released;
              movie['Plot'] = movieData.Plot;
            });
            // return the movie
            return movie;
          });
          // add array of decades
          results['Decades'] = Array.from(new Set(this.decades)).sort();
          // sort movies
          results['Search'] = results['Search'].sort((obj1, obj2) => {
            // ascending
            return obj1.Year - obj2.Year;
          });
          // save results
          this.storedMovies = results;
          // update enhanced results
          return results;
        }),
        // handle errors
        catchError(error => {
          // only log in dev mode
          if (isDevMode()) {
            console.error(error);
          }
          // throw error always
          return throwError('Something went wrong!')
        })
      );
  }

  /**
   * Gets movie by imDB ID.
   * 
   * @param id {string}  Current movie ID.
   */
  getMovie(id: string) {
    return this.http.get(`${this.serviceUrl}i=${id}`)
    .pipe(
      map((movie: {
        Poster: string,
        Rated: string,
        Runtime: string,
        Released: string,
        Plot: string,
      }) => {
        movie.Poster = movie.Poster.replace(this.posterUrl, this.replacePosterUrl);
        return movie;
      })
    );
  }
}
