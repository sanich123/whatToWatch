import { Provider } from 'react-redux';
import fetchMock from 'jest-fetch-mock';
import { renderHook } from '@testing-library/react-hooks';
import { useGetFilmQuery } from '../../../store/slices/films-api/films-api';
import { mockFilm } from '../../../mocks/mocks';
import { ProviderProps } from '../../../types/types';
import { testStore } from '../../../store/store';

beforeEach((): void => {
  fetchMock.resetMocks();
});

const wrapper = ({ children }: ProviderProps) => (
  <Provider store={testStore}>{children}</Provider>
);
describe('AddReview component', () => {
  it('useGetFilmQuery should work correctly', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockFilm));
    const { result, waitForNextUpdate } = renderHook(
      () => useGetFilmQuery('5'),
      { wrapper },
    );
    expect(result.current.isLoading).toBe(true);
    expect(result.current.currentData).toBe(undefined);

    await waitForNextUpdate({ timeout: 2000 });
    expect(result.current.currentData).toStrictEqual(mockFilm);
  });
});
