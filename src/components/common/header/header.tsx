import UserMenu from '../authorization/user-menu/user';
import Logo from './logo/logo';

export default function Header() {

  return (
    <>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header film-card__head">
        <Logo />
        <UserMenu />
      </header>
    </>
  );
}
