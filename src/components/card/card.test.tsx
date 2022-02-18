import '@testing-library/jest-dom';
import { render, screen }  from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { mockFilm } from '../../mocks/mocks';
import Card from './card';

describe('Card', () => {
  const {name, previewImage, id, videoLink, posterImage} = mockFilm;
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Card name={name} previewImage={previewImage} id={id} videoLink={videoLink} posterImage={posterImage} />
      </MemoryRouter>,
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
