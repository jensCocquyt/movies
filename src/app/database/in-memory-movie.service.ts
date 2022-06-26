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
        id: 1,
        title: 'The Batman',
        year: 2022,
        date: '2022-03-11T00:00:00.000Z',
        director: 'Matt Reeves',
        country: 'United States',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg',
        isFavorite: true,
      },
      {
        id: 2,
        title: 'Encanto',
        year: 2021,
        date: '2021-05-15T00:00:00.000Z',
        director: 'Jared Bush, Byron Howard, Charise Castro Smith',
        country: 'United States',
        poster:
          'https://m.media-amazon.com/images/M/MV5BNjE5NzA4ZDctOTJkZi00NzM0LTkwOTYtMDI4MmNkMzIxODhkXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg',
        isFavorite: false,
      },
      {
        id: 3,
        title: 'The Power of the Dog',
        year: 2021,
        date: '2021-01-25T00:00:00.000Z',

        director: 'Jane Campion',
        country: 'United Kingdom',
        poster:
          'https://m.media-amazon.com/images/M/MV5BZGRhYjE2NWUtN2FkNy00NGI3LTkxYWMtMDk4Yjg5ZjI3MWI2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg',
        isFavorite: true,
      },
      {
        id: 4,
        title: 'Nobody',
        year: 2021,
        date: '2021-02-15T00:00:00.000Z',

        director: 'Ilya Naishuller',
        country: 'United States',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMjM5YTRlZmUtZGVmYi00ZjE2LWIyNzAtOWVhMDk1MDdkYzhjXkEyXkFqcGdeQXVyMjMxOTE0ODA@._V1_SX300.jpg',
        isFavorite: false,
      },
      {
        id: 5,
        title: 'CODA',
        year: 2021,
        date: '2021-09-02T00:00:00.000Z',

        director: 'Sian Heder',
        country: 'France, Canada, United States',
        poster:
          'https://m.media-amazon.com/images/M/MV5BYzkyNzNiMDItMGU1Yy00NmEyLWE4N2ItMjkzMDZmMmVhNDU4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        isFavorite: true,
      },
      {
        id: 6,
        title: 'Uncut Gems',
        year: 2019,
        date: '2019-01-01T00:00:00.000Z',

        director: 'Benny Safdie, Josh Safdie',
        country: 'United States',
        poster:
          'https://m.media-amazon.com/images/M/MV5BZDhkMjUyYjItYWVkYi00YTM5LWE4MGEtY2FlMjA3OThlYmZhXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg',
        isFavorite: true,
      },
      {
        id: 7,
        title: 'Joker',
        year: 2019,
        date: '2019-11-04T00:00:00.000Z',

        director: 'Todd Phillips',
        country: 'United States, Canada',
        poster:
          'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        isFavorite: true,
      },
      {
        id: 8,
        title: 'Midsommar',
        year: 2019,
        date: '2019-07-03T00:00:00.000Z',

        director: 'Ari Aster',
        country: 'United States, Sweden',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_SX300.jpg',
        isFavorite: false,
      },
      {
        id: 9,
        title: 'Get Out',
        year: 2017,
        date: '2017-05-15T00:00:00.000Z',

        director: 'Jordan Peele',
        country: 'United States, Japan',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_SX300.jpg',
        isFavorite: false,
      },
      {
        id: 10,
        title: 'Nomadland',
        year: 2020,
        date: '2020-02-12T00:00:00.000Z',
        director: 'Chloé Zhao',
        country: 'United States',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMDRiZWUxNmItNDU5Yy00ODNmLTk0M2ItZjQzZTA5OTJkZjkyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
        isFavorite: false,
      },
      {
        id: 2,
        title: 'Lost in Translation',
        year: 2003,
        date: '2003-10-15T00:00:00.000Z',

        director: 'Sofia Coppola',
        country: 'United States, Japan',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMTUxMzk0NDg1MV5BMl5BanBnXkFtZTgwNDg0NjkxMDI@._V1_SX300.jpg',
        isFavorite: false,
      },
    ];
    return { movies };
  }
  genId(movies: Movie[]): number {
    return movies.length > 0 ? Math.max(...movies.map(hero => hero.id)) + 1 : 11;
  }
}
