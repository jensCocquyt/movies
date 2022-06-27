import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, tap } from 'rxjs';
import { Movie } from '../database/movie.model';
import { MovieDetailService } from './movie-detail.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  movie$? = this.movieDetailService.movie$;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieDetailService: MovieDetailService
  ) {}
  ngOnDestroy(): void {
    this.movieDetailService.clearMovie();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((paramMap) => paramMap.get('id') || ''),
        filter((id) => !!id),
        tap((id) => this.movieDetailService.loadMovieById(id))
      )
      .subscribe();
  }
  onUpdateMovie(movie: Movie) {
    this.movieDetailService.updateMovie(movie);
  }
}
