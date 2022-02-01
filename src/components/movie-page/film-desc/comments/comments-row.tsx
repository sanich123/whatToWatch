import { Comment } from '../../../../types/types';
import CommentCol from './comments-col';

export default function CommentRow({reviews}: {reviews: Comment[]}): JSX.Element {

  return (
    <div className="film-card__reviews film-card__row">
      <CommentCol reviews={reviews} />
    </div>
  );
}
