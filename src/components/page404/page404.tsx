import Logo from '../main/logo-footer/logo';
import Svg from '../svg/svg';
import './../sign-in/sign-in/sign-in-styles.css';

export default function Page404(): JSX.Element {
  return (
    <>
      <Svg />
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <Logo />
          </div>

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
              <a className="sign-in__btn" href='/'>Перейти на главную страницу</a>
            </div>
          </div>
        </div>

        <footer className="page-footer">
          <div className="logo">

          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

