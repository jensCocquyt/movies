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
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';
import { HighlightDirective } from './shared/highlight.directive';
import { Highlight2Directive } from './shared/highlight2.directive';
import { MovieComponent } from './shared/movie/movie.component';
import { OverviewTemplateComponent } from './overview-template/overview-template.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieOverviewComponent,
    MovieComponent,
    HighlightDirective,
    Highlight2Directive,
    MovieFormComponent,
    OverviewTemplateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryMovieService, {
      delay: 100,
    }),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
