/* eslint-disable no-console */
import { Comment, Film, FilmDTO } from '../types/types';

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

export const dateChanger = (date: string) => `${new Date(date).toLocaleString('en-US',
  {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  },
)}`;

export const filterChanger = (filter: string, array: Film[]) => array.slice().filter((film) => filter === 'All genres' ? film : film.genre === filter);

export const commentLayoutMaker = (arr: Comment[]) => {
  const result = [];
  for (let i = 0; i < arr.length; i=i+3) {
    result.push([arr[i], arr[i+1], arr[i+2]]);
  }
  return result.map((e) => e.filter(Boolean));
};

export const getAdaptedFilms = (films: FilmDTO[]) => films.map((film) => adaptFilm(film));
