import { useGetCommentsQuery } from '../../../../../store/slices/films-api/films-api';
import { Film} from '../../../../../types/types';
import { commentLayoutMaker, errorHandler, sortReviews } from '../../../../../utils/utils';
import Loader from '../../../../common/loader/loader';
import Review from '../review/review';
import './comments-styles.css';

const NUMBER_SLICE = 6;

export default function Reviews({movie}: {movie: Film}) {
  const {id} = movie;
  const { data: comments, isLoading, error } = useGetCommentsQuery(id);

  if (isLoading) {return <Loader/>;}
  if (error) {errorHandler(error);}

  const reviews = comments ? comments : [];
  const slicedComments = reviews.length > NUMBER_SLICE ?
    sortReviews(reviews).slice(reviews.length - NUMBER_SLICE, reviews.length) :
    reviews;

  return (
    <div className="film-card__reviews film-card__row">
      {slicedComments.length > 0 ?
        commentLayoutMaker(slicedComments).map((review) => (
          <Review key={review.toString()} reviews={review} />
        )) :
        <h3>There are no reviews to this movie</h3>}
    </div>
  );
}
