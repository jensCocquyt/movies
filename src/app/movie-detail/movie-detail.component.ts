import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../database/movie.model';
import { MovieDetailService } from './movie-detail.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    this.movieDetailService.loadMovieById(
      this.activatedRoute.snapshot.paramMap?.get('id') as string
    );
  }
  onUpdateMovie(movie: Movie) {
    this.movieDetailService.updateMovie(movie);
  }

  loadMovie() {
    this.movieDetailService.loadMovieById(
      this.activatedRoute.snapshot.paramMap?.get('id') as string
    );
  }
}
