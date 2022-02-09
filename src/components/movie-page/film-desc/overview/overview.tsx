import { markChanger } from '../../../../utils/formatters/formatters';
import './overview-styles.css';

interface OverviewProps {
  description: string,
  rating: number,
  director: string,
  runTime: number,
  starring: string[],
}

export default function Overview({description, rating, director, runTime, starring}: OverviewProps): JSX.Element {

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
