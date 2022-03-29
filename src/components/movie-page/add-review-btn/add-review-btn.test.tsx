import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AddReviewBtn from './add-review-btn';

describe('should correctly render', () => {
  it('should correctly renders', () => {
    render(
      <MemoryRouter>
        <AddReviewBtn id={5} />
      </MemoryRouter>,
    );
    expect(screen.getByText(/add review/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
