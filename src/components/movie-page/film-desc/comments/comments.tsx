/* eslint-disable no-console */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useComments } from '../../../../hooks/useFetch';
import { loadComments } from '../../../../store/async/async-thunks';
import { Comment } from '../../../../types/types';
import { commentLayoutMaker } from '../../../../utils/utils';
import CommentRow from './comments-row';
import './comments-styles.css';

export default function Reviews({id}: {id: number}):JSX.Element {
  const dispatch = useDispatch();
  const reviews = useSelector(({film}: {film: {comments: Comment[]}}) => film.comments);
  const comments = useComments(id);
  console.log(comments);
  useEffect(() => {
    dispatch(loadComments(`${id}`));
  }, [id, dispatch]);

  if (reviews.length === 0) {
    return <div></div>;
  }
  // eslint-disable-next-line no-console
  console.log(commentLayoutMaker(reviews));
  // const [{user, rating, comment, date}] = reviews;

  return (
    <>
      {commentLayoutMaker(reviews).map((review, index) => <CommentRow key={index.toString()} reviews={review} />)}
    </>);
}
