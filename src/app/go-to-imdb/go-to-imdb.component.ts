import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-go-to-imdb',
  templateUrl: './go-to-imdb.component.html',
  styleUrls: ['./go-to-imdb.component.scss']
})
export class GoToImdbComponent implements OnInit {

  @Input() imdbId: string;

  constructor() { }

  ngOnInit() {
  }

  toIMDB(id: string) {
    window.location.href = `https://www.imdb.com/title/${id}`;
  }

}
