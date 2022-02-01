import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadFavorites, setFavorite } from '../../../../store/async/async-thunks';
import { RootState } from '../../../../types/types';

export default function FavoriteBtn({id}: {id: number}): JSX.Element {
  const dispatch = useDispatch();
  const favorites = useSelector(({movies}: RootState) => movies.favorites);
  const [isFavorite, setIsFavorite] = useState(false);
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (click) {
      dispatch(loadFavorites());
    }
    return () => setClick(false);
  }, [click, dispatch]);

  useEffect(() => {
    if (favorites.some((favorite) => favorite.id === id)) {
      setIsFavorite(true);
    }
    else {
      setIsFavorite(false);
    }
  }, [dispatch, favorites, id]);

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={() => {
        dispatch(setFavorite(id, isFavorite));
        dispatch(loadFavorites());
        setClick(true);
      }}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? '#in-list' : '#add'} />
      </svg>
      <span>My list</span>
    </button>
  );
}
