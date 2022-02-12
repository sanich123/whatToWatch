import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import { BrowserRouter, Route } from 'react-router-dom';
import Breadcrumbs from './breadcrumbs';

describe('Breadcrumbs component', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <Route>
          <Breadcrumbs id={23} name='Калина красная'/>
        </Route>
      </BrowserRouter>,
    );
    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('Add review')).toBeInTheDocument();
  });
});
