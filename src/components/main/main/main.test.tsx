import { renderWithProviders } from '../../../test/test-utils';
import Main from './main';
import { screen } from '@testing-library/react';

describe('Main component', () => {
  it('Correctly handle with server data', async () => {
    renderWithProviders(<Main />);
    expect(screen.getByText(/loading../i)).toBeInTheDocument();
    expect(await screen.findByText(/catalog/i)).toBeInTheDocument();
    expect(await screen.findByRole('button', {name: /show more/i})).toBeInTheDocument();
    expect(await screen.findAllByRole('link')).toHaveLength(20);
  });
});
