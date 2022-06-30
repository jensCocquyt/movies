import { Inject } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie.model';
import { movies } from './movies.data.';

@Inject({
  provideIn: 'root',
})
export class InMemoryMovieService implements InMemoryDbService {
  createDb() {
    return { movies };
  }
  genId(movies: Movie[]): number {
    return movies.length > 0
      ? Math.max(...movies.map((hero) => hero.id)) + 1
      : 11;
  }
}
