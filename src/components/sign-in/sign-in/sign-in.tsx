import { FormEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { postAuthInfo } from '../../../store/async/async-with-thunks';
import { RootState } from '../../../types/types';
import { AppRoute, testingEmail, testingPassword } from '../../../utils/const';
import LogoFooter from '../../main/logo-footer/footer';
import Logo from '../../main/logo-footer/logo';
import Svg from '../../svg/svg';
import './sign-in-styles.css';


export default function SignIn(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wrongEmail, setWrongEmail] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const authStatus = useSelector(({authorization}: RootState) => authorization.successAuth);

  const handleLogin = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!testingEmail.test(email)) {
      setWrongEmail(true);
      return;
    }

    if (!testingPassword.test(password)) {
      toast.warn('Пароль должен состоять минимум из одной буквы и одной цифры');
      return;
    }

    dispatch(postAuthInfo(email, password));

    if (authStatus) {
      history.push(AppRoute.Main);
    }
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
            <div className="sign-in__message" style={wrongEmail ? {display: 'block'} : {display: 'none'}}>
              <p>{wrongEmail && 'Please enter a valid email address'}</p>
            </div>
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

