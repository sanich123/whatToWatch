import { render, screen } from '@testing-library/react';
import { mockComments } from '../../../../../mocks/mocks';
import Review from './review';
describe('Review renders successfully', () => {
  it('should render correctly', () => {
    render(<Review reviews={mockComments} />);
    expect(screen.getByText(/A movie that will take you to another world full of emotions/i)).toBeInTheDocument();
    expect(screen.getByText(/February 02, 2022/i)).toBeInTheDocument();
  });
});
