import { renderWithProviders } from '../../../test/test-utils';
import Main from './main';
import { screen } from '@testing-library/react';
import { server } from '../../../test/server/index';
import { rest } from 'msw';
import { rootUrl, serverPath } from '../../../utils/const';

describe('Main component', () => {
  it('Correctly handle with server data', async () => {
    renderWithProviders(<Main />);
    expect(screen.getByText(/loading../i)).toBeInTheDocument();
    expect(await screen.findByText(/catalog/i)).toBeInTheDocument();
    expect(await screen.findByRole('button', {name: /show more/i})).toBeInTheDocument();
    expect(await screen.findAllByRole('link')).toHaveLength(20);
  });

  it('Correctly handle error response', async () => {
    server.use(rest.get(`${rootUrl}${serverPath.films}`, (req, res, ctx) => res(ctx.status(404))));
    renderWithProviders(<Main />);
    expect(screen.getByText(/loading../i)).toBeInTheDocument();
    expect(
      await screen.findByText(/не удалось получить список фильмов с сервера/i)).toBeInTheDocument();
  });
});
