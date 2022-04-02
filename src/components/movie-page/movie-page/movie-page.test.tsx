import { renderWithProviders } from '../../../test/test-utils';
import MoviePage from './movie-page';

describe('MoviePage component', () => {
  it('renderWithProviders correctly', async () => {
    renderWithProviders(<MoviePage />);
  });
});
