import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Main from './main';
import { setupStore } from '../../../store/store';

describe('MainComponent', () => {
  it('should render correctly', async () => {
    render(
      <Provider store={setupStore()}>
        <MemoryRouter>
          <Main />
        </MemoryRouter>
      </Provider>);
  });
});
