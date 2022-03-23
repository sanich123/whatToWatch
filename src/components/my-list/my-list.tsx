import { useGetFavoritesQuery } from '../../store';
import { Film, FilmDTO } from '../../types/types';
import { adaptFilm } from '../../utils/adapter/adapter';
import { errorHandler } from '../../utils/utils';
import Card from '../common/card/card';
import Loader from '../common/loader/loader';
import UserMenu from '../common/authorization/user-menu/user';
import Svg from '../svg/svg';
import './my-list-styles.css';
import Footer from '../common/footer/footer';
import Logo from '../common/header/logo/logo';

export default function Favorites() {
  const { data: favorites, isLoading, error } = useGetFavoritesQuery('');

  if (isLoading) {return <Loader />;}
  // eslint-disable-next-line no-console
  console.log(favorites);
  error && errorHandler(error);

  const myFilms: Film[] = favorites.length > 0 ? favorites.map((film: FilmDTO) => adaptFilm(film)) : [];

  return (
    <>
      <Svg />
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
          <h1 className="page-title user-page__title">My list</h1>
          <UserMenu />
        </header>
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <div className="catalog__films-list">
            {myFilms.length > 0 && myFilms.map(({id, ...rest}) => <Card id={id} key={id} {...rest}/>)}
          </div>
        </section>

        <Footer/>
      </div>
    </>
  );
}
