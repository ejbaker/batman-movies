/**
 * Angular modules
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * App components
 */
import { MovieComponent } from './movie/movie.component';
import { MoviesComponent } from './movies/movies.component';

/**
 * Routes
 */
const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  },
];

/**
 * Routing module
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
