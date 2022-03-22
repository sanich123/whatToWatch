import { useGetFilmsQuery } from '../../../store';
import { Film, FilmDTO } from '../../../types/types';
import { adaptFilm } from '../../../utils/adapter/adapter';
import { serverPath } from '../../../utils/const';
import Card from '../../card/card';
import Loader from '../../common/loader/loader';
import './similar-films-styles.css';

export default function SimilarFilms({id}: {id: number}): JSX.Element {
  const { data: similarFilms, isLoading } = useGetFilmsQuery(`https://8.react.pages.academy/wtw/${serverPath.films}/${id}/${serverPath.similar}`);
  if (isLoading) {return <Loader/>;}

  const films = similarFilms.map((film: FilmDTO) => adaptFilm(film));
  const BEGIN_SLICING = 0;
  const END_SLICING = 4;

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {films && films.slice(BEGIN_SLICING,END_SLICING).map((film: Film) =>
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
