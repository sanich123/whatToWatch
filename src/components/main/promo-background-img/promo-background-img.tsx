import { Film } from '../../../types/types';

export default function PromoBackImg({promoFilm}: {promoFilm: Film}) {
  const {backgroundImage, name} = promoFilm;

  return (
    <div className="film-card__bg">
      <img src={backgroundImage} alt={name} />
    </div>
  );
}
