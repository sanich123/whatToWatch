import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { useDeleteAuthMutation } from '../../../../store';
import { checkStatus } from '../../../../store/slices/authorization/authorization';
import { RootState } from '../../../../types/types';
import { AppRoute, AuthorizationStatus } from '../../../../utils/const';
import { deleteToken } from '../../../../utils/token';
import { errorHandler } from '../../../../utils/utils';

export default function UserAuth({userAvatar}: {userAvatar: string}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [logout, {error: logoutError}] = useDeleteAuthMutation();
  const id = useSelector(({film}: RootState) => film.filmId);
  const path = history.location.pathname;
  const pathChanger = path === `/films/${id}/review` || path === AppRoute.Favorites ? AppRoute.Main : history.location;

  logoutError && errorHandler(logoutError);

  return (
    <>
      <li className="user-block__item">
        <div
          className="user-block__avatar"
          onClick={() => history.push(AppRoute.Favorites)}
        >
          <img
            src={userAvatar}
            alt="User avatar"
            width="63"
            height="63"
          />
        </div>
      </li>
      <li
        className="user-block__item"
        onClick={async () => {
          await logout('').unwrap();
          deleteToken();
          dispatch(checkStatus(AuthorizationStatus.NoAuth));
        }}
      >
        <Link className="user-block__link" to={ pathChanger }>Sign out</Link>
      </li>
    </>

  );
}