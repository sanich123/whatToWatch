import {render, screen} from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { testStore } from '../../../../store/store';
import Header from './header';

describe('Header component', () => {
  it('should render correctly', () => {
    render(
      <Provider store={testStore}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });
});
