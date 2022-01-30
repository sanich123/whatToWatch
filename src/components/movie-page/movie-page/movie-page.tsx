/* eslint-disable no-console */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { loadComments } from '../../../store/api/api-thunk';
import { getToken } from '../../../store/api/token';
import { RootState } from '../../../types/types';
import { rootUrl, serverPath } from '../../../utils/const';
import { adaptFilm } from '../../../utils/utils';
import Loader from '../../common/loader/loader';
import PlayButton from '../../common/play-btn/play-btn';
import LogoFooter from '../../main/logo-footer/footer';
import Logo from '../../main/logo-footer/logo';
import UserMenu from '../../main/user-menu/user';
import Svg from '../../svg/svg';
import FilmDesc from '../film-desc/film-desc';
import SimilarFilms from '../similar-films/similar-films';
import './movie-page-styles.css';

export default function MoviePage(): JSX.Element {
  const films = useSelector(({movies}: RootState) => movies.films);
  const favorites = useSelector(({movies}: RootState) => movies.favorites);
  const dispatch = useDispatch();
  const selected: {id: string} = useParams();

  useEffect(() => {
    dispatch(loadComments(selected.id));
  }, [selected, dispatch]);

  if (films.length === 0) {
    return <Loader />;
  }
  let isFavorite = false;
  const [{backgroundColor, backgroundImage, description, director, genre, name, posterImage, rating, released, runTime, starring, id}] = films.filter((film) => film.id === +selected.id);

  const [selectedMovie] = films.filter((film) => film.id === +selected.id);
  if (favorites.find((favorite) => favorite.id === selectedMovie.id)) {
    isFavorite = true;
  }

  return (
    <>
      <Svg />

      <section
        className="film-card--full"
        style={{backgroundColor: backgroundColor}}
      >
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">

            <Logo />

            <UserMenu />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span>{released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton id={id} />

                <button className="btn btn--list film-card__button" type="button" onClick={() => {
                  fetch(`${rootUrl}${serverPath.favorite}/${id}/${isFavorite ? 0 : 1}`, {
                    method: 'POST',
                    headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                      'x-token': getToken(),
                    },
                    // eslint-disable-next-line no-console
                  }).then((response) => response.json()).then((data) => console.log(adaptFilm(data)));}}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref={isFavorite ? '#in-list' : '#add'} />
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
            </div>

            <FilmDesc
              description={description}
              director={director}
              runTime={runTime}
              starring={starring}
              rating={rating}
              id={id}
              released={released}
              genre={genre}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <SimilarFilms id={id} />
        <footer>

          <LogoFooter />

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

