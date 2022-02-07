import { Comment, Film } from '../types/types';
import { genres } from './const';

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

