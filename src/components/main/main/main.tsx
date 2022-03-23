import { useState } from 'react';
import { genres, numberOfFilms, serverPath, startOfSlice } from '../../../utils/const';
import { errorHandler, filterChanger } from '../../../utils/utils';
import Svg from '../../svg/svg';
import FilmsList from '../films-list/films-list';
import Filter from '../filters/filters';
import MoreFilmsBtn from '../more-films-btn/more-films-btn';
import PromoFilm from '../promo-film/promo-film';
import './main-styles.css';
import Loader from '../../common/loader/loader';
import { useGetFilmsQuery } from '../../../store/slices/films-api/films-api';
import { adaptFilm } from '../../../utils/adapter/adapter';
import { FilmDTO } from '../../../types/types';
import { usePromoFilm } from '../../../hooks/useFetch';
import Header from '../../common/header/header';
import BackgroundImg from '../background-img/background-img';
import Footer from '../../common/footer/footer';

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
        <Header/>
        <PromoFilm promoFilm={promoFilm} />

      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            {Object.entries(genres).map(([genre, value]) => (
              <Filter
                setFilter={setFilter}
                filter={filter}
                key={genre}
                name={genre}
                title={value}
              />))}
          </ul>
          <FilmsList films={slicedFilms} />
          {slicingNum <= slicedFilms.length &&
          <MoreFilmsBtn setSlicingNum={setSlicingNum} slicingNum={slicingNum} />}
        </section>
        <Footer/>
      </div>
    </>
  );
}
