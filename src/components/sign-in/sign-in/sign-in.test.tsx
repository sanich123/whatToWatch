import { screen} from '@testing-library/react';
import SignIn from './sign-in';
import { renderWithProviders } from '../../../test/test-utils';
import userEvent from '@testing-library/user-event';

describe('Sign-in component', () => {
  it('component should render correctly', () => {
    renderWithProviders(<SignIn />);
    expect(screen.getAllByText(/sign in/i)).toHaveLength(2);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email address')).toBeInTheDocument();
    const textBox = screen.getByRole('textbox', {name: /Email address/i});
    userEvent.type(textBox, 'Voronin');
    expect(screen.getByDisplayValue(/voronin/i)).toBeVisible();
  });
});
