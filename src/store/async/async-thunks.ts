/* eslint-disable no-console */
import { fetchFilms, setFavorites, setPromo } from '../slices/start';
import { AuthInfoDTO, Film } from '../../types/types';
import { fetchComments, sendingFailed } from '../slices/film';
import { adaptFilm, getAdaptedFilms } from '../../utils/utils';
import { AuthorizationStatus, deleteData, errors, getData, httpMethods, rootUrl, serverPath, warnings } from '../../utils/const';
import { checkStatus, getAvatar, successAuth } from '../slices/authorization';
import { deleteToken, getToken, saveToken } from './token';
import { toast } from 'react-toastify';

interface AuthType {
  email: string,
  password: string,
}

const postData = (url: string, data?: AuthType) => {
  if (data) {
    return  fetch(`${rootUrl}${url}`, {
      method: httpMethods.post,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'x-token': getToken(),
      },
      body: JSON.stringify(data),
    });
  } else {
    return fetch(`${rootUrl}${url}`, {
      method: httpMethods.post,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'x-token': getToken(),
      },
    });
  }};


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
      toast.warn('Не удалось добавить в избранное');
    }
    if (response.status === 401) {
      toast.warn('Добавлять в избранное могут только авторизованные пользователи');
    }
  }
  catch {
    toast.warn(warnings.network);
  }
};

export const postComment = (id: string, rating: number, comment: string) =>
  async (dispatch: (arg: { payload?: Comment[]; type: string; }) => void) => {
    try {
      const response = await (await fetch(`${rootUrl}${serverPath.comments}/${id}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          'x-token': getToken(),
        },
        body: JSON.stringify({
          rating: rating,
          comment: comment,
        }),
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
      }
    }

    catch {
      toast.warn(warnings.network);
      dispatch(sendingFailed());
    }
  };
