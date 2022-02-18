import { configureMockStore } from '@jedmao/redux-mock-store';
import '@testing-library/jest-dom';
import { render, screen }  from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { mockFilms } from '../../../mocks/mocks';
import { AuthorizationStatus } from '../../../utils/const';
import FavoriteBtn from './favorite-btn';

describe('FavoriteBtn', () => {
  it('should render correctly', () => {
    const mockStore = configureMockStore();
    const store = mockStore({
      movies: {
        favorites: mockFilms,
      },
      authorization: {
        authStatus: AuthorizationStatus.NoAuth,
      },
    });

    render(
      <Provider store={store} >
        <MemoryRouter>
          <FavoriteBtn id={5} />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
