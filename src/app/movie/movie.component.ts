import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {

  movie: object;
  movieId: string;

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.movieId = params.id);
  }

  ngOnInit() {
    this.data.getMovie(this.movieId).subscribe((data: { Poster: string }) => {
      // save data
      let parsedData = data;
      // parse poster name
      let poster = parsedData.Poster.replace("https://m.media-amazon.com/images/M/", "");
      // update poster name
      parsedData.Poster = poster;
      // return data
      this.movie = parsedData;
    });
  }

}
