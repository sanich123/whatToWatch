import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupStore } from '../../../store/store';
import SimilarFilms from './similar-films';

describe('SimilarFilms Component', () => {
  it('should render', async () => {
    render(
      <Provider store={setupStore()}>
        <SimilarFilms uniq={5} />
      </Provider>,
    );
    await expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});