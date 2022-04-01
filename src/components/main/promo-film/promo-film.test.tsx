import { screen } from '@testing-library/react';
import PromoFilm from './promo-film';
import { mockFilm } from '../../../mocks/mocks';
import { renderWithProviders } from '../../../test/test-utils';

describe('PromoFilm', () => {
  it('should render correctly', () => {
    renderWithProviders(<PromoFilm promoFilm={mockFilm} />);
    expect(screen.getByText(/gangs of new york/i)).toBeInTheDocument();
  });
});
