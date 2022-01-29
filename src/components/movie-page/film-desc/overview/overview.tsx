import { FilmDescProps } from '../../../../types/types';
import { markChanger } from '../../../../utils/utils';
import './overview-styles.css';

export default function Overview({description, rating, director, runTime, starring}: Omit<FilmDescProps, 'id' | 'released' | 'genre' | 'comments'>): JSX.Element {

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{markChanger(rating)}</span>
          <span className="film-rating__count">{runTime} ratings</span>
        </p>
      </div>

      <div className="film-card__text">{description}
        <p className="film-card__director"><strong>Director: {director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {starring.map((actor) => actor).join(', ')} and other</strong></p>
      </div>
    </>
  );
}
