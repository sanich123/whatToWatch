import { useSelector } from 'react-redux';
import { useComments } from '../../../../hooks/useFetch';
import { RootState } from '../../../../types/types';
import { reviewsReducer } from '../../../../utils/utils';
import CommentRow from './comments-row';
import './comments-styles.css';

const NUMBER_SLICE = 6;

export default function Reviews({id}: {id: number}):JSX.Element {
  const reviews = useSelector(({film}: RootState) => film.comments);
  const comments = useComments(id);
  const reviewComms = reviewsReducer([...reviews, ...comments]);

  const slicedComments = reviewComms.length > NUMBER_SLICE ?
    reviewComms.slice(reviewComms.length - NUMBER_SLICE, reviewComms.length) :
    reviewComms;

  return <CommentRow reviews={slicedComments} />;
}
