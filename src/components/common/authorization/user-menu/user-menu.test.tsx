import { render, screen } from '@testing-library/react';
import UserMenu from './user';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import { setupStore } from '../../../../store/store';
describe('UserMenu', () => {
  it('should render SignIn', () => {
    render(
      <Provider store={setupStore()}>
        <MemoryRouter>
          <Route render={() => <UserMenu/>} />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });
});


