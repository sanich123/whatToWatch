import { screen }  from '@testing-library/react';
import { mockFilm } from '../../../mocks/mocks';
import { renderWithProviders } from '../../../test/test-utils';
import Card from './card';

describe('Card', () => {
  const {name, previewImage, id, videoLink, posterImage} = mockFilm;
  it('should render correctly', () => {
    renderWithProviders(
      <Card
        name={name}
        previewImage={previewImage}
        id={id}
        videoLink={videoLink}
        posterImage={posterImage}
      />,
    );
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
