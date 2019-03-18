/**
 * Angular modules
 */
import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

/**
 * App services
 */
import { DataService } from '../data.service';

/**
 * Movies component
 */
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-200px)'}),
          stagger('50ms',
            animate('50ms ease-out', 
              style({ opacity: 1, transform: 'translateY(0px)'})
            )
          )
        ], { optional: true }),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ]),
  ],
})
export class MoviesComponent implements OnInit {

  /**
   * Properties
   */
  movies: Array<any>;
  filteredMovies: Array<any>;
  decades: Array<any>;
  currDecade: number;

  /**
   * Constructor
   * 
   * @param data  Implementation of DataService.
   */
  constructor(private data: DataService) { }

  /**
   * Calls getMovies on component load.
   */
  ngOnInit() {
    // getMovies call
    this.data.getMovies()
      .subscribe((data: {
        Search: Array<any>,
        Decades: Array<any>,
      }) => {
        // arrow functions preserve parent `this`
        // so we can continue to refer to the component properties/methods with `this`
        // peel off Search
        const parsedData = data.Search;
        // update decades
        this.decades = data.Decades;
        // sort results
        this.movies = parsedData.sort((obj1, obj2) => {
          // ascending
          return obj1.Year - obj2.Year;
        });
        // filter movies
        this.displayMovies();
      });
  }

  /**
   * Update the value of filteredMovies per decade.
   * 
   * @param {number} decade  The currently-selected decade.
   */
  displayMovies(decade?: number) {
    // don't attempt to filter if movies doesn't exist yet
    if (!this.movies || !this.movies.length) {
      return this.filteredMovies = [];
    }
    // otherwise, set decade
    this.currDecade = decade;
    // filter movies
    this.filteredMovies = this.data.getFilteredMovies(this.movies, decade);
  }

}