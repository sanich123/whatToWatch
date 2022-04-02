import { usePromoFilm } from '../../../hooks/usePromoFilm';
import Loader from '../../common/loader/loader';

export default function BackgroundImg() {
  const promoFilm = usePromoFilm();
  if (!promoFilm) {return <Loader/>;}

  const {backgroundImage, name} = promoFilm;

  return (
    <div className="film-card__bg">
      <img src={backgroundImage} alt={name} />
    </div>
  );
}
