import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getToken } from '../store/api/token';
import { Film, FilmDTO, RootState } from '../types/types';
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

export const useStates = (id: string) => {
  const [isFavorite, setInFavorites] = useState<boolean>();
  const favorites = useSelector(({movies}: RootState) => movies.favorites);
  useEffect(() => {
    setInFavorites(favorites.some((favorite) => favorite.id === +id));

  }, [favorites, id]);

  return isFavorite;
};

