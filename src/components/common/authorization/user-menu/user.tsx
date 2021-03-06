import { memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../../../types/types';
import { AppRoute, AuthorizationStatus } from '../../../../utils/const';
import UserAuth from '../user-auth/user-auth';
import '../user-menu-styles.css';

function UserMenu({id}: {id?: number}) {
  const userAvatar = useSelector(({authorization}: RootState) => authorization.avatarUrl);
  const authStatus = useSelector(({authorization}: RootState) => authorization.authStatus);

  return (
    <div className="user-block">
      {(userAvatar && authStatus === AuthorizationStatus.Auth) ?
        <UserAuth userAvatar={userAvatar} id={id} /> :
        <Link to={AppRoute.SignIn} className="user-block__link">Sign in</Link>}
    </div>
  );
}

export default memo(UserMenu);
