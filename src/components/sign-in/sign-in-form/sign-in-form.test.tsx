import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { setupStore } from '../../../store/store';
import SignInForm from './sign-in-form';
describe('should correctly render', () => {
  it('have proper fields and labels', () => {
    render(
      <Provider store={setupStore()}>
        <MemoryRouter>
          <SignInForm/>
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
  });
});
