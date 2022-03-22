import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '../../../types/types';
import { AuthorizationStatus } from '../../../utils/const';
import Loader from '../../common/loader/loader';
import PlayButton from '../../common/play-btn/play-btn';
import Logo from '../../common/logo/logo/logo';
import UserMenu from '../../main/user-menu/user-menu/user';
import Svg from '../../svg/svg';
import FilmDesc from '../film-desc/film-description/film-desc';
import SimilarFilms from '../similar-films/similar-films';
import FavoriteBtn from '../../common/favorite-btn/favorite-btn';
import './movie-page-styles.css';
import Copyright from '../../common/copyright/copyright';
import { useGetFilmQuery } from '../../../store';
import { errorHandler } from '../../../utils/utils';
import { adaptFilm } from '../../../utils/adapter/adapter';

export default function MoviePage(): JSX.Element {
  const selected: {id: string} = useParams();
  const { data: film, isLoading, error } = useGetFilmQuery(selected.id);

  const authStatus = useSelector(({authorization}: RootState) => authorization.authStatus);

  if (isLoading) {return <Loader />;}
  error && errorHandler(error);

  const {backgroundColor, backgroundImage, description, director, genre, name, posterImage, rating, released, runTime, starring, id} = adaptFilm(film);

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
                <FavoriteBtn id={+selected.id} />

                {authStatus === AuthorizationStatus.Auth
                && <Link to={`/films/${id}/review`} className="btn film-card__button">Add review</Link>}

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
          <Logo footer />
          <Copyright />
        </footer>
      </div>
    </>
  );
}

