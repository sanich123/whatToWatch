import { mockFilm } from '../../../../../mocks/mocks';
import { renderWithProviders } from '../../../../../test/test-utils';
import Reviews from './comments';
import {screen} from '@testing-library/react';
import { server } from '../../../../../test/server';
import { rest } from 'msw';
import { rootUrl, serverPath } from '../../../../../utils/const';

describe('Comments component', () => {
  it('should correctly renders with data from server', async () => {
    renderWithProviders(<Reviews movie={mockFilm} />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/jack/i)).toBeInTheDocument();
    expect(await screen.findByText(/A movie that will take you to another world full of emotions/i)).toBeVisible();
  });

  it('Correctly handle error response', async () => {
    server.use(
      rest.get(`${rootUrl}${serverPath.comments}/1`, (req, res, ctx) => res(ctx.status(404))));
    renderWithProviders(<Reviews movie={mockFilm} />);
    expect(screen.getByText(/loading../i)).toBeInTheDocument();
  });
});
