import { Film } from '../../../types/types';
import { promoFilmId } from '../../../utils/const';
import PlayButton from '../../common/play-btn/play-btn';
import FavoriteBtn from '../../common/favorite-btn/favorite-btn';
import './promo-film-styles.css';

export default function PromoFilm({movie}: {movie: Film}): JSX.Element {
  const {name, genre, released, posterImage, id} = movie;

  return (
    <div className="film-card__wrap">
      <div className="film-card__info">
        <div className="film-card__poster">
          <img src={posterImage} alt={name} width="218" height="327" />
        </div>

        <div className="film-card__desc">
          <h2 className="film-card__title">{name}</h2>
          <p className="film-card__meta">
            <span className="film-card__genre">{genre}</span>
            <span className="film-card__year">{released}</span>
          </p>

          <div className="film-card__buttons">
            <PlayButton id={id} />
            <FavoriteBtn id={promoFilmId} />
          </div>
        </div>
      </div>
    </div>
  );
}


