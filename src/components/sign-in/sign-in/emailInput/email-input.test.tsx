import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import EmailInput from './email-input';
import userEvent from '@testing-library/user-event';


describe('Email-input component', () => {
  const setEmail = jest.fn();

  it('should render correctly', () => {
    render(
      <EmailInput
        email=''
        setEmail={setEmail}
      />);
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    userEvent.type(screen.getByRole('textbox'), 'ебучие тесты');
    expect(setEmail).toHaveBeenCalledTimes(11);
  });
});
