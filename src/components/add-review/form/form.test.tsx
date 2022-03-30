import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { setupStore } from '../../../store/store';
import { ReviewForm } from './form';

describe('ReviewForm components', () => {
  it('should render properly', () => {
    render(
      <Provider store={setupStore()}>
        <MemoryRouter>
          <ReviewForm />
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByLabelText(/rating 1/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(10);
  });
});
