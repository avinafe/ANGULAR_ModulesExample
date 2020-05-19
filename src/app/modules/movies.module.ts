import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';

import { MoviesListComponent } from './movies/components/movies-list/movies-list.component';
import { MovieComponent } from './movies/components/movie/movie.component';

import { MoviesService } from './movies/services/movies.service';

@NgModule({
  declarations: [
    MoviesListComponent,
    MovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  providers: [
    MoviesService
  ],
})
export class MoviesModule { }
