import { fetchFilms, setFavorites, setPromo } from '../slices/start';
import { AuthInfoDTO, Film } from '../../types/types';
import { fetchComments } from '../slices/film';
import { adaptFilm, getAdaptedFilms } from '../../utils/utils';
import { AuthorizationStatus, rootUrl, serverPath } from '../../utils/const';
import { checkStatus, getAvatar } from '../slices/authorization';
import { deleteToken, getToken, saveToken } from './token';

export const loadFilms = () =>
  (dispatch: (arg: { payload: Film[]; type: string; }) => void) => {
    fetch(`${rootUrl}${serverPath.films}`)
      .then((response) => response.json())
      .then((films) => dispatch(fetchFilms(getAdaptedFilms(films))));
  };


export const loadPromoFilm = () =>
  (dispatch: (arg: { payload: Film; type: string; }) => void) => {
    (fetch(`https://6.react.pages.academy/wtw/${serverPath.films}/${serverPath.promo}`)
      .then((response) => response.json())
      .then((film) => dispatch(setPromo(adaptFilm(film)))));
  };

export const loadComments = (id: string) =>
  (dispatch: (arg: { payload: Comment[]; type: string; }) => void) => {
    fetch(`${rootUrl}${serverPath.comments}/${id}`)
      .then((response) => response.json())
      .then((reviews) => dispatch(fetchComments(reviews)));
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

export const logOut = () =>
  (dispatch: (arg: { payload: string; type: string; }) => void) => {
    fetch(`${rootUrl}${serverPath.logout}`, {
      method: 'DELETE',
    }).then((response) => {
      deleteToken();
      dispatch(checkStatus(AuthorizationStatus.NoAuth));
    });
  };

export const setFavorite = (id: number, isFavorite: number) =>
  (dispatch: (arg: { payload: Film[]; type: string; }) => void) => {
    fetch(`${rootUrl}${serverPath.favorite}/${id}/${isFavorite}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'x-token': getToken(),
      },
    }).then((response) => response.json()).then((data) => data);
  };

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
