import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetFavoritesQuery, usePostFavoriteMutation } from '../../../store';
import { Film, RootState } from '../../../types/types';
import { AuthorizationStatus } from '../../../utils/const';
import Loader from '../../common/loader/loader';

export default function FavoriteBtn({id}: {id: number}) {
  const dispatch = useDispatch();
  const {data: favorites, isLoading} = useGetFavoritesQuery('');
  const [postIsFavorite] = usePostFavoriteMutation();

  const authStatus = useSelector(({authorization}: RootState) => authorization.authStatus);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (favorites.some((favorite: Film) => favorite.id === id)
    && authStatus === AuthorizationStatus.Auth) {
      setIsFavorite(true);
    }
    else {
      setIsFavorite(false);
    }
  }, [dispatch, favorites, id, authStatus]);
  if (isLoading) {return <Loader/>;}

  return (
    <button
      className="btn btn--list film-card__button"
      type="button"
      onClick={() => postIsFavorite({id, isFavorite})}
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? '#in-list' : '#add'} />
      </svg>
      <span>My list</span>
    </button>
  );
}
