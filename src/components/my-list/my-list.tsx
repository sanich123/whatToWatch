import { useGetFilmsQuery } from '../../store';
import { Film, FilmDTO } from '../../types/types';
import { adaptFilm } from '../../utils/adapter/adapter';
import Card from '../card/card';
import Copyright from '../common/copyright/copyright';
import Loader from '../common/loader/loader';
import Logo from '../common/logo/logo/logo';
import UserMenu from '../main/user-menu/user-menu/user';
import Svg from '../svg/svg';
import './my-list-styles.css';

export default function Favorites() {
  const { data, isLoading } = useGetFilmsQuery('https://9.react.pages.academy/wtw/favorite');

  if (isLoading) {
    return <Loader />;
  }

  const favorites = data ? data.map((film: FilmDTO) => adaptFilm(film)) : [];

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
            {favorites.length > 0 && favorites.map(({id, ...rest}: Film) => <Card id={id} key={id} {...rest}/>)}
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
