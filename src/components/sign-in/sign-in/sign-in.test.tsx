import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import SignIn from './sign-in';
import { testStore } from '../../../store/store';

describe('Sign-in component', () => {
  it('component should render correctly', () => {
    render(
      <Provider store={testStore}>
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
