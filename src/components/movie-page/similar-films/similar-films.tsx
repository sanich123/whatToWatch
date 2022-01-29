import { useEffect, useState } from 'react';
import { Film, FilmDTO } from '../../../types/types';
import { rootUrl, serverPath } from '../../../utils/const';
import { adaptFilm } from '../../../utils/utils';
import Card from '../../card/card';
import './similar-films-styles.css';

export default function SimilarFilms({id}: {id: number}): JSX.Element {
  const BEGIN_SLICING = 0;
  const END_SLICING = 4;
  const [films, setFilms] = useState<Film[]>([]);

  useEffect(() => {
    (fetch(`${rootUrl}${serverPath.films}/${id}/${serverPath.similar}`)
      .then((response) => response.json())
      .then((data) => setFilms(data.map((film: FilmDTO) => adaptFilm(film)))));
  }, [id]);


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
