import { useGetCommentsQuery } from '../../../../store/slices/films-api/films-api';
import { Film} from '../../../../types/types';
import { reviewsReducer } from '../../../../utils/utils';
import Loader from '../../../common/loader/loader';
import CommentRow from './comments-row';
import './comments-styles.css';

const NUMBER_SLICE = 6;

export default function Reviews({movie}: {movie: Film}) {
  const {id} = movie;
  const { data: comments, isLoading } = useGetCommentsQuery(id);

  if (isLoading) {return <Loader/>;}
  const reviews = reviewsReducer(comments);

  const slicedComments = reviews.length > NUMBER_SLICE ?
    reviews.slice(reviews.length - NUMBER_SLICE, reviews.length) :
    reviews;

  return <CommentRow reviews={slicedComments} />;
}
