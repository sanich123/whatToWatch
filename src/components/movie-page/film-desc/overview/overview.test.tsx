import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import { mockFilm } from '../../../../mocks/mocks';
import Overview from './overview';

describe('Component overview testing', () => {
  it('successfully renders with props', () => {
    render(<Overview film={mockFilm} />);
    expect(screen.getByText(/Angelina/i)).toBeInTheDocument();
    expect(screen.queryByText('jlkj')).not.toBeInTheDocument();
  });
});
