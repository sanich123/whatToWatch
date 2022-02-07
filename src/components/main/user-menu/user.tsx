import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../types/types';
import { AppRoute, AuthorizationStatus } from '../../../utils/const';
import UserAuth from './user-auth';
import './user-menu-styles.css';

export default function UserMenu(): JSX.Element {
  const userAvatar = useSelector(({authorization}: RootState) => authorization.avatarUrl);
  const authStatus = useSelector(({authorization}: RootState) => authorization.authStatus);

  return (
    <div className="user-block">
      {(userAvatar && authStatus === AuthorizationStatus.Auth) ?
        <UserAuth userAvatar={userAvatar} /> :
        <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>}
    </div>
  );
}
