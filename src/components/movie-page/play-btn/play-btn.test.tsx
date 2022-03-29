import { render, screen }  from '@testing-library/react';
import PlayButton from './play-btn';

describe('PLayBtn', () => {
  it('should render correctly', () => {
    render(<PlayButton id={5} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
