interface FilmInfoProps {
  name: string,
  genre: string,
  released: number
}

export default function FilmInfo({name, genre, released}: FilmInfoProps) {

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
