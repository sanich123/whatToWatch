import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Details from './details';

describe('test Details component', () => {
  it('renders successfully with props', () => {
    render(<Details released={3} genre="Drama" director="Tom Cruze" runTime={2874} starring={['Angelina jolie']} />);
    expect(screen.getByText('Drama')).toBeInTheDocument();
  });
});
