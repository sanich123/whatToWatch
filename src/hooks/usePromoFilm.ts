import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Film } from '../types/types';
import { adaptFilm } from '../utils/adapter/adapter';
import { serverPath, warnings } from '../utils/const';

export const usePromoFilm = (id: string) => {
  const [promoFilm, setSelectedMovie] = useState<Film>();

  useEffect(() => {
    (async () => {
      try {
        const film = await (await fetch(`https://6.react.pages.academy/wtw/${serverPath.films}/${serverPath.promo}`)).json();
        setSelectedMovie(adaptFilm(film));
      }
      catch {
        toast.error(warnings.server404);
      }
    })();
  }, [id]);

  return promoFilm;
};


