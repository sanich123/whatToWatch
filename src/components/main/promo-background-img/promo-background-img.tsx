import { usePromoFilm } from '../../../hooks/useFetch';
import Loader from '../../common/loader/loader';

export default function PromoBackImg() {
  const promoFilm = usePromoFilm();
  if (!promoFilm) {return <Loader/>;}
  const {backgroundImage, name} = promoFilm;

  return (
    <div className="film-card__bg">
      <img src={backgroundImage} alt={name} />
    </div>
  );
}
