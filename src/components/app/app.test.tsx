import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { setupStore } from '../../store/store';
import { renderWithProviders } from '../../test/test-utils';
import App from './app';
import { screen } from '@testing-library/react';

describe('App Routing', () => {
  const history = createBrowserHistory();
  it('should render 404 page when route is not exist', () => {
    history.push('/non-exist');
    renderWithProviders(
      <Provider store={setupStore()}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>,
    );
    expect(screen.getByText(/Page 404/i)).toBeInTheDocument();
  });
});
