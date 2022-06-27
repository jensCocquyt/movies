import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, filter, map, Observable, of, switchMap, tap } from 'rxjs';
import { Movie } from '../database/movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movie$?: Observable<Movie>;
  id = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.movie$ = this.activatedRoute.paramMap.pipe(
      map((paramMap) => paramMap.get('id') || ''),
      tap((id) => (this.id = id)),
      filter((id) => !!id),
      switchMap((id) => this.movieService.getMovieById(id))
    );
  }
  onUpdateMovie(movie: Movie) {
    this.movie$ = this.movieService.updateMovie(movie).pipe(
      catchError(() => {
        alert('error');
        return of([]);
      }),
      switchMap(() => this.movieService.getMovieById(this.id))
    );
  }
}
