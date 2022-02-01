import { useSelector } from 'react-redux';
import { useComments } from '../../../../hooks/useFetch';
import { RootState } from '../../../../types/types';
import { commentLayoutMaker } from '../../../../utils/utils';
import Loader from '../../../common/loader/loader';
import CommentRow from './comments-row';
import './comments-styles.css';

export default function Reviews({id}: {id: number}):JSX.Element {
  const reviews = useSelector(({film}: RootState) => film.comments);
  const comments = useComments(id);

  if (comments.length === 0) {
    return <Loader />;
  }
  // eslint-disable-next-line no-console
  console.log(comments);

  return (
    <>
      {commentLayoutMaker(reviews).map((review, index) => <CommentRow key={index.toString()} reviews={review} />)}
    </>);
}
