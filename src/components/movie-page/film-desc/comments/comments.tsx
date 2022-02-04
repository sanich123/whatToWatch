import { useSelector } from 'react-redux';
import { useComments } from '../../../../hooks/useFetch';
import { RootState } from '../../../../types/types';
import { reviewsReducer } from '../../../../utils/const';
import Loader from '../../../common/loader/loader';
import CommentRow from './comments-row';
import './comments-styles.css';

export default function Reviews({id}: {id: number}):JSX.Element {
  const reviews = useSelector(({film}: RootState) => film.comments);
  const comments = useComments(id);
  const reviewComms = reviewsReducer([...reviews, ...comments]);

  if (comments.length === 0) {
    return <Loader />;
  }

  return <CommentRow reviews={reviewComms} />;
}
