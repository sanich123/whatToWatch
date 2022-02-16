import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mockFilms } from '../../../mocks/mocks';
import FilmsList from './films-list';

describe('FilmsList component', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <FilmsList films={mockFilms} />
      </MemoryRouter>,
    );
    expect(screen.getByText('No Country for Old Men')).toBeInTheDocument();
  });
});
