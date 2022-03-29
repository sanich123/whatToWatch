import { render, screen } from '@testing-library/react';
import { Route, Router, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import Footer from './footer';

describe('Footer', () => {
  const history = createMemoryHistory();
  it('should correctly navigate', () => {
    history.push('/afawe');
    render(
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <h1>You are on the main page</h1>
          </Route>
          <Footer />
        </Switch>
      </Router>,
    );
    expect(screen.getByText(/© 2019/i)).toBeInTheDocument();
    expect(screen.queryByText(/You are on the main page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(screen.getByText(/You are on the main page/)).toBeInTheDocument();
  });
});
