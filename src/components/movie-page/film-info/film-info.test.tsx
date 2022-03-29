import { render, screen } from '@testing-library/react';
import FilmInfo from './film-info';

describe('Should correctly render with props', () => {
  it('Should correctly render with props', () => {
    render(
      <FilmInfo name='Иван Васильевич меняет профессию' genre='Comedy' released={1975} />,
    );
    expect(screen.getByText(/Иван Васильевич/i)).toBeInTheDocument();
    expect(screen.getByText(/1975/i)).toBeInTheDocument();
    expect(screen.getByText(/comedy/i)).toBeInTheDocument();
  });
});
