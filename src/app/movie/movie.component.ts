/**
 * Angular modules
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/**
 * App services
 */
import { DataService } from '../data.service';

/**
 * Movie component
 */
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {

  /**
   * Properties
   */
  movie: object;
  movieId: string;

  /**
   * 
   * @param data  Implementation of DataService.
   * @param route Implementation of Router.
   */
  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.movieId = params.id);
  }

  /**
   * Calls getMovie on component load with the current movieId.
   */
  ngOnInit() {
    this.data.getMovie(this.movieId).subscribe(data => this.movie = data);
  }

}
