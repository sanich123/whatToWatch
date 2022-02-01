import { Comment } from '../../../../types/types';
import { commentLayoutMaker } from '../../../../utils/utils';
import CommentCol from './comments-col';

export default function CommentRow({reviews}: {reviews: Comment[]}): JSX.Element {
// eslint-disable-next-line no-console
  console.log(reviews);
  return (
    <div className="film-card__reviews film-card__row">
      {commentLayoutMaker(reviews).map((review, index) => <CommentCol key={index.toString()} reviews={review} />)}
    </div>
  );
}
