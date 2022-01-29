import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, loadFilms, loadPromoFilm } from '../../store/api/api-thunk';

export default function StartApp(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFilms());
    dispatch(loadPromoFilm());
    dispatch(getAuth());
  }, [dispatch]);

  return <div></div>;
}
