import { getToken } from '../store/async/token';
import { AuthType, Comment, Film, FilmDTO } from '../types/types';
import { genres, httpMethods, rootUrl } from './const';

export const adaptFilm = (film: FilmDTO): Film => ({
  backgroundColor: film['background_color'],
  backgroundImage: film['background_image'],
  description: film.description,
  director: film.director,
  genre: film.genre,
  id: film.id,
  isFavorite: film['is_favorite'],
  name: film.name,
  posterImage: film['poster_image'],
  previewImage: film['preview_image'],
  previewVideoLink: film['preview_video_link'],
  rating: film.rating,
  released: film.released,
  runTime: film['run_time'],
  scoresCount: film['scores_count'],
  starring: film.starring,
  videoLink: film['video_link'],
});

export const markChanger = (mark: number) => {
  if (mark < 3) {
    return 'Bad';
  }
  if (mark > 3 && mark < 5) {
    return 'Normal';
  }
  if (mark > 5 && mark < 8) {
    return 'Good';
  }
  if (mark > 8 && mark < 10) {
    return 'Very good';
  }
  if (mark === 10) {
    return 'Awesome';
  }
};

export const dateChanger =
(date: string) =>
  `${new Date(date).toLocaleString('en-US',
    {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    },
  )}`;

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

export const getAdaptedFilms = (films: FilmDTO[]) => films.map((film) => adaptFilm(film));

const zeroMaker = (time: number) => time >= 10 ? time : `0${time}`;

export const getFormattedTime = (duration?: number, currentTime?: number) => {
  if (duration && currentTime) {
    const hours = Math.floor((duration - currentTime) / 3600);
    const minutes = Math.floor((duration - currentTime - (hours * 3600)) / 60);
    const secs = Math.floor((duration - currentTime - (hours * 3600) - (minutes * 60)));

    if (duration >= 3600) {
      return `${zeroMaker(hours)}:${zeroMaker(minutes)}:${zeroMaker(secs)}`;
    } else {
      return `${zeroMaker(minutes)}:${zeroMaker(secs)}`;
    }
  }
};

export const getData = (url: string) => fetch(`${rootUrl}${url}`, {
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
    'x-token': getToken(),
  },
});

export const postData = (url: string, data?: AuthType) => {
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

export const deleteData = (url: string) => fetch(`${rootUrl}${url}`, {
  method: 'DELETE',
});
