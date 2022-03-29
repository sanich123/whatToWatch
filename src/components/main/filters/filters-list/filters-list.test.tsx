import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FiltersList from './filters-list';
describe('FiltersComponent', () => {
  const setFilter = jest.fn();
  it('should have 9 links', () => {
    render(
      <MemoryRouter>
        <FiltersList
          filter="Drama"
          setFilter={setFilter}
        />
      </MemoryRouter>,
    );
    expect(screen.getAllByRole('link')).toHaveLength(9);

  });
});
