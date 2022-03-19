import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, loadFavorites } from '../../store/async/async-with-thunks';

export default function StartApp(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuth());
    dispatch(loadFavorites());
  }, [dispatch]);

  return <div></div>;
}
