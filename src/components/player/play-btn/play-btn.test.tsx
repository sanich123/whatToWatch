import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PlayBtn from './play-btn';

describe('PlayBtn', () => {
  const setIsPlaying = jest.fn();
  it('should render correctly', () => {
    render(<PlayBtn isPlaying setIsPlaying={setIsPlaying} current={null} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button'));
    expect(setIsPlaying).toHaveBeenCalled();
  });
});
