import { Film } from '../../types/types';
import { getData, postData } from '../../utils/fetch-api';
import { errors, serverPath, warnings } from '../../utils/const';
import { toast } from 'react-toastify';
import { setFavorites, setPromo } from '../slices/start/start';
import { adaptFilm, getAdaptedFilms } from '../../utils/adapter/adapter';

export const loadPromoFilm = () =>
  async (dispatch: (arg: { payload: Film; type: string; }) => void) => {
    try {
      const response = await fetch(`https://6.react.pages.academy/wtw/${serverPath.films}/${serverPath.promo}`);
      if (response.status === errors.wrongAddress) {
        toast.error(warnings.server404);
      } else {
        const film = await response.json();
        dispatch(setPromo(adaptFilm(film)));
      }
    }
    catch {
      toast.warn(warnings.network);
    }
  };

export const loadFavorites = () =>
  async (dispatch: (arg: { payload: Film[]; type: string; }) => void) => {
    try {
      const response = await getData(serverPath.favorite);
      if (response.status === errors.noAuth) {
        toast.warn(warnings.haveToAuth);
      } else {
        const favorites = await response.json();
        dispatch(setFavorites(getAdaptedFilms(favorites)));
      }
    }
    catch {
      toast.warn(warnings.network);
    }
  };

export const setFavorite = async (id: number, isFavorite: boolean) => {
  try {
    const response = await postData(`${serverPath.favorite}/${id}/${isFavorite ? 0 : 1}`);
    if (response.status === 400) {
      toast.warn(warnings.wrongAddedFavorites);
    }
    if (response.status === 401) {
      toast.warn(warnings.wrongAccess);
    }
  }
  catch {
    toast.warn(warnings.network);
  }
};
