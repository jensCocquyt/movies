import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from './database/movie.model';

@Injectable({ providedIn: 'root' })
export class MovieService {
  moviesUrl = environment.moviesUrl;
  constructor(private http: HttpClient) {}

  getFavoriteMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(this.moviesUrl)
      .pipe(map((movies) => movies.filter((m) => m.isFavorite)));
  }
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl);
  }
  getMovieById(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.moviesUrl}/${id}`);
  }

  updateMovie(movie: Movie) {
    return this.http.put(this.moviesUrl, { ...movie });
  }

  addMovie(movie: Movie) {
    return this.http.post(this.moviesUrl, {
      ...movie,
    });
  }
}
