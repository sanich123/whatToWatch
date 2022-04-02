import { rest } from 'msw';
import { mockComments, mockFilm, mockFilms } from '../../mocks/mocks';
import { promoUrl, rootUrl, serverPath } from '../../utils/const';

const handlers = [
  rest.get(promoUrl, (req, res, ctx) => res(ctx.json(mockFilm))),
  rest.get(`${rootUrl}${serverPath.favorite}`, (req, res, ctx) => res(ctx.json([mockFilm]))),
  rest.get(`${rootUrl}${serverPath.films}`, (req, res, ctx) => res(ctx.json(mockFilms))),
  rest.get(`${rootUrl}${serverPath.comments}/1`, (req, res, ctx) => res(ctx.json(mockComments))),
  rest.get(`${rootUrl}${serverPath.films}/5/${serverPath.similar}`, (req, res, ctx) => res(ctx.json(mockFilms.slice(0,4)))),
];

export { handlers };
