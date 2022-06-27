import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { Movie } from '../database/movie.model';
import { MovieService } from '../movie.service';
import { MovieDetailService } from './movie-detail.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  movie: Movie | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieDetailService: MovieDetailService,
    private movieService: MovieService
  ) {}
  ngOnDestroy(): void {
    this.movieDetailService.clearMovie();
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        map((paramMap) => paramMap.get('id') || ''),
        filter((id) => !!id),
        switchMap((id) => this.movieService.getMovieById(id))
      )
      .subscribe((movie) => (this.movie = movie));
  }
  onUpdateMovie(movie: Movie) {
    this.movie = movie;
    this.movieDetailService.updateMovie(movie);
  }
}
