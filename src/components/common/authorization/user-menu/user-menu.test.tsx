import { render, screen } from '@testing-library/react';
import UserMenu from './user';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';
import { testStore } from '../../../../store/store';

const store = testStore;
describe('UserMenu', () => {
  it('should render SignIn', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Route render={() => <UserMenu/>} />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });
});


