import { Comment } from '../../../../types/types';
import CommentCol from './comments-col';

export default function CommentRow({reviews}: {reviews: Comment[]}): JSX.Element {

  return (
    <div className="film-card__reviews film-card__row">
      {reviews.map(({user, rating, comment, date}) => <CommentCol user={user} rating={rating} comment={comment} date={date} key={date} id={rating} />)}
    </div>
  );
}
