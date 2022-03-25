import { memo } from 'react';

interface FilmInfoProps {
  name: string,
  genre: string,
  released: number
}

function FilmInfo({name, genre, released}: FilmInfoProps) {

  return (
    <>
      <h2 className="film-card__title">{name}</h2>
      <p className="film-card__meta">
        <span className="film-card__genre">{genre}</span>
        <span>{released}</span>
      </p>
    </>
  );
}

export default memo(FilmInfo, (prev, next) => prev.name === next.name || prev.genre === next.genre || prev.released === next.released);
