import { screen } from '@testing-library/react';
import Favorites from './my-list';
import { renderWithProviders, wrapper} from '../../test/test-utils';
import { mockFilms } from '../../mocks/mocks';
import { useGetFavoritesQuery } from '../../store/slices/films-api/films-api';
import { renderHook } from '@testing-library/react-hooks';

beforeEach((): void => {
  fetchMock.resetMocks();
});
describe('MyList component', () => {
  it('renderWithProviders correctly', async () => {
    renderWithProviders(<Favorites />);
    expect(screen.getByText(/loading../i)).toBeInTheDocument();
    expect(await screen.findByText(/my list/i)).toBeInTheDocument();
    expect(await screen.findByText(/catalog/i)).toBeInTheDocument();
  });

  it('useGetFavoritesQuery should work correctly', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockFilms));
    const { result, waitForNextUpdate } = renderHook(
      () => useGetFavoritesQuery(''),
      { wrapper },
    );
    expect(result.current.isLoading).toBe(true);
    expect(result.current.currentData).toBe(undefined);

    await waitForNextUpdate({ timeout: 2000 });
    expect(result.current.currentData).toStrictEqual(mockFilms);
  });
});
