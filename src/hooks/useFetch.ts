import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { warnings } from '../store/async/async-thunks';
import { getToken } from '../store/async/token';
import { Film, FilmDTO } from '../types/types';
import { rootUrl, serverPath } from '../utils/const';
import { adaptFilm } from '../utils/utils';

export const useFilm = (id: string) => {

  const [selectedFilm, setSelectedMovie] = useState<Film>();

  useEffect(() => {
    fetch(`${rootUrl}${serverPath.films}/${id}`)
      .then((response) => response.json())
      .then((film) => setSelectedMovie(adaptFilm(film)));
  }, [id]);

  return selectedFilm;
};

export const useFavorites = () => {

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch(`${rootUrl}${serverPath.favorite}`, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'x-token': getToken(),
      },
    })
      .then((response) => response.json())
      .then((data) => setFavorites(data.map((film: FilmDTO) => adaptFilm(film))));
  }, []);

  return favorites;
};

export const useComments = (id: number) => {

  const [comments, getComments] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${rootUrl}${serverPath.comments}/${id}`);
        if (response.status === 400) {
          toast.warn(warnings.serverReview400);
        } else {
          const reviews = await response.json();
          getComments(reviews);
        }
      }
      catch {
        toast.error(warnings.server404);
      }
    })();
  }, [id]);

  return comments;
};

