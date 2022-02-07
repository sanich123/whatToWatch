import { fetchFilms, setFavorites, setPromo } from '../slices/start';
import { AuthInfoDTO, Film } from '../../types/types';
import { clearAll, fetchComments, sendingFailed, sendingSuccess } from '../slices/film';
import { deleteData, getData, postData } from '../../utils/fetch-api';
import { AuthorizationStatus, errors, serverPath, warnings } from '../../utils/const';
import { checkStatus, getAvatar, successAuth } from '../slices/authorization';
import { deleteToken, saveToken } from '../../utils/token';
import { toast } from 'react-toastify';
import { adaptFilm, getAdaptedFilms } from '../../utils/adapter';

export const loadFilms = () =>
  async (dispatch: (arg: { payload: Film[]; type: string; }) => void) => {
    try {
      const response = await getData(serverPath.films);
      if (response.status === errors.wrongAddress) {
        toast.error(warnings.server404);
      } else {
        const films = await response.json();
        dispatch(fetchFilms(getAdaptedFilms(films)));
      }
    }
    catch {
      toast.warn(warnings.network);
    }
  };

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

export const getAuth = () =>
  async (dispatch: (arg: { payload: string; type: string; }) => void) => {
    try {
      const response = await getData(serverPath.login);
      if (response.status === errors.noAuth) {
        toast.warn(warnings.haveToAuth);
      } else {
        const authData = await response.json();
        saveToken(authData.token);
        dispatch(getAvatar(authData['avatar_url']));
      }
    }
    catch {
      toast.warn(warnings.network);
    }
  };

export const postAuthInfo = (email: string, password: string) =>
  async (dispatch: (arg: { payload?: AuthInfoDTO; type: string; }) => void ) => {
    try {
      const response = await postData(serverPath.login,
        {
          email: email,
          password: password,
        });

      if (response.status === errors.wrongData) {
        toast.warn(warnings.wrongData);
        return;
      } else {
        const data = await response.json();
        dispatch(successAuth());
        saveToken(data.token);
        dispatch(getAvatar(data['avatar_url']));
      }
    }
    catch {
      toast.warn(warnings.network);
    }
  };

export const logOut = () =>
  async (dispatch: (arg: { payload: string; type: string; }) => void) => {
    try {
      await deleteData(serverPath.logout);
      deleteToken();
      dispatch(checkStatus(AuthorizationStatus.NoAuth));
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

export const postComment = (id: string, rating: number, comment: string) =>
  async (dispatch: (arg: { payload?: Comment[]; type: string; }) => void) => {
    dispatch(clearAll());
    try {
      const response = await (await postData(`${serverPath.comments}/${id}`, {
        rating: rating,
        comment: comment,
      }));
      if (response.status === 404) {
        toast.warn(warnings.server404);
        dispatch(sendingFailed());
      }
      if (response.status === 400) {
        toast.error(warnings.serverReview400);
      }
      else {
        const comments = await response.json();
        dispatch(fetchComments(comments));
        dispatch(sendingSuccess());
      }
    }
    catch {
      toast.warn(warnings.network);
      dispatch(sendingFailed());
    }
  };
