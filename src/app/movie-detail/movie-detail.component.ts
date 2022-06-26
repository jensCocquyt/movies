import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, Observable, switchMap } from 'rxjs';
import { Movie } from '../database/movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movie$?: Observable<Movie>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.movie$ = this.activatedRoute.paramMap.pipe(
      map((paramMap) => paramMap.get('id') || ''),
      filter((id) => !!id),
      switchMap((id) => this.movieService.getMovieById(id))
    );
  }
}
