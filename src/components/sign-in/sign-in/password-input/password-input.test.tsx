import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import PasswordInput from './password-input';

describe('PasswordInput component', () => {
  const setPassword = jest.fn();

  it('should render correctly', () => {
    render(<PasswordInput password='' setPassword={setPassword} />);
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    // expect(screen.getByRole('textbox')).toBeInTheDocument();
    // userEvent.type(screen.getByRole('textbox'), 'I hate tests');
    // expect(setPassword).toHaveBeenCalledTimes(11);

  });
});
