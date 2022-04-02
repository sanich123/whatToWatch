import { screen } from '@testing-library/react';
import PromoFilm from './promo-film';
import { renderWithProviders } from '../../../test/test-utils';
describe('PromoFilm component', () => {
  it('Should correctly handle with data from server',
    async () => {
      renderWithProviders(<PromoFilm />);
      expect(await screen.findByText(/gangs of new york/i)).toBeInTheDocument();
    });
});
