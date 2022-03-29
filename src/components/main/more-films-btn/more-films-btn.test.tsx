import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MoreFilmsBtn from './more-films-btn';

describe('MoreFilmsButton', () => {
  const setSlicingNum = jest.fn();
  it('should render properly', () => {
    render(<MoreFilmsBtn slicingNum={9} setSlicingNum={setSlicingNum} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    userEvent.click(screen.getByRole('button'));
    expect(setSlicingNum).toHaveBeenCalledTimes(1);
  });
});
