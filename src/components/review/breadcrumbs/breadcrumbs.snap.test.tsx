import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Breadcrumbs from './breadcrumbs';

describe('Breadcrumbs component', () => {
  it('should render correctly', () => {
    const {container} = render(
      <MemoryRouter>
        <Breadcrumbs id={23} name='Калина красная'/>
      </MemoryRouter>,
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('Add review')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
