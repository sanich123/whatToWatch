import { promoFilmId } from '../../../utils/const';
import PlayButton from '../../movie-page/play-btn/play-btn';
import FavoriteBtn from '../../movie-page/favorite-btn/favorite-btn';
import './promo-film-styles.css';
import Poster from '../../common/poster/poster';
import FilmInfo from '../../movie-page/film-info/film-info';
import { usePromoFilm } from '../../../hooks/usePromoFilm';
import Loader from '../../common/loader/loader';

export default function PromoFilm() {
  const promoFilm = usePromoFilm();
  if (!promoFilm) {return <Loader/>;}
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


