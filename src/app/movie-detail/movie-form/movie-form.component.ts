import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, tap } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from '../../database/movie.model';
import { yearValidator } from './year.validator';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent implements OnInit {
  movie?: Movie;
  movieForm = new FormGroup({
    title: new FormControl('', Validators.required),
    year: new FormControl(new Date().getFullYear(), {
      validators: [Validators.required, yearValidator(1950)],
      updateOn: 'blur',
    }),
    isFavorite: new FormControl(false),
  });

  get title() {
    return this.movieForm.get('title') as FormControl;
  }

  get year() {
    return this.movieForm.get('year') as FormControl;
  }
  constructor(
    private movieService: MovieService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.activatedRoute?.snapshot?.paramMap?.has('id')) {
      this.movieService
        .getMovieById(this.activatedRoute.snapshot.paramMap.get('id') as string)
        .pipe(
          filter((x) => !!x),
          tap((movie) => (this.movie = movie))
        )
        .subscribe((movie) => this.movieForm.patchValue(movie));
    }
  }

  onSubmit() {
    if (this.movieForm.valid) {
      const updatedValue = {
        ...this.movie,
        ...this.movieForm.value,
        poster:
          'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg',
      } as Movie;
      (this.movie
        ? this.movieService.updateMovie(updatedValue)
        : this.movieService.addMovie(updatedValue)
      ).subscribe(() => {
        // this.location.back(); other option, does not work on refresh
        this.router.navigate(['movies']);
      });
    }
  }
}
