import '@testing-library/jest-dom';
import { render, screen }  from '@testing-library/react';
import Page404 from './page404';
import { MemoryRouter } from 'react-router-dom';

describe('Page404', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Page404 />
      </MemoryRouter>,
    );
    expect(screen.getByText(/Запрошенная страница не существует/i)).toBeInTheDocument();
    expect(screen.getByText(/Перейти на главную страницу/i)).toBeInTheDocument();
  });
});
