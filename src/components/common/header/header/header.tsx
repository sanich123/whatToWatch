import UserMenu from '../../authorization/user-menu/user';
import Logo from '../logo/logo';
import {memo} from 'react';

function Header() {

  return (
    <header className="page-header film-card__head">
      <Logo />
      <UserMenu />
    </header>
  );
}

export default memo(Header);
