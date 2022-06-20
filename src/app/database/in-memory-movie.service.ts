import { Inject } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Movie } from './movie.model';

@Inject({
  provideIn: 'root',
})
export class InMemoryMovieService implements InMemoryDbService {
  createDb() {
    let movies: Movie[] = [
      {
        title: 'The Batman',
        year: 2022,
        director: 'Matt Reeves',
        country: 'United States',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg',
        isFavorite: true,
      },

      {
        title: "Don't Look Up",
        year: 2021,
        director: 'Adam McKay',
        country: 'United States',
        poster:
          'https://m.media-amazon.com/images/M/MV5BZjcwZjY3NjAtNzkxZS00NmFjLTg1OGYtODJmMThhY2UwMTc5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg',
        isFavorite: false,
      },
      {
        title: 'Encanto',
        year: 2021,
        director: 'Jared Bush, Byron Howard, Charise Castro Smith',
        country: 'United States',
        poster:
          'https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg',
        isFavorite: false,
      },
      {
        title: 'The Power of the Dog',
        year: 2021,
        director: 'Jane Campion',
        country: 'United Kingdom',
        poster:
          'https://m.media-amazon.com/images/M/MV5BZGRhYjE2NWUtN2FkNy00NGI3LTkxYWMtMDk4Yjg5ZjI3MWI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg',
        isFavorite: true,
      },
      {
        title: 'Nobody',
        year: 2021,
        director: 'Ilya Naishuller',
        country: 'United States',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMjM5YTRlZmUtZGVmYi00ZjE2LWIyNzAtOWVhMDk1MDdkYzhjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg',
        isFavorite: false,
      },
      {
        title: 'CODA',
        year: 2021,
        director: 'Sian Heder',
        country: 'France, Canada, United States',
        poster:
          'https://m.media-amazon.com/images/M/MV5BYzkyNzNiMDItMGU1Yy00NmEyLWE4N2ItMjkzMDZmMmVhNDU4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        isFavorite: true,
      },
      {
        title: 'Uncut Gems',
        year: 2019,
        director: 'Benny Safdie, Josh Safdie',
        country: 'United States',
        poster:
          'https://m.media-amazon.com/images/M/MV5BZDhkMjUyYjItYWVkYi00YTM5LWE4MGEtY2FlMjA3OThlYmZhXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
        isFavorite: true,
      },
      {
        title: 'Joker',
        year: 2019,
        director: 'Todd Phillips',
        country: 'United States, Canada',
        poster:
          'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        isFavorite: true,
      },
      {
        title: 'Midsommar',
        year: 2019,
        director: 'Ari Aster',
        country: 'United States, Sweden',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_SX300.jpg',
        isFavorite: false,
      },
      {
        title: 'Get Out',
        year: 2017,
        director: 'Jordan Peele',
        country: 'United States, Japan',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg',
        isFavorite: false,
      },
      {
        title: 'Nomadland',
        year: 2020,
        director: 'Chloé Zhao',
        country: 'United States',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMDRiZWUxNmItNDU5Yy00ODNmLTk0M2ItZjQzZTA5OTJkZjkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        isFavorite: false,
      },
      {
        title: 'Lost in Translation',
        year: 2003,
        director: 'Sofia Coppola',
        country: 'United States, Japan',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMTUxMzk0NDg1MV5BMl5BanBnXkFtZTgwNDg0NjkxMDI@._V1_SX300.jpg',
        isFavorite: false,
      },
    ];
    return { movies };
  }
}
