import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, loadFavorites, loadFilms, loadPromoFilm } from '../../store/async/async-thunks';

export default function StartApp(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFilms());
    dispatch(loadPromoFilm());
    dispatch(getAuth());
    dispatch(loadFavorites());
  }, [dispatch]);

  return <div></div>;
}
