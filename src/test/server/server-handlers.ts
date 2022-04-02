import { rest } from 'msw';
import { url } from '../../components/main/background-img/background-img';
import { mockFilm } from '../../mocks/mocks';
import { rootUrl, serverPath } from '../../utils/const';

const handlers = [
  rest.get(url, (req, res, ctx) => res(ctx.json({name: 'Something', backgroundImg: 'Something'}))),
  rest.get(`${rootUrl}${serverPath.favorite}`, (req, res, ctx) => res(ctx.json([mockFilm]))),
];

export { handlers };
