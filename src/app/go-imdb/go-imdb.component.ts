/**
 * App Modules
 */
import { Component, Input } from '@angular/core';

/**
 * Go Imdb Component
 */
@Component({
  selector: 'app-go-imdb',
  templateUrl: './go-imdb.component.html',
  styleUrls: ['./go-imdb.component.scss']
})
export class GoImdbComponent {

  /**
   * Properties
   */
  @Input() imdbId: string;

  /**
   * Constructor
   */
  constructor() { }

  /**
   * Opens a new tab to view a given movie on imDB.
   * 
   * @param id {string}  The imDB ID to navigate to.
   */
  toIMDB(id: string) {
    window.open(`https://www.imdb.com/title/${id}`, 'imdbWindow');
  }
}