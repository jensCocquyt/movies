import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { Movie } from '../database/movie.model';
import { MovieService } from '../movie.service';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailService {
  movie$: Observable<Movie | null>;
  private movieSubject$ = new BehaviorSubject<Movie | null>(null);

  constructor(private movieService: MovieService) {
    this.movie$ = this.movieSubject$.asObservable();
  }

  loadMovieById(id: string): void {
    this.movieService
      .getMovieById(id)
      .pipe(tap((m) => this.movieSubject$.next(m)))
      .subscribe();
  }
  updateMovie(movie: Movie) {
    this.movieService
      .updateMovie(movie)
      .pipe(
        tap(() => this.loadMovieById(movie.id.toString())),
        catchError(() => {
          alert('error');
          return of([]);
        })
      )
      .subscribe();
  }
  clearMovie() {
    this.movieSubject$.next(null);
  }
}
