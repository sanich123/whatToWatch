import { Link } from 'react-router-dom';
import { AppRoute } from '../../utils/const';
import Copyright from '../common/copyright/copyright';
import Logo from '../main/logo/logo/logo';
import Svg from '../svg/svg';
import './../sign-in/sign-in/sign-in-styles.css';

export default function Page404(): JSX.Element {
  return (
    <>
      <Svg />
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
          <h1 className="page-title user-page__title visually-hidden">Page 404</h1>
        </header>

        <div className="sign-in user-page__content">
          <div className="sign-in__form">
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <div className="sign-in__btn">Запрошенная страница не существует</div>
              </div>
            </div>
            <div className="sign-in__submit">
              <Link className="sign-in__btn" to={AppRoute.Main}>Перейти на главную страницу</Link>
            </div>
          </div>
        </div>

        <footer className="page-footer">
          <Logo footer />
          <Copyright />
        </footer>
      </div>
    </>
  );
}

