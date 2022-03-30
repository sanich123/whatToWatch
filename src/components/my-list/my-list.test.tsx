import { useGetFavoritesQuery} from '../../store/slices/films-api/films-api';
import fetchMock from 'jest-fetch-mock';
import {mockFilms} from '../../mocks/mocks';
import { screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import Favorites from './my-list';
import { renderWithProviders, wrapper } from '../../test/test-utils';

beforeEach((): void => {
  fetchMock.resetMocks();
});

describe('MyList component', () => {
  it('should renders correctly with hook', async () => {
    renderWithProviders(<Favorites />);
    expect(await screen.findByText(/my list/i)).toBeInTheDocument();
  });
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
