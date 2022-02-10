import { asyncConditions } from '../../../utils/const';
import reducer, { setFilmId } from './film';

test('should return the initial state', () => {
  expect(reducer(undefined, {
    type: undefined,
  })).toEqual(
    {
      comments: [],
      status: asyncConditions.idle,
      filmId: '',
    },
  );
});

test('should change value of chosen state', () => {
  const previousState = {
    comments: [],
    status: asyncConditions.idle,
    filmId: '',
  };
  expect(reducer(previousState, setFilmId('25'))).toEqual(
    {
      comments: [],
      status: asyncConditions.idle,
      filmId: '25',
    });
});
