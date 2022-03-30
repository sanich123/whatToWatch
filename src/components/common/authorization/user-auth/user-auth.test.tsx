import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { setupStore } from '../../../../store/store';
import UserAuth from './user-auth';

describe('UserAuth', () => {
  it('should render correctly', () => {
    render(
      <Provider store={setupStore()}>
        <MemoryRouter>
          <UserAuth userAvatar={'jlkjlk'} />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });
});
