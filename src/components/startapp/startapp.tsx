import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAvatar } from '../../store/slices/authorization/authorization';
import { useGetAuthQuery } from '../../store/slices/films-api/films-api';
import { saveToken } from '../../utils/token';
import { errorHandler } from '../../utils/utils';
import Loader from '../common/loader/loader';

export default function StartApp() {
  const dispatch = useDispatch();
  const { data: auth, isLoading: loginLoading, error: loginError} = useGetAuthQuery('');

  useEffect(() => {
    if (auth) {
      saveToken(auth.token);
      dispatch(getAvatar(auth['avatar_url']));
    }
    loginError && errorHandler(loginError);
  });

  if (loginLoading) {
    return <Loader/>;
  }

  return <div/>;
}
