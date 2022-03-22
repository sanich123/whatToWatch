import { useSelector } from 'react-redux';
import { useGetFilmsQuery } from '../../../../store';
import { Film, RootState } from '../../../../types/types';
import { serverPath } from '../../../../utils/const';
import { reviewsReducer } from '../../../../utils/utils';
import Loader from '../../../common/loader/loader';
import CommentRow from './comments-row';
import './comments-styles.css';

const NUMBER_SLICE = 6;

export default function Reviews({movie}: {movie: Film}) {
  const {id} = movie;
  const { data, isLoading } = useGetFilmsQuery(`${serverPath.comments}/${id}`);
  const reviews = useSelector(({ film }: RootState) => film.comments);

  if (isLoading) {return <Loader/>;}

  const comments = data;
  const reviewComms = reviewsReducer([...reviews, ...comments]);

  const slicedComments = reviewComms.length > NUMBER_SLICE ?
    reviewComms.slice(reviewComms.length - NUMBER_SLICE, reviewComms.length) :
    reviewComms;

  return <CommentRow reviews={slicedComments} />;
}
