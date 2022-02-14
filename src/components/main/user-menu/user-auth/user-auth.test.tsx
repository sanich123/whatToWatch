import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMemoryHistory} from 'history';
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
        <Router history={createMemoryHistory()}>
          <UserAuth userAvatar={'jlkjlk'} />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });
});
