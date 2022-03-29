import { render, screen } from '@testing-library/react';
import SignInBtn from './sign-in-btn';

describe('SignInBtn component', () => {
  it('should have btn role', () => {
    render(<SignInBtn />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });
});
