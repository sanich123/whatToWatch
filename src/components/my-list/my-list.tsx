import { useGetFavoritesQuery } from '../../store';
import { Film, FilmDTO } from '../../types/types';
import { adaptFilm } from '../../utils/adapter/adapter';
import { errorHandler } from '../../utils/utils';
import Card from '../common/card/card';
import Copyright from '../common/copyright/copyright';
import Loader from '../common/loader/loader';
import Logo from '../common/logo/logo/logo';
import UserMenu from '../common/authorization/user-menu/user';
import Svg from '../svg/svg';
import './my-list-styles.css';

export default function Favorites() {
  const { data: favorites, isLoading, error } = useGetFavoritesQuery('');

  if (isLoading) {return <Loader />;}

  error && errorHandler(error);

  const myFilms = favorites ? favorites.map((film: FilmDTO) => adaptFilm(film)) : [];

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
            {myFilms.length > 0 && myFilms.map(({id, ...rest}: Film) => <Card id={id} key={id} {...rest}/>)}
          </div>
        </section>

        <footer>
          <Logo footer />
          <Copyright />
        </footer>
      </div>
    </>
  );
}
