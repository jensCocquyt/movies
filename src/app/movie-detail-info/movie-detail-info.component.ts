import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../database/movie.model';

@Component({
  selector: 'app-movie-detail-info',
  templateUrl: './movie-detail-info.component.html',
  styleUrls: ['./movie-detail-info.component.scss'],
})
export class MovieDetailInfoComponent implements OnInit {
  @Input() movie: Movie | null = null;

  ngOnInit(): void {}
}
