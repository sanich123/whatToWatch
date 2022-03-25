import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { mockFilm } from '../../../../mocks/mocks';
import Details from './details';

describe('test Details component', () => {
  it('renders successfully with props', () => {
    render(<Details film={mockFilm} />);
    expect(screen.getByText(/Cameron/i)).toBeInTheDocument();
  });
});
