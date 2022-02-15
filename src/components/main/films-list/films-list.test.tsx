import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import { Router } from 'react-router-dom';
import {createMemoryHistory} from 'history';
import { mockFilms } from '../../../mocks/mocks';
import FilmsList from './films-list';

describe('FilmsList component', () => {
  it('should render correctly', () => {
    render(
      <Router history={createMemoryHistory()}>
        <FilmsList films={mockFilms} />
      </Router>,
    );
    expect(screen.getByText('No Country for Old Men')).toBeInTheDocument();
  });
});
