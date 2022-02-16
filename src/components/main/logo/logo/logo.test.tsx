import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Route, Router, Switch } from 'react-router-dom';
import Logo from './logo';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';

describe('Footer', () => {
  const history = createMemoryHistory();
  it('should render correctly', () => {
    history.push('/afawe');
    render(
      <Router history={history}>
        <Switch>
          <Route path='/' exact>
            <h1>You are on the main page</h1>
          </Route>
          <Logo />
        </Switch>
      </Router>,
    );
    expect(screen.queryByText(/You are on the main page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(screen.getByText(/You are on the main page/)).toBeInTheDocument();
  });
});
