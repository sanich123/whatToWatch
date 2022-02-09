import { adaptFilm } from './adapter';
import { mockFilms, rightFilm, rightFilms } from './mocks';

test('snake_case object have to be camelCase object', () => {
  expect(adaptFilm(mockFilms[0])).toStrictEqual(rightFilm);
});

test('snake_case objects in array have to be camelCase objects', () => {
  expect(mockFilms.map((film) => adaptFilm(film))).toEqual(rightFilms);
});


