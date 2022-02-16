import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import UserMenu from './user';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { AuthorizationStatus } from '../../../../utils/const';

const mockStore = configureMockStore();
describe('UserMenu', () => {
  it('should render SignIn', () => {
    const store = mockStore({
      authorization: {
        avatarUrl: 'kjjlk',
        authStatus: AuthorizationStatus.NoAuth,
      },
      film: {
        filmId: '1',
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <UserMenu />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });

  it('should render SignOut', () => {
    const store = mockStore({
      authorization: {
        avatarUrl: 'kjjlk',
        authStatus: AuthorizationStatus.Auth,
      },
      film: {
        filmId: '1',
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter>
          <UserMenu />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });

});


