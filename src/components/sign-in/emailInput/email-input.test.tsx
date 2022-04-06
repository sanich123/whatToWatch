import { screen } from '@testing-library/react';
import EmailInput from './email-input';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../test/test-utils';

describe('Email-input component', () => {
  const setEmail = jest.fn();

  it('should render correctly', () => {
    renderWithProviders(
      <EmailInput
        email=''
        setEmail={setEmail}
      />);
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
    const textBox = screen.getByRole('textbox', {name: /Email address/i});
    userEvent.type(textBox, 'ебучие тесты');
    expect(setEmail).toHaveBeenCalledTimes(11);
  });
});
