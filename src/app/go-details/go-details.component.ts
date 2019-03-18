/**
 * Angular modules
 */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Go Details Component
 */
@Component({
  selector: 'app-go-details',
  templateUrl: './go-details.component.html',
  styleUrls: ['./go-details.component.scss']
})
export class GoDetailsComponent {

  /**
   * Properties
   */
  @Input() imdbId: string;

  /**
   * Constructor
   * 
   * @param router  Implementation of Router.
   */
  constructor(private router: Router) { }

  /**
   * Navigate to home page.
   * 
   * @param url {string}  The URL to navigate to (/movie).
   * @param id {string}  The imDB ID to use when navigating.
   */
  toMovie(url: string, id: string) {
    this.router.navigate([url, id]).then((event) => {
      if (event) {
        console.log('Navigation is successful!');
      }
      else {
        console.log('Navigation has failed!')
      }
    });
  }
}