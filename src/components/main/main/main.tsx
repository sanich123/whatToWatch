import { useState } from 'react';
import { useGetFilmsQuery } from '../../../store/slices/films-api/films-api';
import { usePromoFilm } from '../../../hooks/useFetch';
import Svg from '../../svg/svg';
import Loader from '../../common/loader/loader';
import MoreFilmsBtn from '../more-films-btn/more-films-btn';
import PromoFilm from '../promo-film/promo-film';
import Header from '../../common/header/header';
import BackgroundImg from '../background-img/background-img';
import Footer from '../../common/footer/footer';
import Card from '../../common/card/card';
import FiltersList from '../filters/filters-list/filters-list';
import { numberOfFilms, serverPath, startOfSlice } from '../../../utils/const';
import { errorHandler, filterChanger } from '../../../utils/utils';
import { adaptFilm } from '../../../utils/adapter/adapter';
import { FilmDTO } from '../../../types/types';
import './main-styles.css';

export default function Main() {
  const {
    data: movies,
    isLoading: moviesLoading,
    error: moviesError,
  } = useGetFilmsQuery(serverPath.films);

  const promoFilm = usePromoFilm('');

  const [filter, setFilter] = useState('All genres');
  const [slicingNum, setSlicingNum] = useState(numberOfFilms);

  if (moviesLoading || !promoFilm) {return <Loader />;}

  moviesError && errorHandler(moviesError);

  const adaptedFilms = movies.map((movie: FilmDTO) => adaptFilm(movie));
  const films = filterChanger(filter, adaptedFilms);
  const slicedFilms = films.slice(startOfSlice, slicingNum);

  return (
    <>
      <Svg />
      <section className="film-card">
        <BackgroundImg film={promoFilm} />
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <PromoFilm promoFilm={promoFilm} />
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FiltersList setFilter={setFilter} filter={filter}/>

          <div className="catalog__films-list">
            {slicedFilms.map(({ id, ...rest }) => (
              <Card key={id} id={id} {...rest} />
            ))}
          </div>

          {slicingNum <= slicedFilms.length && (
            <MoreFilmsBtn
              setSlicingNum={setSlicingNum}
              slicingNum={slicingNum}
            />
          )}

        </section>
        <Footer />
      </div>
    </>
  );
}
