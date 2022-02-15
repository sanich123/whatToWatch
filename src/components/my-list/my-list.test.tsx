import { configureMockStore } from '@jedmao/redux-mock-store';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { AuthorizationStatus } from '../../utils/const';
import Favorites from './my-list';

describe('MyList component', () => {
  const mockStore = configureMockStore();
  const store = mockStore({
    authorization: {
      avatarUrl: 'jlkjlkj',
      authStatus: AuthorizationStatus.NoAuth,
    },
  });
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={createMemoryHistory()}>
          <Favorites />
        </Router>
      </Provider>,
    );
  });
});
