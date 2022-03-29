import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Main from './main';
import { testStore } from '../../../store/store';

describe('MainComponent', () => {

  it('should render correctly', async () => {
    render(
      <Provider store={testStore}>
        <MemoryRouter>
          <Main />
        </MemoryRouter>
      </Provider>);
    expect(await screen.findByRole('button')).toBeInTheDocument();
  });
});
