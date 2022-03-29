import { render, screen } from '@testing-library/react';
import Poster from './poster';

describe('Poster component', () => {
  it('Should have alt and img', () => {
    render(<Poster name='Самогонщики' posterImage='Хз какое' moviePage={false} />);
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByAltText(/самогонщики/i)).toBeInTheDocument();
  });
});
