import { configureMockStore } from '@jedmao/redux-mock-store';
import '@testing-library/jest-dom';
import { render
  // screen, waitFor
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { AuthorizationStatus } from '../../utils/const';
import Favorites from './my-list';
// import * as hooks from '../../hooks/useFetch';
// import { mockFilm, mockFilms } from '../../mocks/mocks';
// import { Film } from '../../types/types';

describe('MyList component', () => {
  const mockStore = configureMockStore();
  const store = mockStore({
    authorization: {
      avatarUrl: 'jlkjlkj',
      authStatus: AuthorizationStatus.Auth,
    },
    film: {
      filmId: '5',
    },
  });

  it('should render correctly', async () => {
    // jest.spyOn(hooks, 'useFavorites').mockImplementation(() => Promise.resolve(mockFilms));
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Favorites />
        </MemoryRouter>
      </Provider>,
    );
  });
});
