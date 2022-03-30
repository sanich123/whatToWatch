import {  render }  from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import FavoriteBtn from './favorite-btn';
import {setupStore} from '../../../store/store';
describe('FavoriteBtn', () => {
  it('should render correctly', async () => {
    render(
      <Provider store={setupStore()} >
        <MemoryRouter>
          <FavoriteBtn id={5} />
        </MemoryRouter>
      </Provider>,
    );
  });
});
