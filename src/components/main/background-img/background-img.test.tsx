import { render, screen } from '@testing-library/react';
import { mockFilm } from '../../../mocks/mocks';
import BackgroundImg from './background-img';

describe('should render correctly', () => {
  it('should find img and alt', () => {
    render(<BackgroundImg film={mockFilm} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByAltText(/gangs of new york/i)).toBeInTheDocument();
  });
});
