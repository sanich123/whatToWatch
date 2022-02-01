import { useSelector } from 'react-redux';
import { useComments } from '../../../../hooks/useFetch';
import { RootState } from '../../../../types/types';
import Loader from '../../../common/loader/loader';
import CommentRow from './comments-row';
import './comments-styles.css';

export default function Reviews({id}: {id: number}):JSX.Element {
  const reviews = useSelector(({film}: RootState) => film.comments);
  const slicedReviews = reviews.slice(reviews.length / 2);
  const comments = useComments(id);

  if (comments.length === 0) {
    return <Loader />;
  }
  // eslint-disable-next-line no-console
  console.log(comments);

  return <CommentRow reviews={slicedReviews} />;
}
