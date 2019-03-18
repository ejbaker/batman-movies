/**
 * Angular modules
 */
import { Component } from '@angular/core';

/**
 * Root component
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

/**
 * Export
 */
export class AppComponent {
  title: string = 'dg-movies-app';
  pageTitle: string = 'Movies';
}
