import reducer, { changer } from './start';

test('should return the initial state', () => {
  expect(reducer(undefined, {
    type: undefined,
  })).toEqual(
    {
      filter: 'All genres',
      films: [],
      promoFilm: {},
      favorites: [],
    },
  );
});

test('should change value of chosen state', () => {
  const previousState = {
    filter: 'All genres',
    films: [],
    promoFilm: {},
    favorites: [],
  };
  expect(reducer(previousState, changer('Dramas'))).toEqual(
    {
      filter: 'Dramas',
      films: [],
      promoFilm: {},
      favorites: [],
    });
});
