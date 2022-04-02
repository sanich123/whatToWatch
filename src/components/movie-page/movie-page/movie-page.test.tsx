import { renderWithProviders } from '../../../test/test-utils';
import MoviePage from './movie-page';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
beforeEach((): void => {
  fetchMock.resetMocks();
});
describe('MoviePage component', () => {
  it('renderWithProviders correctly', async () => {
    renderWithProviders(<MoviePage />);
  });
});
