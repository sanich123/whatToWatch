import { memo, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Film } from '../../../types/types';
import { adaptFilm } from '../../../utils/adapter/adapter';
import { warnings } from '../../../utils/const';
import Loader from '../../common/loader/loader';

export const url = 'https://6.react.pages.academy/wtw/films/promo';

function BackgroundImg() {
  const [promoFilm, setSelectedMovie] = useState<Film>();

  useEffect(() => {
    const fetchPromo = async () => {
      try {
        const film = await (
          await fetch(url)
        ).json();
        setSelectedMovie(adaptFilm(film));
      } catch {
        toast.error(warnings.server404);
      }
    };
    fetchPromo();
  }, []);

  if (!promoFilm) {return <Loader/>;}

  const {backgroundImage, name} = promoFilm;

  return (
    <div className="film-card__bg">
      <img src={backgroundImage} alt={name} />
    </div>
  );
}

export default memo(BackgroundImg);
