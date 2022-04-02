import { renderWithProviders } from '../../../test/test-utils';
import { screen } from '@testing-library/react';
import SimilarFilms from './similar-films';

describe('SimilarFilms Component', () => {
  it('should correctly renders with data from server', async () => {
    renderWithProviders(<SimilarFilms uniq={'5'} />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
    expect(await screen.findByText(/a star is born/i)).toBeInTheDocument();
  });
});
