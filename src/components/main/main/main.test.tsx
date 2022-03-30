import { renderWithProviders, wrapper } from '../../../test/test-utils';
import Main from './main';
import { renderHook } from '@testing-library/react-hooks';
import { mockFilms } from '../../../mocks/mocks';
import { useGetFilmsQuery } from '../../../store/slices/films-api/films-api';

beforeEach((): void => {
  fetchMock.resetMocks();
});
describe('MyList component', () => {
  it('renderWithProviders correctly', async () => {
    renderWithProviders(<Main />);
  });

  it('useGetFilmsQuery should work correctly', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockFilms));
    const { result, waitForNextUpdate } = renderHook(
      () => useGetFilmsQuery(''),
      { wrapper },
    );
    expect(result.current.isLoading).toBe(true);
    expect(result.current.currentData).toBe(undefined);

    await waitForNextUpdate({ timeout: 2000 });
    expect(result.current.currentData).toStrictEqual(mockFilms);
  });
});
