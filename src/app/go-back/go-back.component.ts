/**
 * Angular modules
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { isDevMode } from '@angular/core';

/**
 * Third party modules
 */
import { throwError } from 'rxjs';

/**
 * Go Back component
 */
@Component({
  selector: 'app-go-back',
  templateUrl: './go-back.component.html',
  styleUrls: ['./go-back.component.scss']
})
export class GoBackComponent {

  /**
   * Constructor
   * 
   * @param router  Implementation of Router.
   */
  constructor(private router: Router) { }

  /**
   * Navigate to home page.
   * 
   * @param url {string}  The URL to navigate to.
   */
  toHome(url: string) {
    this.router.navigate([url]).then((event) => {
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
