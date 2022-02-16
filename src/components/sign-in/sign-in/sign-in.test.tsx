import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import SignIn from './sign-in';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { AuthorizationStatus } from '../../../utils/const';

describe('Sign-in component', () => {
  const mockStore = configureMockStore();
  const store = mockStore({
    authorization: {
      status: AuthorizationStatus.Auth,
    },
  });
  it('component should render correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <SignIn />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
  });
});
