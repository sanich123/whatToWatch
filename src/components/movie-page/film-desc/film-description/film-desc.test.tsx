import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { mockFilm } from '../../../../mocks/mocks';
import FilmDesc from './film-desc';

describe('should correctly render', () => {
  it('should correctly render with props', () => {
    render(
      <MemoryRouter>
        <FilmDesc film={mockFilm} id={5} />
      </MemoryRouter>,
    );

    expect(screen.getAllByRole('link')).toHaveLength(3);
    expect(screen.getByText(/8.8/i)).toBeInTheDocument();
  });
});
