import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PasswordInput from './password-input';

describe('PasswordInput component', () => {
  const setPassword = jest.fn();

  it('should render correctly', () => {
    render(<PasswordInput password='' setPassword={setPassword} />);
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
  });
});
