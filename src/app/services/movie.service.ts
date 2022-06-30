import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../database/movie.model';

@Injectable({ providedIn: 'root' })
export class MovieService {
  moviesUrl = environment.moviesUrl;
  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl).pipe(
      catchError((error) => {
        console.log('getMovies error', error);
        return [];
      })
    );
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
