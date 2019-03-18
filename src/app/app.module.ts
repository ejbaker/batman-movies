/**
 * Angular modules
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/**
 * App modules
*/
import { AppRoutingModule } from './app-routing.module';

/**
 * App components
 */
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GoBackComponent } from './go-back/go-back.component';
import { GoDetailsComponent } from './go-details/go-details.component';
import { GoImdbComponent } from './go-imdb/go-imdb.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    SidebarComponent,
    GoBackComponent,
    GoDetailsComponent,
    GoImdbComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

/**
 * Export
 */
export class AppModule { }
