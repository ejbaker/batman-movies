/**
 * Angular modules
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

/**
 * Third-party modules
 */
import { filter } from 'rxjs/operators';

/**
 * Sidebar component
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  /**
   * Properties
   */
  @Input() decades: Array<any>;
  @Input() currDecade: number;
  @Output() updateDecade = new EventEmitter<number>();
  currentUrl: String;

  /**
   * Constructor
   * 
   * @param router  Implementation of Router.
   */
  constructor(private router: Router) {
    router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((_: NavigationEnd) => this.currentUrl = _.url);
  }

  /**
   * Pass the decade back to the parent component.
   * 
   * @param {number} decade  The currently-selected decade.
   */
  passDecade(decade?: number) {
    // emit decade
    this.updateDecade.emit(decade);
  }
}