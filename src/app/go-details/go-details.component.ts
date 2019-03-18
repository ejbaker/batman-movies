/**
 * Angular modules
 */
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { isDevMode } from '@angular/core';

/**
 * Third party modules
 */
import { throwError } from 'rxjs';

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
      if (!event) {
        // only log in dev mode
        if (isDevMode()) {
          console.error('Navigation has failed');
        }
        // throw error always
        return throwError('Something went wrong!')
      }
    });
  }
}