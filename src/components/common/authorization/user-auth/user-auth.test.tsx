import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import UserAuth from './user-auth';

const mockStore = configureMockStore();
const store = mockStore({
  film: {
    filmId: '1',
  },
});
describe('UserAuth', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <UserAuth userAvatar={'jlkjlk'} />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });
});
