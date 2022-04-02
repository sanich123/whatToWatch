import { memo } from 'react';
import { useGetSimilarFilmsQuery } from '../../../store/slices/films-api/films-api';
import { Film, FilmDTO } from '../../../types/types';
import { adaptFilm } from '../../../utils/adapter/adapter';
import { errorHandler } from '../../../utils/utils';
import Card from '../../common/card/card';
import Loader from '../../common/loader/loader';
import './similar-films-styles.css';

function SimilarFilms({uniq}: {uniq: string}) {
  const { data: similarFilms, isLoading, error } = useGetSimilarFilmsQuery(uniq);
  if (isLoading) {return <Loader/>;}
  if (error) {errorHandler(error);}

  const films: Film[] = similarFilms.map((film: FilmDTO) => adaptFilm(film));
  const BEGIN_SLICING = 0;
  const END_SLICING = 4;

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {films
          .slice(BEGIN_SLICING,END_SLICING)
          .map(({id, ...rest}) =>
            <Card key={id} id={id} {...rest} />)}
      </div>
    </section>
  );
}

export default memo(SimilarFilms);
