import { useFavorites } from '../../hooks/useFetch';
import Card from '../card/card';
import Copyright from '../common/copyright/copyright';
import Loader from '../common/loader/loader';
import Logo from '../common/logo/logo/logo';
import UserMenu from '../main/user-menu/user-menu/user';
import Svg from '../svg/svg';
import './my-list-styles.css';

export default function Favorites(): JSX.Element {
  const favorites = useFavorites();

  if (!favorites) {
    return <Loader />;
  }

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
            {favorites.length > 0 && favorites.map(({id, name, previewImage, videoLink, posterImage}) => <Card name={name} previewImage={previewImage} id={id} key={id} videoLink={videoLink} posterImage={posterImage} />)}
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
