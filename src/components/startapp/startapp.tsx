/* eslint-disable no-console */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAvatar } from '../../store/slices/authorization/authorization';
import { useGetFilmsQuery } from '../../store/slices/films-api/films-api';
import { setFavorites } from '../../store/slices/start/start';
import { getAdaptedFilms } from '../../utils/adapter/adapter';
import { saveToken } from '../../utils/token';
import { errorHandler } from '../../utils/utils';


export default function StartApp() {
  const dispatch = useDispatch();
  const {data: auth, error: loginError} = useGetFilmsQuery('8.react.pages.academy/wtw/login');
  const { data: favorites, error: favoritesError } = useGetFilmsQuery('8.react.pages.academy/wtw/favorite');

  useEffect(() => {
    if (auth) {
      saveToken(auth.token);
      dispatch(getAvatar(auth['avatar_url']));
    }
    favorites && dispatch(setFavorites(getAdaptedFilms(favorites)));
    loginError && errorHandler(loginError);
    favoritesError && errorHandler(favoritesError);
  });

  return <div/>;
}
