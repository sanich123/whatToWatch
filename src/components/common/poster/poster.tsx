import { memo } from 'react';

interface PosterProps {
  name: string,
  posterImage: string,
  moviePage?: boolean
}

function Poster({name, posterImage, moviePage}: PosterProps) {
  const activeClass = moviePage ? 'film-card__poster--big' : '';

  return (
    <div className={`film-card__poster ${activeClass}`}>
      <img
        src={posterImage}
        alt={`${name} poster`}
        width="218"
        height="327"
      />
    </div>
  );
}

export default memo(Poster);
