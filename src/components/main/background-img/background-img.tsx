import { memo, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { mockFilm } from '../../../mocks/mocks';
import { Film } from '../../../types/types';
import { adaptFilm } from '../../../utils/adapter/adapter';
import { serverPath, warnings } from '../../../utils/const';

function BackgroundImg() {
  const [promoFilm, setSelectedMovie] = useState<Film>(mockFilm);

  useEffect(() => {
    const fetchPromo = async () => {
      try {
        const film = await (
          await fetch(
            `https://6.react.pages.academy/wtw/${serverPath.films}/${serverPath.promo}`,
          )
        ).json();
        setSelectedMovie(adaptFilm(film));
      } catch {
        toast.error(warnings.server404);
      }
    };
    fetchPromo();
  }, []);

  const {backgroundImage, name} = promoFilm;

  return (
    <div className="film-card__bg">
      <img src={backgroundImage} alt={name} />
    </div>
  );
}

export default memo(BackgroundImg);
