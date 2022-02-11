import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Overview from './overview';

describe('Component overview testing', () => {
  it('successfully renders with props', () => {
    render(<Overview description='Some description' rating={8} director='Tom Cruze' runTime={123} starring={['Angelina Jolie']} />);
    expect(screen.getByText(/Angelina/i)).toBeInTheDocument();
    expect(screen.queryByText('jlkj')).not.toBeInTheDocument();
  });
});
