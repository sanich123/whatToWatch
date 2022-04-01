import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../types/types';
import { AuthorizationStatus } from '../../../utils/const';
import Loader from '../../common/loader/loader';
import PlayButton from '../play-btn/play-btn';
import Svg from '../../svg/svg';
import FilmDesc from '../film-desc/film-description/film-desc';
import SimilarFilms from '../similar-films/similar-films';
import FavoriteBtn from '../favorite-btn/favorite-btn';
import './movie-page-styles.css';
import { errorHandler } from '../../../utils/utils';
import { adaptFilm } from '../../../utils/adapter/adapter';
import Header from '../../common/header/header/header';
import Poster from '../../common/poster/poster';
import FilmInfo from '../film-info/film-info';
import Footer from '../../common/footer/footer';
import AddReviewBtn from '../add-review-btn/add-review-btn';
import { useGetFilmQuery } from '../../../store/slices/films-api/films-api';

export default function MoviePage() {
  const selected: {id: string} = useParams();
  const { data: film, isLoading, error } = useGetFilmQuery(selected.id);

  const authStatus = useSelector(({authorization}: RootState) => authorization.authStatus);

  if (isLoading) {return <Loader />;}
  if (error) { return errorHandler(error);}

  const adaptedFilm = adaptFilm(film);
  const {backgroundColor, name, posterImage, released, id, genre, backgroundImage} = adaptedFilm;

  return (
    <>
      <Svg />
      <section
        className="film-card--full"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>
          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <FilmInfo name={name} genre={genre} released={released} />

              <div className="film-card__buttons">
                <PlayButton id={id} />
                <FavoriteBtn id={id} />

                {authStatus === AuthorizationStatus.Auth && (
                  <AddReviewBtn id={id} />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <Poster moviePage name={name} posterImage={posterImage} />
            <FilmDesc id={id} film={adaptedFilm} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <SimilarFilms uniq={id} />
        <Footer />
      </div>
    </>
  );
}

