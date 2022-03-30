import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../../test/test-utils';
import UserAuth from './user-auth';

describe('UserAuth', () => {
  it('should render correctly', () => {
    renderWithProviders(<UserAuth userAvatar='some text'/>);
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText('Sign out')).toBeInTheDocument();
  });
});
