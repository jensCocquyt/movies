import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryMovieService } from './database/in-memory-movie.service';
import { HeaderComponent } from './header/header.component';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';
import { MovieComponent } from './movie/movie.component';
import { HighlightDirective } from './shared/highlight.directive';
import { Highlight2Directive } from './shared/highlight2.directive';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieDetailInfoComponent } from './movie-detail-info/movie-detail-info.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryMovieService, {
      delay: 100,
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
