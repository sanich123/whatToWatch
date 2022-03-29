import { render, screen }  from '@testing-library/react';
import Loader from './loader';

describe('Loader', () => {
  it('should render correctly', () => {
    render(<Loader/>);
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});
