import UserMenu from '../authorization/user-menu/user';
import Logo from './logo/logo';

export default function Header() {

  return (
    <header className="page-header film-card__head">
      <Logo />
      <UserMenu />
    </header>
  );
}
