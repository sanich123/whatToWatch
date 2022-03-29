import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { mockFilm } from '../../../../mocks/mocks';
import Filter from './filter';

describe('FilterComponent', () => {
  const setFilter = jest.fn();
  it ('should call setFilter by clicking on link', () => {
    render(
      <MemoryRouter>
        <Filter name={mockFilm.name} filter='Drama' title='Drama' setFilter={setFilter} />
      </MemoryRouter>,
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(setFilter).toHaveBeenCalledTimes(1);
  });
});
