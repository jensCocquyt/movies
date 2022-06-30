import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../database/movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieOverviewComponent implements OnInit, OnDestroy {
  @Input() movies: Movie[] = [];
  // movies$: Observable<Movie[]> = this.movieService.getMovies();
  constructor(private movieService: MovieService) {}
  private destroyed = new Subject<boolean>();

  ngOnInit(): void {
    // this.movieService
    //   .getMovies()
    //   .pipe(takeUntil(this.destroyed), take(1))
    //   .subscribe((movies) => {
    //     this.movies = movies;
    //   });
  }

  goToDetail() {
    alert();
  }
  byId(index: number, movie: Movie) {
    return movie.id;
  }
  ngOnDestroy(): void {
    this.destroyed.next(true);
    this.destroyed.complete();
  }
}
