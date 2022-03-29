import { useGetFavoritesQuery} from '../../store/slices/films-api/films-api';
import {Provider} from 'react-redux';
import fetchMock from 'jest-fetch-mock';
import {mockFilms} from '../../mocks/mocks';
import { renderHook } from '@testing-library/react-hooks';
import {testStore} from '../../store/store';
import { ProviderProps } from '../../types/types';

beforeEach((): void => {
  fetchMock.resetMocks();
});

const wrapper = ({ children }: ProviderProps) => (
  <Provider store={testStore}>{children}</Provider>
);
describe('MyList component', () => {
  it('useGetFavoritesQuery should work correctly',
    async () => {
      const fakeResponse = mockFilms;

      fetchMock.mockResponseOnce(JSON.stringify(fakeResponse));
      const {result, waitForNextUpdate} = renderHook(
        () => useGetFavoritesQuery(''), {wrapper});
      expect(result.current.isLoading).toBe(true);
      expect(result.current.currentData).toBe(undefined);

      await waitForNextUpdate({timeout: 2000});
      expect(result.current.currentData).toStrictEqual(fakeResponse);
    });
});
