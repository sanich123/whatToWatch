import { useSimilarFilms } from '../../../hooks/useFetch';
import Card from '../../card/card';
import './similar-films-styles.css';

export default function SimilarFilms({id}: {id: number}): JSX.Element {
  const BEGIN_SLICING = 0;
  const END_SLICING = 4;
  const films = useSimilarFilms(id.toString());

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {films && films.slice(BEGIN_SLICING,END_SLICING).map((film) =>
          (
            <Card
              key={film.id}
              name={film.name}
              previewImage={film.previewImage}
              id={film.id}
              videoLink={film.videoLink}
              posterImage={film.posterImage}
            />
          ))}
      </div>
    </section>
  );
}
