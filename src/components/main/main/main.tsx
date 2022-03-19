import { useState } from 'react';
import { genres, numberOfFilms, startOfSlice } from '../../../utils/const';
import { filterChanger } from '../../../utils/utils';
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

export default function Main(): JSX.Element {
  const {data, isLoading} = useGetFilmsQuery('9.react.pages.academy/wtw/films');
  const [filter, setFilter] = useState('All genres');
  const [slicingNum, setSlicingNum] = useState(numberOfFilms);

  if (isLoading) {return <Loader />;}

  const movies = data;
  const films = filterChanger(filter, movies);
  const slicedFilms = films.slice(startOfSlice, slicingNum);

  return (
    <>
      <Svg />
      <section className="film-card">
        <PromoBackImg/>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header film-card__head">
          <Logo />
          <UserMenu />
        </header>
        <PromoFilm/>
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
