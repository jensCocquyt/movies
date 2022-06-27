import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryMovieService } from './database/in-memory-movie.service';
import { HeaderComponent } from './header/header.component';
import { MovieDetailInfoComponent } from './movie-detail/movie-detail-info/movie-detail-info.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieFormComponent } from './movie-detail/movie-form/movie-form.component';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';
import { HighlightDirective } from './shared/highlight.directive';
import { Highlight2Directive } from './shared/highlight2.directive';
import { MovieComponent } from './shared/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieOverviewComponent,
    MovieComponent,
    HighlightDirective,
    Highlight2Directive,
    MovieDetailComponent,
    MovieDetailInfoComponent,
    MovieFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryMovieService, {}),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
