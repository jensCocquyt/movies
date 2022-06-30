import { Location } from '@angular/common';
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
  id: string = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieDetailService: MovieDetailService,
    private location: Location
  ) {}
  ngOnDestroy(): void {
    this.movieDetailService.clearMovie();
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap?.get('id') as string;
    this.movieDetailService.loadMovieById(this.id);
  }
  onUpdateMovie(movie: Movie) {
    this.movieDetailService.updateMovie(movie);
    this.location.back();
  }

  loadMovie() {
    this.movieDetailService.loadMovieById(this.id);
  }
}
