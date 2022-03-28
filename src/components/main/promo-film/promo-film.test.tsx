import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { mockFilm } from '../../../mocks/mocks';
import { testStore } from '../../../store/store';
import PromoFilm from './promo-film';

describe('PromoFilm', () => {
  it('should render correctly', async () => {
    render(
      <Provider store={testStore}>
        <PromoFilm promoFilm={mockFilm} />
      </Provider>,
    );
    expect(await screen.findByText('My list')).toBeInTheDocument();
  });
});
