import { dateChanger } from '../../../../utils/utils';
import { Comment } from '../../../../types/types';

export default function CommentCol({comment, user, date, rating}: Comment): JSX.Element {

  return (
    <div className="film-card__reviews-col">
      <div className="review">
        <blockquote className="review__quote">
          <p className="review__text">{comment}</p>

          <footer className="review__details">
            <cite className="review__author">{user.name}</cite>
            <time className="review__date" dateTime={date}>{dateChanger(date)}</time>
          </footer>
        </blockquote>

        <div className="review__rating">{rating}</div>
      </div>

    </div>
  );
}
