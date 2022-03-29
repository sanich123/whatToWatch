import { Provider } from 'react-redux';
import { mockComments } from '../../../../../mocks/mocks';
import { useGetCommentsQuery } from '../../../../../store/slices/films-api/films-api';
import { testStore } from '../../../../../store/store';
import { ProviderProps } from '../../../../../types/types';
import { renderHook } from '@testing-library/react-hooks';

beforeEach((): void => {
  fetchMock.resetMocks();
});

const wrapper = ({ children }: ProviderProps) => (
  <Provider store={testStore}>{children}</Provider>
);

describe('should render correctly', () => {
  it('should renders correctly', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockComments));
    const {result, waitForNextUpdate} = renderHook(
      () => useGetCommentsQuery(5), {wrapper},
    );
    expect(result.current.isLoading).toBe(true);
    expect(result.current.currentData).toBe(undefined);

    await waitForNextUpdate({timeout: 2000});
    expect(result.current.currentData).toStrictEqual(mockComments);
  });
});
