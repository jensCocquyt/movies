import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MovieService } from 'src/app/movie.service';
import { Movie } from '../../database/movie.model';
import { yearValidator } from './year.validator';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss'],
})
export class MovieFormComponent implements OnInit {
  @Input() movie: Movie | null = null;
  @Output() updateMovie = new EventEmitter<Movie>();

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
  constructor(private fb: FormBuilder, private movieService: MovieService) {}

  ngOnInit(): void {
    if (!!this.movie) {
      this.movieForm.patchValue(this.movie);
    }
  }
  ngOnChanges(): void {
    if (!!this.movie) {
      this.movieForm.patchValue(this.movie);
    }
  }
  onSubmit() {
    // this.movieService
    //   .addMovie({
    //     ...this.movie,
    //     ...this.movieForm.value,
    //   } as Movie)
    //   .subscribe();
    this.updateMovie.emit({
      ...this.movie,
      ...this.movieForm.value,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg',
    } as Movie);
  }
}
