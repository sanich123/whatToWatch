import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';
import { mockFilm } from '../../../../mocks/mocks';
import FilmDesc from './film-desc';

describe('FilmDesc component', () => {
  const {description, rating, director, runTime, starring, id, released, genre} = mockFilm;

  it('renders successfully', () => {
    render(
      <BrowserRouter>
        <Route>
          <FilmDesc description={description} rating={rating} director={director} runTime={runTime} starring={starring} id={id} released={released} genre={genre} />
        </Route>
      </BrowserRouter>,
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
