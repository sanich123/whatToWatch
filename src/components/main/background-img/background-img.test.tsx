import { render, screen } from '@testing-library/react';
import BackgroundImg from './background-img';

describe('should render correctly', () => {
  it('Test async component with msw', async () => {
    render(<BackgroundImg />);
    screen.getByText(/loading/i);
    await screen.findByRole('img');
    expect(await screen.findByAltText(/something/i)).toBeInTheDocument();
  });
});
