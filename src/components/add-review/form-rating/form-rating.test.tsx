import {render, screen} from '@testing-library/react';
import FormRating from './form-rating';

const setRating = jest.fn();

describe('tests for rating', () => {
  it('renders with props', () => {
    render(<FormRating setRating={setRating} disabled={false} />);
    expect(screen.getByLabelText('Rating 3')).toBeInTheDocument();
  });
});
