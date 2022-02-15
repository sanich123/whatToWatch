import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {configureMockStore} from '@jedmao/redux-mock-store';
import Main from './main';
import { mockFilm, mockFilms } from '../../../mocks/mocks';
import { AuthorizationStatus } from '../../../utils/const';

describe('MainComponent', () => {
  const mockStore = configureMockStore();
  const store = mockStore({
    movies: {
      promoFilm: mockFilm,
      films: mockFilms,
      filter: 'All genres',
      favorites: [],
    },
    authorization: {
      avatarUrl: 'jlkj;l',
      authStatus: AuthorizationStatus.NoAuth,
    },
  });
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={createMemoryHistory()}>
          <Main />
        </Router>
      </Provider> );
  });
});
