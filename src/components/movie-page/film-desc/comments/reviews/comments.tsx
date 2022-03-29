import { useGetCommentsQuery } from '../../../../../store/slices/films-api/films-api';
import { Film} from '../../../../../types/types';
import { commentLayoutMaker, sortReviews } from '../../../../../utils/utils';
import Loader from '../../../../common/loader/loader';
import Review from '../review/review';
import './comments-styles.css';

const NUMBER_SLICE = 6;

export default function Reviews({movie}: {movie: Film}) {
  const {id} = movie;
  const { data: comments, isLoading } = useGetCommentsQuery(id);

  if (isLoading) {return <Loader/>;}

  const slicedComments = comments.length > NUMBER_SLICE ?
    sortReviews(comments).slice(comments.length - NUMBER_SLICE, comments.length) :
    comments;

  return (
    <div className="film-card__reviews film-card__row">
      {slicedComments.length > 0 ?
        commentLayoutMaker(slicedComments).map((review, index) => (
          <Review key={index.toString()} reviews={review} />
        )) :
        <h3>There are no reviews to this movie</h3>}
    </div>
  );
}
