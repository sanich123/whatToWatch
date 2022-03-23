/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { RootState } from '../../../types/types';
import { AppRoute, warnings } from '../../../utils/const';
import Svg from '../../svg/svg';
import './sign-in-styles.css';
import { testingEmail, testingPassword } from '../../../utils/regexps/regexps';
import Logo from '../../common/header/logo/logo';
import { usePostAuthMutation } from '../../../store';
import { saveToken } from '../../../utils/token';
import { errorHandler } from '../../../utils/utils';
import { getAvatar } from '../../../store/slices/authorization/authorization';
import EmailInput from '../emailInput/email-input';
import PasswordInput from '../password-input/password-input';
import Footer from '../../common/footer/footer';

export default function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [wrongEmail, setWrongEmail] = useState(false);
  const authStatus = useSelector(({authorization}: RootState) => authorization.status);
  const [loginPassSender, { error, data: response }] = usePostAuthMutation();

  useEffect(() => {
    error && errorHandler(error);
    if (response) {
      saveToken(response.token);
      dispatch(getAvatar(response['avatar_url']));
      history.push(AppRoute.Main);
    }
  }, [authStatus, history, dispatch, response, error]);


  const handleLogin = async (evt: React.FormEvent) => {
    evt.preventDefault();
    if (!testingEmail.test(email)) {
      setWrongEmail(true);
      return;
    }
    if (!testingPassword.test(password)) {
      toast.warn(warnings.wrongPassword);
      return;
    }
    await loginPassSender({
      email: email,
      password: password,
    }).unwrap();
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
              <p>{wrongEmail && warnings.wrongEmail}</p>
            </div>
            <div className="sign-in__fields">
              <EmailInput email={email} setEmail={setEmail} />
              <PasswordInput password={password} setPassword={setPassword} />
            </div>
            <div>
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>

        <Footer/>
      </div>
    </>
  );
}

