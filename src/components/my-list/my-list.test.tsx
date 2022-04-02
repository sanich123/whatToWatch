import { screen } from '@testing-library/react';
import Favorites from './my-list';
import { renderWithProviders} from '../../test/test-utils';

describe('MyList component', () => {
  it('renderWithProviders correctly', async () => {
    renderWithProviders(<Favorites />);
    expect(screen.getByText(/loading../i)).toBeInTheDocument();
    expect(await screen.findByText(/my list/i)).toBeInTheDocument();
    expect(await screen.findByText(/catalog/i)).toBeInTheDocument();
    expect(await screen.findByText(/gangs of new york/i)).toBeInTheDocument();
    expect(await screen.findByRole('img', {name: /gangs of new york/i})).toBeInTheDocument();
  });
});
