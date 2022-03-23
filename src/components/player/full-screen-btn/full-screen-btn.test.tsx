import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import FullScreenBtn from './full-screen-btn';

describe('FullScreenBtn', () => {
  it('should render correctly', () => {
    render(<FullScreenBtn current={null} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Full screen')).toBeInTheDocument();
  });
});
