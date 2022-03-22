import { useState } from 'react';
import { genres, numberOfFilms, serverPath, startOfSlice } from '../../../utils/const';
import { errorHandler, filterChanger } from '../../../utils/utils';
import Svg from '../../svg/svg';
import FilmsList from '../films-list/films-list';
import Filter from '../filters/filters';
import Logo from '../../common/logo/logo/logo';
import MoreFilmsBtn from '../more-films-btn/more-films-btn';
import PromoFilm from '../promo-film/promo-film';
import UserMenu from '../user-menu/user-menu/user';
import './main-styles.css';
import Loader from '../../common/loader/loader';
import Copyright from '../../common/copyright/copyright';
import { useGetFilmsQuery } from '../../../store/slices/films-api/films-api';
import PromoBackImg from '../promo-background-img/promo-background-img';
import { adaptFilm } from '../../../utils/adapter/adapter';

export default function Main(): JSX.Element {
  const {data: movies, isLoading: moviesLoading, error: moviesError} = useGetFilmsQuery('8.react.pages.academy/wtw/films');
  const {data: promoFilm, isLoading: promoLoading, error:promoError} =
  useGetFilmsQuery(`6.react.pages.academy/wtw/${serverPath.films}/${serverPath.promo}`);
  const [filter, setFilter] = useState('All genres');
  const [slicingNum, setSlicingNum] = useState(numberOfFilms);

  if (moviesLoading || promoLoading) {return <Loader />;}

  moviesError && errorHandler(moviesError);
  promoError && errorHandler(promoError);

  const films = filterChanger(filter, movies);
  const slicedFilms = films.slice(startOfSlice, slicingNum);

  return (
    <>
      <Svg />
      <section className="film-card">
        <PromoBackImg promoFilm={adaptFilm(promoFilm)} />
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo />
          <UserMenu />
        </header>
        <PromoFilm promoFilm={adaptFilm(promoFilm)} />
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
        <footer>
          <Logo footer />
          <Copyright />
        </footer>
      </div>
    </>
  );
}
