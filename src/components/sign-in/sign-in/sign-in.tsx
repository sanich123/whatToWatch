import React from 'react';
import Svg from '../../svg/svg';
import './sign-in-styles.css';
import Logo from '../../common/header/logo/logo';
import Footer from '../../common/footer/footer';
import SignInForm from '../form/sign-in-form';

export default function SignIn() {

  return (
    <>
      <Svg />
      <div className="user-page">
        <header className="page-header user-page__head">
          <Logo />
          <h1 className="page-title user-page__title">Sign in</h1>
        </header>
        <div className="sign-in user-page__content">
          <SignInForm/>
        </div>
        <Footer/>
      </div>
    </>
  );
}

