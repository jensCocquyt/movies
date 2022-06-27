import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Movie } from './database/movie.model';

@Injectable({ providedIn: 'root' })
export class MovieService {
  private moviesUrl = 'api/movies';
  // private httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  // };
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
}
