import { screen } from '@testing-library/react';
import Favorites from './my-list';
import { renderWithProviders} from '../../test/test-utils';
import { rest } from 'msw';
import { server } from '../../test/server';
import { rootUrl, serverPath } from '../../utils/const';

describe('MyList component', () => {
  it('correctly renders with data from server', async () => {
    renderWithProviders(<Favorites />);
    expect(screen.getByText(/loading../i)).toBeInTheDocument();
    expect(await screen.findByText(/my list/i)).toBeInTheDocument();
    expect(await screen.findByText(/catalog/i)).toBeInTheDocument();
    expect(await screen.findByText(/gangs of new york/i)).toBeInTheDocument();
    expect(await screen.findByRole('img', {name: /gangs of new york/i})).toBeInTheDocument();
  });

  it('Correctly handle error response', async () => {
    server.use(rest.get(`${rootUrl}${serverPath.favorite}`, (req, res, ctx) => res(ctx.status(401))));
    renderWithProviders(<Favorites />);
    expect(screen.getByText(/loading../i)).toBeInTheDocument();
    expect(
      await screen.findByText(/sign in/i),
    ).toBeVisible();
  });
});
