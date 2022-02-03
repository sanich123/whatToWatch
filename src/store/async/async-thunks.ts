/* eslint-disable no-console */
import { fetchFilms, setFavorites, setPromo } from '../slices/start';
import { AuthInfoDTO, Film } from '../../types/types';
import { fetchComments, sendingFailed } from '../slices/film';
import { adaptFilm, getAdaptedFilms } from '../../utils/utils';
import { AuthorizationStatus, rootUrl, serverPath } from '../../utils/const';
import { checkStatus, getAvatar } from '../slices/authorization';
import { deleteToken, getToken, saveToken } from './token';
import { toast } from 'react-toastify';

export const warnings = {
  network: 'Неполадки с сетью или вы неправильно ввели адрес',
  server404: 'Запрашиваемая страница не найдена. Проверьте правильность написанного адреса',
  serverReview400: 'Поле рейтинга должно быть значением не меньше 1, отзыв должен состоять из не менее 40 символов и не более 500 символов',
};


export const loadFilms = () =>
  async (dispatch: (arg: { payload: Film[]; type: string; }) => void) => {
    try {
      const response = await fetch(`${rootUrl}${serverPath.films}`);
      if (response.status === 404) {
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
      if (response.status === 404) {
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
  (dispatch: (arg: { payload: string; type: string; }) => void) => {
    fetch(`${rootUrl}${serverPath.login}`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'x-token': getToken(),
      },
    }).then((response) => response.json()).then((data) => {
      saveToken(data.token);
      dispatch(getAvatar(data['avatar_url']));
    });
  };

export const postAuthInfo = (email: string, password: string) =>
  (dispatch: (arg: { payload: AuthInfoDTO; type: string; }) => void ) => {
    fetch(`${rootUrl}${serverPath.login}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'x-token': getToken(),
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then((response) => response.json()).then((data) => {
      saveToken(data.token);
      dispatch(getAvatar(data['avatar_url']));
    });
  };

export const postComment = (id: string, rating: number, comment: string) =>
  async (dispatch: (arg: { payload?: Comment[]; type: string; }) => void) => {
    try {
      const response = await (await fetch(`${rootUrl}${serverPath.comments}ef/${id}`, {
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

export const logOut = () =>
  (dispatch: (arg: { payload: string; type: string; }) => void) => {
    fetch(`${rootUrl}${serverPath.logout}`, {
      method: 'DELETE',
    }).then(() => {
      deleteToken();
      dispatch(checkStatus(AuthorizationStatus.NoAuth));
    });
  };

export const setFavorite = (id: number, isFavorite: boolean) =>
  fetch(`${rootUrl}${serverPath.favorite}/${id}/${isFavorite ? 0 : 1}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'x-token': getToken(),
    },
  }).then((response) => {
    response.json();
  }).then((data) => data);

export const loadFavorites = () =>
  (dispatch: (arg: { payload: Film[]; type: string; }) => void) => {
    fetch(`${rootUrl}${serverPath.favorite}`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'x-token': getToken(),
      },
    })
      .then((response) => response.json())
      .then((data) => dispatch(setFavorites(getAdaptedFilms(data))));
  };
