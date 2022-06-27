import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../database/movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() movie: Movie | null = null;
  constructor() {}

  ngOnInit(): void {}
}
