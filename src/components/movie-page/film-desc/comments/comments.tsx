import { useSelector } from 'react-redux';
import { useGetFilmsQuery } from '../../../../store';
import { RootState } from '../../../../types/types';
import { serverPath } from '../../../../utils/const';
import { reviewsReducer } from '../../../../utils/utils';
import Loader from '../../../common/loader/loader';
import CommentRow from './comments-row';
import './comments-styles.css';

const NUMBER_SLICE = 6;

export default function Reviews({id}: {id: number}) {
  const { data, isLoading } = useGetFilmsQuery(`https://8.react.pages.academy/wtw/${serverPath.comments}/${id}`);
  const reviews = useSelector(({ film }: RootState) => film.comments);

  if (isLoading) {return <Loader/>;}

  const comments = data;
  const reviewComms = reviewsReducer([...reviews, ...comments]);

  const slicedComments = reviewComms.length > NUMBER_SLICE ?
    reviewComms.slice(reviewComms.length - NUMBER_SLICE, reviewComms.length) :
    reviewComms;

  return <CommentRow reviews={slicedComments} />;
}
