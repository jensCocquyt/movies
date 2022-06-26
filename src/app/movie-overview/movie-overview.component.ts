import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, take, takeUntil } from 'rxjs';
import { Movie } from '../database/movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss'],
})
export class MovieOverviewComponent implements OnInit, OnDestroy {
  movies$: Observable<Movie[]> = this.movieService.getMovies();
  movies: Movie[] = [];
  constructor(private movieService: MovieService) {}
  private destroyed = new Subject<boolean>();

  ngOnInit(): void {
    this.movieService
      .getMovies()
      .pipe(takeUntil(this.destroyed), take(1))
      .subscribe((movies) => {
        this.movies = movies;
      });
  }

  goToDetail() {
    alert();
  }

  ngOnDestroy(): void {
    this.destroyed.next(true);
    this.destroyed.complete();
  }
}
