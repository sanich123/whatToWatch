import Words from './words';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

it('renders without crashing', () => {
  render(<Words />);
  expect(screen.getByText('T')).toBeInTheDocument();
});

