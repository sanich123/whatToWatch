import { Film } from '../../../types/types';

export default function BackgroundImg({film}: {film: Film}) {
  const {backgroundImage, name} = film;

  return (
    <div className="film-card__bg">
      <img src={backgroundImage} alt={name} />
    </div>
  );
}