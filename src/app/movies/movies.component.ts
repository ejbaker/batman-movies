import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {

  movies: Array<any>;
  filteredMovies: Array<any>;
  decades: Array<any>;
  currDecade: number;

  constructor(private data: DataService) { }

  ngOnInit() {
    // preserve this
    const that = this;
    // getMovies call
    that.data.getMovies()
      .subscribe((data: {
        Search: Array<any>,
        Decades: Array<any>,
      }) => {
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