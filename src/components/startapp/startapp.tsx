import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAvatar } from '../../store/slices/authorization/authorization';
import { useGetAuthQuery, useGetFavoritesQuery } from '../../store/slices/films-api/films-api';
import { setFavorites } from '../../store/slices/start/start';
import { getAdaptedFilms } from '../../utils/adapter/adapter';
import { saveToken } from '../../utils/token';
import { errorHandler } from '../../utils/utils';
import Loader from '../common/loader/loader';


export default function StartApp() {
  const dispatch = useDispatch();
  const {data: auth, isLoading: loginLoading, error: loginError} = useGetAuthQuery('');

  const { data: favorites, isLoading: favoritesLoading, error: favoritesError } = useGetFavoritesQuery('');

  useEffect(() => {
    if (auth) {
      saveToken(auth.token);
      dispatch(getAvatar(auth['avatar_url']));
    }
    favorites && dispatch(setFavorites(getAdaptedFilms(favorites)));
    loginError && errorHandler(loginError);
    favoritesError && errorHandler(favoritesError);
  });

  if (loginLoading || favoritesLoading) {
    return <Loader/>;
  }
  // eslint-disable-next-line no-console
  console.log(favorites);

  return <div/>;
}
