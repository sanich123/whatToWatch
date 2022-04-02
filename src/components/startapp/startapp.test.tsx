import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import { useGetAuthQuery } from '../../store/slices/films-api/films-api';
import { setupStore } from '../../store/store';
import { ProviderProps } from '../../types/types';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach((): void => {
  fetchMock.resetMocks();
});

const wrapper = ({children}: ProviderProps) => (
  <Provider store={setupStore()}>{children}</Provider>
);

describe('StartApp component', () => {
  it('useGetAuthQuery should work correctly',
    async () => {
      const fakeResponse = {
        'id': 1,
        'email': 'asdfasdf@gmail.com',
        'name': 'asdfasdf',
        'avatar_url': 'https://8.react.pages.academy/static/avatar/6.jpg',
        'token': 'YXNkZmFzZGZAZ21haWwuY29t',
      };
      fetchMock.mockResponseOnce(JSON.stringify(fakeResponse));
      const {result, waitForNextUpdate} = renderHook(
        () => useGetAuthQuery(''), {wrapper});
      expect(result.current.isLoading).toBe(true);
      expect(result.current.currentData).toBe(undefined);

      await waitForNextUpdate({ timeout: 2000 });
      expect(result.current.currentData).toStrictEqual(fakeResponse);
    });
});
