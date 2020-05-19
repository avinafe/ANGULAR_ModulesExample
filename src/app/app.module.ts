import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharacterComponent } from './components/character/character.component';
import { PageNotFoundComponent } from './components/page-not-found.component';

//Services
import { CharactersService } from './services/characters.service';
import { MoviesModule } from './modules/movies.module';

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharacterComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule
  ],
  providers: [
    // MoviesService,
    CharactersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
