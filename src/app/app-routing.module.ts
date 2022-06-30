import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieFormComponent } from './movie-detail/movie-form/movie-form.component';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full',
  },
  {
    path: 'movies',
    component: MovieOverviewComponent,
  },
  {
    path: 'movies/edit',
    component: MovieFormComponent,
  },
  {
    path: 'movies/detail/:id',
    component: MovieDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
