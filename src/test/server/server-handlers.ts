import { rest } from 'msw';
import { mockFilms } from '../../mocks/mocks';

const handlers = [
  rest.get('https://8.react.pages.academy/wtw/films',
    (req, res, ctx) => res(ctx.json(mockFilms))),
];

export { handlers };
