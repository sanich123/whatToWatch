import { screen } from '@testing-library/react';
import UserMenu from './user';
import { renderWithProviders } from '../../../../test/test-utils';
describe('UserMenu', () => {
  it('should render SignIn', () => {
    renderWithProviders(<UserMenu/>);
    expect(screen.getByText(/sign in/i)).toBeInTheDocument();
  });
});


