import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Movie } from './database/movie.model';
import { movies } from './database/movies.data.';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'movies';
  movies: Movie[];
  constructor() {
    this.movies = movies;
  }

  onUpdateMovie(movie: Movie) {
    this.movies.push(movie);
  }
}
