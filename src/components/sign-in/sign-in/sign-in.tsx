import { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { postAuthInfo } from '../../../store/api/api-thunk';
import { AppRoute } from '../../../utils/const';
import LogoFooter from '../../main/logo-footer/footer';
import Logo from '../../main/logo-footer/logo';
import Svg from '../../svg/svg';
import './sign-in-styles.css';

export default function SignIn(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const handleLogin = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postAuthInfo(email, password));
    history.push(AppRoute.Main);
  };

  return (
    <>
      <Svg />
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>

        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={handleLogin}>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="email"
                  placeholder="Email address"
                  name="user-email"
                  id="user-email"
                  value={email}
                  onChange={({target}) => setEmail(target.value)}
                />
                <label className="visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input
                  className="sign-in__input"
                  type="password"
                  placeholder="Password"
                  name="user-password"
                  id="user-password"
                  value={password}
                  onChange={({target}) => setPassword(target.value)}
                />
                <label className="visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div>
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

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

