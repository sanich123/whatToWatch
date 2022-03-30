import { renderWithProviders } from '../../../test/test-utils';
import MoviePage from './movie-page';

beforeEach((): void => {
  fetchMock.resetMocks();
});
describe('MoviePage component', () => {
  it('renderWithProviders correctly', async () => {
    renderWithProviders(<MoviePage />);
  });
});
