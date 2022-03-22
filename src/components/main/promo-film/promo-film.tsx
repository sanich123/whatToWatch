import { promoFilmId } from '../../../utils/const';
import PlayButton from '../../common/play-btn/play-btn';
import FavoriteBtn from '../../common/favorite-btn/favorite-btn';
import './promo-film-styles.css';
import { Film } from '../../../types/types';
import Poster from '../../common/poster/poster';
import FilmInfo from '../../common/film-info/film-info';

export default function PromoFilm({promoFilm}: {promoFilm: Film}) {
  const { name, genre, released, posterImage, id } = promoFilm;

  return (
    <div className="film-card__wrap">
      <div className="film-card__info">

        <Poster name={name} posterImage={posterImage} />

        <div className="film-card__desc">

          <FilmInfo name={name} genre={genre} released={released} />

          <div className="film-card__buttons">
            <PlayButton id={id} />
            <FavoriteBtn id={promoFilmId} />
          </div>

        </div>
      </div>
    </div>
  );
}


