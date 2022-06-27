import { Component, Input } from '@angular/core';
import { Movie } from '../../database/movie.model';

@Component({
  selector: 'app-movie-detail-info',
  templateUrl: './movie-detail-info.component.html',
  styleUrls: ['./movie-detail-info.component.scss'],
})
export class MovieDetailInfoComponent {
  @Input() movie: Movie | null = null;
}