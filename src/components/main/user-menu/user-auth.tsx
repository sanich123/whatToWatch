import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { logOut } from '../../../store/api/api-thunk';
import { AppRoute } from '../../../utils/const';

export default function UserAuth({userAvatar}: {userAvatar: string}): JSX.Element {
  const history = useHistory();
  const dispatch = useDispatch();
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar" onClick={() => history.push(AppRoute.Favorites)}>
          <img src={userAvatar} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item" onClick={() => dispatch(logOut())}>
        <Link className="user-block__link" to={AppRoute.Main}>Sign out</Link>
      </li>
    </ul>
  );
}
