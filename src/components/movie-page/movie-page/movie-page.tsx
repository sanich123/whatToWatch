import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '../../../types/types';
import { AuthorizationStatus } from '../../../utils/const';
import Loader from '../../common/loader/loader';
import PlayButton from '../../common/play-btn/play-btn';
import Svg from '../../svg/svg';
import FilmDesc from '../film-desc/film-description/film-desc';
import SimilarFilms from '../similar-films/similar-films';
import FavoriteBtn from '../../common/favorite-btn/favorite-btn';
import './movie-page-styles.css';
import { useGetFilmQuery } from '../../../store';
import { errorHandler } from '../../../utils/utils';
import { adaptFilm } from '../../../utils/adapter/adapter';
import Header from '../../common/header/header';
import BackgroundImg from '../../main/background-img/background-img';
import Poster from '../../common/poster/poster';
import FilmInfo from '../../common/film-info/film-info';
import Footer from '../../common/footer/footer';

export default function MoviePage() {
  const selected: {id: string} = useParams();
  const { data: film, isLoading, error } = useGetFilmQuery(selected.id);

  const authStatus = useSelector(({authorization}: RootState) => authorization.authStatus);

  if (isLoading) {return <Loader />;}
  if (error) { errorHandler(error);}

  const {backgroundColor, name, posterImage, released, id, genre} = adaptFilm(film);

  return (
    <>
      <Svg />
      <section
        className="film-card--full"
        style={{backgroundColor: backgroundColor}}
      >
        <div className="film-card__hero">
          <BackgroundImg film={adaptFilm(film)} />
          <Header/>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <FilmInfo name={name} genre={genre} released={released} />

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
            <Poster moviePage name={name} posterImage={posterImage} />
            <FilmDesc id={id} film={adaptFilm(film)} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <SimilarFilms id={id} />
        <Footer/>
      </div>
    </>
  );
}

