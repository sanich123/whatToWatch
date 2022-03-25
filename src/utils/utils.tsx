import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react';
import { toast } from 'react-toastify';
import Page404 from '../components/page404/page404';
import { Comment, Film } from '../types/types';
import { errors, genres, warnings } from './const';

export const filterChanger =
(filter: string, array: Film[]) =>
  array.slice().filter((film) => filter === genres['All genres'] ? film : film.genre === filter);

export const commentLayoutMaker = (arr: Comment[]) => {
  const result = [];
  for (let i = 0; i < arr.length; i=i+3) {
    result.push([arr[i], arr[i+1], arr[i+2]]);
  }

  return result.map((comments) => comments.filter(Boolean));
};

export const reviewsReducer = (reviews: Comment[]) => {
  const result = [];

  for (let i = 0; i < reviews.length; i++) {
    if (result.length === 0) {
      result.push(reviews[i]);
    }
    else if (!result.slice().map(({id}) => id).includes(reviews[i].id)) {
      result.push(reviews[i]);
    }
  }

  return result;
};

export const normalizedError = (error: SerializedError | FetchBaseQueryError) => JSON.parse(JSON.stringify(error));

export const errorHandler = (error: SerializedError | FetchBaseQueryError) => {
  const info = normalizedError(error);
  if (info.status === errors.wrongAddress) {
    toast.warn(warnings.server404);
    return <Page404 />;
  } else if (info.status === errors.noAuth) {
    toast.warn(warnings.haveToAuth);
    return <h1>Пройдите авторизацию</h1>;
  } else if (info.status === errors.wrongData) {
    toast.warn(`${info.status} ${info.error}`);
    return <h1>Неправильные данные</h1>;
  } else {
    toast.warn(`${info.status} ${info.error} ${warnings.network}`);
    return (
      <h1>
      `${info.status} ${info.error} ${warnings.network}`
      </h1>
    );
  }
};
