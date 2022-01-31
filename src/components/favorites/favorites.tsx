import { useFavorites } from '../../hooks/useFetch';
import Card from '../card/card';
import Loader from '../common/loader/loader';
import LogoFooter from '../main/logo-footer/footer';
import Logo from '../main/logo-footer/logo';
import UserMenu from '../main/user-menu/user';
import Svg from '../svg/svg';
import './favorites-styles.css';

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
            {favorites.length > 0 && favorites.map(({id, name, previewImage}) => <Card name={name} previewImage={previewImage} id={id} key={id} />)}
          </div>
        </section>

        <footer>
          <LogoFooter />
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
